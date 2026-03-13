import { useState, useRef, useEffect } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, CaretDownIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react';
import { Card, CardContent } from '../components/Card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '', // honeypot – leave empty; bots often fill it
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formMountedAt = useRef<number>(Date.now());

  const MIN_SUBMIT_SECONDS = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Honeypot: if filled, treat as bot – show success but don't send
    if (formData.website.trim() !== '') {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
      setTimeout(() => setSubmitted(false), 3000);
      return;
    }

    // Time check: reject if submitted too quickly (likely bot)
    const elapsed = (Date.now() - formMountedAt.current) / 1000;
    if (elapsed < MIN_SUBMIT_SECONDS) {
      setError('Please take a moment to fill out the form before submitting.');
      setLoading(false);
      return;
    }

    const { website: _w, ...payload } = formData;

    try {
      const res = await fetch('https://hooks.zapier.com/hooks/catch/615440/uxp3pia/', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/mobile-contact-hero-image.png"
            alt={t('common.heroAlt')}
            className="block md:hidden w-full h-full object-cover"
          />
          <img
            src="/images/01-contact-hero-image.png"
            alt={t('common.heroAlt')}
            className="hidden md:block w-full h-full object-cover object-top"
          />
          {/* Mobile: overlay from bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 md:hidden"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%)'
            }}
          />
          {/* Desktop: overlay from left */}
          <div
            className="hidden md:block absolute inset-y-0 left-0 w-3/5"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%)'
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t('contact.hero.title')}</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
            <a
              href="https://www.google.com/maps?q=15+Jones+Franklin+Rd,+Raleigh,+NC+27606"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card hover className="h-full">
                <CardContent className="flex flex-row items-center gap-4 md:flex-col md:items-center md:text-center min-h-[5rem] md:min-h-0">
                  <div className="inline-flex flex-shrink-0 items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#00bfb3]/10 rounded-full md:mb-4">
                    <MapPinIcon className="w-8 h-8 md:w-10 md:h-10 text-[#00bfb3]" weight="regular" />
                  </div>
                  <div className="text-left md:text-center">
                    <h3 className="font-semibold text-black mb-1 md:mb-2">{t('contact.address')}</h3>
                    <p className="text-gray-600 text-sm">{t('contact.addressLine1')}<br />{t('contact.addressLine2')}</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="tel:9842059506" className="block h-full">
              <Card hover className="h-full">
                <CardContent className="flex flex-row items-center gap-4 md:flex-col md:items-center md:text-center min-h-[5rem] md:min-h-0">
                  <div className="inline-flex flex-shrink-0 items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#00bfb3]/10 rounded-full md:mb-4">
                    <PhoneIcon className="w-8 h-8 md:w-10 md:h-10 text-[#00bfb3]" weight="regular" />
                  </div>
                  <div className="text-left md:text-center">
                    <h3 className="font-semibold text-black mb-1 md:mb-2">{t('contact.phone')}</h3>
                    <p className="text-gray-600 text-sm">(984) 205-9506</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.yelp.com/biz/maytag-coin-laundry-of-raleigh-raleigh-3"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card hover className="h-full">
                <CardContent className="flex flex-row items-center gap-4 md:flex-col md:items-center md:text-center min-h-[5rem] md:min-h-0">
                  <div className="inline-flex flex-shrink-0 items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#00bfb3]/10 rounded-full md:mb-4">
                    <ClockIcon className="w-8 h-8 md:w-10 md:h-10 text-[#00bfb3]" weight="regular" />
                  </div>
                  <div className="text-left md:text-center">
                    <h3 className="font-semibold text-black mb-1 md:mb-2">{t('contact.hours')}</h3>
                    <p className="text-gray-600 text-sm text-balance">{t('home.questions.hours')}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Image — fixed height on mobile, fills form height on desktop */}
            <div className="block order-first h-64 sm:h-80 lg:h-auto relative rounded-lg overflow-hidden">
              <img
                src="/images/thinking-person.png"
                alt={t('common.heroAlt')}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">{t('contact.sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot – hidden from users, bots often fill it */}
                <div
                  className="absolute -left-[9999px] w-px h-px overflow-hidden opacity-0 pointer-events-none"
                  aria-hidden
                >
                  <label htmlFor="website">Leave this blank</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.name')} <span style={{ color: '#FF2244' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.email')} <span style={{ color: '#FF2244' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.subject')} <span style={{ color: '#FF2244' }}>*</span>
                  </label>
                  {/* Hidden native select for form submission / validation */}
                  <input type="hidden" name="subject" value={formData.subject} required />

                  <div className="relative" ref={dropdownRef}>
                    {/* Trigger */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(o => !o)}
                      className={`w-full px-4 py-3 border rounded bg-white text-left text-base font-normal transition-colors flex items-center justify-between cursor-pointer ${
                        dropdownOpen ? 'border-[#00bfb3]' : 'border-gray-300'
                      }`}
                    >
                      <span className={formData.subject ? 'text-black' : 'text-gray-400'}>
                        {formData.subject
                          ? {
                              general: t('contact.form.general'),
                              services: t('contact.form.servicesQ'),
                              pricing: t('contact.form.pricingInfo'),
                              commercial: t('contact.form.commercialServices'),
                              feedback: t('contact.form.feedback'),
                            }[formData.subject]
                          : t('contact.form.selectSubject')}
                      </span>
                      <CaretDownIcon
                        className={`flex-shrink-0 text-[#00bfb3] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                        size={18}
                        weight="bold"
                      />
                    </button>

                    {/* Dropdown panel */}
                    {dropdownOpen && (
                      <ul className="absolute left-0 right-0 top-full mt-1 z-50 bg-white border border-gray-300 rounded shadow-md overflow-hidden">
                        {[
                          { value: 'general', label: t('contact.form.general') },
                          { value: 'services', label: t('contact.form.servicesQ') },
                          { value: 'pricing', label: t('contact.form.pricingInfo') },
                          { value: 'commercial', label: t('contact.form.commercialServices') },
                          { value: 'feedback', label: t('contact.form.feedback') },
                        ].map(option => (
                          <li key={option.value}>
                            <button
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, subject: option.value }));
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors cursor-pointer ${
                                formData.subject === option.value ? 'text-[#00bfb3] font-medium' : 'text-black'
                              }`}
                            >
                              {option.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.message')} <span style={{ color: '#FF2244' }}>*</span>
                  </label>
                  <textarea
                    ref={textareaRef}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onInput={handleTextareaInput}
                    required
                    rows={1}  
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors resize-none overflow-hidden min-h-[5rem] sm:min-h-0"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {error && (
                  <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitted || loading}
                  className="w-full bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <span>{t('contact.form.submitted')}</span>
                  ) : loading ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <PaperPlaneTiltIcon className="w-4 h-4" weight="bold" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              <span className="block">{t('contact.faq.title.line1')}</span>
            </h2>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent>
              <Accordion type="single" collapsible>
                {[
                  { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
                  { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
                  { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
                  { q: t('contact.faq.q4'), a: t('contact.faq.a4') },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger
                      className="text-base font-semibold text-black hover:no-underline hover:text-[#00bfb3]"
                      icon={<CaretDownIcon className="pointer-events-none size-5 shrink-0 translate-y-0.5 text-[#00bfb3] transition-transform duration-200" weight="bold" />}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('contact.cta.title')}
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            {t('contact.cta.subtitle')}
          </p>
          <a
            href="tel:9842059506"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
          >
            {t('contact.cta.button')}: (984) 205-9506
          </a>
        </div>
      </section>
    </div>
  );
}
