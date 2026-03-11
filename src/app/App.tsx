import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { LocationSEO } from './components/LocationSEO';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* Core pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />

              {/* Location pages — reuse existing pages with location SEO */}
              <Route path="/laundromat-in/:locationSlug" element={<LocationSEO page="home"><HomePage /></LocationSEO>} />
              <Route path="/services-in/:locationSlug" element={<LocationSEO page="services"><ServicesPage /></LocationSEO>} />
              <Route path="/pricing-in/:locationSlug" element={<LocationSEO page="pricing"><PricingPage /></LocationSEO>} />
              <Route path="/about-in/:locationSlug" element={<LocationSEO page="about"><AboutPage /></LocationSEO>} />
              <Route path="/contact-in/:locationSlug" element={<LocationSEO page="contact"><ContactPage /></LocationSEO>} />
              <Route path="/testimonials-in/:locationSlug" element={<LocationSEO page="testimonials"><TestimonialsPage /></LocationSEO>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
