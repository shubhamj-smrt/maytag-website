import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/Card';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Kenneth',
      text: "This place is by far one of the best laundromats I've ever been. Very clean and very helpful. Me and my wife did clothes late, the owner waited til our clothes were done. I highly recommended you coming here.",
      rating: 5,
    },
    {
      name: 'Teri',
      text: "Nice and clean Laundromat. The machines all worked and they were clean inside and out. The place is roomy enough to sit down and rest while your clothes are getting clean. This will be the place I do laundry all the time.",
      rating: 5,
    },
    {
      name: 'Amanda',
      text: "My boyfriend and I love this laundry mat. We come here faithfully. We enjoy the relaxing clean quiet atmosphere.",
      rating: 5,
    },
    {
      name: 'Lorrie',
      text: "Great place to do your laundry. I have been twice it's clean. ALL washers and dryers are in working order. Free wifi and lots of magazines to read. Bring a book if not. Tables to sit at. Very nice.",
      rating: 5,
    },
    {
      name: 'Kasey',
      text: "This place is very nice, clean and has a drink machine. There is usually someone there in the next office able to help if you need it. Machines work well.",
      rating: 5,
    },
    {
      name: 'Jerome',
      text: "It was very clean. All equipment was very well maintained.",
      rating: 5,
    },
    {
      name: 'Mooka Moo',
      text: "I'm glad I went it's Great!",
      rating: 5,
    },
    {
      name: 'Local Customer',
      text: "Machines are clean, huge and fairly priced. Machines work great and dryers get hot!",
      rating: 5,
    },
    {
      name: 'Recent Visitor',
      text: "Friendly staff and there is always a person cleaning the vents to ensure machines remain operational. Great attention to maintenance.",
      rating: 5,
    },
  ];

  const stats = [
    { value: '30+', label: 'Years of Service' },
    { value: '4.8', label: 'Average Rating' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '100%', label: 'Machines Working' },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Customer Testimonials</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-[450px]">
              See what our customers have to say about their experience at Maytag Coin Laundry. Serving Raleigh since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#00bfb3] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-[#00bfb3] rounded-lg p-8 sm:p-12 text-white relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-16 h-16 text-white opacity-20" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl mb-6 leading-relaxed">
                "This place is by far one of the best laundromats I've ever been. Very clean and very helpful. Me and my wife did clothes late, the owner waited til our clothes were done. I highly recommended you coming here."
              </blockquote>
              <div className="font-semibold text-lg">- Kenneth</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers who trust us with their laundry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover>
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00bfb3] rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Customers Love Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the top reasons our customers keep coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Always Clean', description: 'Spotless facility and machines maintained daily' },
              { title: 'Working Equipment', description: 'All washers and dryers always operational' },
              { title: 'Friendly Staff', description: 'Helpful team ready to assist whenever needed' },
              { title: 'Great Value', description: 'Fair prices for quality laundry services' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#00bfb3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#00bfb3]" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Maytag Coin Laundry for all their laundry needs.
          </p>
          <a
            href="https://www.yelp.com/biz/maytag-coin-laundry-of-raleigh-raleigh-3?dd_referrer=https%3A%2F%2Fwww.google.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            Visit Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
