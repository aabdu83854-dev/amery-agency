import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout";
import { useLanguage } from "@/contexts/language";
import { DESTINATIONS } from "@/data/destinations";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Lightbulb, MessageCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TourismDetail() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const destination = DESTINATIONS.find(d => d.id === id);

  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">{t("الوجهة غير موجودة", "Destination Not Found")}</h1>
          <Link href="/tourism">
            <Button>{t("العودة إلى السياحة", "Back to Tourism")}</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const WHATSAPP_LINK = "https://wa.me/message/EVO4ES3SH4TVA1";

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full bg-slate-900">
        <img
          src={destination.heroImage}
          alt={destination.nameEn}
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fb) return;
            img.dataset.fb = "1";
            img.src = `${import.meta.env.BASE_URL}heroes/tourism.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container mx-auto px-4 pb-12">
            {/* Breadcrumb */}
            <div className={`flex items-center gap-2 text-white/80 mb-6 text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
              <Link href="/tourism" className="hover:text-white transition-colors">
                {t("السياحة", "Tourism")}
              </Link>
              {lang === "ar" ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
              <span className="text-white font-medium">{t(destination.nameAr, destination.nameEn)}</span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t(destination.nameAr, destination.nameEn)}
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl ${lang === "ar" ? "font-arabic" : ""}`}>
              {t(destination.taglineAr, destination.taglineEn)}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16" dir={lang === "ar" ? "rtl" : "ltr"}>
        {/* Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <h2 className={`text-3xl font-bold text-secondary flex items-center gap-3 ${lang === "ar" ? "font-arabic" : ""}`}>
              <MapPin className="text-primary" />
              {t("نظرة عامة", "Overview")}
            </h2>
            <div className={`prose prose-lg max-w-none text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
              {t(destination.descAr, destination.descEn).split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className={`text-2xl font-bold text-secondary mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("أبرز الميزات", "Highlights")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {destination.highlights.map((highlight, idx) => {
                const IconComponent = (Icons as any)[highlight.icon] || Icons.Star;
                return (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-foreground mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t(highlight.titleAr, highlight.titleEn)}
                      </h3>
                      <p className={`text-sm text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t(highlight.descAr, highlight.descEn)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-secondary mb-10 text-center relative inline-block left-1/2 -translate-x-1/2 ${lang === "ar" ? "font-arabic" : ""}`}>
            {t("أبرز الأماكن", "Top Attractions")}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row group hover:shadow-lg transition-all border border-slate-100">
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.dataset.fb) return;
                      img.dataset.fb = "1";
                      img.src = `${import.meta.env.BASE_URL}heroes/tourism.jpg`;
                    }}
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h3 className={`text-xl font-bold mb-2 text-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t(attraction.nameAr, attraction.nameEn)}
                  </h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t(attraction.descAr, attraction.descEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-secondary mb-10 text-center relative inline-block left-1/2 -translate-x-1/2 ${lang === "ar" ? "font-arabic" : ""}`}>
            {t("معرض الصور", "Photo Gallery")}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {destination.gallery.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl break-inside-avoid">
                <img 
                  src={img} 
                  alt={`${destination.nameEn} gallery image ${idx + 1}`}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500 cursor-pointer object-cover bg-slate-100"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fb) return;
                    img.dataset.fb = "1";
                    img.src = `${import.meta.env.BASE_URL}heroes/tourism.jpg`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Practical Info */}
        <div className="mb-20 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
          <h2 className={`text-2xl font-bold text-secondary mb-8 ${lang === "ar" ? "font-arabic" : ""}`}>
            {t("معلومات عملية", "Practical Info")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary h-12 w-12 flex items-center justify-center shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className={`font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{t("أفضل وقت للزيارة", "Best Time to Visit")}</h4>
                <p className={`text-sm text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t(destination.practicalInfo.bestTimeAr, destination.practicalInfo.bestTimeEn)}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary h-12 w-12 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className={`font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{t("كيفية الوصول", "How to Get There")}</h4>
                <p className={`text-sm text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t(destination.practicalInfo.howToGetThereAr, destination.practicalInfo.howToGetThereEn)}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-accent h-12 w-12 flex items-center justify-center shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <h4 className={`font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{t("نصائح للمسافر", "Travel Tips")}</h4>
                <p className={`text-sm text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t(destination.practicalInfo.tipsAr, destination.practicalInfo.tipsEn)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-3xl p-10 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}heroes/tourism.jpg)` }}
          ></div>
          <div className="relative z-10">
            <h2 className={`text-3xl font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("هل أعجبتك الوجهة؟", "Like this destination?")}
            </h2>
            <p className={`text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("تواصل معنا الآن لتنظيم رحلة سياحية متكاملة تناسب ميزانيتك وتشمل حجوزات الفنادق والطيران.", "Contact us now to organize a complete tour package fitting your budget, including hotel and flight bookings.")}
            </p>
            <Button size="lg" className={`bg-[#25D366] hover:bg-[#1DA851] text-white gap-2 font-bold px-8 py-6 text-lg rounded-full ${lang === "ar" ? "font-arabic" : ""}`} asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                {t("احجز رحلتك الآن", "Book Your Trip Now")}
              </a>
            </Button>
          </div>
        </div>

      </div>
    </Layout>
  );
}
