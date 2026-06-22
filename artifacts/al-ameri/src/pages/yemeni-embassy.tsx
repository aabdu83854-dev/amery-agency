import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { CheckCircle2 } from "lucide-react";

export default function YemeniEmbassy() {
  const services = [
    "تختيم الأوراق الرسمية والمستندات",
    "مقدمة وتسليم المستندات للسفارة",
    "استخراج المستندات والأوراق الثبوتية",
    "إصدار وتصديق الوكالات الشرعية",
    "تسجيل وإصدار شهادات الميلاد",
    "تسجيل وإصدار وثائق الزواج",
    "تجديد وإصدار جوازات السفر",
    "الخدمات القنصلية العامة",
    "المصادقة على الوثائق الرسمية",
    "تجديد المستندات المدنية",
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة اليمنية"
        titleEn="YEMENI EMBASSY SERVICES"
        descriptionAr="نحن نتفهم احتياجات الجالية اليمنية في ماليزيا. نوفر خدمات تخليص المعاملات القنصلية بسرعة وكفاءة لضمان راحة بالك."
        imageFallbackUrl="/heroes/yemeni.jpg"
      />

      <section className="py-24 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-arabic text-secondary mb-4 relative inline-block">
                الخدمات القنصلية المتوفرة
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-muted-foreground font-arabic text-lg mt-6">
                يقوم فريقنا بمراجعة المعاملات وتجهيزها نيابة عنك لتوفير الجهد والوقت.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-arabic font-medium text-lg text-secondary">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold font-arabic text-secondary mb-4">هل تحتاج إلى مساعدة عاجلة؟</h3>
              <p className="text-muted-foreground font-arabic text-lg mb-6">
                بعض المعاملات تتطلب تجهيزاً خاصاً أو حضوراً شخصياً. تواصل معنا لنرشدك للخطوات الصحيحة.
              </p>
              <a 
                href="https://wa.me/message/EVO4ES3SH4TVA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#25D366] text-white font-arabic font-bold hover:bg-[#1DA851] transition-colors"
              >
                تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
