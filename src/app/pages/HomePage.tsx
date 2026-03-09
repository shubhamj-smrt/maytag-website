import { Link } from 'react-router';
import { Star, MapPin, Clock, Phone, CircleCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const areas = [
  { nameKey: 'home.areas.raleigh', descKey: 'home.areas.raleighDesc' },
  { nameKey: 'home.areas.cary', descKey: 'home.areas.caryDesc' },
  { nameKey: 'home.areas.apex', descKey: 'home.areas.apexDesc' },
  { nameKey: 'home.areas.eastRaleigh', descKey: 'home.areas.eastRaleighDesc' },
  { nameKey: 'home.areas.westRaleigh', descKey: 'home.areas.westRaleighDesc' },
  { nameKey: 'home.areas.garner', descKey: 'home.areas.garnerDesc' },
] as const;

export function HomePage() {
  const { t } = useLanguage();

  const testimonials = [
    { rating: 5, nameKey: 'home.testimonials.1.name', textKey: 'home.testimonials.1.text', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { rating: 5, nameKey: 'home.testimonials.2.name', textKey: 'home.testimonials.2.text', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { rating: 5, nameKey: 'home.testimonials.3.name', textKey: 'home.testimonials.3.text', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { rating: 5, nameKey: 'home.testimonials.4.name', textKey: 'home.testimonials.4.text', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { rating: 5, nameKey: 'home.testimonials.5.name', textKey: 'home.testimonials.5.text', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
    { rating: 5, nameKey: 'home.testimonials.6.name', textKey: 'home.testimonials.6.text', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_kz4s7skz4s7skz4s.png-UZxfH0EeAvowjxI9IOXYERXRCQViKP.jpeg"
            alt="Maytag Coin Laundry Storefront"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay limited to left side text area */}
          <div
            className="absolute inset-y-0 left-0 w-1/2 md:w-3/5"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%)'
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px] mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors text-center"
            >
              {t('home.hero.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Self-Service Card */}
            <div className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/self-service-laundry.jpg"
                  alt="Self-Service Laundry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t('home.services.selfService.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{t('home.services.selfService.description')}</p>
                  <div className="space-y-2">
                    {[
                      'home.services.selfService.feature1',
                      'home.services.selfService.feature2',
                      'home.services.selfService.feature3',
                      'home.services.selfService.feature4',
                    ].map((key) => (
                      <div key={key} className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 flex-shrink-0 text-white fill-[#00bfb3]" />
                        <p className="text-gray-700 text-sm font-semibold">{t(key)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Wash & Fold Card */}
            <div className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/01-wash-fold-service.png"
                  alt="Wash and Fold Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t('home.services.washFold.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{t('home.services.washFold.description')}</p>
                  <div className="space-y-2">
                    {[
                      'home.services.washFold.feature1',
                      'home.services.washFold.feature2',
                      'home.services.washFold.feature3',
                      'home.services.washFold.feature4',
                    ].map((key) => (
                      <div key={key} className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 flex-shrink-0 text-white fill-[#00bfb3]" />
                        <p className="text-gray-700 text-sm font-semibold">{t(key)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Free Pickup & Delivery Card */}
            <div className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/01-wash-fold-service.png"
                  alt="Free Pickup and Delivery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t('home.services.pickupDelivery.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{t('home.services.pickupDelivery.description')}</p>
                  <div className="space-y-2">
                    {[
                      'home.services.pickupDelivery.feature1',
                      'home.services.pickupDelivery.feature2',
                      'home.services.pickupDelivery.feature3',
                      'home.services.pickupDelivery.feature4',
                    ].map((key) => (
                      <div key={key} className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 flex-shrink-0 text-white fill-[#00bfb3]" />
                        <p className="text-gray-700 text-sm font-semibold">{t(key)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('home.areas.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.areas.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-0">
            {/* Left: Areas served list + Visit location */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-black">{t('home.areas.serviceAreas')}</h3>
              <ul className="space-y-2">
                {areas.map((area) => (
                  <li key={area.nameKey} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00bfb3] flex-shrink-0" />
                    <span className="font-medium text-black">{t(area.nameKey)}</span>
                    <span className="text-gray-500">—</span>
                    <span className="text-gray-600">{t(area.descKey)}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#00bfb3]/10 border border-[#00bfb3]/20 rounded-xl p-6 mt-auto">
                <h4 className="font-semibold text-black mb-2">{t('home.areas.visitLocation')}</h4>
                <p className="text-gray-700 mb-1">{t('home.areas.businessName')}</p>
                <p className="text-gray-600 text-sm">{t('home.areas.servingSince')}</p>
                <p className="text-gray-600 text-sm mt-2">{t('home.areas.phone')}: (252) 308-3052</p>
              </div>
            </div>

            {/* Right: Laundromat image */}
            <div className="w-full min-w-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3] min-h-[280px] lg:min-h-[360px]">
              <img
                src="/images/storefront-areas.png"
                alt="Maytag Coin Laundry Storefront"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Have More Questions Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">{t('home.questions.title')}</h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t('home.questions.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Find Us */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-black" />
                  <h4 className="font-bold text-black text-lg">{t('home.questions.findUs')}</h4>
                </div>
                <p className="text-gray-600">{t('home.questions.address')}</p>
              </div>

              {/* When We're Open */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-black" />
                  <h4 className="font-bold text-black text-lg">{t('home.questions.whenOpen')}</h4>
                </div>
                <p className="text-gray-600">{t('home.questions.hours')}</p>
              </div>

              {/* Get in Touch */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-black" />
                  <h4 className="font-bold text-black text-lg">{t('home.questions.getInTouch')}</h4>
                </div>
                <p className="text-gray-600">{t('home.questions.email')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
        </div>

        {/* Ticker Animation Container */}
        <div className="relative">
          <div className="flex animate-ticker">
            {/* First set of testimonials */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] mx-4 bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={t(testimonial.nameKey)}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-black">{t(testimonial.nameKey)}</p>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00bfb3] text-[#00bfb3]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{t(testimonial.textKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-ticker {
            animation: ticker 30s linear infinite;
          }
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
