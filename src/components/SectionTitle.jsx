import React from 'react';

export default function SectionTitle({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  isDark = false,
  className = ''
}) {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div>
          <span className={`badge-pill ${isDark ? 'badge-pill-dark' : ''}`}>
            {BadgeIcon && <BadgeIcon size={14} />}
            {badge}
          </span>
        </div>
      )}
      <h2>
        {title}{' '}
        {highlight && (
          <span style={{ color: isDark ? 'var(--color-warm-gold)' : 'var(--color-primary-green)' }}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
