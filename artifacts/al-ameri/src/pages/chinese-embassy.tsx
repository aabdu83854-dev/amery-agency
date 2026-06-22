import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileCheck, FileSignature, Zap, MapPin, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ChineseEmbassy() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;
  const [openItem, setOpenItem] = useState<string>("");

  const handleServiceClick = (reqIndex: number | null) => {
    if (reqIndex === null) {
      const el = document.getElementById("visa-requirements");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const value = `visa-${reqIndex}`;
    setOpenItem(value);
    setTimeout(() => {
      const el = document.getElementById(`req-${reqIndex}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const visaServices = [
    { titleAr: "تأشيرة سياحية (L)", titleEn: "Tourist Visa (L)", descAr: "للراغبين في زيارة الصين بغرض السياحة والترفيه.", descEn: "For those wishing to visit China for tourism and leisure.", reqIndex: 0 },
    { titleAr: "تأشيرة تجارية (M)", titleEn: "Business Visa (M)", descAr: "لأغراض التجارة والأعمال وحضور المعارض.", descEn: "For commerce, business, and attending exhibitions.", reqIndex: 1 },
    { titleAr: "تأشيرة طالب (X1/X2)", titleEn: "Student Visa (X1/X2)", descAr: "للطلاب المقبولين للدراسة في المؤسسات التعليمية الصينية.", descEn: "For students accepted to study in Chinese educational institutions.", reqIndex: 2 },
    { titleAr: "تأشيرة عمل (Z)", titleEn: "Work Visa (Z)", descAr: "للراغبين في العمل داخل جمهورية الصين.", descEn: "For those wishing to work inside the People's Republic of China.", reqIndex: 3 },
    { titleAr: "تأشيرات العائلة (Q1/Q2)", titleEn: "Family Visas (Q1/Q2)", descAr: "لزيارة أقارب من المواطنين الصينيين.", descEn: "For visiting relatives who are Chinese citizens.", reqIndex: null },
    { titleAr: "تأشيرات (S1/S2)", titleEn: "S1/S2 Visas", descAr: "لعائلات الأجانب المقيمين في الصين.", descEn: "For families of foreigners residing in China.", reqIndex: 4 },
    { titleAr: "تأشيرة صحفي (J)", titleEn: "Journalist Visa (J)", descAr: "للصحفيين ومراسلي وسائل الإعلام.", descEn: "For journalists and media correspondents.", reqIndex: null },
    { titleAr: "تجديد وتحويل التأشيرات", titleEn: "Visa Renewal and Transfer", descAr: "تجديد وتمديد التأشيرات الحالية أو تحويل نوع التأشيرة.", descEn: "Renewal, extension, or conversion of current visas.", reqIndex: null },
  ];

  const docServices = [
    { titleAr: "تصديق وتوثيق الوثائق (公证)", titleEn: "Document Authentication", descAr: "تصديق رسمي للشهادات والعقود للاستخدام في الصين.", descEn: "Official authentication of certificates and contracts for use in China." },
    { titleAr: "خدمات الأبوستيل (Apostille)", titleEn: "Apostille Services", descAr: "اعتماد الوثائق دولياً وفقاً لمعاهدة لاهاي.", descEn: "International document accreditation according to the Hague Convention." },
    { titleAr: "الترجمة المعتمدة", titleEn: "Certified Translation", descAr: "ترجمة رسمية من العربية/الإنجليزية إلى الصينية.", descEn: "Official translation from Arabic/English to Chinese." },
    { titleAr: "التقديم نيابة عن العميل", titleEn: "Submission on Behalf", descAr: "تسليم واستلام الوثائق دون الحاجة لحضورك الشخصي.", descEn: "Document submission and collection without your personal attendance." },
  ];

  const visaRequirements = [
    {
      titleAr: "التأشيرة السياحية (L)",
      titleEn: "Tourist Visa (L)",
      reqAr: [
        "جواز سفر ساري المفعول لـ 6 أشهر على الأقل وبه صفحتين فارغتين",
        "نموذج طلب التأشيرة معبأ وموقع",
        "صورة شخصية حديثة بخلفية بيضاء (33×48 مم)",
        "حجوزات طيران (ذهاب وعودة)",
        "تأكيد حجز فندق",
        "كشف حساب بنكي (لآخر 3 أشهر، برصيد لا يقل عن 3000 رنجت)",
        "تأمين سفر",
        "للمتقدمين لأول مرة: خطاب عمل أو إثبات دراسة"
      ],
      reqEn: [
        "Passport valid for 6+ months with 2 blank visa pages",
        "Completed visa application form (signed)",
        "Recent passport photo (33×48mm, white background)",
        "Flight bookings (round trip)",
        "Hotel booking confirmation",
        "Bank statement (last 3 months, minimum RM 3,000 balance)",
        "Travel insurance",
        "For first-time applicants: employment letter or proof of enrollment"
      ]
    },
    {
      titleAr: "التأشيرة التجارية (M)",
      titleEn: "Business Visa (M)",
      reqAr: [
        "جميع متطلبات التأشيرة السياحية",
        "رسالة دعوة من شركة صينية (على ورق الشركة الرسمي)",
        "وثائق تسجيل الشركة التجارية",
        "خطاب من جهة العمل يوضح الغرض من الرحلة"
      ],
      reqEn: [
        "All tourist visa requirements",
        "Invitation letter from Chinese company (on company letterhead)",
        "Business registration documents",
        "Employer letter confirming business purpose"
      ]
    },
    {
      titleAr: "تأشيرة الطالب (X1/X2)",
      titleEn: "Student Visa (X1/X2)",
      reqAr: [
        "إشعار القبول (نموذج JW201 أو JW202)",
        "نموذج فحص طبي (من مستشفى معتمد)",
        "جواز سفر ساري المفعول لمدة 6 أشهر أو أكثر",
        "نموذج طلب التأشيرة والصورة",
        "لـ X1: يتطلب شهادة صحية وتصريح إقامة خلال 30 يوم من الوصول"
      ],
      reqEn: [
        "Admission notice (JW201 or JW202 form)",
        "Physical examination form (completed at designated hospital)",
        "Passport valid 6+ months",
        "Visa application form + photo",
        "X1 also requires: health certificate, residence permit within 30 days of arrival"
      ]
    },
    {
      titleAr: "تأشيرة العمل (Z)",
      titleEn: "Work Visa (Z)",
      reqAr: [
        "موافقة تصريح عمل من السلطات الصينية",
        "رسالة تأكيد الوظيفة",
        "جواز سفر ساري لمدة 6 أشهر أو أكثر",
        "نموذج الطلب مع صورة شخصية",
        "شهادة طبية",
        "صحيفة خالة جنائية (فيش وتشبيه)"
      ],
      reqEn: [
        "Work permit approval from Chinese authority",
        "Employment confirmation letter",
        "Passport valid 6+ months",
        "Visa application form + photo",
        "Medical health certificate",
        "Criminal background check"
      ]
    },
    {
      titleAr: "تأشيرة S1 (للعائلات المقيمة)",
      titleEn: "S1 Visa (Spouse/Children)",
      reqAr: [
        "جواز سفر المقيم في الصين (أجنبي مع تصريح عمل/إقامة)",
        "عقد زواج أو شهادة ميلاد (مصدقة)",
        "جواز سفر المتقدم ساري لمدة 6 أشهر",
        "نموذج الطلب وصورة شخصية",
        "إثبات صلة القرابة"
      ],
      reqEn: [
        "Passport of Chinese resident (foreigner with work/residence permit)",
        "Marriage certificate or birth certificate (notarized)",
        "Applicant's passport valid 6+ months",
        "Visa application form + photo",
        "Proof of relationship"
      ]
    },
    {
      titleAr: "تأشيرة S2 (زيارة الأهل)",
      titleEn: "S2 Visa (Parents/Siblings)",
      reqAr: [
        "رسالة دعوة من الأجنبي المقيم في الصين",
        "صورة تصريح الإقامة للأجنبي",
        "إثبات صلة القرابة (مصدقة)",
        "جواز السفر وصورة شخصية",
        "حجز طيران عودة"
      ],
      reqEn: [
        "Invitation letter from the foreigner residing in China",
        "Foreigner's residence permit copy",
        "Proof of relationship (birth certificate, family book, notarized)",
        "Applicant's passport + photo",
        "Return flight booking"
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة الصينية"
        titleEn="Chinese Embassy Services"
        descriptionAr="الخدمات الأبرز لدينا. نقدم دعماً شاملاً لجميع متطلبات التأشيرات وتصديق الوثائق للسفارة الصينية في كوالالمبور بدقة واحترافية."
        descriptionEn="Our flagship services. We provide comprehensive support for all visa requirements and document authentication for the Chinese Embassy in Kuala Lumpur with precision and professionalism."
        imageFallbackUrl="/heroes/chinese.jpg"
      />

      <section className="py-20 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl font-bold text-secondary mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("خدمات التأشيرات", "Visa Services")}
            </h2>
            <p className={`text-muted-foreground text-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("نساعدك في تحديد نوع التأشيرة المناسب وتجهيز الملف بالكامل لضمان قبول الطلب.", "We help you determine the appropriate visa type and prepare the full file to ensure approval.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {visaServices.map((service, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleServiceClick(service.reqIndex)}
                className="text-start"
              >
                <Card className="h-full border-t-4 border-t-primary hover:shadow-lg hover:border-t-accent hover:-translate-y-1 transition-all cursor-pointer group">
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-xl flex items-center gap-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      {t(service.titleAr, service.titleEn)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-base ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t(service.descAr, service.descEn)}
                    </CardDescription>
                    <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("عرض المتطلبات", "View Requirements")}
                      <ArrowLeft className={`w-4 h-4 ${lang === "ar" ? "" : "rotate-180"} group-hover:${lang === "ar" ? "-translate-x-1" : "translate-x-1"} transition-transform`} />
                    </span>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto" id="visa-requirements">
            <h2 className={`text-3xl font-bold text-secondary mb-8 border-${lang === "ar" ? "r" : "l"}-4 border-primary px-4 ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("متطلبات التأشيرات", "Visa Requirements")}
            </h2>
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="w-full space-y-4">
              {visaRequirements.map((visa, i) => (
                <AccordionItem key={i} id={`req-${i}`} value={`visa-${i}`} className="border rounded-xl px-4 bg-gray-50 hover:border-primary/30 transition-colors data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20 scroll-mt-24">
                  <AccordionTrigger className={`text-lg font-medium text-secondary hover:no-underline ${lang === "ar" ? "font-arabic" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span>{t(visa.titleAr, visa.titleEn)}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 px-4">
                    <h4 className={`font-bold text-secondary mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("المتطلبات:", "Requirements:")}
                    </h4>
                    <ul className="space-y-3">
                      {(lang === "ar" ? visa.reqAr : visa.reqEn).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                          <span className={`text-muted-foreground ${lang === "ar" ? "font-arabic" : ""}`}>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </section>

      <section className="py-20 bg-slate-50" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className={`text-3xl font-bold text-secondary mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("خدمات الوثائق والتصديقات", "Document & Authentication Services")}
              </h2>
              <p className={`text-muted-foreground text-lg mb-8 leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("إن تجهيز الوثائق بشكل صحيح هو الخطوة الأهم. فريقنا متخصص في مراجعة وتصديق جميع الأوراق الرسمية المطلوبة من قبل السفارة الصينية لضمان عدم رفض المعاملة.", "Preparing documents correctly is the most important step. Our team specializes in reviewing and authenticating all official documents required by the Chinese Embassy to ensure your transaction is not rejected.")}
              </p>
              
              <div className="space-y-6">
                {docServices.map((service, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 text-primary">
                      {i % 2 === 0 ? <FileSignature /> : <FileCheck />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t(service.titleAr, service.titleEn)}
                      </h3>
                      <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t(service.descAr, service.descEn)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                <div className={`absolute top-0 ${lang === "ar" ? "right-0" : "left-0"} opacity-10`}>
                  <Zap className={`w-64 h-64 -mt-16 ${lang === "ar" ? "-mr-16" : "-ml-16"}`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 relative z-10 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t("مميزات إضافية", "Additional Features")}
                </h3>
                <ul className={`space-y-4 relative z-10 ${lang === "ar" ? "font-arabic" : ""}`}>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">{t("معالجة سريعة", "Express Processing")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">{t("حجز وإدارة المواعيد بفعالية", "Efficient appointment booking and management")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">{t("استشارات مجانية حول متطلبات التأشيرة", "Free consultations on visa requirements")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-lg">{t("متابعة حالة الطلب وتحديث العميل أولاً بأول", "Track application status and keep clients updated")}</span>
                  </li>
                </ul>

                <div className="mt-10 bg-black/20 rounded-xl p-5 border border-white/10 relative z-10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className={`font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("موقع السفارة الصينية في كوالالمبور", "Chinese Embassy Location in Kuala Lumpur")}
                      </h4>
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