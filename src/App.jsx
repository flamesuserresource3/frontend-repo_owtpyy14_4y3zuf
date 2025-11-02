import React from 'react';
import Hero3D from './components/Hero3D';
import ProductShowcase from './components/ProductShowcase';
import FAQAccordion from './components/FAQAccordion';
import ContactNewsletter from './components/ContactNewsletter';
import Analytics from './components/Analytics';
import { Rocket, ShoppingCart, HelpCircle, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Analytics />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-white text-black">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide">Creative Essence</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#produits" className="text-sm text-gray-300 hover:text-white">Shop</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white">FAQ</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
          </nav>
          <a
            href="#produits"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition hover:bg-gray-100"
          >
            <ShoppingCart className="h-4 w-4" />
            Acheter
          </a>
        </div>
      </header>

      <main id="home">
        <Hero3D />
        <ProductShowcase />
        <FAQAccordion />
        <ContactNewsletter />
      </main>

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-medium">Creative Essence</h4>
            <p className="mt-2 text-sm text-gray-400">
              Une direction artistique sur‑mesure, des interfaces fluides et un e‑commerce élégant.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-300">Navigation</h5>
            <ul className="mt-3 grid gap-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white">Accueil</a></li>
              <li><a href="#produits" className="hover:text-white">Shop</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-300">Support</h5>
            <ul className="mt-3 grid gap-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><HelpCircle className="h-4 w-4" /> Centre d’aide</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@creative‑essence.com</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Creative Essence. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
