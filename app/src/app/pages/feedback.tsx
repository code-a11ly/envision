
'use client'
import Image from "next/image";
import { useEffect } from 'react';
import { ArrowRight } from "lucide-react";


type Feed = {
  name: string;
  function: string;
  review: string;
}

const feedback: feed[] = [
  {
    name: 'Maria Silva',
    function: 'Homeowner',
    review: 'From the first visit to the day we received the keys, the team made us feel supported and secure. The quality of the construction exceeded our expectations, and today we are living in the home of our dreams.',
  },
  {
    name: 'Jorge Andrade',
    function: 'Investor',
    review: 'Working with this company has been one of the best business decisions I’ve made. The projects are delivered on time, with transparency and guaranteed return on investment. I couldn’t be more satisfied.',
  },
  {
    name: 'Ana Costa',
    function: 'Business Owner',
    review: 'We needed a modern and functional office space, and the result was beyond what we imagined. The attention to detail, professionalism, and architectural vision were impeccable.',
  },
  {
    name: 'Felipe Rocha',
    function: 'Apartment Buyer',
    review: 'When I was searching for my apartment, I was afraid of bureaucracy and delays. But everything was handled with incredible efficiency. The property is exactly as promised, and the service was exceptional.',
  },
  {
    name: 'Carolina Mendes',
    function: 'Repeat Client',
    review: 'This is the second project we’ve done together, and once again, everything went smoothly. It’s a company that delivers not only buildings, but trust and lasting relationships.',
  },
];


export default function Feedback() {

  {/*
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  */}


  return (

    <div className="flex flex-col h-wrap w-full bg-md-gray justify-center items-center text-gray-400 text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}

      <div className="flex flex-col justify-center items-center">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-4 text-lt-gray p-12 m-12">
          What do people say <br/>about us?
        </h1>

        <div className="flex flex-row gap-12 m-24">
          {feedback.map((f, key) => (
            <div key={key} className="w-128 p-6 text-justify shadow-md bg-lt-gray rounded-lg">
            <div className="w-wrap p-6 text-left">
              <p>{f.review}</p>
            </div>
            </div>
          ))}

        </div>
      </div>

    </div>

  );
}
