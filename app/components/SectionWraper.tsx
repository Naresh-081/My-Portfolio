'use client';

export default function SectionWrapper({
  id,
  children,
  className = '',
  reducedPadding = false,
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  reducedPadding?: boolean;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`
        ${reducedPadding ? 'py-16 lg:py-20' : 'py-20 lg:py-28'}
        ${alt ? 'bg-[#040d1c]' : 'bg-[#020617]'}
        border-t border-slate-800/60
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
