import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { scrollToTop } from '../../lib/utils';
import { CTAFormSuccessScreen } from '../components/CTAFormSuccessScreen';

const HOLD_DURATION_MS = 3000;

function isValidEmail(value: string): boolean {
  if (!value.trim()) return false;
  return value.includes('@') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidUSPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith('1')) return true;
  return false;
}

export function CTAFormPage() {
  const { language, setLanguage, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const errorDismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const registeredRef = useRef<Set<string>>(new Set());
  const [verified, setVerified] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getRegistrationKey = () =>
    `${formData.email.trim().toLowerCase()}|${formData.phone.replace(/\D/g, '')}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setGeneralError(null);
    setShowError(false);
    setAlreadyRegistered(false);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!emailValid || !phoneValid || !allFilled) {
      validateAllAndShowErrors();
      return;
    }

    if (!verified) {
      setGeneralError(t('ctaForm.holdInstruction'));
      setShowError(true);
      return;
    }

    const key = getRegistrationKey();
    if (registeredRef.current.has(key)) {
      setAlreadyRegistered(true);
      setVerified(false);
      return;
    }
    registeredRef.current.add(key);
    setSubmitted(true);
  };

  const clearHold = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    setHoldProgress(0);
  };

  const emailValid = isValidEmail(formData.email);
  const phoneValid = isValidUSPhone(formData.phone);
  const allFilled = Boolean(formData.name.trim() && formData.email.trim() && formData.phone.trim());

  const validateAllAndShowErrors = () => {
    if (!allFilled) {
      setGeneralError(t('ctaForm.fillFieldsFirst'));
      setErrors({});
    } else {
      setGeneralError(null);
      setErrors({
        email: !emailValid ? t('ctaForm.errorEmailInvalid') : undefined,
        phone: !phoneValid ? t('ctaForm.errorPhoneUSOnly') : undefined,
      });
    }
    setShowError(true);
    if (errorDismissRef.current) clearTimeout(errorDismissRef.current);
    errorDismissRef.current = setTimeout(() => {
      setShowError(false);
      setErrors({});
      errorDismissRef.current = null;
    }, 4000);
  };

  const startHold = (e?: React.TouchEvent) => {
    e?.preventDefault();
    if (!allFilled || verified) return;
    if (!emailValid || !phoneValid) {
      validateAllAndShowErrors();
      return;
    }
    clearHold();
    const start = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / HOLD_DURATION_MS) * 100);
      setHoldProgress(pct);
      if (pct >= 100) {
        clearHold();
        setVerified(true);
      }
    }, 50);
    holdTimerRef.current = setTimeout(() => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      holdTimerRef.current = null;
      setHoldProgress(100);
      setVerified(true);
    }, HOLD_DURATION_MS);
  };

  const cancelHold = () => {
    clearHold();
  };

  useEffect(() => {
    return () => {
      if (errorDismissRef.current) clearTimeout(errorDismissRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col bg-[#00bfb3]">
      <div className="flex justify-center px-4 py-4">
        <div
          className="flex items-center rounded-full border border-white/50 bg-white/10 p-0.5 cursor-pointer hover:bg-white/20 transition-colors"
          role="group"
          aria-label="Language selection"
        >
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
              language === 'en' ? 'bg-white text-[#00bfb3]' : 'text-white hover:text-white/90'
            }`}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('es')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
              language === 'es' ? 'bg-white text-[#00bfb3]' : 'text-white hover:text-white/90'
            }`}
            aria-pressed={language === 'es'}
          >
            ES
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8 min-h-0 overflow-visible">
        <div className="w-full max-w-md overflow-visible">
          {submitted ? (
            <CTAFormSuccessScreen />
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2 text-balance">
                {t('ctaForm.title')}
              </h1>
              <p className="text-white/90 text-center text-sm sm:text-base mb-6 text-balance">
                {t('ctaForm.subtitle')}
              </p>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-1">
                    {t('contact.form.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 border rounded focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#00bfb3]'
                    }`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-1">
                    {t('contact.form.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 border rounded focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#00bfb3]'
                    }`}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div className="min-h-[44px] flex items-start">
                  {alreadyRegistered ? (
                    <p className="text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full text-left">
                      {t('ctaForm.alreadyRegistered')}
                    </p>
                  ) : generalError ? (
                    <p
                      className={`text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 w-full text-left transition-opacity duration-300 ${
                        showError ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {generalError}
                    </p>
                  ) : !allFilled ? (
                    <p
                      className={`text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 w-full text-left transition-opacity duration-300 ${
                        showError ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {generalError || t('ctaForm.fillFieldsFirst')}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm text-black mb-2">{t('ctaForm.holdInstruction')}</p>
                {verified ? (
                  <div className="w-full px-3 py-3 rounded border-2 border-[#00bfb3] bg-[#00bfb3]/15 text-[#00a89d] font-medium transition-all duration-300 ease-out flex items-start justify-start">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-[#00bfb3] font-bold">✓</span>
                      {t('ctaForm.verifiedMessage')}
                    </span>
                  </div>
                ) : allFilled ? (
                  <button
                    type="button"
                    onMouseDown={() => startHold()}
                    onMouseUp={cancelHold}
                    onMouseLeave={cancelHold}
                    onTouchStart={(e) => startHold(e)}
                    onTouchEnd={cancelHold}
                    onTouchCancel={cancelHold}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full px-8 py-3 rounded font-semibold relative overflow-hidden transition-colors duration-300 ease-out bg-[#00bfb3]/30 text-gray-800 cursor-pointer flex items-center justify-center text-center"
                  >
                    <span
                      className="absolute inset-y-0 left-0 bg-[#00bfb3] transition-[width] duration-100 ease-linear"
                      style={{ width: `${holdProgress}%` }}
                    />
                    <span className="relative z-10">{t('ctaForm.holdToVerify')}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={validateAllAndShowErrors}
                    className="w-full px-8 py-3 rounded font-semibold bg-[#00bfb3]/15 text-gray-500 cursor-not-allowed text-center"
                  >
                    {t('ctaForm.holdToVerify')}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!verified || submitting}
                  className="w-full bg-black text-white px-8 py-3 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-out font-semibold mt-2 cursor-pointer"
                >
                  {submitting ? 'Sending...' : t('ctaForm.submit')}
                </button>
              </form>
              <p className="text-center mt-6">
                <Link
                  to="/"
                  className="text-white underline hover:text-white/90 transition-colors"
                  onClick={scrollToTop}
                >
                  {t('ctaForm.backToWebsite')}
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
