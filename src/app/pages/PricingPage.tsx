import { Check } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent } from '../components/Card';

export function PricingPage() {
  const washerPricing = [
    { size: 'Regular (20 lbs)', price: '$3.00', duration: '30 min' },
    { size: 'Large (40 lbs)', price: '$5.00', duration: '35 min' },
    { size: 'Extra Large (60 lbs)', price: '$7.00', duration: '40 min' },
    { size: 'Super (80 lbs)', price: '$9.00', duration: '45 min' },
  ];

  const dryerPricing = [
    { description: 'Per 10 minutes', price: '$0.25' },
    { description: 'Average full dry cycle', price: '$1.00 - $2.00' },
  ];

  const washFoldPackages = [
    {
      name: 'Basic',
      price: '$1.50',
      unit: 'per lb',
      description: 'Perfect for regular laundry needs',
      features: [
        'Wash, dry, and fold',
        'Standard detergent included',
        'Same-day service available',
        '20 lb minimum',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$2.00',
      unit: 'per lb',
      description: 'Enhanced care for your clothes',
      features: [
        'Wash, dry, and fold',
        'Premium eco-friendly detergent',
        'Fabric softener included',
        'Same-day service available',
        'Special care for delicates',
        '15 lb minimum',
      ],
      highlighted: true,
    },
    {
      name: 'Commercial',
      price: 'Custom',
      unit: 'pricing',
      description: 'Bulk services for businesses',
      features: [
        'Volume discounts',
        'Scheduled pickup & delivery',
        'Dedicated account manager',
        'Customized service plans',
        'Priority processing',
      ],
      highlighted: false,
    },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Affordable Pricing</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              Transparent, competitive pricing with no hidden fees. Pay only for what you use with our flexible options.
            </p>
          </div>
        </div>
      </section>

      {/* Self-Service Pricing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Self-Service Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, straightforward pricing for our coin-operated machines. All machines accept coins, bills, and cards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-50">
              <CardContent padding="lg">
                <h3 className="text-2xl font-bold text-black mb-6">Washers</h3>
              <div className="space-y-4">
                {washerPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 hover:border-[#00bfb3] transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-black">{item.size}</p>
                      <p className="text-sm text-gray-600">Cycle time: {item.duration}</p>
                    </div>
                    <div className="text-2xl font-bold text-[#00bfb3]">{item.price}</div>
                  </div>
                ))}
              </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent padding="lg">
                <h3 className="text-2xl font-bold text-black mb-6">Dryers</h3>
              <div className="space-y-4">
                {dryerPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded border border-gray-200 hover:border-[#00bfb3] transition-colors"
                  >
                    <p className="font-semibold text-black">{item.description}</p>
                    <div className="text-2xl font-bold text-[#00bfb3]">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#00bfb3] bg-opacity-10 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> High-efficiency dryers typically need 30-40 minutes for a full load, costing around $1.00-$2.00 total.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Wash & Fold Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save time with our professional wash and fold service. Drop off your laundry and we'll handle the rest.
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
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00bfb3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
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
                  {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Additional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">Detergent</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$1.50</p>
                <p className="text-sm text-gray-600">Single-use pods available</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">Fabric Softener</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$1.00</p>
                <p className="text-sm text-gray-600">Dryer sheets also available</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">Stain Remover</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$2.00</p>
                <p className="text-sm text-gray-600">Professional grade treatment</p>
              </CardContent>
            </Card>
            <Card hover className="bg-gray-50">
              <CardContent>
                <h4 className="font-semibold text-black mb-2">Garment Bags</h4>
                <p className="text-2xl font-bold text-[#00bfb3] mb-2">$3.00</p>
                <p className="text-sm text-gray-600">Reusable mesh bags</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Visit us today or contact us to learn more about our services and pricing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
            >
              Visit Us Today
            </Link>
            <a
              href="tel:2523083052"
              className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
            >
              Call for Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
