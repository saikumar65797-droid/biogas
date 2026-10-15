import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | Sri Aiswarya Lakshmi Green Energies LLP`;
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
