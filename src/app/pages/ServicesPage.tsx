import React from 'react';
import { Shirt, Wind, Droplet, Package } from 'lucide-react';
import { DropIcon, ShieldIcon, SunHorizonIcon, TrophyIcon, UsersThreeIcon, WrenchIcon } from '@phosphor-icons/react';
import { Card, CardContent } from '../components/Card';
import { useLanguage } from '../context/LanguageContext';

export function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Self-Service Wash',
      description: 'Use our state-of-the-art Maytag washers to clean your clothes exactly how you like them. Multiple sizes available from regular to extra-large capacity.',
      features: ['Regular, Large, and XL washers', 'Hot, warm, and cold water options', 'Multiple cycle settings', 'Energy-efficient machines'],
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: 'Self-Service Dry',
      description: 'Our high-efficiency dryers get your laundry dry quickly and evenly. Large capacity dryers can handle even your biggest loads with ease.',
      features: ['Multiple temperature settings', 'Large capacity dryers', 'Quick dry cycles', 'Wrinkle-free options'],
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Wash & Fold Service',
      description: 'Let our professional staff handle your laundry from start to finish. Drop off your clothes and pick them up clean, fresh, and neatly folded.',
      features: ['Same-day service available', 'Professional folding', 'Special care for delicates', 'Eco-friendly detergents'],
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Commercial Services',
      description: 'We offer bulk laundry services for businesses, hotels, and restaurants. Competitive pricing and reliable turnaround times for all your commercial needs.',
      features: ['Bulk pricing discounts', 'Regular pickup and delivery', 'Customized service plans', 'Quality guaranteed'],
    },
  ]; 

  const amenities = [
    { Icon: DropIcon, label: 'Free WiFi throughout facility' },
    { Icon: SunHorizonIcon, label: 'Comfortable seating areas' },
    { Icon: TrophyIcon, label: 'Vending machines for snacks and drinks' },
    { Icon: UsersThreeIcon, label: 'Folding tables and carts available' },
    { Icon: ShieldIcon, label: 'ATM on-site' },
    { Icon: WrenchIcon, label: 'Security cameras for your safety' },
    { Icon: TrophyIcon, label: 'Well-lit parking area' },
    { Icon: UsersThreeIcon, label: 'Attendant on duty during business hours' },
  ];

  const amenitiesImages = [
    { src: '/images/amenities-1.png', alt: 'Store feature photo' },
    { src: '/images/amenities-2.png', alt: 'Store feature photo' },
    { src: '/images/amenities-3.png', alt: 'Store feature photo' },
    { src: '/images/amenities-4.png', alt: 'Store feature photo' },
    { src: '/images/amenities-5.png', alt: 'Store feature photo' },
    { src: '/images/amenities-6.png', alt: 'Store feature photo' },
    { src: '/images/amenities-7.png', alt: 'Store feature photo' },
  ];

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t('services.hero.title')}</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Self-Service Laundromat — text + image block same row from md; image block = col1 lady, col2 stacked */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Single row from md: text | images. Below md stacks with images first. */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8 lg:gap-12">
            {/* Left: copy — stays in row with images from md up */}
            <div className="order-2 md:order-1 md:flex-1 md:min-w-0 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-[#00bfb3] uppercase tracking-wide font-bold text-sm sm:text-base">
                  Clean, Convenient and Modern
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black text-balance">
                  Self-Service Laundromat in Raleigh
                </h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use our modern self-service laundromat in Raleigh, NC to wash and dry your clothes quickly and conveniently. Our facility features state-of-the-art washers and high-efficiency dryers designed to handle everything from everyday loads to extra-large laundry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have multiple washer sizes, fast drying cycles, and both cashless and coin payment options for a simple and flexible laundry experience. Whether you&apos;re washing a small load or large bedding and towels, our machines are built to get your laundry clean and dry faster.
              </p>
            </div>
            {/* Right: image section — column 1 = lady full height, column 2 = app + terminal stacked */}
            <div className="order-1 md:order-2 w-full md:flex-1 md:min-w-0">
              <div className="flex flex-row gap-3 sm:gap-4 items-stretch h-full min-h-[260px] sm:min-h-[320px]">
                {/* Column 1: lady — spans full height of the pair beside it */}
                <div className="flex-1 min-w-0 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                  <img
                    src="/images/self-service-laundromat-main.png"
                    alt="Guest using a front-loading washer at our self-service laundromat"
                    className="w-full h-full object-cover object-center min-h-[240px] md:min-h-0"
                  />
                </div>
                {/* Column 2: two images stacked vertically */}
                <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-md bg-gray-100">
                    <img
                      src="/images/self-service-laundromat-app.png"
                      alt="Mobile app with wallet and start machine — cashless laundry payment"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-md bg-gray-100">
                    <img
                      src="/images/self-service-laundromat-terminal.png"
                      alt="Bubblepay terminal with scan and tap payment instructions"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wash & Fold — swapped layout like reference (images left, text right) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Single row from md: images | text. Below md stacks with images first. */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8 lg:gap-12">
            {/* Left: image section — column 1 = hero image, column 2 = towels + bag stacked */}
            <div className="order-1 w-full md:flex-1 md:min-w-0">
              <div className="flex flex-row gap-3 sm:gap-4 items-stretch h-full min-h-[260px] sm:min-h-[320px]">
                {/* Column 1: hero image — spans full height of the pair beside it */}
                <div className="flex-1 min-w-0 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                  <img
                    src="/images/wash-fold-hero.png"
                    alt="Wash and fold laundry service"
                    className="w-full h-full object-cover object-center min-h-[240px] md:min-h-0"
                  />
                </div>
                {/* Column 2: two images stacked vertically */}
                <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-md bg-gray-100">
                    <img
                      src="/images/wash-fold-towels.png"
                      alt="Freshly folded towels ready for pickup"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-md bg-gray-100">
                    <img
                      src="/images/wash-fold-bag.png"
                      alt="Bagged wash and fold laundry ready for pickup"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="order-2 w-full md:flex-1 md:min-w-0 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-[#00bfb3] uppercase tracking-wide font-bold text-sm sm:text-base">
                  Fast, Professional and Easy
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black text-balance">
                  Wash &amp; Fold Laundry Service in Raleigh
                </h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Save time with our professional wash and fold laundry service in Raleigh, NC. Simply drop off your laundry and our team will wash, dry, and neatly fold your clothes so they are ready to wear when you pick them up.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Raleigh laundromat uses high-quality detergents, modern machines, and careful handling to ensure your laundry is cleaned and folded to the highest standards. Customers choose us for our fast turnaround times, clean facility, and reliable laundry service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width video CTA — Pickup & Delivery */}
      <section className="relative w-full overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/storefront-areas.png"
          >
            <source src="/videos/pickup-delivery.mp4" type="video/mp4" />
          </video>
          {/* 60% black overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 h-[500px] py-16 sm:py-20 text-center text-white flex flex-col items-center justify-center">
          <p className="text-base sm:text-lg text-gray-100 mb-2">It doesn’t end there.</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-balance mb-8">
            Fastest Laundry Pickup &amp; Delivery
            <br className="hidden sm:block" /> in Raleigh
          </h2>
          <a
            href="tel:2523083052"
            className="inline-flex items-center justify-center bg-[#00bfb3] text-white px-8 py-4 rounded font-semibold hover:bg-[#00a89d] transition-colors"
          >
            Schedule Delivery
          </a>
        </div>
      </section>

      {/*
      Services Grid (hidden for now)

      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover>
                <CardContent padding="lg">
                  <div className="text-[#00bfb3] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 mb-6">{t(service.descKey)}</p>
                  <ul className="space-y-2">
                    {service.featureKeys.map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#00bfb3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Amenities + full-bleed image strip */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black text-balance">
              #1 Most Comfortable Laundromat Experience in Raleigh
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.Icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 items-center justify-center text-[#00bfb3]">
                    <IconComponent size={28} weight="duotone" />
                  </div>
                  <div className="text-sm sm:text-base font-medium text-[#363d4f] leading-snug">
                    {amenity.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End-to-end image row */}
        <div className="mt-12 w-full">
          <div className="amenities-ticker">
            <div className="amenities-ticker__track">
              {[0, 1].map((groupIndex) => (
                <div className="amenities-ticker__group" key={groupIndex} aria-hidden={groupIndex === 1}>
                  {amenitiesImages.map((img, idx) => (
                    <div
                      key={`${groupIndex}-${idx}`}
                      className="flex-none overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 min-w-[220px] sm:min-w-[260px] md:min-w-[320px] lg:min-w-[360px]"
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have Questions About Our Services?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help. Visit us or give us a call to learn more about how we can make your laundry day easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2523083052"
              className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors font-medium"
            >
              {t('services.cta.callUs')}
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded border border-white/80 hover:bg-white hover:text-black transition-colors font-medium"
            >
              {t('services.cta.visitUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
