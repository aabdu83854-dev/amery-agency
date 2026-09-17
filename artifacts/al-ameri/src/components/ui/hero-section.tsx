import { ReactNode } from "react";
import { useLanguage } from "@/contexts/language";

interface HeroSectionProps {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn?: string;
  imageFallbackUrl?: string;
  children?: ReactNode;
  height?: "small" | "medium" | "large";
}

export function HeroSection({ 
  titleAr, 
  titleEn, 
  descriptionAr,
  descriptionEn,
  imageFallbackUrl = "/heroes/home.jpg", 
  children,
  height = "medium"
}: HeroSectionProps) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const heightClass = {
    small: "py-16 md:py-24",
    medium: "py-20 md:py-32",
    large: "min-h-[80vh] flex items-center py-20"
  }[height];

  const title = isAr ? titleAr : titleEn;
  const subtitle = isAr ? titleEn : titleAr;
  const description = isAr ? descriptionAr : (descriptionEn ?? descriptionAr);

  return (
    <section className={`relative overflow-hidden bg-secondary text-white ${heightClass}`}>
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
        <div className="max-w-3xl lg:max-w-5xl" dir={isAr ? "rtl" : "ltr"}>
          <div className={`inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium tracking-wider mb-6 animate-in slide-in-from-bottom-4 duration-500 ${isAr ? "font-sans" : "font-arabic"}`}>
            {subtitle}
          </div>
          <h1 className="md:text-5xl lg:text-6xl font-extrabold mb-6 animate-in slide-in-from-bottom-6 duration-700 font-arabic text-[28px]">
            {title}
          </h1>
          <p className={`text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-in slide-in-from-bottom-8 duration-700 delay-100 ${isAr ? "font-arabic" : "font-sans"}`}>
            {description}
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
