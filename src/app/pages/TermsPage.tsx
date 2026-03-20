import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
          {t('terms.title')}
        </h1>
        <div className="prose prose-gray max-w-none">
          <p><strong>{t('terms.effectiveDate')}</strong> {t('terms.effectiveDateValue')}</p>

          <p>
            {t('terms.welcomePrefix')}
            <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a>
            {t('terms.welcomeSuffix')}
          </p>

          <p>{t('terms.agree')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s1.title')}</h2>
          <p>{t('terms.s1.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s1.item1')}</li>
            <li>{t('terms.s1.item2')}</li>
            <li>{t('terms.s1.item3')}</li>
            <li>{t('terms.s1.item4')}</li>
            <li>{t('terms.s1.item5')}</li>
          </ul>
          <p>{t('terms.s1.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s2.title')}</h2>
          <p>{t('terms.s2.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s2.item1')}</li>
            <li>{t('terms.s2.item2')}</li>
            <li>{t('terms.s2.item3')}</li>
            <li>{t('terms.s2.item4')}</li>
            <li>{t('terms.s2.item5')}</li>
          </ul>
          <p>{t('terms.s2.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s3.title')}</h2>
          <p>{t('terms.s3.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s3.item1')}</li>
            <li>{t('terms.s3.item2')}</li>
            <li>{t('terms.s3.item3')}</li>
            <li>{t('terms.s3.item4')}</li>
          </ul>
          <p>{t('terms.s3.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s4.title')}</h2>
          <p>{t('terms.s4.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s4.item1')}</li>
            <li>{t('terms.s4.item2')}</li>
            <li>{t('terms.s4.item3')}</li>
          </ul>
          <p>{t('terms.s4.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s5.title')}</h2>
          <p>{t('terms.s5.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s5.item1')}</li>
            <li>{t('terms.s5.item2')}</li>
            <li>{t('terms.s5.item3')}</li>
          </ul>
          <p>{t('terms.s5.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s6.title')}</h2>
          <p>{t('terms.s6.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s6.item1')}</li>
            <li>{t('terms.s6.item2')}</li>
            <li>{t('terms.s6.item3')}</li>
            <li>{t('terms.s6.item4')}</li>
          </ul>
          <p>{t('terms.s6.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s7.title')}</h2>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s7.item1')}</li>
            <li>{t('terms.s7.item2')}</li>
            <li>{t('terms.s7.item3')}</li>
          </ul>
          <p>{t('terms.s7.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s8.title')}</h2>
          <p>{t('terms.s8.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s8.item1')}</li>
            <li>{t('terms.s8.item2')}</li>
            <li>{t('terms.s8.item3')}</li>
          </ul>
          <p>{t('terms.s8.notResponsible')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s8.item4')}</li>
            <li>{t('terms.s8.item5')}</li>
            <li>{t('terms.s8.item6')}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s9.title')}</h2>
          <p>{t('terms.s9.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s10.title')}</h2>
          <p>{t('terms.s10.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s10.item1')}</li>
            <li>{t('terms.s10.item2')}</li>
            <li>{t('terms.s10.item3')}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s11.title')}</h2>
          <p>{t('terms.s11.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s11.item1')}</li>
            <li>{t('terms.s11.item2')}</li>
            <li>{t('terms.s11.item3')}</li>
          </ul>
          <p>{t('terms.s11.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s12.title')}</h2>
          <p>{t('terms.s12.intro')}</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>{t('terms.s12.item1')}</li>
            <li>{t('terms.s12.item2')}</li>
            <li>{t('terms.s12.item3')}</li>
          </ul>
          <p>{t('terms.s12.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s13.title')}</h2>
          <p>
            {t('terms.s13.prefix')}{' '}
            <Link to="/privacy" className="text-[#00bfb3] hover:underline">{t('footer.copyright.privacy')}</Link>.
            {' '}{t('terms.s13.suffix')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s14.title')}</h2>
          <p>{t('terms.s14.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s15.title')}</h2>
          <p>{t('terms.s15.closing')}</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">{t('terms.s16.title')}</h2>
          <p>{t('terms.s16.intro')}</p>
          <p className="my-4">
            <strong>{t('terms.s16.company')}</strong><br />
            {t('terms.s16.location')}<br />
            {t('terms.s16.website')} <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a><br />
            {t('terms.s16.phone')} <a href="tel:9842059506" className="text-[#00bfb3] hover:underline">(984) 205-9506</a>
          </p>

          <p className="mt-8 pt-6 border-t border-gray-200">
            {t('terms.acknowledge')}
          </p>
        </div>
      </div>
    </div>
  );
}
