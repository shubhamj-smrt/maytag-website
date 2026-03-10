import { Shirt, Wind, Droplet, Package } from 'lucide-react';
import { Card, CardContent } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
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
    'Free WiFi throughout facility',
    'Comfortable seating areas',
    'Vending machines for snacks and drinks',
    'Folding tables and carts available',
    'ATM on-site',
    'Security cameras for your safety',
    'Well-lit parking area',
    'Attendant on duty during business hours',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/01-hero-image.png"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              From self-service options to full-service wash and fold, we offer a complete range of laundry solutions to meet your needs.
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
                  <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#00bfb3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
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
                alt="Professional Laundry Service"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Premium Amenities for Your Comfort
              </h2>
              <p className="text-gray-600 mb-6">
                We believe doing laundry should be as comfortable and convenient as possible. That's why we've equipped our facility with modern amenities to make your visit pleasant.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#00bfb3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{amenity}</span>
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
            Have Questions About Our Services?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help. Visit us or give us a call to learn more about how we can make your laundry day easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2523083052"
              className="bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
            >
              Visit Our Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
