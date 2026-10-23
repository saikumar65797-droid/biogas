import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Cog, 
  FlaskConical, 
  Gauge, 
  Zap, 
  ArrowRight, 
  Check, 
  Layers, 
  Activity,
  ChevronRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'Napier Grass Sourcing & Cultivation',
      icon: Sprout,
      badge: 'Feedstock Foundation',
      shortDesc: 'Agronomic partnership with rural farmers cultivating high-yielding Super Napier grass (Pennisetum purpureum).',
      details: [
        'Dedicated contract farming ensuring steady rural livelihoods and multi-year supply contracts.',
        'High biomass growth rate yielding multiple cuts per calendar year with moderate irrigation.',
        'Zero competition with edible food crops; optimized for semi-arid and marginal agrarian lands.',
        'Systematic harvesting schedule ensuring consistent dry-matter levels and tender stalk quality.'
      ],
      technicalFocus: 'Harvested at 60–75 day intervals when lignocellulosic structure is most digestible for anaerobic bacteria.'
    },
    {
      step: '02',
      title: 'Biomass Preparation & Fiber Shredding',
      icon: Cog,
      badge: 'Mechanical Conditioning',
      shortDesc: 'Precision mechanical shredding, size reduction, and dry matter balancing prior to digester introduction.',
      details: [
        'High-torque industrial forage choppers reduce grass stalks to uniform 5–15 mm particle sizes.',
        'Increasing total surface area enables rapid hydrolytic bacterial attachment and accelerates digestion.',
        'Biomass is conditioned in sheltered reception pits or silage bunkers to maintain biochemical consistency.',
        'Gravimetric or volumetric automated auger conveyors feed raw biomass continuously into the digester stream.'
      ],
      technicalFocus: 'Particle size homogenization prevents floating fibrous scum crusts and protects slurry pumps.'
    },
    {
      step: '03',
      title: 'Anaerobic Digestion (Biochemical Conversion)',
      icon: FlaskConical,
      badge: 'Core Biochemical Reaction',
      shortDesc: 'Four-stage biological decomposition by specialized bacterial consortia in sealed, airtight CSTR reactors.',
      details: [
        'Stage 1 — Hydrolysis: Complex carbohydrates and cellulose are cleaved into simple sugars and amino acids.',
        'Stage 2 — Acidogenesis: Fermentative bacteria convert solubilized monomers into volatile fatty acids (VFAs).',
        'Stage 3 — Acetogenesis: Bacteria convert VFAs into acetic acid, carbon dioxide, and hydrogen.',
        'Stage 4 — Methanogenesis: Methanogenic archaea synthesize methane (CH4, 55–65%) and carbon dioxide (CO2).'
      ],
      technicalFocus: 'Controlled temperature (Mesophilic 37°C–40°C) and automated mechanical agitation maintain steady pH (7.2–7.8).'
    },
    {
      step: '04',
      title: 'Gas Collection, Scrubbing & Handling',
      icon: Gauge,
      badge: 'Gas Refining & Safety',
      shortDesc: 'Continuous collection in gas domes, biological desulfurization, moisture removal, and safety regulation.',
      details: [
        'Raw biogas accumulates inside flexible double-membrane gas storage domes mounted above the digester.',
        'Biological or active chemical desulfurization units remove corrosive Hydrogen Sulfide (H2S < 50 ppm).',
        'Refrigeration or condensation water traps remove vapor moisture to prevent pipeline condensation.',
        'Inline telemetry continuously monitors CH4 %, CO2 %, O2 %, temperature, and positive line pressures.'
      ],
      technicalFocus: 'ATEX-rated pressure relief valves, flame arrestors, and emergency safety flares ensure maximum operational safety.'
    },
    {
      step: '05',
      title: 'Clean Energy Delivery & Nutrient Recycling',
      icon: Zap,
      badge: 'Energy & Circular Economy',
      shortDesc: 'Supplying clean thermal fuel to industrial burners while returning mineral-rich bio-digestate to agriculture.',
      details: [
        'Direct piped or bulk industrial supply of scrubbed biogas for manufacturing steam boilers, kilns, and air furnaces.',
        'Potential future compression into Compressed Biogas (CBG / Bio-CNG) or electrical cogeneration (CHP).',
        'Separation of digested slurry into solid organic soil conditioner and liquid N-P-K nutrient spray.',
        'Full circularity: 100% of organic inputs are converted into either clean energy or returned as soil nutrients.'
      ],
      technicalFocus: 'Decarbonizes industrial heat while restoring organic carbon back into rural farm soils.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Process | From Napier Grass to Clean Biogas"
        description="Explore the five-step anaerobic digestion process converting Napier grass and agricultural biomass into high-efficiency renewable biogas and biofertilizer."
      />

      {/* Hero */}
      <section className="hero-wrapper" style={{ minHeight: '50vh', padding: '3.5rem 0' }} aria-label="Process Hero">
        <div className="hero-bg-container">
          <img
            src="/images/biogas_plant_technology.jpg"
            alt="Biogas plant gas scrubber unit and stainless steel piping representing the technical process"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          <span className="badge-pill badge-pill-dark">
            <Cog size={14} /> Technology & Engineering
          </span>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            The Grass-to-Gas <br />
            <span>Technical Process</span>
          </h1>
          <p className="hero-description" style={{ maxWidth: '680px' }}>
            A detailed, transparent breakdown of how agricultural Napier grass is harvested, mechanically conditioned, biologically digested, and processed into clean renewable energy.
          </p>
        </div>
      </section>

      {/* Visual Process Architecture Diagram */}
      <section className="section" aria-label="Process Diagram">
        <div className="site-container">
          <SectionTitle
            badge="Process Architecture"
            badgeIcon={Layers}
            title="End-to-End Closed Loop"
            highlight="Material Flow"
            subtitle="Click on any stage below to inspect its chemical, mechanical, and operational parameters."
          />

          {/* Interactive Step Switcher */}
          <div className="process-switcher-grid">
            {processSteps.map((s, idx) => {
              const IconComp = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`card-standard process-switcher-btn ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: isActive ? 'var(--color-primary-green)' : 'var(--color-muted-text)' }}>
                      STEP {s.step}
                    </span>
                    <IconComp size={18} color={isActive ? 'var(--color-primary-green)' : 'var(--color-muted-text)'} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', lineHeight: '1.3', color: isActive ? 'var(--color-deep-forest)' : 'var(--color-main-text)' }}>
                    {s.title.split('&')[0]}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Detailed Highlight Box for Active Step */}
          {processSteps[activeStep] && (
            <div className="card-standard process-highlight-box" style={{ border: '1.5px solid var(--color-primary-green)', background: '#FFFFFF', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                    {processSteps[activeStep].badge}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-deep-forest)' }}>
                    Step {processSteps[activeStep].step}: {processSteps[activeStep].title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--color-secondary-text)', marginTop: '0.25rem' }}>
                    {processSteps[activeStep].shortDesc}
                  </p>
                </div>

                <div style={{ background: 'var(--color-soft-bg)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-secondary-text)', fontWeight: 600 }}>Engineering Note</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-deep-forest)', fontWeight: 600, margin: 0 }}>
                    {processSteps[activeStep].technicalFocus}
                  </p>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-deep-forest)' }}>
                Key Technical & Operational Aspects:
              </h4>
              <div className="grid-cols-2" style={{ gap: '1rem' }}>
                {processSteps[activeStep].details.map((item, dIdx) => (
                  <div key={dIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(8,122,53,0.12)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={14} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-main-text)', lineHeight: '1.55' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Five-Step Process Cards */}
      <section className="section section-soft" aria-label="Detailed Process Steps">
        <div className="site-container">
          <SectionTitle
            badge="Full Technical Breakdown"
            badgeIcon={Activity}
            title="Step-by-Step"
            highlight="Engineering Specifications"
            subtitle="Explore each stage in the conversion sequence from Napier field to clean biogas flame."
          />

          <div className="process-timeline">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="process-card">
                  <div className="process-step-num">{step.step}</div>
                  <div className="process-content" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h3>
                        <span className="process-icon-wrap"><IconComp size={22} /></span>
                        {step.title}
                      </h3>
                      <span className="badge-pill badge-pill-gold" style={{ marginBottom: 0 }}>
                        {step.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '1.02rem', marginBottom: '1rem' }}>{step.shortDesc}</p>

                    <div style={{ background: 'var(--color-soft-bg)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '0.88rem', color: 'var(--color-deep-forest)' }}>Scientific / Technical Control: </strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)' }}>{step.technicalFocus}</span>
                    </div>

                    <div className="grid-cols-2" style={{ gap: '0.85rem' }}>
                      {step.details.map((bullet, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                          <ChevronRight size={16} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '4px' }} />
                          <span style={{ fontSize: '0.92rem', color: 'var(--color-main-text)' }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <div className="card-standard" style={{ maxWidth: '780px', margin: '0 auto', background: 'var(--surface-forest-gradient)', color: '#FFFFFF', padding: '2.5rem' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                Interested in Agricultural Supply or Energy Off-Take?
              </h3>
              <p style={{ color: '#D1DDD5', fontSize: '0.98rem', marginBottom: '1.75rem' }}>
                We partner with farmers for Napier grass contract farming and supply industrial consumers with reliable renewable biogas.
              </p>
              <Link to="/contact" className="btn btn-gold">
                <span>Contact Process Specialists</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
