'use client';

export default function SectionWrapper({
  id,
  children,
  className = '',
  reducedPadding = false,
  bgClass = 'bg-white',
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  reducedPadding?: boolean;
  bgClass?: string;
}) {
  return (
    <section
      id={id}
      className={`${reducedPadding ? 'py-14 lg:py-20' : 'py-20 lg:py-28'} ${bgClass} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
