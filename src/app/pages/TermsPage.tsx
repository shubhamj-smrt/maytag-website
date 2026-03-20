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
          <p><strong>Effective Date:</strong> March 2026</p><br />

          <p>
            Welcome to Maytag Laundromat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions govern your use of our laundromat facilities, website (
            <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a>
            ), and any related services including self-service laundry, wash &amp; fold, pickup and delivery, and subscription-based services.
          </p>

          <p>
            By using our services, you agree to these Terms and Conditions. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">1. Services Provided</h2>
          <p>Maytag Laundromat provides:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Self-service coin and/or card-operated laundry machines</li>
            <li>Wash &amp; fold laundry services</li>
            <li>Pickup and delivery laundry services</li>
            <li>Subscription laundry plans</li>
            <li>On-site customer assistance during business hours</li>
          </ul>
          <p>Services are available at our Raleigh, North Carolina location and surrounding service areas.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">2. Customer Responsibilities</h2>
          <p>By using our services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Ensure all items are safe for standard laundering</li>
            <li>Remove all personal belongings from pockets prior to service</li>
            <li>Follow all posted laundromat rules and machine instructions</li>
            <li>Use machines appropriately and responsibly</li>
            <li>Treat staff, other customers, and property with respect</li>
          </ul>
          <p>We are not responsible for damage caused by items left in pockets (e.g., pens, electronics, cosmetics).</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">3. Prohibited Items</h2>
          <p>The following items must not be placed in machines or submitted for service:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Flammable or hazardous materials (e.g., gasoline, oil, chemicals)</li>
            <li>Items contaminated with biohazards</li>
            <li>Pet waste or heavily soiled items without prior approval</li>
            <li>Items labeled &quot;dry clean only&quot;</li>
          </ul>
          <p>We reserve the right to refuse service for any items deemed unsafe or inappropriate.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. Wash &amp; Fold Service</h2>
          <p>For wash &amp; fold services:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Items are processed according to general laundering standards</li>
            <li>We do not guarantee separation by color or fabric unless specifically requested</li>
            <li>Special instructions must be clearly communicated at drop-off or order placement</li>
          </ul>
          <p>While we take care in handling garments, normal wear and tear may occur.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. Pickup and Delivery Services</h2>
          <p>For pickup and delivery:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Customers must provide accurate addresses and access instructions</li>
            <li>Someone must be available or a secure drop-off location must be designated</li>
            <li>We are not responsible for items lost due to incorrect delivery instructions</li>
          </ul>
          <p>Delivery windows are estimates and may vary due to traffic, weather, or operational factors.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">6. Subscription Services</h2>
          <p>If you enroll in a subscription plan:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Billing occurs on a recurring monthly basis</li>
            <li>Subscription benefits are non-transferable</li>
            <li>Unused services do not roll over unless explicitly stated</li>
            <li>Promotional offers (e.g., first month free) are subject to change or cancellation</li>
          </ul>
          <p>We reserve the right to modify or terminate subscription plans with notice.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">7. Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Payment is required at the time of service or as specified</li>
            <li>We accept various payment methods including cards and digital payments</li>
            <li>Prices are subject to change without prior notice</li>
          </ul>
          <p>Failure to complete payment may result in refusal of service or withholding of items.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">8. Lost or Damaged Items</h2>
          <p>We strive to provide high-quality service, but in the event of loss or damage:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Claims must be reported within 48 hours of service completion</li>
            <li>Compensation, if applicable, is limited to the fair market value of the item</li>
            <li>Maximum liability is capped at $100 per order unless otherwise required by North Carolina law</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Normal wear and tear</li>
            <li>Shrinkage or color bleeding</li>
            <li>Manufacturer defects</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">9. Unclaimed Laundry</h2>
          <p>Laundry not picked up within 30 days may be considered abandoned and may be donated or disposed of at our discretion.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">10. Right to Refuse Service</h2>
          <p>We reserve the right to refuse service to anyone for reasons including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Violation of these Terms</li>
            <li>Unsafe or inappropriate behavior</li>
            <li>Submission of prohibited items</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">11. Facility Use and Safety</h2>
          <p>Customers using our Raleigh location agree to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Follow all posted safety guidelines</li>
            <li>Supervise children at all times</li>
            <li>Use equipment at their own risk</li>
          </ul>
          <p>We are not liable for injuries resulting from misuse of equipment or failure to follow safety instructions.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">12. Website Use</h2>
          <p>By using our website, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>Use the site for unlawful purposes</li>
            <li>Attempt to gain unauthorized access to systems</li>
            <li>Interfere with site functionality</li>
          </ul>
          <p>All website content is owned by Maytag Laundromat and may not be reproduced without permission.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">13. Privacy</h2>
          <p>
            Your use of our services is also governed by our{' '}
            <Link to="/privacy" className="text-[#00bfb3] hover:underline">Privacy Policy</Link>.
            We collect and use customer information only as necessary to provide services and improve customer experience.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">14. Changes to Terms</h2>
          <p>We may update these Terms and Conditions at any time. Continued use of our services constitutes acceptance of any changes.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">15. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of North Carolina. Any disputes shall be resolved in courts located in Wake County, North Carolina.</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">16. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us:</p>
          <p className="my-4">
            <strong>Maytag Laundromat</strong><br />
            Raleigh, North Carolina<br />
            Website: <a href="https://maytaglaundromat.com/" target="_blank" rel="noopener noreferrer" className="text-[#00bfb3] hover:underline">https://maytaglaundromat.com/</a><br />
            Phone: <a href="tel:9842059506" className="text-[#00bfb3] hover:underline">(984) 205-9506</a>
          </p>

          <p className="mt-8 pt-6 border-t border-gray-200">
            By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
