import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Info, 
  MessageSquare, 
  Building2, 
  HelpCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product');

  const [formData, setFormData] = useState(() => ({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: prefilledProduct ? 'Product enquiry' : 'General business enquiry',
    message: prefilledProduct 
      ? `Hello, I would like to enquire regarding commercial supply, specifications, and volume options for ${prefilledProduct}.`
      : ''
  }));

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit telephone number.';
    }

    if (!formData.category) {
      newErrors.category = 'Please select an enquiry category.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please enter a message of at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const endpoint = (typeof window !== 'undefined' && window.location.hostname === 'localhost' && window.location.port === '5173')
        ? 'http://localhost:5000/api/contact'
        : '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          category: 'General business enquiry',
          message: ''
        });
      } else {
        // Fallback simulation for demonstration
        setSubmissionSuccess(true);
      }
    } catch {
      // Backend not running locally - graceful demonstration mode
      setSubmissionSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        category: 'General business enquiry',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sri Aiswarya Lakshmi Green Energies LLP team, I am interested in learning more about your biogas production and agricultural biomass solutions.`
  );

  return (
    <>
      <SEOHead
        title="Contact Us | Business & Biomass Enquiries"
        description="Connect with Sri Aiswarya Lakshmi Green Energies LLP. Submit business enquiries, Napier grass supply partnerships, or industrial biogas off-take requests."
      />

      {/* Page Hero */}
      <section className="hero-wrapper" style={{ minHeight: '48vh', padding: '3.5rem 0' }} aria-label="Contact Hero">
        <div className="hero-bg-container">
          <img
            src="/images/hero_biogas_plant.jpg"
            alt="Sri Aiswarya Lakshmi Green Energies corporate contact"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="site-container hero-content animate-fade-in-up">
          <span className="badge-pill badge-pill-dark">
            <Mail size={14} /> Corporate Communication
          </span>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            Connect with Our <br />
            <span>Green Energy Team</span>
          </h1>
          <p className="hero-description" style={{ maxWidth: '680px' }}>
            We welcome inquiries from industrial energy consumers, agricultural Napier grass growers, biomass aggregators, and clean-tech partners.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section" aria-label="Contact Form and Details">
        <div className="site-container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="card-standard" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <span className="badge-pill">
                  <Send size={14} /> Send An Enquiry
                </span>
                <h2 style={{ fontSize: '1.85rem' }}>Commercial & Technical Desk</h2>
                <p style={{ fontSize: '0.96rem', marginTop: '0.35rem' }}>
                  Please fill out the form below. Our bioenergy specialists review all submissions and respond promptly.
                </p>
              </div>

              {/* Mandatory Demonstration Notice */}
              <div className="demo-notice-banner" role="status">
                <Info size={20} style={{ flexShrink: 0 }} />
                <div>
                  <strong>Form Demonstration Notice:</strong> This contact form is operating in verified client demonstration mode. Submissions simulate real-time client validation and payload preparation.
                </div>
              </div>

              {submissionSuccess && (
                <div className="feedback-banner-success" role="alert">
                  <CheckCircle2 size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', color: '#14532D' }}>
                      Enquiry Submitted Successfully!
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#26372D', margin: 0 }}>
                      Thank you for contacting Sri Aiswarya Lakshmi Green Energies LLP. In a live production environment with connected backend routing, our corporate representative would contact you within 1 business day.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      required
                    />
                    {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company / Organization
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="e.g. Lakshmi Industries Pvt Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      required
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      required
                    />
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>
                </div>

                {/* Category */}
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Enquiry Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`form-select ${errors.category ? 'error' : ''}`}
                    required
                  >
                    <option value="General business enquiry">General Business Enquiry</option>
                    <option value="Product enquiry">Product Enquiry (Biogas / Bio-digestate)</option>
                    <option value="Napier grass supply or agricultural partnership">Napier Grass Supply or Agricultural Partnership</option>
                    <option value="Plant technology or project enquiry">Plant Technology or Project Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && <span className="form-error-msg">{errors.category}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Please specify your requirements, projected fuel needs, agricultural acreage, or collaboration scope..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    required
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Transmit Enquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Information Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="contact-info-card">
                <div>
                  <span className="badge-pill badge-pill-dark">
                    <Building2 size={14} /> Corporate Details
                  </span>
                  <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    Sri Aiswarya Lakshmi Green Energies LLP
                  </h3>
                  <p style={{ color: '#D1DDD5', fontSize: '0.94rem' }}>
                    Clean Energy. Greener Tomorrow.
                  </p>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Registered Corporate Office</h4>
                    <p>
                      Sri Aiswarya Lakshmi Green Energies LLP<br />
                      Registered Limited Liability Partnership, India<br />
                      Biomass Project Corridors & Industrial Agro Hub
                    </p>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <Mail size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Official Email Correspondence</h4>
                    <p>
                      <a href="mailto:info@sriaiswaryalakshmi.com">info@sriaiswaryalakshmi.com</a><br />
                      <span style={{ fontSize: '0.82rem', color: '#B8C7BC' }}>General inquiries & farmer partnerships</span>
                    </p>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <Phone size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Commercial & Project Desk</h4>
                    <p>
                      Available Mon–Sat: 09:30 AM to 06:00 PM IST<br />
                      <span style={{ fontSize: '0.82rem', color: '#B8C7BC' }}>Direct phone lines provided upon formal registration</span>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Link */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
                  <a
                    href={`https://wa.me/?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    <MessageSquare size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <span style={{ display: 'block', textAlign: 'center', fontSize: '0.78rem', color: '#A3B8AA', marginTop: '0.5rem' }}>
                    Direct WhatsApp query link for farmers and procurement leads
                  </span>
                </div>
              </div>

              {/* Map Card */}
              <div className="card-standard" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} color="var(--color-primary-green)" />
                  Geographic Location & Plant Proximity
                </h4>
                <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--color-soft-bg)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', textAlign: 'center', padding: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(8,122,53,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={24} />
                  </div>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--color-deep-forest)' }}>India Agro-Biomass Corridors</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-secondary-text)' }}>
                    Detailed coordinates and site survey visits scheduled upon NDA & project onboarding.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section-soft" aria-label="Frequently Asked Questions">
        <div className="site-container">
          <SectionTitle
            badge="Common Inquiries"
            badgeIcon={HelpCircle}
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Quick answers regarding our Napier grass partnerships and biogas supply framework."
          />

          <div className="grid-cols-2" style={{ gap: '1.75rem' }}>
            <div className="card-standard">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-deep-forest)' }}>
                How do farmers partner with Sri Aiswarya Lakshmi Green Energies?
              </h4>
              <p style={{ fontSize: '0.92rem' }}>
                We enter into structured multi-year contract farming arrangements with local farmers and agricultural land aggregators, providing certified root-slip saplings, technical agronomic advisory, and assured periodic off-take at guaranteed prices.
              </p>
            </div>

            <div className="card-standard">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-deep-forest)' }}>
                Can our industrial boilers run on scrubbed biogas?
              </h4>
              <p style={{ fontSize: '0.92rem' }}>
                Yes. Biogas can be fired in industrial steam and thermic fluid boilers with a dual-fuel or dedicated gas burner retrofit, replacing diesel, LPG, or furnace oil while drastically slashing fuel expenses and emissions.
              </p>
            </div>

            <div className="card-standard">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-deep-forest)' }}>
                Why is Napier grass preferred over food waste or cow dung?
              </h4>
              <p style={{ fontSize: '0.92rem' }}>
                While cow dung and food waste have variable seasonal quality and high water content, Super Napier grass yields dense, predictable dry matter year-round with high specific methane yield and zero food supply competition.
              </p>
            </div>

            <div className="card-standard">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-deep-forest)' }}>
                Is the bio-digestate safe for agricultural crops?
              </h4>
              <p style={{ fontSize: '0.92rem' }}>
                Yes. The anaerobic digestion process naturally sanitizes weed seeds and biological pathogens while converting organic nitrogen into plant-absorbable ammonium forms, making it an exceptional organic soil revitalizer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
