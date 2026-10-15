import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Target, 
  Eye, 
  HeartHandshake, 
  ShieldCheck, 
  Award, 
  Sprout, 
  ArrowRight, 
  Building2, 
  FileCheck
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const companyValues = [
    {
      icon: Leaf,
      title: 'Ecological Integrity',
      description: 'Prioritizing genuine carbon abatement, sustainable soil enrichment, and zero chemical footprint across our supply chain.'
    },
    {
      icon: HeartHandshake,
      title: 'Farmer Partnerships',
      description: 'Treating agricultural growers as direct co-creators, ensuring fair pricing, prompt off-take, and transparent agronomic support.'
    },
    {
      icon: ShieldCheck,
      title: 'Engineering Rigor',
      description: 'Adhering to strict biochemical monitoring, ATEX gas safety standards, and robust industrial continuous stirred-tank reactor design.'
    },
    {
      icon: Sprout,
      title: 'Non-Food Bioeconomy',
      description: 'Exclusively championing non-edible energy crops like Napier grass to safeguard food security while delivering clean fuel.'
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us | Enterprise Profile & Mission"
        description="Learn about Sri Aiswarya Lakshmi Green Energies LLP: our mission, values, commitment to Napier grass biomass valorization, and agro-industrial partnerships."
      />

      {/* Page Hero */}
      <section className="hero-wrapper" style={{ minHeight: '52vh', padding: '3.5rem 0' }} aria-label="About Hero">
        <div className="hero-bg-container">
          <img
            src="/images/napier_grass_farming.jpg"
            alt="Lush green Napier grass cultivation representing Sri Aiswarya Lakshmi Green Energies agricultural focus"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          <span className="badge-pill badge-pill-dark">
            <Building2 size={14} /> Corporate Profile
          </span>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            About Sri Aiswarya Lakshmi <br />
            <span>Green Energies LLP</span>
          </h1>
          <p className="hero-description" style={{ maxWidth: '680px' }}>
            A forward-thinking renewable energy enterprise engineered to transform agricultural abundance into decentralized clean biogas, industrial steam fuel, and organic fertilizer.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section" aria-label="Company Introduction">
        <div className="site-container">
          <div className="grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-pill">
                <Leaf size={14} /> Who We Are
              </span>
              <h2>
                Rooted in Indian Agriculture, <br />
                <span style={{ color: 'var(--color-primary-green)' }}>Engineered for Industrial Clean Energy</span>
              </h2>
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
                <strong>Sri Aiswarya Lakshmi Green Energies LLP</strong> was formed to solve one of the greatest economic and environmental imperatives of our era: how to replace fossil fuels with dependable, locally sourced, renewable alternatives while driving sustainable rural prosperity.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Rather than relying on seasonal or inconsistent waste streams, our model is anchored around dedicated cultivation of <strong>Super Napier grass</strong> (<em>Pennisetum purpureum</em>). This perennial C4 energy crop produces exceptional biomass volume per acre, requires modest water inputs, and regrows continuously after harvesting for multiple years.
              </p>
              <p style={{ marginTop: '1rem' }}>
                By establishing controlled supply contracts with local agrarian communities and coupling them with continuous anaerobic digestion technology, we guarantee steady gas supply for industrial thermal applications.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/process" className="btn btn-primary">
                  <span>Explore Our Technological Flow</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="img-zoom-wrapper" style={{ height: '440px', boxShadow: 'var(--shadow-xl)' }}>
              <img
                src="/images/hero_biogas_plant.jpg"
                alt="Overview of Sri Aiswarya Lakshmi Green Energies anaerobic digester biogas facility"
                loading="lazy"
              />
              <span className="illustrative-tag">Illustrative Biogas Digestion Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-soft" aria-label="Mission and Vision">
        <div className="site-container">
          <div className="grid-cols-2">
            {/* Vision */}
            <div className="card-standard" style={{ borderTop: '4px solid var(--color-warm-gold)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(233, 184, 63, 0.15)', color: '#D99B16', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
                To establish a benchmark in decentralized clean energy where Indian agriculture and modern industrial manufacturing operate in mutually enriching synergy, replacing fossil carbon with clean, circular biomass energy.
              </p>
            </div>

            {/* Mission */}
            <div className="card-standard" style={{ borderTop: '4px solid var(--color-primary-green)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(8, 122, 53, 0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
                To deploy scientifically rigorous anaerobic digestion infrastructure, source responsibly cultivated Napier grass feedstock through dignified farmer partnerships, and deliver verified renewable fuel and nutrient-rich bio-digestate with zero ecological compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" aria-label="Company Core Values">
        <div className="site-container">
          <SectionTitle
            badge="Guiding Principles"
            badgeIcon={Award}
            title="Values That Guide"
            highlight="Every Ton & Kilowatt"
            subtitle="The core tenets shaping our commercial agreements, engineering standards, and community interactions."
          />

          <div className="grid-cols-4">
            {companyValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="card-standard">
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(8, 122, 53, 0.08)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <IconComp size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)' }}>{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Napier Grass & Biomass Focus Section */}
      <section className="section section-dark" aria-label="Biomass Focus">
        <div className="site-container">
          <SectionTitle
            badge="Feedstock Advantage"
            badgeIcon={Sprout}
            title="Why Super Napier Grass is"
            highlight="The Future of Bioenergy"
            subtitle="Evaluating the agronomic and chemical characteristics that make Pennisetum purpureum the premier renewable biomass source."
            isDark={true}
          />

          <div className="grid-cols-3">
            <div className="card-dark">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--color-warm-gold)' }}>Year-Round Productivity</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Once planted, Super Napier can be harvested every 60 to 75 days for up to 5–7 consecutive years before replanting is required, delivering stable, continuous feedstock to our digesters.
              </p>
            </div>

            <div className="card-dark">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--color-warm-gold)' }}>High Methane Conversion</h3>
              <p style={{ fontSize: '0.92rem' }}>
                With favorable carbohydrate and cellulose content, finely shredded Napier grass breaks down readily under thermophilic/mesophilic conditions, generating high specific biomethane yields.
              </p>
            </div>

            <div className="card-dark">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--color-warm-gold)' }}>Drought Resilience</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Possessing a deep fibrous root system, Napier grass thrives in semi-arid Indian soils and marginal non-arable lands with minimal supplementary irrigation and no aggressive chemical inputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Corporate Structure */}
      <section className="section" aria-label="Corporate Structure and Governance">
        <div className="site-container">
          <div className="site-container-narrow" style={{ textAlign: 'center' }}>
            <span className="badge-pill">
              <FileCheck size={14} /> Corporate Governance
            </span>
            <h2>Transparent LLP Governance & Operational Rigor</h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
              <strong>Sri Aiswarya Lakshmi Green Energies LLP</strong> is structured as a Limited Liability Partnership registered in India. Our executive direction unites certified agricultural agronomists, bio-chemical process engineers, and corporate infrastructure specialists.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'var(--color-secondary-text)' }}>
              In full adherence to our corporate policy of verified transparency, specific project capacities, off-taker agreements, and audited environmental milestones are shared formally with accredited stakeholders and prospective institutional partners upon mutual engagement.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Request Corporate Overview</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/plant-technology" className="btn btn-secondary">
                <span>View Plant & Technology</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
