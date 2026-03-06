import { useState } from 'react';
import { Link } from 'react-router';
import { WashingMachine, Shirt, Star, MapPin, Clock, Mail, Check, CircleCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

type AreaKey = 'raleigh' | 'cary' | 'apex' | 'eastRaleigh' | 'westRaleigh' | 'garner';

const areaMapUrls: Record<AreaKey, string> = {
  raleigh: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103723.33554974873!2d-78.7382!3d35.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  cary: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51861.66777487437!2d-78.8197!3d35.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3a5e8f9e4e7%3A0x7a8a8a8a8a8a8a8a!2sCary%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  apex: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51861.66777487437!2d-78.8528!3d35.7327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf5a5e8f9e4e7%3A0x7a8a8a8a8a8a8a8a!2sApex%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  eastRaleigh: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51861.66777487437!2d-78.5786!3d35.7796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sEast%20Raleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  westRaleigh: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51861.66777487437!2d-78.7586!3d35.7896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3a5e8f9e4e7%3A0x7a8a8a8a8a8a8a8a!2sWest%20Raleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  garner: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51861.66777487437!2d-78.6142!3d35.7113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5e5e5e5e5e5e%3A0x7a8a8a8a8a8a8a8a!2sGarner%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
};

export function HomePage() {
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<AreaKey>('raleigh');

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Self-Service Card */}
            <div className="flex flex-row h-fit bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="w-full h-full">
                <img
                  src="/images/self-service-laundry.jpg"
                  alt="Self-Service Laundry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full p-6 bg-gray-50 h-auto flex flex-col justify-between">
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
            <div className="flex flex-row h-auto bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="w-full h-full">
                <img
                  src="/images/01-wash-fold-service.png"
                  alt="Wash and Fold Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full p-6 bg-gray-50 h-auto flex flex-col justify-between">
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

          {/* Storefront Image */}
          <div className="flex justify-center mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/storefront-areas.png"
                alt="Maytag Coin Laundry Storefront"
                className="w-[700px] h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">{t('home.areas.serviceAreas')}</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { key: 'raleigh' as AreaKey, nameKey: 'home.areas.raleigh', descKey: 'home.areas.raleighDesc' },
                  { key: 'cary' as AreaKey, nameKey: 'home.areas.cary', descKey: 'home.areas.caryDesc' },
                  { key: 'apex' as AreaKey, nameKey: 'home.areas.apex', descKey: 'home.areas.apexDesc' },
                  { key: 'eastRaleigh' as AreaKey, nameKey: 'home.areas.eastRaleigh', descKey: 'home.areas.eastRaleighDesc' },
                  { key: 'westRaleigh' as AreaKey, nameKey: 'home.areas.westRaleigh', descKey: 'home.areas.westRaleighDesc' },
                  { key: 'garner' as AreaKey, nameKey: 'home.areas.garner', descKey: 'home.areas.garnerDesc' },
                ].map((area) => (
                  <button
                    key={area.key}
                    onClick={() => setSelectedArea(area.key)}
                    className={`flex items-start gap-3 p-4 bg-white rounded-lg border text-left transition-all cursor-pointer ${selectedArea === area.key
                      ? 'border-[#00bfb3] shadow-md ring-2 ring-[#00bfb3]/20'
                      : 'border-gray-200 hover:border-[#00bfb3] hover:shadow-md'
                      }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selectedArea === area.key ? 'bg-[#00bfb3]' : 'bg-gray-300'
                      }`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`font-semibold ${selectedArea === area.key ? 'text-[#00bfb3]' : 'text-black'}`}>{t(area.nameKey)}</p>
                      <p className="text-sm text-gray-600">{t(area.descKey)}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="bg-[#00bfb3]/10 border border-[#00bfb3]/20 rounded-lg p-6">
                <h4 className="font-semibold text-black mb-2">{t('home.areas.visitLocation')}</h4>
                <p className="text-gray-700 mb-1">{t('home.areas.businessName')}</p>
                <p className="text-gray-600 text-sm">{t('home.areas.servingSince')}</p>
                <p className="text-gray-600 text-sm mt-2">{t('home.areas.phone')}: (919) 851-6770</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  key={selectedArea}
                  src={areaMapUrls[selectedArea]}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedArea}`}
                  className="w-full"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                {t('home.areas.mapHint')}
              </p>
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
                  <Mail className="w-6 h-6 text-black" />
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
