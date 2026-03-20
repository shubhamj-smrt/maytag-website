import { useLanguage } from '../context/LanguageContext';

export function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
          {t('privacy.title')}
        </h1>
        <div className="prose prose-gray max-w-none">
          <p><strong>{t('privacy.effectiveDate')}</strong> {t('privacy.effectiveDateValue')}</p>

          <p>
            {t('privacy.introPrefix')}
            <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a>
            {t('privacy.introSuffix')}
          </p>

          <p>{t('privacy.agree')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s1.title')}</h2>
          <p>{t('privacy.s1.intro')}</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">{t('privacy.s1.personal')}</h3>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s1.personal1')}</li>
            <li>{t('privacy.s1.personal2')}</li>
            <li>{t('privacy.s1.personal3')}</li>
            <li>{t('privacy.s1.personal4')}</li>
            <li>{t('privacy.s1.personal5')}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">{t('privacy.s1.service')}</h3>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s1.service1')}</li>
            <li>{t('privacy.s1.service2')}</li>
            <li>{t('privacy.s1.service3')}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">{t('privacy.s1.auto')}</h3>
          <p>{t('privacy.s1.autoIntro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s1.auto1')}</li>
            <li>{t('privacy.s1.auto2')}</li>
            <li>{t('privacy.s1.auto3')}</li>
            <li>{t('privacy.s1.auto4')}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s2.title')}</h2>
          <p>{t('privacy.s2.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s2.item1')}</li>
            <li>{t('privacy.s2.item2')}</li>
            <li>{t('privacy.s2.item3')}</li>
            <li>{t('privacy.s2.item4')}</li>
            <li>{t('privacy.s2.item5')}</li>
            <li>{t('privacy.s2.item6')}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s3.title')}</h2>
          <p>{t('privacy.s3.noSell')}</p>
          <p className="mt-4">{t('privacy.s3.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s3.item1')}</li>
            <li>{t('privacy.s3.item2')}</li>
            <li>{t('privacy.s3.item3')}</li>
          </ul>
          <p>{t('privacy.s3.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s4.title')}</h2>
          <p>{t('privacy.s4.content')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s5.title')}</h2>
          <p>{t('privacy.s5.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s5.item1')}</li>
            <li>{t('privacy.s5.item2')}</li>
            <li>{t('privacy.s5.item3')}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s6.title')}</h2>
          <p>{t('privacy.s6.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s6.item1')}</li>
            <li>{t('privacy.s6.item2')}</li>
            <li>{t('privacy.s6.item3')}</li>
          </ul>
          <p>{t('privacy.s6.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s7.title')}</h2>
          <p>{t('privacy.s7.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('privacy.s7.item1')}</li>
            <li>{t('privacy.s7.item2')}</li>
            <li>{t('privacy.s7.item3')}</li>
          </ul>
          <p>{t('privacy.s7.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s8.title')}</h2>
          <p>{t('privacy.s8.content')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s9.title')}</h2>
          <p>{t('privacy.s9.content')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s10.title')}</h2>
          <p>{t('privacy.s10.content')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('privacy.s11.title')}</h2>
          <p>{t('privacy.s11.intro')}</p>
          <p className="my-4">
            <strong>{t('privacy.s11.company')}</strong><br />
            {t('privacy.s11.location')}<br />
            {t('privacy.s11.website')} <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a><br />
            {t('privacy.s11.phone')} <a href="tel:9842059506" className="text-[#00bfb3] hover:underline">(984) 205-9506</a>
          </p>

          <p className="mt-8 pt-6 border-t border-gray-200">
            {t('privacy.acknowledge')}
          </p>
        </div>
      </div>
    </div>
  );
}
