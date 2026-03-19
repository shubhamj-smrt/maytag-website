import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToTop } from '../../lib/utils';
import { GlowFlicker } from './GlowFlicker';
import confettiAnimation from '../../imports/Confetti Effects Lottie Animation.json';

export function CTAFormSuccessScreen() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <div
        className={`relative overflow-visible transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GlowFlicker />
        <div className="relative z-10 overflow-hidden bg-white rounded-xl shadow-lg p-6 sm:p-8 min-h-[420px] flex flex-col justify-center text-center">
          <Lottie
            animationData={confettiAnimation}
            loop={true}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          />
          <h1 className="relative z-10 text-2xl sm:text-3xl font-bold text-black mb-4">{t('ctaForm.successTitle')}</h1>
          <p className="relative z-10 text-lg text-gray-700 mb-6 text-balance">{t('ctaForm.successMessage')}</p>
        </div>
      </div>
      <p className="text-center mt-12">
        <Link
          to="/"
          className="text-white underline hover:text-white/90 transition-colors"
          onClick={scrollToTop}
        >
          {t('ctaForm.backToWebsite')}
        </Link>
      </p>
    </>
  );
}
