import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={22} />
        </button>

        <div style={{ maxHeight: '72vh', overflow: 'hidden', background: '#000' }}>
          <img
            src={image.src}
            alt={image.alt || image.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '72vh' }}
          />
        </div>

        <div style={{ padding: '1.25rem 1.75rem', background: '#FFFFFF' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--color-deep-forest)' }}>
            {image.title}
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)', marginBottom: '0.5rem' }}>
            {image.description}
          </p>
          {image.isIllustrative && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-muted-text)' }}>
              <Info size={14} />
              <span>Illustrative engineering photograph representing biogas equipment & biomass systems.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
