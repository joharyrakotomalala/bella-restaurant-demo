import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EAE1D3] via-[#DFD2BE] to-[#C69C4E]/30 text-[#141210] p-6 text-center ${className}`}
      >
        <Utensils className="w-8 h-8 text-[#8C6823] mb-3" strokeWidth={1.5} />
        <span className="font-display text-lg font-semibold tracking-wide text-[#141210]">
          {fallbackTitle || 'Bella Restaurant'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
