import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Car, Home, Hotel, Languages, Map, HeartPulse, Plane } from "lucide-react";

export default function Facilitation() {
  const services = [
    {
      id: "airport",
      titleAr: "استقبال من المطار",
      titleEn: "Airport Pickup",
      descAr: "خدمة استقبال وتوديع احترافية من وإلى مطاري كوالالمبور الدوليين (KLIA & KLIA2). سيارات مريحة ومندوبون يتحدثون العربية لضمان راحتك منذ لحظة وصولك.",
      icon: <Plane className="w-8 h-8" />
    },
    {
      id: "car",
      titleAr: "تأجير السيارات",
      titleEn: "Car Rental",
      descAr: "تشكيلة واسعة من السيارات العائلية والفاخرة والاقتصادية. متوفرة للإيجار بسائق خاص وعارف بالمنطقة أو بدون سائق حسب رغبتك.",
      icon: <Car className="w-8 h-8" />
    },
    {
      id: "apartment",
      titleAr: "إيجار شقق ومنازل",
      titleEn: "House/Apartment Rental",
      descAr: "نوفر شقق فندقية ومنازل مفروشة بالكامل للإيجار اليومي أو الشهري أو السنوي في أرقى مناطق كوالالمبور وسيلانجور، تناسب العائلات العربية.",
      icon: <Home className="w-8 h-8" />
    },
    {
      id: "hotel",
      titleAr: "حجوزات فندقية",
      titleEn: "Hotel Booking",
      descAr: "مساعدة في اختيار وحجز أفضل الفنادق التي تناسب ميزانيتك واحتياجاتك، مع التركيز على المواقع الاستراتيجية والمرافق المريحة.",
      icon: <Hotel className="w-8 h-8" />
    },
    {
      id: "translation",
      titleAr: "خدمات الترجمة",
      titleEn: "Translation Services",
      descAr: "ترجمة معتمدة للوثائق والمستندات الرسمية، وتوفير مترجمين مرافقين (عربي - إنجليزي - ملايوي) للاجتماعات والمقابلات وتخليص المعاملات.",
      icon: <Languages className="w-8 h-8" />
    },
    {
      id: "guide",
      titleAr: "مرشد سياحي محلي",
      titleEn: "Local Guide Services",
      descAr: "مرشدون سياحيون يتحدثون العربية، ذوو خبرة واسعة بالأماكن السياحية والثقافة الماليزية، لمرافقتك في جولات ممتعة ومريحة.",
      icon: <Map className="w-8 h-8" />
    },
    {
      id: "medical",
      titleAr: "مساعدات طبية ومستشفيات",
      titleEn: "Medical Appointments",
      descAr: "تنسيق مواعيد المستشفيات والعيادات، وتوفير مترجم طبي مرافق لضمان التواصل السليم مع الأطباء وتسهيل إجراءات العلاج.",
      icon: <HeartPulse className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات التسهيل والمرافقة"
        titleEn="FACILITATION & SUPPORT"
        descriptionAr="قطاع التأثير. نذلل لك الصعاب ونجعل إقامتك أو زيارتك لماليزيا خالية من التوتر. من لحظة وصولك للمطار وحتى إنجاز كافة أعمالك."
        imageFallbackUrl="/heroes/facilitation.jpg"
      />

      <section className="py-20 bg-white" dir="rtl">
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
                    <h3 className="text-2xl font-bold font-arabic text-secondary mb-2">{service.titleAr}</h3>
                    <div className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-4">{service.titleEn}</div>
                    <p className="text-muted-foreground font-arabic text-lg leading-relaxed">
                      {service.descAr}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl font-arabic font-medium text-secondary mb-6">
                جميع خدماتنا مصممة لتلائم احتياجاتك الخاصة. تواصل معنا لتنسيق باقة خدمات تناسبك.
              </p>
              <a 
                href="https://wa.me/message/EVO4ES3SH4TVA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-white font-arabic font-bold hover:bg-primary/90 transition-colors text-lg"
              >
                تحدث مع مستشار التسهيل
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
