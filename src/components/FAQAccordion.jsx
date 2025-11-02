import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Le site est-il optimisé pour le SEO ?',
    a: 'Oui. Structure sémantique, performances front, balises méta dynamiques et bonnes pratiques techniques sont intégrées.'
  },
  {
    q: 'Proposez-vous l’intégration Stripe ?',
    a: 'Oui, un tunnel de paiement Stripe complet côté serveur sera ajouté pour des transactions sécurisées et conformes.'
  },
  {
    q: 'Le design est-il responsive ?',
    a: 'Absolument. L’interface est conçue mobile-first avec une adaptation fluide sur toutes les tailles d’écran.'
  },
  {
    q: 'Faites-vous le suivi analytics ?',
    a: 'Un module d’analytics est inclus et peut se connecter à des solutions comme Plausible ou Google Analytics.'
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gray-300 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="mt-3 text-sm text-gray-300">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <section id="faq" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">FAQ</h2>
        <p className="mt-2 text-gray-300">Réponses rapides aux questions fréquentes.</p>
        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
