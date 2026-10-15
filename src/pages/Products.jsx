import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Fuel, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  TrendingUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

export default function Products() {
  const productsList = [
    {
      id: 'biogas',
      name: 'Industrial Scrubbed Biogas',
      category: 'Primary Output',
      status: 'Core Offering / Active Pipeline',
      statusClass: 'status-active',
      isActual: true,
      image: '/images/biogas_plant_technology.jpg',
      headline: 'Medium-Btu combustible fuel for industrial steam generation and heating.',
      description: 'Scrubbed anaerobic digestion gas derived from Napier grass biomass, with moisture and Hydrogen Sulfide (H2S) removed to safeguard industrial burners.',
      specs: [
        { label: 'Methane Content (CH4)', value: '55% – 65% (volumetric)' },
        { label: 'Carbon Dioxide (CO2)', value: '35% – 45%' },
        { label: 'H2S After Scrubbing', value: '< 50 ppm' },
        { label: 'Calorific Value', value: '~4,800 – 5,500 kcal/m³' }
      ],
      applications: [
        'Industrial steam and hot water boilers',
        'Direct-fired ceramic kilns and brick manufacturing',
        'Food processing drying ovens and tea leaf dryers',
        'Textile and chemical process heat'
      ],
      note: 'Supplied directly via dedicated pipeline or customized local transport configurations based on project agreements.'
    },
    {
      id: 'biofertilizer',
      name: 'Fermented Organic Bio-Digestate',
      category: 'Valued By-Product',
      status: 'Nutrient Output / Agro Distribution',
      statusClass: 'status-active',
      isActual: true,
      image: '/images/napier_grass_farming.jpg',
      headline: 'Mineral-rich organic soil conditioner and liquid bio-fertilizer.',
      description: 'The sanitized, nutrient-dense remainder of the anaerobic digestion process. Rich in organic carbon and micro-elements, revitalizing agricultural soil without chemical burns.',
      specs: [
        { label: 'Form Factor', value: 'Solid fibrous cake & liquid nutrient effluent' },
        { label: 'Organic Carbon', value: 'High humus and microbial humic content' },
        { label: 'Weed Seeds / Pathogens', value: 'Sanitized during thermophilic/mesophilic digestion' },
        { label: 'Primary Use', value: 'Soil structural revitalization & chemical fertilizer substitute' }
      ],
      applications: [
        'Basal dressing for sugarcane, paddy, and horticulture',
        'Re-application on Napier grass fields for closed-loop yield',
        'Reclamation of degraded, saline, or chemical-depleted soils',
        'Organic farming certification compliance'
      ],
      note: 'Returned directly to contracting farmers to foster long-term soil fertility and high crop regeneration.'
    },
    {
      id: 'cbg',
      name: 'Compressed Biogas (CBG / Bio-CNG)',
      category: 'Potential Future Pathway',
      status: 'Strategic Pathway / Feasibility',
      statusClass: 'status-potential',
      isActual: false,
      image: '/images/hero_biogas_plant.jpg',
      headline: 'High-purity upgraded biomethane compressed to 200–250 bar for transportation.',
      description: 'Upgrading biogas to >90% methane via membrane separation or PSA technology, followed by multi-stage compression. Suitable as a green substitute for commercial vehicular CNG or natural gas grid blending.',
      specs: [
        { label: 'Potential Methane (CH4)', value: '> 90% (when upgraded)' },
        { label: 'Potential Compression', value: '200 – 250 bar' },
        { label: 'Calorific Value Equivalent', value: 'Equivalent to commercial natural gas (~50 MJ/kg)' },
        { label: 'Development Stage', value: 'Strategic evaluation / downstream upgrade pathway' }
      ],
      applications: [
        'Commercial fleet fueling (trucks, buses, light commercial vehicles)',
        'City Gas Distribution (CGD) grid injection',
        'Industrial high-pressure gas cascades'
      ],
      note: 'Offered subject to plant configuration upgrades, downstream compression facilities, and institutional off-take contracts.'
    },
    {
      id: 'electricity',
      name: 'Combined Heat & Power (Cogeneration)',
      category: 'Potential Future Pathway',
      status: 'Engineering Feasibility',
      statusClass: 'status-potential',
      isActual: false,
      image: '/images/biogas_plant_technology.jpg',
      headline: 'Simultaneous electrical generation and exhaust heat recovery for captive power.',
      description: 'Utilizing biogas in specialized gas generator engines to generate steady baseload electricity while capturing jacket-water heat for digester warmth or industrial drying.',
      specs: [
        { label: 'System Type', value: 'Spark-ignited biogas generator set (CHP)' },
        { label: 'Electrical Efficiency', value: '38% – 42% (typical CHP engine)' },
        { label: 'Thermal Recovery', value: 'High-grade exhaust heat & low-grade jacket water' },
        { label: 'Deployment Status', value: 'Technical feasibility phase for captive consumers' }
      ],
      applications: [
        'Industrial captive continuous baseload electricity',
        'Process hot water and drying heat from exhaust recovery',
        'Micro-grid and rural distributed renewable power'
      ],
      note: 'Subject to grid interconnection clearance, power purchase agreements (PPA), and client generation requirements.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Products & Applications | Biogas & Bio-Digestate"
        description="Explore renewable energy products from Sri Aiswarya Lakshmi Green Energies LLP: scrubbed industrial biogas, organic biofertilizer, and prospective CBG pathways."
      />

      {/* Hero */}
      <section className="hero-wrapper" style={{ minHeight: '52vh', padding: '3.5rem 0' }} aria-label="Products Hero">
        <div className="hero-bg-container">
          <img
            src="/images/hero_biogas_plant.jpg"
            alt="Sri Aiswarya Lakshmi Green Energies renewable outputs"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          <span className="badge-pill badge-pill-dark">
            <Fuel size={14} /> Renewable Outputs
          </span>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            Products & Clean Energy <br />
            <span>Applications</span>
          </h1>
          <p className="hero-description" style={{ maxWidth: '680px' }}>
            Delivering clean combustible biogas for industrial thermal users and nutrient-rich bio-digestate for sustainable agricultural soil enrichment.
          </p>
        </div>
      </section>

      {/* Transparency Banner */}
      <section style={{ backgroundColor: 'var(--color-soft-bg)', padding: '1.25rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.92rem', color: 'var(--color-main-text)' }}>
            <Info size={20} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Corporate Disclosure:</strong> In strict compliance with verified business standards, we clearly distinguish between our active core outputs (scrubbed industrial biogas and organic bio-digestate) and prospective future pathways (upgraded CBG and electrical cogeneration).
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" aria-label="Product Showcase">
        <div className="site-container">
          <SectionTitle
            badge="Product Portfolio"
            badgeIcon={Zap}
            title="Clean Fuels &"
            highlight="Agricultural Bio-Nutrients"
            subtitle="Click on any product to examine specifications, potential applications, and initiate a commercial inquiry."
          />

          <div className="grid-cols-2" style={{ gap: '2.5rem' }}>
            {productsList.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-box">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className={`product-status-tag ${product.statusClass}`}>
                    {product.status}
                  </span>
                </div>

                <div className="product-body">
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: product.isActual ? 'var(--color-primary-green)' : '#D99B16', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {product.category}
                    </span>
                    <h3 style={{ fontSize: '1.45rem', marginTop: '0.2rem' }}>{product.name}</h3>
                    <p style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--color-main-text)', marginBottom: '0.75rem' }}>
                      {product.headline}
                    </p>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                      {product.description}
                    </p>
                  </div>

                  {/* Specification Table */}
                  <div className="product-spec-list">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-forest)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      Technical Specifications & Parameters
                    </span>
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="product-spec-item">
                        <span className="product-spec-label">{s.label}</span>
                        <span className="product-spec-value">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--color-deep-forest)', marginBottom: '0.5rem' }}>
                      Potential Applications:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.45rem' }}>
                      {product.applications.map((app, aIdx) => (
                        <div key={aIdx} style={{ display: 'flex', gap: '0.45rem', alignItems: 'flex-start', fontSize: '0.85rem' }}>
                          <CheckCircle2 size={15} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ color: 'var(--color-secondary-text)' }}>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-text)', fontStyle: 'italic', marginBottom: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                    Note: {product.note}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className={`btn ${product.isActual ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ width: '100%' }}
                    >
                      <span>Enquire About This Product</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Biogas vs Fossil Fuel */}
      <section className="section section-soft" aria-label="Energy Comparison">
        <div className="site-container">
          <SectionTitle
            badge="Economic & Environmental Impact"
            badgeIcon={TrendingUp}
            title="Renewable Biogas vs"
            highlight="Conventional Fossil Fuels"
            subtitle="Understand why transitioning industrial heat to biogas drives long-term ESG and financial resilience."
          />

          <div className="card-standard" style={{ overflowX: 'auto', padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', fontSize: '0.94rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-primary-green)', textAlign: 'left' }}>
                  <th style={{ padding: '0.85rem', color: 'var(--color-deep-forest)' }}>Parameter</th>
                  <th style={{ padding: '0.85rem', color: 'var(--color-primary-green)' }}>Napier Grass Biogas</th>
                  <th style={{ padding: '0.85rem', color: 'var(--color-secondary-text)' }}>Furnace Oil / Diesel</th>
                  <th style={{ padding: '0.85rem', color: 'var(--color-secondary-text)' }}>Imported Coal</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600 }}>Carbon Footprint</td>
                  <td style={{ padding: '0.85rem', color: 'var(--color-primary-green)', fontWeight: 600 }}>Biogenic / Carbon Neutral</td>
                  <td style={{ padding: '0.85rem' }}>High Fossil Carbon</td>
                  <td style={{ padding: '0.85rem' }}>Extremely High CO2 & Ash</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600 }}>Price Volatility</td>
                  <td style={{ padding: '0.85rem', color: 'var(--color-primary-green)', fontWeight: 600 }}>Stable, Domestic Contracts</td>
                  <td style={{ padding: '0.85rem' }}>Tied to Global Crude Swings</td>
                  <td style={{ padding: '0.85rem' }}>Subject to Import Freight & Tariffs</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600 }}>Combustion Cleanliness</td>
                  <td style={{ padding: '0.85rem', color: 'var(--color-primary-green)', fontWeight: 600 }}>Clean blue flame, zero soot</td>
                  <td style={{ padding: '0.85rem' }}>Soot, particulates & heavy soot</td>
                  <td style={{ padding: '0.85rem' }}>High particulate matter & fly ash</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.85rem', fontWeight: 600 }}>Rural Economic Value</td>
                  <td style={{ padding: '0.85rem', color: 'var(--color-primary-green)', fontWeight: 600 }}>100% re-invested in local farmers</td>
                  <td style={{ padding: '0.85rem' }}>Capital outflows to petro-refineries</td>
                  <td style={{ padding: '0.85rem' }}>Outflows to mining conglomerates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Enquiry CTA */}
      <section className="section" aria-label="Product Consultation CTA">
        <div className="site-container">
          <div className="site-container-narrow" style={{ textAlign: 'center' }}>
            <h2>Interested in Tailored Biogas Volume Off-Take?</h2>
            <p style={{ marginTop: '0.75rem', marginBottom: '2rem' }}>
              We collaborate with energy procurement managers, sustainability leads, and boiler engineers to tailor flow rates and burner conversion plans.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Initiate Energy Supply Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
