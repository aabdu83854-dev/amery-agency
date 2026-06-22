import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Car, Home, Hotel, Languages, Map, HeartPulse, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export default function Facilitation() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const services = [
    {
      id: "airport",
      titleAr: "استقبال من المطار",
      titleEn: "Airport Pickup",
      descAr: "خدمة استقبال وتوديع احترافية من وإلى مطاري كوالالمبور الدوليين (KLIA & KLIA2). سيارات مريحة ومندوبون يتحدثون العربية لضمان راحتك منذ لحظة وصولك.",
      descEn: "Professional meet and greet service from/to Kuala Lumpur International Airports (KLIA & KLIA2). Comfortable cars and Arabic-speaking representatives to ensure your comfort from arrival.",
      icon: <Plane className="w-8 h-8" />
    },
    {
      id: "car",
      titleAr: "تأجير السيارات",
      titleEn: "Car Rental",
      descAr: "تشكيلة واسعة من السيارات العائلية والفاخرة والاقتصادية. متوفرة للإيجار بسائق خاص وعارف بالمنطقة أو بدون سائق حسب رغبتك.",
      descEn: "Wide range of family, luxury, and economy cars. Available for rent with a knowledgeable private driver or without a driver as you prefer.",
      icon: <Car className="w-8 h-8" />
    },
    {
      id: "apartment",
      titleAr: "إيجار شقق ومنازل",
      titleEn: "House/Apartment Rental",
      descAr: "نوفر شقق فندقية ومنازل مفروشة بالكامل للإيجار اليومي أو الشهري أو السنوي في أرقى مناطق كوالالمبور وسيلانجور، تناسب العائلات العربية.",
      descEn: "We provide fully furnished hotel apartments and houses for daily, monthly, or yearly rent in the best areas of Kuala Lumpur and Selangor, suitable for Arab families.",
      icon: <Home className="w-8 h-8" />
    },
    {
      id: "hotel",
      titleAr: "حجوزات فندقية",
      titleEn: "Hotel Booking",
      descAr: "مساعدة في اختيار وحجز أفضل الفنادق التي تناسب ميزانيتك واحتياجاتك، مع التركيز على المواقع الاستراتيجية والمرافق المريحة.",
      descEn: "Assistance in selecting and booking the best hotels that suit your budget and needs, focusing on strategic locations and comfortable facilities.",
      icon: <Hotel className="w-8 h-8" />
    },
    {
      id: "translation",
      titleAr: "خدمات الترجمة",
      titleEn: "Translation Services",
      descAr: "ترجمة معتمدة للوثائق والمستندات الرسمية، وتوفير مترجمين مرافقين (عربي - إنجليزي - ملايوي) للاجتماعات والمقابلات وتخليص المعاملات.",
      descEn: "Certified translation for official documents, and providing escort translators (Arabic - English - Malay) for meetings, interviews, and processing transactions.",
      icon: <Languages className="w-8 h-8" />
    },
    {
      id: "guide",
      titleAr: "مرشد سياحي محلي",
      titleEn: "Local Guide Services",
      descAr: "مرشدون سياحيون يتحدثون العربية، ذوو خبرة واسعة بالأماكن السياحية والثقافة الماليزية، لمرافقتك في جولات ممتعة ومريحة.",
      descEn: "Arabic-speaking tour guides with extensive experience in tourist spots and Malaysian culture, accompanying you on enjoyable and comfortable tours.",
      icon: <Map className="w-8 h-8" />
    },
    {
      id: "medical",
      titleAr: "مساعدات طبية ومستشفيات",
      titleEn: "Medical Appointments",
      descAr: "تنسيق مواعيد المستشفيات والعيادات، وتوفير مترجم طبي مرافق لضمان التواصل السليم مع الأطباء وتسهيل إجراءات العلاج.",
      descEn: "Coordinating hospital and clinic appointments, and providing a medical escort translator to ensure proper communication with doctors and facilitate treatment.",
      icon: <HeartPulse className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات التسهيل والمرافقة"
        titleEn="Facilitation & Support"
        descriptionAr="قطاع التأثير. نذلل لك الصعاب ونجعل إقامتك أو زيارتك لماليزيا خالية من التوتر. من لحظة وصولك للمطار وحتى إنجاز كافة أعمالك."
        descriptionEn="Impact sector. We ease the difficulties and make your stay or visit to Malaysia stress-free. From the moment you arrive at the airport until you finish all your business."
        imageFallbackUrl="/heroes/facilitation.jpg"
      />

      <section className="py-20 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`flex flex-col md:flex-row gap-6 p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? "bg-slate-50 border-slate-100" : "bg-white border-gray-100"
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-secondary mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t(service.titleAr, service.titleEn)}
                    </h3>
                    {lang === "ar" && (
                      <div className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-4">{service.titleEn}</div>
                    )}
                    <p className={`text-muted-foreground text-lg leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t(service.descAr, service.descEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className={`text-xl font-medium text-secondary mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("جميع خدماتنا مصممة لتلائم احتياجاتك الخاصة. تواصل معنا لتنسيق باقة خدمات تناسبك.", "All our services are designed to meet your specific needs. Contact us to coordinate a service package that suits you.")}
              </p>
              <a 
                href="https://wa.me/message/EVO4ES3SH4TVA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-lg ${lang === "ar" ? "font-arabic" : ""}`}
              >
                {t("تحدث مع مستشار التسهيل", "Speak to a Facilitation Advisor")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}