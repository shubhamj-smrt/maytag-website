import { Link } from 'react-router';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';
import { scrollToTop } from '../../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import footerLogoSvg from '../../imports/new-logo-black.svg';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4" onClick={scrollToTop}>
              <img src={footerLogoSvg} alt="Maytag Laundry" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm text-balance mb-4">
              {t('footer.tagline')}
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61582250078677"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00bfb3] text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#00bfb3] transition-colors text-sm" onClick={scrollToTop}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#00bfb3] transition-colors text-sm" onClick={scrollToTop}>
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00bfb3] transition-colors text-sm" onClick={scrollToTop}>
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-[#00bfb3] transition-colors text-sm" onClick={scrollToTop}>
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00bfb3] transition-colors text-sm" onClick={scrollToTop}>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.businessHours')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-[#00bfb3] flex-shrink-0" />
                <a
                  href="https://www.yelp.com/biz/maytag-coin-laundry-of-raleigh-raleigh-3?dd_referrer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00bfb3] transition-colors"
                >
                  {t('footer.hours')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00bfb3] mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=15+Jones+Franklin+Rd,+Raleigh,+NC+27606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00bfb3] transition-colors"
                >
                  15 Jones Franklin Rd,<br />Raleigh, NC 27606
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#00bfb3] flex-shrink-0" />
                <a
                  href="tel:9842059506"
                  className="hover:text-[#00bfb3] transition-colors"
                >
                  (984) 205-9506
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <Link to="/" className="hover:text-[#00bfb3] transition-colors" onClick={scrollToTop}>
              {t('footer.copyright.maytag')}
            </Link>
            {' | '}
            <Link to="/terms" className="hover:text-[#00bfb3] transition-colors" onClick={scrollToTop}>
              {t('footer.copyright.terms')}
            </Link>
            {' | '}
            <Link to="/privacy" className="hover:text-[#00bfb3] transition-colors" onClick={scrollToTop}>
              {t('footer.copyright.privacy')}
            </Link>
            {' | '}{' '}{t('footer.copyright.suffix')}
          </p>
        </div>
      </div>
    </footer>
  );
}
