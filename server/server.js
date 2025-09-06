import express from "express";
import axios from "axios";
import cors from "cors";
import * as cheerio from "cheerio";

import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // store in .env
});

async function run() {
  const response = await client.responses.create({
    model: "gpt-3.5-turbo",  // cheap & fast model
    input: "Write a haiku about coding in JavaScript",
  });

  console.log(response.output[0].content[0].text);
}

run();



const app = express();
app.use(cors());
app.use(express.json());

// Example LLaMA call (Ollama local)
async function askLlama(prompt) {
  const res = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3",
    prompt
  });
  return res.data.response;
}

// Simple scraper (Google search results as demo)
{/*
async function scrapeProducts(query) {
  const url = `https://www.example.com/search?q=${encodeURIComponent(query)}`;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const products = [];
  $(".product").each((_, el) => {
    products.push({
      title: $(el).find(".title").text(),
      price: $(el).find(".price").text(),
      link: $(el).find("a").attr("href")
    });
  });

  return products;
}
*/}

const sites = [
  {
    name: "Amazon",
    url: (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`,
    selector: ".s-title" // Example CSS selector
  },
  {
    name: "eBay",
    url: (q) => `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(q)}`,
    selector: ".s-item__title"
  },
  {
    name: "Walmart",
    url: (q) => `https://www.walmart.com/search?q=${encodeURIComponent(query)}`,
    selector: ".s-item__title"
  },
  {
    name: "Aliexpress",
    url: (q) => `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(query)}`,
    selector: ".s-item__title"
  },
  {
    name: "Facebook Marketplace",
    url: (q) => `https://pt-br.facebook.com/marketplace/sanfrancisco/search/?query=${encodeURIComponent(q)}`,
    selector: ".s-title" // <-- placeholder, you’ll need to check with DevTools for the real title selector
    }
  // ...more sites
];


async function scrapeAllSites(query) {
  const results = [];



  for (const site of sites) {
    try {

      const { data } = await axios.get(site.url(query));
      const $ = cheerio.load(data);

      const items = [];
      $(site.selector).each((_, el) => {
        items.push($(el).text());
      });

      console.log(site.name);
      console.log(items);

      results.push({ site: site.name, items });
    } catch (err) {
      console.error(`Failed scraping ${site.name}`, err.message);
    }
  }

  return results;
}



app.post("/search", async (req, res) => {
  const { query } = req.body;


  try {
    // Step 1: scrape raw products
    // const products = await scrapeProducts(query);
    const products = await scrapeAllSites(query);

    // Step 2: reformulate with LLaMA
    {/*
    const summary = await askLlama(
      `Here are some products:\n${JSON.stringify(products)}\n
      Please summarize the best 3 options in a user-friendly way.`
    );
    */}

    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
