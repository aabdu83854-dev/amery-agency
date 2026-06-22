import { ReactNode } from "react";

interface HeroSectionProps {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  imageFallbackUrl?: string;
  children?: ReactNode;
  height?: "small" | "medium" | "large";
}

export function HeroSection({ 
  titleAr, 
  titleEn, 
  descriptionAr, 
  imageFallbackUrl = "/heroes/home.jpg", 
  children,
  height = "medium"
}: HeroSectionProps) {
  
  const heightClass = {
    small: "py-16 md:py-24",
    medium: "py-20 md:py-32",
    large: "min-h-[80vh] flex items-center py-20"
  }[height];

  return (
    <section className={`relative relative overflow-hidden bg-secondary text-white ${heightClass}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageFallbackUrl} 
          alt={titleEn} 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl" dir="rtl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-sans text-sm font-medium tracking-wider mb-6 animate-in slide-in-from-bottom-4 duration-500">
            {titleEn}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-arabic mb-6 leading-tight animate-in slide-in-from-bottom-6 duration-700">
            {titleAr}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-arabic leading-relaxed mb-8 max-w-2xl animate-in slide-in-from-bottom-8 duration-700 delay-100">
            {descriptionAr}
          </p>
          
          {children && (
            <div className="animate-in slide-in-from-bottom-10 duration-700 delay-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
