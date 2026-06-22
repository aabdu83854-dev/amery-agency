import { Destination } from "@/data/destinations";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage, Lang } from "@/contexts/language";
import { DESTINATIONS } from "@/data/destinations";
import { Link } from "wouter";

function DestCard({
  dest,
  lang,
  t,
  getImageUrl,
}: {
  dest: Destination;
  lang: Lang;
  t: (ar: string, en: string) => string;
  getImageUrl: (path: string) => string;
}) {
  return (
    <Link href={`/tourism/${dest.id}`} className="block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <img
            src={dest.heroImage}
            alt={dest.nameEn}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-white text-primary px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {lang === "ar" ? "عرض التفاصيل" : "View Details"} &rarr;
            </span>
          </div>

          <div className="absolute bottom-4 right-4 left-4">
            <h3
              className={`text-2xl font-bold text-white mb-1 drop-shadow-md ${
                lang === "ar" ? "font-arabic" : ""
              }`}
            >
              {t(dest.nameAr, dest.nameEn)}
            </h3>
            {lang === "ar" && (
              <p className="text-sm font-sans text-white/80 uppercase tracking-wider">
                {dest.nameEn}
              </p>
            )}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col justify-between">
          <p
            className={`text-muted-foreground leading-relaxed line-clamp-3 ${
              lang === "ar" ? "font-arabic" : ""
            }`}
          >
            {t(dest.descAr, dest.descEn)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Tourism() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
  };

  return (
    <Layout>
      <HeroSection 
        titleAr="اكتشف سحر ماليزيا"
        titleEn="Discover the Magic of Malaysia"
        descriptionAr="ماليزيا، جنة آسيا الاستوائية، تقدم مزيجاً فريداً من الطبيعة الساحرة، المدن الحديثة، والثقافة المتنوعة. رتب رحلتك معنا لتجربة لا تُنسى."
        descriptionEn="Malaysia, tropical Asia's paradise, offers a unique blend of enchanting nature, modern cities, and diverse culture. Plan your trip with us for an unforgettable experience."
        imageFallbackUrl="/heroes/tourism.jpg"
      />

      <section className="py-24 bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-secondary mb-4 relative inline-block ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("أجمل الوجهات السياحية", "Most Beautiful Tourist Destinations")}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className={`text-muted-foreground mt-8 text-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("نوفر برامج سياحية مرنة ومصممة خصيصاً لتناسب تفضيلاتك العائلية أو الفردية.", "We offer flexible tourism programs tailored to suit your family or individual preferences.")}
            </p>
          </div>

          {/* General Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {DESTINATIONS.filter(d => d.category === "general").map((dest) => (
              <DestCard key={dest.id} dest={dest} lang={lang} t={t} getImageUrl={getImageUrl} />
            ))}
          </div>

          {/* Terengganu Islands */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border"></div>
              <div className="text-center">
                <span className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-2">
                  {t("جزر ترنجانو", "Terengganu Islands")}
                </span>
                <p className={`text-muted-foreground text-base mt-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t("كنز ماليزيا البحري على ساحل بحر الصين الجنوبي", "Malaysia's marine treasure on the South China Sea coast")}
                </p>
              </div>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESTINATIONS.filter(d => d.category === "terengganu").map((dest) => (
                <DestCard key={dest.id} dest={dest} lang={lang} t={t} getImageUrl={getImageUrl} />
              ))}
            </div>
          </div>

          {/* Putrajaya */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border"></div>
              <div className="text-center">
                <span className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-2">
                  {t("بتراجايا", "Putrajaya")}
                </span>
                <p className={`text-muted-foreground text-base mt-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t("العاصمة الإدارية الفريدة والمعجزة المعمارية الحديثة", "The unique administrative capital and modern architectural marvel")}
                </p>
              </div>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESTINATIONS.filter(d => d.category === "putrajaya").map((dest) => (
                <DestCard key={dest.id} dest={dest} lang={lang} t={t} getImageUrl={getImageUrl} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
