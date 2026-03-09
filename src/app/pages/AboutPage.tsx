import { Users, Award, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We go above and beyond to ensure every visit exceeds your expectations.',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Quality Guaranteed',
      description: 'We maintain the highest standards in equipment maintenance and facility cleanliness for the best results.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Professional Service',
      description: 'Our experienced staff provides knowledgeable assistance and ensures a smooth laundry experience.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community Focused',
      description: 'As a local business, we\'re committed to serving and supporting the Raleigh community.',
    },
  ];

  const timeline = [
    { year: '2010', event: 'Opened our doors to serve the Raleigh community' },
    { year: '2013', event: 'Expanded facility and added premium washers' },
    { year: '2016', event: 'Introduced wash & fold service' },
    { year: '2019', event: 'Complete facility renovation and equipment upgrade' },
    { year: '2022', event: 'Added commercial services for local businesses' },
    { year: '2026', event: 'Celebrating 16 years of service excellence' },
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
          <div
            className="absolute inset-y-0 left-0 w-1/2 md:w-3/5"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%)'
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">About Us</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              For over 15 years, we've been Raleigh's trusted choice for quality laundry services and exceptional customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - commented out
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Maytag Coin Laundry Raleigh was founded in 2010 with a simple mission: to provide the Raleigh community with a clean, modern, and welcoming place to do laundry. What started as a small neighborhood laundromat has grown into a full-service facility trusted by thousands of customers.
                </p>
                <p>
                  We understand that doing laundry is a necessity, but that doesn't mean it has to be a chore. That's why we've invested in the best equipment, maintained the highest standards of cleanliness, and created a comfortable environment where you can get your laundry done efficiently.
                </p>
                <p>
                  Over the years, we've continuously improved our services based on customer feedback, adding wash and fold services, commercial options, and modern amenities like free WiFi and comfortable seating areas. Our commitment to excellence has made us a cornerstone of the community.
                </p>
                <p>
                  Today, we're proud to be locally owned and operated, serving families, students, professionals, and businesses throughout Raleigh and the surrounding areas.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764120656278-994739787d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvbGRlZCUyMGxhdW5kcnl8ZW58MXx8fHwxNzcyNzM2NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clean Folded Laundry"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00bfb3] hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                  <div className="text-[#00bfb3]">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming Raleigh's premier coin laundry, here are the milestones that shaped our story.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#00bfb3] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-xl font-bold text-black mb-1">{item.year}</div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">State-of-the-Art Equipment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We exclusively use commercial-grade Maytag equipment, known for reliability and superior cleaning performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">High-Efficiency Washers</h3>
              <p className="text-gray-600 mb-4">
                Our Maytag washers use less water and energy while delivering exceptional cleaning power. Multiple sizes available for any load.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Advanced cleaning cycles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Energy-efficient operation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Gentle on fabrics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Commercial Dryers</h3>
              <p className="text-gray-600 mb-4">
                Large-capacity dryers with precise temperature control ensure your clothes dry quickly and evenly without damage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Multiple heat settings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Sensor dry technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Reduced drying time</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Regular Maintenance</h3>
              <p className="text-gray-600 mb-4">
                All equipment is professionally maintained on a strict schedule to ensure optimal performance and reliability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Daily cleaning protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Professional servicing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full"></div>
                  <span>Immediate repairs</span>
                </li>
              </ul>
            </div>
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
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
          >
            Visit Our Location
          </a>
        </div>
      </section>
    </div>
  );
}
