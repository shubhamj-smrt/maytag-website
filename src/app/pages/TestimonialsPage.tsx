import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star } from 'lucide-react';
import { DropIcon, WrenchIcon, UsersThreeIcon, TrophyIcon } from '@phosphor-icons/react';
import { Card, CardContent } from '../components/Card';
import { SlidingNumber } from '../components/SlidingNumber';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{ name: string; text: string; rating: number }>;
  duration?: number;
}) => {
  return (
    <div className={`overflow-hidden ${props.className ?? ''}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, rating }, i) => (
              <Card key={i}>
                <CardContent>
                  <div className="flex gap-1 mb-3">
                    {[...Array(rating)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#00bfb3] rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div className="font-medium text-black text-sm">{name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialsPage() {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

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
    { numericValue: 30, suffix: '+', labelKey: 'testimonials.stats.years' },
    { numericValue: 5, suffix: '', labelKey: 'testimonials.stats.rating' },
    { numericValue: 50, suffix: 'K+', labelKey: 'testimonials.stats.customers' },
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
      <section className="py-12 bg-white" ref={statsRef}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-48">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-3xl sm:text-4xl font-bold text-[#00bfb3] mb-2">
                  <SlidingNumber value={statsInView ? stat.numericValue : 0} duration={1.5} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                  {stat.labelKey === 'testimonials.stats.rating' && (
                    <Star className="w-6 h-6 sm:w-6 sm:h-6 fill-current text-yellow-400" />
                  )}
                </div>
                <div className="text-gray-600">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
          {/* Image */}
          <div className="w-full h-56 sm:w-64 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/featured-testimonial.jpg"
              alt="Happy couple"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote */}
          <blockquote className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-[#00bfb3]">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-800 text-lg leading-relaxed text-balance">
              {t('testimonials.review.1.text')}
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="font-semibold text-black not-italic">{t('testimonials.review.1.name')}</cite>
              <span aria-hidden className="bg-gray-400 size-1 rounded-full" />
              <span className="text-gray-500">Verified Customer</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('testimonials.allReviews.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.allReviews.subtitle')}
            </p>
          </div>
        </div>

        <div className="flex gap-6 justify-center max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn
            testimonials={testimonials.filter((_, i) => i % 3 === 0).map(item => ({ name: t(item.nameKey), text: t(item.textKey), rating: item.rating }))}
            duration={18}
            className="w-full max-w-sm"
          />
          <TestimonialsColumn
            testimonials={testimonials.filter((_, i) => i % 3 === 1).map(item => ({ name: t(item.nameKey), text: t(item.textKey), rating: item.rating }))}
            duration={22}
            className="hidden md:block w-full max-w-sm"
          />
          <TestimonialsColumn
            testimonials={testimonials.filter((_, i) => i % 3 === 2).map(item => ({ name: t(item.nameKey), text: t(item.textKey), rating: item.rating }))}
            duration={16}
            className="hidden lg:block w-full max-w-sm"
          />
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
              { Icon: DropIcon, titleKey: 'testimonials.whyLove.clean', descKey: 'testimonials.whyLove.cleanDesc' },
              { Icon: WrenchIcon, titleKey: 'testimonials.whyLove.equipment', descKey: 'testimonials.whyLove.equipmentDesc' },
              { Icon: UsersThreeIcon, titleKey: 'testimonials.whyLove.staff', descKey: 'testimonials.whyLove.staffDesc' },
              { Icon: TrophyIcon, titleKey: 'testimonials.whyLove.value', descKey: 'testimonials.whyLove.valueDesc' },
            ].map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <Card key={index} hover>
                  <CardContent className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bfb3]/10 rounded-full mb-4">
                      <IconComponent className="w-10 h-10 text-[#00bfb3]" weight="regular" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{t(item.titleKey)}</h3>
                    <p className="text-gray-600">{t(item.descKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
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
