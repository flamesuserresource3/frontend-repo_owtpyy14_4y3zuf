import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients that do not block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-36 md:pb-28 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span className="text-xs tracking-wide text-gray-200">The Fragrance of Creativity • Expérience 3D immersive</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Une maison créative à l’ADN sensoriel et moderne
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
            Direction artistique sur‑mesure, typographies design et mise en scène produit minimaliste — pensée pour inspirer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#produits"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:bg-gray-100"
            >
              Découvrir la boutique
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10"
            >
              Collaborer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
