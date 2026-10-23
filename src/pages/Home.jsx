import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  Zap, 
  Leaf, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Cog, 
  TrendingUp, 
  ArrowUpRight,
  Factory,
  FlaskConical,
  Recycle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home | Clean Energy. Greener Tomorrow."
        description="Sri Aiswarya Lakshmi Green Energies LLP converts high-yielding Napier grass and agricultural biomass into renewable biogas, clean industrial fuel, and biofertilizers."
      />

      {/* Hero Section */}
      <section className="hero-wrapper" aria-label="Hero Introduction">
        <div className="hero-bg-container">
          <img
            src="/images/hero_biogas_plant.jpg"
            alt="Sri Aiswarya Lakshmi Green Energies industrial biogas facility with anaerobic digester domes amidst green Napier grass fields"
            className="hero-bg-image hero-bg-zoom"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          {/* Small Process Line */}
          <div className="hero-process-line">
            <span className="hero-process-step">Napier Grass</span>
            <span className="hero-process-arrow">→</span>
            <span className="hero-process-step">Biomass</span>
            <span className="hero-process-arrow">→</span>
            <span className="hero-process-step">Biogas</span>
            <span className="hero-process-arrow">→</span>
            <span className="hero-process-step">Clean Energy</span>
          </div>

          <h1 className="hero-heading">
            Growing Green. <br />
            <span>Generating Energy.</span>
          </h1>

          <p className="hero-description">
            Sri Aiswarya Lakshmi Green Energies LLP is pioneering the conversion of high-yield Napier grass and agricultural residues into reliable, renewable biogas. Powering industrial thermal needs while enriching farming communities and revitalizing soil health.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold btn-lg">
              <span>Talk to Our Team</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/process" className="btn btn-outline-white btn-lg">
              <span>Explore Our Process</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Sprout size={20} color="var(--color-warm-gold)" />
              <span style={{ fontSize: '0.9rem', color: '#E2EAE4' }}>Perennial High-Yield Biomass</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <FlaskConical size={20} color="var(--color-warm-gold)" />
              <span style={{ fontSize: '0.9rem', color: '#E2EAE4' }}>Controlled Anaerobic Digestion</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Recycle size={20} color="var(--color-warm-gold)" />
              <span style={{ fontSize: '0.9rem', color: '#E2EAE4' }}>Zero-Waste Bio-Circular Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Company Introduction */}
      <section className="section" aria-label="Company Overview">
        <div className="site-container">
          <div className="grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-pill">
                <Leaf size={14} /> Clean Energy Enterprise
              </span>
              <h2>
                Transforming Agro-Biomass into <br />
                <span style={{ color: 'var(--color-primary-green)' }}>Reliable Green Fuel</span>
              </h2>
              <p style={{ marginTop: '1.25rem', fontSize: '1.08rem' }}>
                At <strong>Sri Aiswarya Lakshmi Green Energies LLP</strong>, we believe India’s agricultural abundance holds the key to energy independence and carbon reduction. By establishing dedicated feedstock partnerships for Napier grass cultivation, we bridge rural agriculture directly with clean industrial energy generation.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Our operations focus on responsible biomass sourcing, mechanized feedstock preparation, airtight anaerobic digestion, and safe biogas distribution. Every cubic meter of biogas produced substitutes fossil alternatives like diesel, LPG, and furnace oil, creating circular value for both industry and farmers.
              </p>

              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Perennial Feedstock</h4>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>Fast-growing, multiple harvests per year without soil depletion.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Closed Loop Model</h4>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>Fermented digestate returned to farmland as organic fertilizer.</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.25rem' }}>
                <Link to="/about" className="btn btn-secondary">
                  <span>Learn About Our Enterprise</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="img-zoom-wrapper" style={{ height: '460px', boxShadow: 'var(--shadow-xl)' }}>
              <img
                src="/images/napier_grass_farming.jpg"
                alt="Agricultural team and Indian farmer inspecting Super Napier grass plantation"
                loading="lazy"
              />
              <span className="illustrative-tag">Napier Grass Plantation Partnership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: "From Grass to Gas" Process Overview */}
      <section className="section section-soft" aria-label="Process Overview">
        <div className="site-container">
          <SectionTitle
            badge="Engineered Value Chain"
            badgeIcon={Cog}
            title="From Grass to Gas:"
            highlight="Our Integrated Process"
            subtitle="A transparent, step-by-step technological journey turning green crop stalks into clean combustible energy."
          />

          <div className="process-flow-grid">
            {/* Step 1 */}
            <div className="process-flow-card">
              <span className="process-flow-number">Step 01</span>
              <div className="process-flow-icon">
                <Sprout size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Napier Grass Sourcing</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                Cultivating high-yield Super Napier grass with local agricultural partners, ensuring non-food feedstock security and steady rural income.
              </p>
            </div>

            {/* Step 2 */}
            <div className="process-flow-card">
              <span className="process-flow-number">Step 02</span>
              <div className="process-flow-icon">
                <Cog size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Biomass Preparation</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                Chopping green stalks into uniform particle sizes, balancing dry-matter ratios and conditioning fibers for optimal bacterial digestibility.
              </p>
            </div>

            {/* Step 3 */}
            <div className="process-flow-card">
              <span className="process-flow-number">Step 03</span>
              <div className="process-flow-icon">
                <FlaskConical size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Anaerobic Digestion</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                Microbiological degradation inside airtight CSTR digester tanks, continuously converting volatile solids into high-methane biogas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="process-flow-card">
              <span className="process-flow-number">Step 04</span>
              <div className="process-flow-icon">
                <Zap size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Gas Handling & Clean Energy</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                Biogas is scrubbed, moisture-condensed, and stored safely for industrial thermal heating, boilers, or potential clean cogeneration.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/process" className="btn btn-primary">
              <span>View Full Technical Process & Diagram</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Plant & Technology Feature Section */}
      <section className="section" aria-label="Plant & Technology Feature">
        <div className="site-container">
          <div className="grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div className="img-zoom-wrapper" style={{ height: '460px', boxShadow: 'var(--shadow-xl)', order: 2 }}>
              <img
                src="/images/biogas_plant_technology.jpg"
                alt="Industrial biogas gas scrubber unit, stainless steel pipelines and anaerobic digester dome"
                loading="lazy"
              />
              <span className="illustrative-tag">Industrial Biogas Gas-Handling System</span>
            </div>

            <div style={{ order: 1 }}>
              <span className="badge-pill">
                <Factory size={14} /> Engineering Rigor
              </span>
              <h2>
                Industrial Infrastructure <br />
                <span style={{ color: 'var(--color-primary-green)' }}>Built for Continuous Operation</span>
              </h2>
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
                Anaerobic digestion of fibrous energy crops requires specialized mechanical engineering and process discipline. Our plant architecture integrates high-torque biomass shredding, continuous agitated digester reactors, and specialized stainless steel gas manifolds.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="card-standard" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(8,122,53,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-green)', flexShrink: 0 }}>
                    <FlaskConical size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>CSTR Digesters with Continuous Agitation</h4>
                    <p style={{ fontSize: '0.88rem', margin: 0 }}>Ensures homogenous slurry suspension, preventing crust formation and optimizing microbial gas production.</p>
                  </div>
                </div>

                <div className="card-standard" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(8,122,53,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-green)', flexShrink: 0 }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Active Gas Desulfurization & Safety</h4>
                    <p style={{ fontSize: '0.88rem', margin: 0 }}>Dedicated biological and chemical scrubbing units to remove H2S, protecting downstream burners and boilers from corrosion.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/plant-technology" className="btn btn-secondary">
                  <span>Explore Plant Specifications</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Renewable-Energy Capabilities */}
      <section className="section section-dark" aria-label="Renewable Energy Capabilities">
        <div className="site-container">
          <SectionTitle
            badge="Industrial Decarbonization"
            badgeIcon={Zap}
            title="Clean Energy Capabilities for"
            highlight="Progressive Industries"
            subtitle="Helping manufacturing facilities, food processors, and commercial plants transition away from expensive and polluting fossil fuels."
            isDark={true}
          />

          <div className="grid-cols-3">
            <div className="card-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(233,184,63,0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Thermal Heat & Boilers</h3>
              <p style={{ fontSize: '0.94rem', color: '#D1DDD5' }}>
                Biogas is an immediate, drop-in combustible fuel for industrial steam boilers, process air heaters, drying ovens, and kilns, replacing furnace oil and diesel.
              </p>
            </div>

            <div className="card-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(233,184,63,0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <TrendingUp size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Predictable Energy Pricing</h3>
              <p style={{ fontSize: '0.94rem', color: '#D1DDD5' }}>
                Insulate your manufacturing costs from volatile global petroleum and imported LNG price swings through long-term agro-biomass energy agreements.
              </p>
            </div>

            <div className="card-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(233,184,63,0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Recycle size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Zero-Waste By-Product</h3>
              <p style={{ fontSize: '0.94rem', color: '#D1DDD5' }}>
                Anaerobic digestion yields bio-digestate rich in organic carbon and N-P-K micronutrients, providing farmers with chemical-free natural fertilizer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sustainability & Responsible Biomass Utilization */}
      <section className="section" aria-label="Sustainability and Responsible Utilization">
        <div className="site-container">
          <SectionTitle
            badge="Eco-System Balance"
            badgeIcon={Leaf}
            title="Sustainable Biomass Stewardship:"
            highlight="No Food-vs-Fuel Conflict"
            subtitle="Why Napier grass (Elephant Grass) represents the most ecological biomass crop in tropical climates."
          />

          <div className="grid-cols-3">
            <div className="card-standard">
              <div style={{ color: 'var(--color-primary-green)', marginBottom: '1rem' }}>
                <Sprout size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>High Dry-Matter Yield</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Napier grass generates exceptionally high biomass tonnage per acre compared to conventional agricultural crops, maximizing green gas output on minimal land footprints.
              </p>
            </div>

            <div className="card-standard">
              <div style={{ color: 'var(--color-primary-green)', marginBottom: '1rem' }}>
                <Users size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Empowering Local Farmers</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Structured contract farming and biomass aggregation provide guaranteed off-take contracts and dependable income cycles for rural Indian agriculturalists.
              </p>
            </div>

            <div className="card-standard">
              <div style={{ color: 'var(--color-primary-green)', marginBottom: '1rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Soil Carbon Enrichment</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Returning the fermented digestate to crop fields prevents soil erosion, restores depleted soil organic matter (SOM), and closes the biological nutrient loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Business Enquiry CTA Banner */}
      <section className="section section-soft" aria-label="Call to Action">
        <div className="site-container">
          <div style={{ 
            background: 'var(--surface-forest-gradient)', 
            borderRadius: 'var(--radius-lg)', 
            padding: ' clamp(2rem, 5vw, 4rem)',
            color: 'var(--color-white)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(233,184,63,0.3)'
          }}>
            <div style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}>
              <span className="badge-pill badge-pill-dark">
                <Zap size={14} /> Partnership Desk
              </span>
              <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1rem' }}>
                Ready to Transition to Sustainable Biomass Energy?
              </h2>
              <p style={{ color: '#D1DDD5', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Whether you are an industrial consumer seeking clean thermal fuel, an agricultural landowner with Napier biomass, or an institutional partner in renewable energy, our team is ready to collaborate.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold btn-lg">
                  <span>Send Business Enquiry</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/products" className="btn btn-outline-white btn-lg">
                  <span>Review Available Products</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
