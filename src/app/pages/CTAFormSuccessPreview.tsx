import { CTAFormSuccessScreen } from '../components/CTAFormSuccessScreen';

/**
 * Dev preview page for the CTA form success screen.
 * Visit /claim/success to view and edit the success screen UI.
 */
export function CTAFormSuccessPreview() {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col bg-[#00bfb3]">
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8 min-h-0 overflow-visible">
        <div className="w-full max-w-md overflow-visible">
          <CTAFormSuccessScreen />
        </div>
      </div>
    </div>
  );
}
