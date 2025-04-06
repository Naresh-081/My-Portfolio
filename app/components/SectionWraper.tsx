// components/SectionWrapper.tsx
'use client';

export default function SectionWrapper({
  id,
  children,
  className = '',
  reducedPadding = false
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  reducedPadding?: boolean;
}) {
  return (
    <section 
      id={id}
      className={`
        ${reducedPadding ? 'py-12 lg:py-16' : 'py-16 lg:py-20'}
        bg-gradient-to-br from-gray-50 to-gray-100
        text-gray-800
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}