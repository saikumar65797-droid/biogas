import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Cog, 
  FlaskConical, 
  ShieldCheck, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  SlidersHorizontal,
  Radio
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import ImageModal from '../components/ImageModal';

export default function PlantTechnology() {
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const equipmentCards = [
    {
      title: 'Continuous Stirred-Tank Reactor (CSTR)',
      category: 'Digestion Systems',
      icon: FlaskConical,
      specs: [
        { label: 'Digestion Type', value: 'Anaerobic Mesophilic (38°C ± 1°C)' },
        { label: 'Mixing System', value: 'High-efficiency submersible central paddle agitators' },
        { label: 'Roof System', value: 'Gas-tight integrated double-membrane gasholder dome' },
        { label: 'Tank Construction', value: 'Epoxy-coated reinforced concrete / glass-fused steel' }
      ],
      description: 'Continuous agitated anaerobic digestion ensures thorough suspension of fibrous Napier grass, maximum contact between methanogens and volatile solids, and eliminates surface scum formation.'
    },
    {
      title: 'Biomass Shredder & Hopper Feeding Unit',
      category: 'Feedstock Preparation',
      icon: Cog,
      specs: [
        { label: 'Chopping Mechanism', value: 'Dual-shaft high-torque industrial forage blades' },
        { label: 'Particle Output', value: 'Calibrated 5 mm to 15 mm fine fiber length' },
        { label: 'Conveyance', value: 'Enclosed heavy-duty stainless steel auger conveyor' },
        { label: 'Feeding Automation', value: 'Automated PLC gravimetric batch dosing' }
      ],
      description: 'High-torque shredders reduce fibrous stalk toughness, exposing cellulosic cell walls for accelerated microbiological hydrolysis while preventing clogging in downstream macerators.'
    },
    {
      title: 'Stainless Steel Gas Scrubbers & Desulfurizers',
      category: 'Gas Handling',
      icon: Gauge,
      specs: [
        { label: 'Target Compound', value: 'Hydrogen Sulfide (H2S) reduction to < 50 ppm' },
        { label: 'Material Grade', value: 'Corrosion-resistant SS316L stainless steel' },
        { label: 'Moisture Removal', value: 'Refrigerated gas chiller & cyclone condensation trap' },
        { label: 'Safety Protection', value: 'Bi-directional deflagration flame arrestors' }
      ],
      description: 'Raw biogas is treated through active biological scrubbing and activated carbon polishing to eliminate acidic sulfur compounds, safeguarding downstream industrial boilers from corrosion.'
    },
    {
      title: 'SCADA & Real-Time Gas Analysis System',
      category: 'Control & Telemetry',
      icon: Radio,
      specs: [
        { label: 'Monitored Gases', value: 'Continuous CH4, CO2, H2S, O2 percentage telemetry' },
        { label: 'Instrumentation', value: 'Optical infrared & electrochemical sensors' },
        { label: 'Process Sensors', value: 'Multi-point digital pH, redox, temperature & pressure probes' },
        { label: 'Control Automation', value: 'Central PLC with remote diagnostic telemetry & alarms' }
      ],
      description: 'Automated sensor networks constantly monitor digester biological stability, gas production rates, and safety thresholds, providing operators with actionable process analytics.'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Biogas Plant Facility Overview',
      category: 'plant',
      src: '/images/hero_biogas_plant.jpg',
      description: 'Anaerobic digestion plant layout with dual green gasholder domes, feeding hoppers, and surrounding Napier grass fields.',
      isIllustrative: true
    },
    {
      id: 2,
      title: 'Gas Scrubber & Desulfurization Unit',
      category: 'gas',
      src: '/images/biogas_plant_technology.jpg',
      description: 'Stainless steel gas cleaning towers, digital pressure transmitters, and piping manifold leading to the main dome.',
      isIllustrative: true
    },
    {
      id: 3,
      title: 'Napier Grass Biomass Cultivation',
      category: 'biomass',
      src: '/images/napier_grass_farming.jpg',
      description: 'Dense Super Napier grass plantation in India with agronomists and local agricultural partners reviewing crop readiness.',
      isIllustrative: true
    }
  ];

  const filteredGallery = filterCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filterCategory);

  return (
    <>
      <SEOHead
        title="Plant & Technology | Industrial Biogas Systems"
        description="Discover the engineering, equipment, SCADA monitoring, and safety infrastructure powering Sri Aiswarya Lakshmi Green Energies LLP."
      />

      {/* Page Hero */}
      <section className="hero-wrapper" style={{ minHeight: '52vh', padding: '3.5rem 0' }} aria-label="Plant Technology Hero">
        <div className="hero-bg-container">
          <img
            src="/images/biogas_plant_technology.jpg"
            alt="Stainless steel industrial biogas gas scrubber and monitoring telemetry"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          <span className="badge-pill badge-pill-dark">
            <Factory size={14} /> Industrial Infrastructure
          </span>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            Plant & Technology <br />
            <span>Engineering Showcase</span>
          </h1>
          <p className="hero-description" style={{ maxWidth: '680px' }}>
            State-of-the-art anaerobic digestion reactors, high-torque biomass conditioning, SS316 gas-scrubbing systems, and safety-first industrial engineering.
          </p>
        </div>
      </section>

      {/* Overview & Engineering Philosophy */}
      <section className="section" aria-label="Engineering Overview">
        <div className="site-container">
          <div className="grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-pill">
                <Cog size={14} /> Technology Overview
              </span>
              <h2>
                Engineered Specifically for <br />
                <span style={{ color: 'var(--color-primary-green)' }}>High-Fiber Agro-Biomass</span>
              </h2>
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
                Digesting fibrous energy crops like Napier grass poses unique mechanical and microbiological challenges that standard wastewater or food-waste digesters cannot handle. The lignocellulose matrix requires precision pre-treatment, heavy-duty mechanical agitation, and corrosion-resistant gas scrubbing.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Our engineering specifications prioritize continuous operation, automated slurry recirculation, minimal parasitic electrical consumption, and rigorous gas desulfurization.
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--color-primary-green)" />
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-forest)' }}>High volumetric gas production per cubic meter of digester</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--color-primary-green)" />
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-forest)' }}>Complete automated PLC control with multi-sensor safety redundancy</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--color-primary-green)" />
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-forest)' }}>Integrated safety valves, deflagration arrestors, and emergency flare</span>
                </div>
              </div>
            </div>

            <div className="card-standard" style={{ background: 'var(--color-soft-bg)', border: '1.5px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={22} color="var(--color-primary-green)" />
                Industrial Safety Standards
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.94rem' }}>
                <li style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
                  <strong>ATEX / Explosive Atmosphere Zoning:</strong> All electrical motors, agitators, and transmitters in proximity to gas storage conform to hazardous zone specifications.
                </li>
                <li style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
                  <strong>Pressure Relief & Gas Bladders:</strong> Precision mechanical pressure vacuum valves prevent over-pressurization or vacuum collapse of the double-membrane gasholder.
                </li>
                <li>
                  <strong>Emergency Safety Flare:</strong> Automated ground flare system for controlled, clean combustion in the event of downstream plant maintenance or line interruptions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Information Cards */}
      <section className="section section-soft" aria-label="Equipment Information">
        <div className="site-container">
          <SectionTitle
            badge="Plant Equipment"
            badgeIcon={SlidersHorizontal}
            title="Core Systems &"
            highlight="Technical Specifications"
            subtitle="Explore the key engineering components comprising modern agro-biogas facilities."
          />

          <div className="grid-cols-2" style={{ gap: '2rem' }}>
            {equipmentCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="card-standard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <span className="badge-pill" style={{ marginBottom: 0 }}>
                        <IconComp size={14} /> {card.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                    <p style={{ fontSize: '0.94rem', color: 'var(--color-secondary-text)', marginBottom: '1.25rem' }}>
                      {card.description}
                    </p>

                    <div style={{ background: 'var(--color-soft-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                      {card.specs.map((spec, sIdx) => (
                        <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: sIdx === card.specs.length - 1 ? 'none' : '1px dashed var(--color-border)', fontSize: '0.88rem' }}>
                          <span style={{ fontWeight: 600, color: 'var(--color-deep-forest)' }}>{spec.label}:</span>
                          <span style={{ color: 'var(--color-secondary-text)', textAlign: 'right' }}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Filter & Lightbox */}
      <section className="section" aria-label="Facility Photo Gallery">
        <div className="site-container">
          <SectionTitle
            badge="Visual Gallery"
            badgeIcon={Factory}
            title="Engineering & Biomass"
            highlight="Photo Showcase"
            subtitle="Verified photographs representing the biomass fields, digestion infrastructure, and gas handling systems."
          />

          {/* Gallery Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Photographs' },
              { id: 'plant', label: 'Biogas Plant & Tanks' },
              { id: 'gas', label: 'Gas Handling & Scrubbers' },
              { id: 'biomass', label: 'Napier Biomass Fields' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`btn btn-sm ${filterCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredGallery.map((img) => (
              <div
                key={img.id}
                className="gallery-item"
                onClick={() => setActiveModalImage(img)}
                role="button"
                tabIndex={0}
                aria-label={`View enlarged photo: ${img.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveModalImage(img);
                  }
                }}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <div>
                    <h4 className="gallery-caption">{img.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-warm-gold)' }}>Click to enlarge preview</span>
                  </div>
                </div>
                {img.isIllustrative && (
                  <span className="illustrative-tag">Illustrative Photo</span>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1rem', background: 'var(--color-soft-bg)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--color-secondary-text)' }}>
            <Info size={18} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Editorial Notice:</strong> Photographs displayed represent standard modern biogas facilities and verified Napier grass agricultural fields. In accordance with our corporate transparency policy, images are labeled as illustrative.
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageModal
        image={activeModalImage}
        onClose={() => setActiveModalImage(null)}
      />

      {/* CTA */}
      <section className="section section-soft" aria-label="Technical Inquiry CTA">
        <div className="site-container">
          <div className="site-container-narrow" style={{ textAlign: 'center' }}>
            <h2>Have Technical Questions Regarding Our Infrastructure?</h2>
            <p style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}>
              Connect with our engineering and bio-process team to discuss feedstock specifications, biogas characteristics, and thermal conversion integrations.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Initiate Technical Discussion</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
