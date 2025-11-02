import React, { useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';

export default function ContactNewsletter() {
  const [contactSent, setContactSent] = useState(false);
  const [newsletterOk, setNewsletterOk] = useState(false);

  const onContact = (e) => {
    e.preventDefault();
    setContactSent(true);
  };

  const onNewsletter = (e) => {
    e.preventDefault();
    setNewsletterOk(true);
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Entrons en contact</h2>
            <p className="mt-2 max-w-xl text-gray-300">
              Dites-nous ce dont vous avez besoin. Nous vous répondons sous 24h.
            </p>

            <div className="mt-6 grid gap-4 text-gray-300">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5" /> hello@votre‑marque.com</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> +33 1 23 45 67 89</div>
            </div>

            <form onSubmit={onContact} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Prénom" className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none backdrop-blur placeholder:text-gray-400" />
                <input required placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none backdrop-blur placeholder:text-gray-400" />
              </div>
              <textarea required placeholder="Message" rows={5} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none backdrop-blur placeholder:text-gray-400" />
              <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:bg-gray-100">
                <Send className="h-4 w-4" /> Envoyer
              </button>
              {contactSent && (
                <p className="text-sm text-teal-300">Merci ! Votre message a bien été envoyé.</p>
              )}
            </form>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-2xl font-semibold">Newsletter</h3>
              <p className="mt-2 text-gray-300">Recevez nos actualités et lancements produits.</p>
              <form onSubmit={onNewsletter} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input required placeholder="Votre email" type="email" className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 outline-none backdrop-blur placeholder:text-gray-400" />
                <button type="submit" className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-gray-100">S’abonner</button>
              </form>
              {newsletterOk && (
                <p className="mt-3 text-sm text-teal-300">Merci ! Vous êtes abonné(e).</p>
              )}

              <div className="mt-8 grid gap-4">
                <h4 className="text-lg font-medium">Pourquoi s’abonner ?</h4>
                <ul className="grid gap-2 text-gray-300">
                  <li>• Avant-premières et offres exclusives</li>
                  <li>• Conseils design, tech et e‑commerce</li>
                  <li>• Études de cas et coulisses de production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
