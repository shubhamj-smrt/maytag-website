import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../context/LanguageContext';
import { GlowFlicker } from './GlowFlicker';
import confettiAnimation from '../../imports/Confetti Effects Lottie Animation.json';

interface CTAFormSuccessScreenProps {
  fadingOut?: boolean;
  onFadeOutComplete?: () => void;
}

export function CTAFormSuccessScreen({ fadingOut = false, onFadeOutComplete }: CTAFormSuccessScreenProps) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === 'opacity' && fadingOut && onFadeOutComplete) {
      onFadeOutComplete();
    }
  };

  return (
    <div
      className={`relative overflow-visible transition-opacity duration-300 ${
        fadingOut ? 'opacity-0' : visible ? 'opacity-100' : 'opacity-0'
      }`}
      onTransitionEnd={handleTransitionEnd}
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
      <p className="relative z-10 text-sm text-gray-500 text-balance">{t('ctaForm.revertingToForm')}</p>
    </div>
    </div>
  );
}
