import { Shirt, Wind, Droplet, Package } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    { icon: <Shirt className="w-12 h-12" />, titleKey: 'services.selfWash.title', descKey: 'services.selfWash.description', featureKeys: ['services.selfWash.feature1', 'services.selfWash.feature2', 'services.selfWash.feature3', 'services.selfWash.feature4'] },
    { icon: <Wind className="w-12 h-12" />, titleKey: 'services.selfDry.title', descKey: 'services.selfDry.description', featureKeys: ['services.selfDry.feature1', 'services.selfDry.feature2', 'services.selfDry.feature3', 'services.selfDry.feature4'] },
    { icon: <Droplet className="w-12 h-12" />, titleKey: 'services.washFold.title', descKey: 'services.washFold.description', featureKeys: ['services.washFold.feature1', 'services.washFold.feature2', 'services.washFold.feature3', 'services.washFold.feature4'] },
    { icon: <Package className="w-12 h-12" />, titleKey: 'services.commercial.title', descKey: 'services.commercial.description', featureKeys: ['services.commercial.feature1', 'services.commercial.feature2', 'services.commercial.feature3', 'services.commercial.feature4'] },
  ];

  const amenityKeys = ['services.amenities.wifi', 'services.amenities.seating', 'services.amenities.vending', 'services.amenities.folding', 'services.amenities.atm', 'services.amenities.security', 'services.amenities.parking', 'services.amenities.attendant'];

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

      {/* Services Grid */}
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

      {/* Image Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766698664091-69e5d1c8fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwc2VydmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2NDQwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t('common.imageAlt.laundromat')}
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                {t('services.amenities.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('services.amenities.subtitle')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenityKeys.map((key, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#00bfb3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9842059506"
              className="bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors"
            >
              {t('services.cta.callUs')}
            </a>
            <a
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
            >
              {t('services.cta.visitUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
