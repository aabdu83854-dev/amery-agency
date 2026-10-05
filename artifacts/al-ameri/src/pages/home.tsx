import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language";
import { 
  Building2, 
  FileText, 
  Map, 
  Briefcase, 
  CheckCircle2, 
  Users, 
  Clock, 
  Globe2,
  GraduationCap,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const services = [
    {
      titleAr: "السفارة الصينية",
      titleEn: "Chinese Embassy",
      descAr: "تأشيرات بأنواعها، تصديق وثائق، وخدمات الترجمة للسفارة الصينية.",
      descEn: "All types of visas, document authentication, and translation services for the Chinese Embassy.",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      href: "/chinese-embassy",
      color: "bg-blue-50"
    },
    {
      titleAr: "السفارة اليمنية",
      titleEn: "Yemeni Embassy",
      descAr: "تختيم الأوراق، وكالات شرعية، تجديد جوازات ومستندات مدنية.",
      descEn: "Document stamping, power of attorney, passport renewal and civil documents.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      href: "/yemeni-embassy",
      color: "bg-red-50"
    },
    {
      titleAr: "السفارة الأمريكية",
      titleEn: "American Embassy",
      descAr: "تجهيز المقابلات، ترجمة معتمدة، وتعبئة نماذج DS-160.",
      descEn: "Interview preparation, certified translation, and DS-160 form filling.",
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      href: "/american-embassy",
      color: "bg-blue-50"
    },
    {
      titleAr: "الدراسة في ماليزيا",
      titleEn: "Study in Malaysia",
      descAr: "تسجيل في معاهد اللغة والجامعات، تجهيز الملف، والتأشيرة الطلابية.",
      descEn: "Registration in language institutes and universities, file preparation and student visa.",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      href: "/study",
      color: "bg-indigo-50"
    },
    {
      titleAr: "السياحة في ماليزيا",
      titleEn: "Tourism in Malaysia",
      descAr: "اكتشف جمال ماليزيا مع برامجنا السياحية لأجمل الوجهات.",
      descEn: "Discover the beauty of Malaysia with our tourism programs to the most beautiful destinations.",
      icon: <Map className="w-8 h-8 text-primary" />,
      href: "/tourism",
      color: "bg-green-50"
    },
    {
      titleAr: "خدمات التسهيل",
      titleEn: "Facilitation Services",
      descAr: "استقبال من المطار، تأجير سيارات، حجوزات فندقية وترجمة.",
      descEn: "Airport pickup, car rental, hotel bookings and translation.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      href: "/facilitation",
      color: "bg-amber-50"
    }
  ];

  const stats = [
    { value: "3", labelAr: "سفارات نخدمها", labelEn: "Embassies Served", icon: <Building2 /> },
    { value: "3", labelAr: "لغات نخدمك بها", labelEn: "Languages We Speak", icon: <Users /> },
    { value: "6", labelAr: "خدمات تحت سقف واحد", labelEn: "Services Under One Roof", icon: <CheckCircle2 /> },
    { value: "KL", labelAr: "مقرّنا كوالالمبور", labelEn: "Based in Kuala Lumpur", icon: <Clock /> },
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="وكالتك الموثوقة لتسهيل أعمالك في ماليزيا"
        titleEn="Your trusted agency to facilitate your affairs in Malaysia"
        descriptionAr="نحن هنا لنزيل عنك عناء المعاملات الرسمية. متخصصون في خدمات السفارات، الترجمة المعتمدة، والسياحة في ماليزيا، لنضمن لك تجربة سلسة وآمنة."
        descriptionEn="We are here to relieve you of the hassle of official transactions. Specialized in embassy services, certified translation, and tourism in Malaysia, to ensure a smooth and safe experience."
        height="large"
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className={`rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 border-0 shadow-brand ${lang === "ar" ? "font-arabic" : ""}`}>
            <Link href="/chinese-embassy">{t("تصفح خدماتنا", "Browse Our Services")}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className={`btn-glass rounded-full px-8 text-white hover:text-white ${lang === "ar" ? "font-arabic" : ""}`}>
            <Link href="/contact">{t("اتصل بنا اليوم", "Contact Us Today")}</Link>
          </Button>
        </div>
      </HeroSection>

      <section className="py-10 md:py-12 bg-gradient-to-br from-primary to-[hsl(218_74%_38%)] text-primary-foreground relative -mt-10 z-20 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-brand-lg ring-1 ring-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center ${lang === "ar" ? "font-arabic" : ""}`}>
                <div className="flex justify-center mb-3 text-accent">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2" dir="ltr">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/85">{t(stat.labelAr, stat.labelEn)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 surface-wash">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" dir={lang === "ar" ? "rtl" : "ltr"}>
            <h2 className={`heading-rule heading-rule-center text-3xl md:text-4xl font-bold text-secondary mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("خدماتنا الشاملة", "Our Comprehensive Services")}
            </h2>
            <p className={`text-muted-foreground mt-8 text-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("نقدم مجموعة متكاملة من الخدمات المصممة لتلبية احتياجات الجالية العربية والزوار في ماليزيا.", "We offer a complete range of services designed to meet the needs of the Arab community and visitors in Malaysia.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={lang === "ar" ? "rtl" : "ltr"}>
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-brand-lg transition-all duration-300 border border-slate-100 hover:border-accent/40 group h-full flex flex-col hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 ring-1 ring-black/5 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t(service.titleAr, service.titleEn)}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed flex-grow ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t(service.descAr, service.descEn)}
                  </p>
                  <div className={`mt-6 flex items-center gap-2 text-primary font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    <span>{t("المزيد من التفاصيل", "More Details")}</span>
                    {lang === "ar" ? (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center" dir={lang === "ar" ? "rtl" : "ltr"}>
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
            {t("هل تحتاج إلى استشارة حول المعاملات الرسمية أو تأشيرتك؟", "Do you need a consultation about official transactions or your visa?")}
          </h2>
          <p className={`text-xl text-white/80 mb-10 max-w-2xl mx-auto ${lang === "ar" ? "font-arabic" : ""}`}>
            {t("فريقنا جاهز للإجابة على جميع استفساراتك وتقديم التوجيه الصحيح خطوة بخطوة.", "Our team is ready to answer all your inquiries and provide proper step-by-step guidance.")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className={`rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-brand w-full sm:w-auto ${lang === "ar" ? "font-arabic" : ""}`}>
              <Link href="/contact">{t("احجز استشارة مجانية", "Book a Free Consultation")}</Link>
            </Button>
            <Button asChild size="lg" className={`rounded-full px-8 bg-whatsapp text-white hover:bg-whatsapp-hover w-full sm:w-auto ${lang === "ar" ? "font-arabic" : ""}`}>
              <a href="https://wa.me/message/EVO4ES3SH4TVA1" target="_blank" rel="noopener noreferrer">{t("تواصل عبر واتساب", "Contact via WhatsApp")}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}