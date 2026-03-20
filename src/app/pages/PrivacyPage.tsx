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
          <p><strong>Effective Date:</strong> March 2026</p><br />

          <p>
            Maytag Laundromat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (
            <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a>
            ) or use our services, including in-store laundry, wash &amp; fold, pickup and delivery, and subscription services in Raleigh, North Carolina.
          </p>

          <p>
            By using our services, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Billing and payment information</li>
            <li>Pickup and delivery addresses</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Service Information</h3>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Laundry preferences and instructions</li>
            <li>Order history</li>
            <li>Subscription details</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Automatically Collected Information</h3>
          <p>When you visit our website, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited and usage data</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Provide and manage laundry services</li>
            <li>Process payments and subscriptions</li>
            <li>Schedule pickups and deliveries</li>
            <li>Communicate with you about your orders or account</li>
            <li>Improve our services and customer experience</li>
            <li>Send promotional offers (you may opt out at any time)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
          <p>We do not sell your personal information.</p>
          <p className="mt-4">We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Payment processors to securely handle transactions</li>
            <li>Delivery personnel to complete pickup and delivery services</li>
            <li>Service providers that help operate our website or business</li>
          </ul>
          <p>All third parties are required to maintain the confidentiality of your information.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Retention</h2>
          <p>We retain your information only as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Provide services</li>
            <li>Maintain business records</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Choices and Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Access or update your personal information</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">7. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Enhance user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">8. Children&apos;s Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">9. Local Compliance (North Carolina &amp; U.S. Laws)</h2>
          <p>
            As a business operating in Raleigh, North Carolina, we comply with applicable U.S. privacy laws. While North Carolina does not currently have a comprehensive consumer privacy law, we follow best practices to protect your personal information and honor applicable consumer rights.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <p className="my-4">
            <strong>Maytag Laundromat</strong><br />
            Raleigh, North Carolina<br />
            Website: <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a><br />
            Phone: <a href="tel:9842059506" className="text-[#00bfb3] hover:underline">(984) 205-9506</a>
          </p>

          <p className="mt-8 pt-6 border-t border-gray-200">
            By using our services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
