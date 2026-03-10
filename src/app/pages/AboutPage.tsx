import { Link } from 'react-router';
import { DropIcon, HeartStraightIcon, ShieldIcon, SunHorizonIcon, TrophyIcon, UsersThreeIcon, WrenchIcon } from '@phosphor-icons/react';
import { Card, CardContent } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { Icon: HeartStraightIcon, titleKey: 'about.values.customerFirst', descKey: 'about.values.customerFirstDesc' },
    { Icon: ShieldIcon, titleKey: 'about.values.quality', descKey: 'about.values.qualityDesc' },
    { Icon: TrophyIcon, titleKey: 'about.values.professional', descKey: 'about.values.professionalDesc' },
    { Icon: UsersThreeIcon, titleKey: 'about.values.community', descKey: 'about.values.communityDesc' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/about-hero-mobile.png"
            alt="Maytag Coin Laundry Storefront"
            className="block md:hidden w-full h-full object-cover"
          />
          <img
            src="/images/01-about-hero.png"
            alt="Maytag Coin Laundry Storefront"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">About Us</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px] mb-8">
              For over 15 years, we've been Raleigh's trusted choice for quality laundry services and exceptional customer care.
            </p>
            <Link
              to="/services"
              className="block w-full md:w-auto md:inline-block bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* The Maytag Standard */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">The Maytag Standard</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-balance">
                Laundry is part of everyday life, and we believe the experience should be dependable and comfortable. At Maytag Coin Laundry, we focus on providing clean machines, a modern space, and a place customers can rely on when it’s time to get laundry done.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-balance">
              We’re proud to be part of the Raleigh community. Our team takes pride in maintaining a clean laundromat and offering friendly, professional service to every customer who visits.
              </p>
            </div>
            <div>
              <img
                src="/images/the-maytag-standard.jpg"
                alt="Clean, modern laundromat with Maytag equipment"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('about.values.title')}</h2>
            <p className="text-lg sm:text-xl font-semibold text-black max-w-2xl mx-auto mb-4">
              {t('about.values.subtitle')}
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-balance">
              {t('about.values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.Icon;
              return (
                <Card key={index} hover>
                  <CardContent className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bfb3]/10 rounded-full mb-4">
                      <IconComponent className="w-10 h-10 text-[#00bfb3]" weight="regular" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{t(value.titleKey)}</h3>
                    <p className="text-gray-600">{t(value.descKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey - Two-column section
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-balance">
                Maytag Coin Laundry Raleigh was founded in 2010 with a simple mission: to provide the Raleigh community with a clean, modern, and welcoming place to do laundry. What started as a small neighborhood laundromat has grown into a full-service facility trusted by thousands of customers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be locally owned and operated, serving families, students, professionals, and businesses throughout Raleigh and the surrounding areas. Our commitment to excellence has made us a cornerstone of the community.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team and community"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Equipment Section - 2-column layout */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Where Service Meets Innovation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We exclusively use commercial-grade Maytag equipment, known for reliability and superior cleaning performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card image={{ src: '/images/01-washer.jpg', alt: 'High-efficiency Maytag washers', objectPosition: 'top' }}>
              <CardContent>
                <div className="mb-3 flex size-8 items-center justify-center text-[#00bfb3]">
                  <DropIcon size={32} weight="duotone" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">Smart Laundry Experience</h3>
                <p className="text-sm leading-relaxed text-[#363d4f]">
                  Simple digital payments, easy ordering, and a seamless system that makes doing laundry faster and more convenient every visit.
                </p>
              </CardContent>
            </Card>

            <Card image={{ src: '/images/dryers.jpg', alt: 'Commercial Maytag dryers' }}>
              <CardContent>
                <div className="mb-3 flex size-8 items-center justify-center text-[#00bfb3]">
                  <SunHorizonIcon size={32} weight="duotone" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">Powered by Our Community</h3>
                <p className="text-sm leading-relaxed text-[#363d4f]">
                  Our team comes from our community, creating a welcoming space where neighbors support neighbors and loyalty rewards give back.
                </p>
              </CardContent>
            </Card>

            <Card image={{ src: '/images/maintenance.png', alt: 'Professional equipment maintenance', objectPosition: 'top' }}>
              <CardContent>
                <div className="mb-3 flex size-8 items-center justify-center text-[#00bfb3]">
                  <WrenchIcon size={32} weight="duotone" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">Care You Can See</h3>
                <p className="text-sm leading-relaxed text-[#363d4f]">
                  Hands-on oversight from the owners ensures clean facilities, well-maintained machines, and a laundry experience you can rely on.
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
            Experience the Difference
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Visit us today and discover why thousands of Raleigh residents trust us with their laundry needs.
          </p>
          <a
            href="https://www.google.com/maps?q=15+Jones+Franklin+Rd,+Raleigh,+NC+27606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white font-medium text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
          >
            Visit Our Location
          </a>
        </div>
      </section>
    </div>
  );
}
