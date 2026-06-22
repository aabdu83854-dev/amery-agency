import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileCheck, FileSignature, Zap, MapPin } from "lucide-react";

export default function ChineseEmbassy() {
  const visaServices = [
    { title: "تأشيرة سياحية (L)", desc: "للراغبين في زيارة الصين بغرض السياحة والترفيه." },
    { title: "تأشيرة تجارية (M)", desc: "لأغراض التجارة والأعمال وحضور المعارض." },
    { title: "تأشيرة طالب (X1/X2)", desc: "للطلاب المقبولين للدراسة في المؤسسات التعليمية الصينية." },
    { title: "تأشيرة عمل (Z)", desc: "للراغبين في العمل داخل جمهورية الصين." },
    { title: "تأشيرات العائلة (Q1/Q2)", desc: "لزيارة أقارب من المواطنين الصينيين." },
    { title: "تأشيرات (S1/S2)", desc: "لعائلات الأجانب المقيمين في الصين." },
    { title: "تأشيرة صحفي (J)", desc: "للصحفيين ومراسلي وسائل الإعلام." },
    { title: "تجديد وتحويل التأشيرات", desc: "تجديد وتمديد التأشيرات الحالية أو تحويل نوع التأشيرة." },
  ];

  const docServices = [
    { title: "تصديق وتوثيق الوثائق (公证)", desc: "تصديق رسمي للشهادات والعقود للاستخدام في الصين." },
    { title: "خدمات الأبوستيل (Apostille)", desc: "اعتماد الوثائق دولياً وفقاً لمعاهدة لاهاي." },
    { title: "الترجمة المعتمدة", desc: "ترجمة رسمية من العربية/الإنجليزية إلى الصينية." },
    { title: "التقديم نيابة عن العميل", desc: "تسليم واستلام الوثائق دون الحاجة لحضورك الشخصي." },
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة الصينية"
        titleEn="CHINESE EMBASSY SERVICES"
        descriptionAr="الخدمات الأبرز لدينا. نقدم دعماً شاملاً لجميع متطلبات التأشيرات وتصديق الوثائق للسفارة الصينية في كوالالمبور بدقة واحترافية."
        imageFallbackUrl="/heroes/chinese.jpg"
      />

      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-arabic text-secondary mb-4">خدمات التأشيرات</h2>
            <p className="text-muted-foreground font-arabic text-lg">
              نساعدك في تحديد نوع التأشيرة المناسب وتجهيز الملف بالكامل لضمان قبول الطلب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaServices.map((service, i) => (
              <Card key={i} className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-arabic text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-arabic text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-arabic text-secondary mb-6">خدمات الوثائق والتصديقات</h2>
              <p className="text-muted-foreground font-arabic text-lg mb-8 leading-relaxed">
                إن تجهيز الوثائق بشكل صحيح هو الخطوة الأهم. فريقنا متخصص في مراجعة وتصديق جميع الأوراق الرسمية المطلوبة من قبل السفارة الصينية لضمان عدم رفض المعاملة.
              </p>
              
              <div className="space-y-6">
                {docServices.map((service, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 text-primary">
                      {i % 2 === 0 ? <FileSignature /> : <FileCheck />}
                    </div>
                    <div>
                      <h3 className="font-bold font-arabic text-lg mb-1">{service.title}</h3>
                      <p className="text-muted-foreground font-arabic text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <Zap className="w-64 h-64 -mt-16 -mr-16" />
                </div>
                
                <h3 className="text-2xl font-bold font-arabic mb-6 relative z-10">مميزات إضافية</h3>
                <ul className="space-y-4 font-arabic relative z-10">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">معالجة سريعة (Express Processing)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">حجز وإدارة المواعيد بفعالية</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">استشارات مجانية حول متطلبات التأشيرة</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">متابعة حالة الطلب وتحديث العميل أولاً بأول</span>
                  </li>
                </ul>

                <div className="mt-10 bg-black/20 rounded-xl p-5 border border-white/10 relative z-10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold font-arabic mb-1">موقع السفارة الصينية في كوالالمبور</h4>
                      <p className="text-sm font-sans" dir="ltr">233, Jalan Ampang, 50450 Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
