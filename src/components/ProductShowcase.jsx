import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 'card-premium',
    name: 'Carte Premium',
    description: 'Design minimaliste, finitions haut de gamme, contrôle avancé.',
    price: 129,
    colorFrom: 'from-teal-300',
    colorTo: 'to-cyan-500',
  },
  {
    id: 'wallet-pro',
    name: 'Wallet Pro',
    description: 'Gestion multi-comptes, sécurité biométrique et analytics.',
    price: 89,
    colorFrom: 'from-fuchsia-300',
    colorTo: 'to-violet-500',
  },
  {
    id: 'insights-plus',
    name: 'Insights Plus',
    description: 'Tableau de bord prédictif avec alertes intelligentes.',
    price: 59,
    colorFrom: 'from-amber-300',
    colorTo: 'to-orange-500',
  },
];

export default function ProductShowcase() {
  const handleBuy = (product) => {
    // Stripe Checkout s'intégrera côté backend – ici, simple retour visuel
    alert(`Paiement Stripe pour "${product.name}" sera connecté prochainement.`);
  };

  return (
    <section id="produits" className="relative bg-black py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Produits mis en avant</h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              Une sélection pensée pour la performance, la sécurité et l'élégance.
            </p>
          </div>
          <div className="hidden md:block text-sm text-gray-400">Paiements sécurisés • Livraison rapide • Support premium</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md"
            >
              <div className={`absolute -right-8 -top-8 h-40 w-40 rotate-12 rounded-full bg-gradient-to-br ${p.colorFrom} ${p.colorTo} opacity-20 blur-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold">{p.price}€</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleBuy(p)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition hover:bg-gray-100"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Acheter
                    </button>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:bg-white/10"
                    >
                      Détails
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
