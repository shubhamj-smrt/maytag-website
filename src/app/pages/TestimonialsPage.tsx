import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { useLanguage } from '../context/LanguageContext';

export function TestimonialsPage() {
  const { t } = useLanguage();

  const testimonials = [
    { nameKey: 'testimonials.review.1.name', textKey: 'testimonials.review.1.text', rating: 5 },
    { nameKey: 'testimonials.review.2.name', textKey: 'testimonials.review.2.text', rating: 5 },
    { nameKey: 'testimonials.review.3.name', textKey: 'testimonials.review.3.text', rating: 5 },
    { nameKey: 'testimonials.review.4.name', textKey: 'testimonials.review.4.text', rating: 5 },
    { nameKey: 'testimonials.review.5.name', textKey: 'testimonials.review.5.text', rating: 5 },
    { nameKey: 'testimonials.review.6.name', textKey: 'testimonials.review.6.text', rating: 5 },
    { nameKey: 'testimonials.review.7.name', textKey: 'testimonials.review.7.text', rating: 5 },
    { nameKey: 'testimonials.review.8.name', textKey: 'testimonials.review.8.text', rating: 5 },
    { nameKey: 'testimonials.review.9.name', textKey: 'testimonials.review.9.text', rating: 5 },
  ];

  const stats = [
    { value: '30+', labelKey: 'testimonials.stats.years' },
    { value: '4.8', labelKey: 'testimonials.stats.rating' },
    { value: '1000+', labelKey: 'testimonials.stats.customers' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile hero image — replace src with a portrait-cropped version when available */}
          <img
            src="/images/01-testimonial-hero-mobile.png"
            alt={t('common.heroAlt')}
            className="block md:hidden w-full h-full object-cover"
          />
          {/* Desktop hero image */}
          <img
            src="/images/testimonial-hero.png"
            alt={t('common.heroAlt')}
            className="hidden md:block w-full h-full object-cover"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t('testimonials.hero.title')}</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              {t('testimonials.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-48">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#00bfb3] mb-2">{stat.value}</div>
                <div className="text-gray-600">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-[#00bfb3] rounded-lg p-8 sm:p-12 text-white relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-16 h-16 text-white opacity-20" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl mb-6 leading-relaxed">
                "{t('testimonials.review.1.text')}"
              </blockquote>
              <div className="font-semibold text-lg">- {t('testimonials.review.1.name')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('testimonials.allReviews.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.allReviews.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover>
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{t(testimonial.textKey)}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00bfb3] rounded-full flex items-center justify-center text-white font-semibold">
                      {t(testimonial.nameKey).charAt(0)}
                    </div>
                    <div className="font-semibold text-black">{t(testimonial.nameKey)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('testimonials.whyLove.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.whyLove.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { titleKey: 'testimonials.whyLove.clean', descKey: 'testimonials.whyLove.cleanDesc' },
              { titleKey: 'testimonials.whyLove.equipment', descKey: 'testimonials.whyLove.equipmentDesc' },
              { titleKey: 'testimonials.whyLove.staff', descKey: 'testimonials.whyLove.staffDesc' },
              { titleKey: 'testimonials.whyLove.value', descKey: 'testimonials.whyLove.valueDesc' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#00bfb3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#00bfb3]" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('testimonials.cta.title')}
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            {t('testimonials.cta.subtitle')}
          </p>
          <a
            href="https://www.yelp.com/biz/maytag-coin-laundry-of-raleigh-raleigh-3?dd_referrer=https%3A%2F%2Fwww.google.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            {t('testimonials.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
