export const site = {
  brand: "NimbleCart",
  tagline: "Your online shop, every order, one dashboard.",
  nav: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "How it Works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    cta: "Try for Free",
  },
  hero: {
    badge: "Introducing NimbleCart",
    headline: "Your Online Shop. Every Order. One Dashboard.",
    sub: "Create your online shop, manage orders, and handle customer conversations from Messenger, WhatsApp, and SMS — all in one simple dashboard.",
    primary: "Start Your Free Shop",
    secondary: "Explore Features",
  },
  trusted: {
    text: "Trusted by small businesses and online sellers",
    integrations: ["Messenger", "WhatsApp", "SMS", "WooCommerce"],
  },
  features: {
    heading: "Empower Your Workflow",
    sub: "Everything you need to run your shop from one place.",
    items: [
      { title: "Unified Inbox", desc: "Chat with customers across Messenger, WhatsApp and SMS in one view." },
      { title: "Order from Chat", desc: "Turn a conversation into an order in one click." },
      { title: "Live Insights", desc: "Track sales, orders and growth in real time." },
      { title: "Smart Scheduling", desc: "Plan launches and reminders on a simple calendar." },
    ],
  },
  testimonial: {
    quote: "NimbleCart made selling online feel simple again. I manage my shop and customer chats in one place and never miss an order.",
    name: "Ayesha Rahman",
    role: "Owner, Ayesha's Boutique",
  },
  howItWorks: {
    heading: "Simple. Seamless. Smart.",
    steps: [
      { title: "Create your shop", desc: "Set up your store in minutes with products and branding." },
      { title: "Connect your channels", desc: "Link Messenger, WhatsApp and SMS to one inbox." },
      { title: "Chat and sell", desc: "Talk to customers and create orders right from chat." },
      { title: "Track and grow", desc: "Watch sales and insights update in real time." },
    ],
  },
  security: {
    heading: "Built for Secure Growth",
    cards: [
      { title: "Bank-grade security", desc: "Your data and payments stay protected end to end." },
      { title: "Global reach", desc: "Sell to customers anywhere with reliable uptime." },
    ],
  },
  pricing: {
    heading: "Simple, transparent pricing",
    sub: "Pick a plan that fits your shop. Upgrade anytime.",
    plans: [
      { name: "Starter", price: "Free", tagline: "Get started", cta: "Start Free", features: ["1 shop", "50 products", "Basic inbox", "Email support"] },
      { name: "Growth", price: "৳999", period: "/month", tagline: "For growing shops", cta: "Start Trial", popular: true, features: ["5 shops", "Unlimited products", "Unified inbox", "Order from chat", "Priority support"] },
      { name: "Business", price: "৳2499", period: "/month", tagline: "For serious sellers", cta: "Contact Sales", dark: true, features: ["Unlimited shops", "Advanced analytics", "Team seats", "Dedicated support", "Custom domain"] },
    ],
  },
  testimonials: {
    heading: "Loved by sellers",
    items: Array.from({ length: 9 }).map((_, i) => ({
      quote: `NimbleCart saved me hours every week. Sample review #${i + 1} — replace with real customer feedback.`,
      name: `Seller ${i + 1}`,
      role: "Online entrepreneur",
    })),
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { q: "What is SellMet AI?", a: "An all-in-one platform to create your online shop, manage orders, and chat with customers." },
      { q: "How does it work?", a: "Create a shop, connect your channels, and start selling from one dashboard." },
      { q: "Is my data secure?", a: "Yes. We use bank-grade security and encrypted storage." },
      { q: "What integrations are supported?", a: "Messenger, WhatsApp, SMS and WooCommerce." },
      { q: "Is there a free trial?", a: "Yes. Start free and upgrade anytime. Cancel anytime." },
    ],
  },
  cta: {
    heading: "Automate. Simplify. Thrive.",
    sub: "Start your free shop today. Cancel anytime, no questions asked.",
    button: "Start Your Free Shop",
  },
  footer: {
    desc: "The all-in-one shop for modern sellers.",
    columns: {
      Company: ["About", "Careers", "Contact"],
      Products: ["Shop", "Inbox", "Orders", "Analytics"],
      Resources: ["Docs", "Blog", "Support", "Status"],
    },
    slogan: "NIMBLECART",
  },
};
export default site;
