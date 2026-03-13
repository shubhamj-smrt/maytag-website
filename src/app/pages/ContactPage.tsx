import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
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
            src="/images/01-hero-image.png"
            alt={t('common.heroAlt')}
            className="w-full h-full object-cover"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card hover>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-[#00bfb3]" />
                </div>
                <h3 className="font-semibold text-black mb-2">{t('contact.address')}</h3>
                <p className="text-gray-600 text-sm">{t('contact.addressLine1')}<br />{t('contact.addressLine2')}</p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-[#00bfb3]" />
                </div>
                <h3 className="font-semibold text-black mb-2">{t('contact.phone')}</h3>
                <a href="tel:9842059506" className="text-gray-600 text-sm hover:text-[#00bfb3] transition-colors">
                  (984) 205-9506
                </a>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                  <Clock className="w-6 h-6 text-[#00bfb3]" />
                </div>
                <h3 className="font-semibold text-black mb-2">{t('contact.hours')}</h3>
                <p className="text-gray-600 text-sm">{t('home.questions.hours')}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                    {t('contact.form.name')} *
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
                    {t('contact.form.email')} *
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
                    {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                  >
                    <option value="">{t('contact.form.selectSubject')}</option>
                    <option value="general">{t('contact.form.general')}</option>
                    <option value="services">{t('contact.form.servicesQ')}</option>
                    <option value="pricing">{t('contact.form.pricingInfo')}</option>
                    <option value="commercial">{t('contact.form.commercialServices')}</option>
                    <option value="feedback">{t('contact.form.feedback')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors resize-none"
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
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">{t('contact.visitLocation')}</h2>
              
              {/* Google Maps Embed */}
              <div className="rounded-lg mb-6 h-[300px] overflow-hidden border border-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.834389257489!2d-78.7209034!3d35.7855752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s15%20Jones%20Franklin%20Rd%2C%20Raleigh%2C%20NC%2027606!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maytag Coin Laundry - 15 Jones Franklin Rd, Raleigh, NC 27606"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h3 className="font-semibold text-black mb-4">{t('contact.businessHours')}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contact.everyDay')}</span>
                    <span className="text-black font-semibold">5:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-black mb-4">{t('contact.parking.title')}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>{t('contact.parking.free')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>{t('contact.parking.lit')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>{t('contact.parking.loading')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>{t('contact.parking.handicap')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('contact.faq.title')}</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent>
                <h3 className="font-semibold text-black mb-2">{t('contact.faq.q1')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.a1')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-semibold text-black mb-2">{t('contact.faq.q2')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.a2')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-semibold text-black mb-2">{t('contact.faq.q3')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.a3')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-semibold text-black mb-2">{t('contact.faq.q4')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.a4')}
                </p>
              </CardContent>
            </Card>
          </div>
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
