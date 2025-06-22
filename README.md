# EcoWorldBuy – Shop Sustainably, Live Consciously 🌱

A clean, mobile-first eco-friendly product landing page built with **Next.js**, **Tailwind CSS**, and custom API routes.

## 📂 Project Structure

ecoworld/
├── app/
│ ├── api/
│ │ ├── products/route.js # Proxy to fetch mock Printful feed
│ │ └── credits/event/route.js # POST credits (Stretch Goal)
│ ├── page.jsx # Home page with hero & product grid
├── components/
│ └── ProductGrid.jsx # Responsive product card layout
├── public/images/ # Product images
├── styles/
│ └── globals.css # Tailwind + CSS variables
├── README.md
├── tailwind.config.js
├── package.json

## 🚀 How to Run Locally

1. **Clone this repo**
  git clone https://github.com/riddhi-frontend/candidate-riddhiparmar-ecoworldbuy-ui-proxy.git
  cd candidate-riddhiparmar-ecoworldbuy-ui-proxy
  npm install
  npm run dev
  Visit: http://localhost:3000
