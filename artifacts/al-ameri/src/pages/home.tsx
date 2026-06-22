import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Building2, 
  FileText, 
  Map, 
  Briefcase, 
  CheckCircle2, 
  Users, 
  Clock, 
  Globe2,
  ArrowLeft
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "السفارة الصينية",
      en: "Chinese Embassy",
      desc: "تأشيرات بأنواعها، تصديق وثائق، وخدمات الترجمة للسفارة الصينية.",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      href: "/chinese-embassy",
      color: "bg-blue-50"
    },
    {
      title: "السفارة اليمنية",
      en: "Yemeni Embassy",
      desc: "تختيم الأوراق، وكالات شرعية، تجديد جوازات ومستندات مدنية.",
      icon: <FileText className="w-10 h-10 text-primary" />,
      href: "/yemeni-embassy",
      color: "bg-red-50"
    },
    {
      title: "السفارة الأمريكية",
      en: "American Embassy",
      desc: "تجهيز المقابلات، ترجمة معتمدة، وتعبئة نماذج DS-160.",
      icon: <Globe2 className="w-10 h-10 text-primary" />,
      href: "/american-embassy",
      color: "bg-blue-50"
    },
    {
      title: "السياحة في ماليزيا",
      en: "Tourism",
      desc: "اكتشف جمال ماليزيا مع برامجنا السياحية لأجمل الوجهات.",
      icon: <Map className="w-10 h-10 text-primary" />,
      href: "/tourism",
      color: "bg-green-50"
    },
    {
      title: "خدمات التسهيل",
      en: "Facilitation",
      desc: "استقبال من المطار، تأجير سيارات، حجوزات فندقية وترجمة.",
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      href: "/facilitation",
      color: "bg-amber-50"
    }
  ];

  const stats = [
    { value: "+10", label: "سنوات خبرة", en: "Years Experience", icon: <Clock /> },
    { value: "+15", label: "سفارات نتعامل معها", en: "Embassies Served", icon: <Building2 /> },
    { value: "+5000", label: "عميل سعيد", en: "Happy Clients", icon: <Users /> },
    { value: "100%", label: "ضمان الموثوقية", en: "Trust Guarantee", icon: <CheckCircle2 /> },
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="وكالتك الموثوقة لتسهيل أعمالك في ماليزيا"
        titleEn="AL-AMERI TRAVEL AGENCY"
        descriptionAr="نحن هنا لنزيل عنك عناء المعاملات الرسمية. متخصصون في خدمات السفارات، الترجمة المعتمدة، والسياحة في ماليزيا، لنضمن لك تجربة سلسة وآمنة."
        height="large"
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="font-arabic rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 border-0">
            <Link href="/chinese-embassy">تصفح خدماتنا</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-arabic rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Link href="/contact">اتصل بنا اليوم</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Trust Stats */}
      <section className="py-12 bg-primary text-primary-foreground relative -mt-8 z-20 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center font-arabic">
                <div className="flex justify-center mb-3 text-accent/80 opacity-80">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium">{stat.label}</div>
                <div className="text-[10px] uppercase font-sans tracking-widest opacity-60 mt-1">{stat.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold font-arabic text-secondary mb-4 relative inline-block">
              خدماتنا الشاملة
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-muted-foreground font-arabic mt-8 text-lg">
              نقدم مجموعة متكاملة من الخدمات المصممة لتلبية احتياجات الجالية العربية والزوار في ماليزيا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col hover:-translate-y-1">
                  <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-arabic text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-sans text-muted-foreground uppercase tracking-widest mb-4">
                    {service.en}
                  </div>
                  <p className="text-muted-foreground font-arabic leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-arabic font-medium">
                    <span>المزيد من التفاصيل</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-arabic mb-6 max-w-3xl mx-auto leading-tight">
            هل تحتاج إلى استشارة حول المعاملات الرسمية أو تأشيرتك؟
          </h2>
          <p className="text-xl text-white/80 font-arabic mb-10 max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على جميع استفساراتك وتقديم التوجيه الصحيح خطوة بخطوة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-arabic rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <Link href="/contact">احجز استشارة مجانية</Link>
            </Button>
            <Button asChild size="lg" className="font-arabic rounded-full px-8 bg-[#25D366] text-white hover:bg-[#1DA851] w-full sm:w-auto">
              <a href="https://wa.me/message/EVO4ES3SH4TVA1" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
