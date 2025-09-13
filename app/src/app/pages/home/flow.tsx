// flow.ts
export const flow = {
  start: {
    message: "Welcome! What do you need?",
    options: [
      { label: "Support", next: "support" },
      { label: "Sales", next: "sales" },
    ],
  },
  support: {
    message: "Do you want technical or billing support?",
    options: [
      { label: "Technical", next: "tech" },
      { label: "Billing", next: "billing" },
    ],
  },
  sales: {
    message: "Great! Are you interested in products or services?",
    options: [
      { label: "Products", next: "products" },
      { label: "Services", next: "services" },
    ],
  },
  tech: { message: "Our tech team will contact you. ✅", options: [] },
  billing: { message: "Our billing team will contact you. ✅", options: [] },
  products: { message: "Here’s our product catalog. ✅", options: [] },
  services: { message: "Here’s our services list. ✅", options: [] },
};
