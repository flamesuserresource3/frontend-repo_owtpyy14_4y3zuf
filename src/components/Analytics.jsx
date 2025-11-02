import React, { useEffect } from 'react';

// Minimal analytics loader. In production, point data-domain to your domain.
export default function Analytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', window.location.hostname);
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);

    // Basic virtual pageview example if router is added later
    window.plausible = window.plausible || function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
    window.plausible('pageview');

    return () => {
      try { document.head.removeChild(script); } catch {}
    };
  }, []);

  return null;
}
