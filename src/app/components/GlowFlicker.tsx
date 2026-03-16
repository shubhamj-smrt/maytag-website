import './GlowFlicker.css';

interface GlowFlickerProps {
  className?: string;
}

export function GlowFlicker({ className = '' }: GlowFlickerProps) {
  return (
    <div
      className={`glow-flicker absolute -inset-0 z-0 rounded-2xl ${className}`.trim()}
      aria-hidden
    />
  );
}
