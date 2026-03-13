import { Check } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent } from '../components/Card';
import { useLanguage } from '../context/LanguageContext';

export function PricingPage() {
  const { t } = useLanguage();

  const washerPricing = [
    { sizeKey: 'pricing.washer.regular', price: '$3.00', duration: '30 min' },
    { sizeKey: 'pricing.washer.large', price: '$5.00', duration: '35 min' },
    { sizeKey: 'pricing.washer.xl', price: '$7.00', duration: '40 min' },
    { sizeKey: 'pricing.washer.super', price: '$9.00', duration: '45 min' },
  ];

  const dryerPricing = [
    { descKey: 'pricing.per10min', price: '$0.25' },
    { descKey: 'pricing.avgCycle', price: '$1.00 - $2.00' },
  ];

  const washFoldPackages = [
    { nameKey: 'pricing.basic', price: '$1.50', unitKey: 'pricing.perLb', descKey: 'pricing.basic.desc', featureKeys: ['pricing.basic.feature1', 'pricing.basic.feature2', 'pricing.basic.feature3', 'pricing.basic.feature4'], highlighted: false },
    { nameKey: 'pricing.premium', price: '$2.00', unitKey: 'pricing.perLb', descKey: 'pricing.premium.desc', featureKeys: ['pricing.premium.feature1', 'pricing.premium.feature2', 'pricing.premium.feature3', 'pricing.premium.feature4', 'pricing.premium.feature5', 'pricing.premium.feature6'], highlighted: true },
    { nameKey: 'pricing.commercial', price: 'Custom', unitKey: 'pricing.customPricing', descKey: 'pricing.commercial.desc', featureKeys: ['pricing.commercial.feature1', 'pricing.commercial.feature2', 'pricing.commercial.feature3', 'pricing.commercial.feature4', 'pricing.commercial.feature5'], highlighted: false },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_kz4s7skz4s7skz4s.png-UZxfH0EeAvowjxI9IOXYERXRCQViKP.jpeg"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t('pricing.hero.title')}</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              {t('pricing.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Self-Service Pricing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('pricing.selfService.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('pricing.selfService.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-50">
              <CardContent padding="lg">
                <h3 className="text-2xl font-bold text-black mb-6">{t('pricing.washers')}</h3>
              <div className="space-y-4">
                {washerPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 hover:border-[#00bfb3] transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-black">{t(item.sizeKey)}</p>
                      <p className="text-sm text-gray-600">{t('pricing.cycleTime')}: {item.duration}</p>
                    </div>
                    <div className="text-2xl font-bold text-[#00bfb3]">{item.price}</div>
                  </div>
                ))}
              </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent padding="lg">
                <h3 className="text-2xl font-bold text-black mb-6">{t('pricing.dryers')}</h3>
              <div className="space-y-4">
                {dryerPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 hover:border-[#00bfb3] transition-colors"
                  >
                    <p className="font-semibold text-black">{t(item.descKey)}</p>
                    <div className="text-2xl font-bold text-[#00bfb3]">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#00bfb3] bg-opacity-10 rounded">
                <p className="text-sm text-gray-700">
                  <strong>{t('pricing.proTip')}</strong> {t('pricing.proTipText')}
                </p>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wash & Fold Packages */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('pricing.washFold.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('pricing.washFold.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {washFoldPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-lg border-2 transition-all ${
                  pkg.highlighted
                    ? 'border-[#00bfb3] shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#00bfb3] hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00bfb3] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{t(pkg.nameKey)}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{t(pkg.unitKey)}</span>
                </div>
                <p className="text-gray-600 mb-6">{t(pkg.descKey)}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.featureKeys.map((key, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00bfb3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded transition-colors ${
                    pkg.highlighted
                      ? 'bg-[#00bfb3] text-white hover:bg-[#00a89d]'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {pkg.price === 'Custom' ? t('pricing.contactUs') : t('pricing.getStarted')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t('pricing.additionalServices')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">{t('pricing.detergent')}</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$1.50</p>
                <p className="text-sm text-gray-600">{t('pricing.detergentDesc')}</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">{t('pricing.fabricSoftener')}</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$1.00</p>
                <p className="text-sm text-gray-600">{t('pricing.fabricSoftenerDesc')}</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">{t('pricing.stainRemover')}</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$2.00</p>
                <p className="text-sm text-gray-600">{t('pricing.stainRemoverDesc')}</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">{t('pricing.garmentBags')}</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$3.00</p>
                <p className="text-sm text-gray-600">{t('pricing.garmentBagsDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            {t('pricing.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
            >
              {t('pricing.cta.visitUs')}
            </Link>
            <a
              href="tel:9842059506"
              className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
            >
              {t('pricing.cta.callUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
