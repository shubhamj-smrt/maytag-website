import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-[#00bfb3]" />
              </div>
              <h3 className="font-semibold text-black mb-2">Address</h3>
              <p className="text-gray-600 text-sm">123 Main Street<br />Raleigh, NC 27601</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                <Phone className="w-6 h-6 text-[#00bfb3]" />
              </div>
              <h3 className="font-semibold text-black mb-2">Phone</h3>
              <a href="tel:9198516670" className="text-gray-600 text-sm hover:text-[#00bfb3] transition-colors">
                (919) 851-6670
              </a>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#00bfb3] hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bfb3] bg-opacity-10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[#00bfb3]" />
              </div>
              <h3 className="font-semibold text-black mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Sun: 5AM-11PM</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder="(919) 851-6670"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Question</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Visit Our Location</h2>
              
              {/* Mock Map */}
              <div className="bg-gray-200 rounded-lg mb-6 h-[300px] flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#00bfb3] mx-auto mb-2" />
                  <p className="text-gray-600">15 Jones Franklin Rd, Raleigh, NC 27606</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h3 className="font-semibold text-black mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Sunday</span>
                    <span className="text-black font-semibold">5:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-black mb-4">Parking Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>Free parking available in front of facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>Well-lit parking area for your safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>Easy loading and unloading access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00bfb3] rounded-full mt-2"></div>
                    <span>Handicap accessible spaces available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-2">Do I need to bring my own detergent?</h3>
              <p className="text-gray-600">
                While you're welcome to bring your own, we offer high-quality detergent, fabric softener, and other supplies for purchase on-site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept coins, bills, credit/debit cards, and mobile payment options. An ATM is also available on-site for your convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-2">Is an attendant available to help?</h3>
              <p className="text-gray-600">
                Yes! We have attendants on duty during business hours who are happy to assist you with any questions or concerns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-2">How long does a typical wash and dry take?</h3>
              <p className="text-gray-600">
                Wash cycles typically take 30-45 minutes depending on the machine size. Drying usually takes 30-40 minutes. Plan for about 60-90 minutes total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Give us a call or stop by during business hours. We're always happy to help!
          </p>
          <a
            href="tel:9198516670"
            className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors"
          >
            Call Us: (919) 851-6670
          </a>
        </div>
      </section>
    </div>
  );
}
