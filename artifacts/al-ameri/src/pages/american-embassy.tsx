import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Presentation, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AmericanEmbassy() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const visas = [
    {
      titleAr: "تأشيرة B1/B2 (سياحة وأعمال)",
      titleEn: "B1/B2 Tourist & Business Visa",
      reqAr: [
        "تعبئة نموذج DS-160 عبر الإنترنت",
        "جواز سفر ساري المفعول (لـ 6 أشهر على الأقل)",
        "صورة شخصية (5×5 سم بخلفية بيضاء حديثة)",
        "إيصال دفع رسوم التأشيرة (MRV)",
        "رسالة تأكيد موعد المقابلة",
        "إثبات الروابط القوية ببلد الإقامة (خطاب عمل، أملاك، روابط عائلية)",
        "كشف حساب بنكي لآخر 3-6 أشهر",
        "إثبات مكان الإقامة في أمريكا (حجز فندق/دعوة)",
        "خطة السفر (Itinerary)",
        "للتأشيرة التجارية: دعوة من شركة أمريكية وتصريح العمل"
      ],
      reqEn: [
        "Completed DS-160 online application form",
        "Valid passport (valid for at least 6 months beyond intended stay)",
        "Passport-size photo (5×5 cm, white background, recent)",
        "Visa application fee payment receipt (MRV fee)",
        "Appointment confirmation letter from the US Embassy",
        "Evidence of strong ties to home country (employment letter, property ownership, family ties)",
        "Bank statements for the last 3-6 months",
        "Proof of accommodation in the US (hotel bookings/invitation letter)",
        "Travel itinerary",
        "For business: invitation letter from US company, business registration"
      ]
    },
    {
      titleAr: "تأشيرة F1 (طلاب)",
      titleEn: "F1 Student Visa",
      reqAr: [
        "نموذج I-20 من الجامعة/المعهد الأمريكي",
        "تعبئة نموذج DS-160",
        "إيصال دفع رسوم SEVIS (نموذج I-901)",
        "جواز سفر ساري المفعول",
        "كشوف الدرجات والشهادات الأكاديمية",
        "نتائج اختبارات إجادة اللغة الإنجليزية (TOEFL/IELTS)",
        "إثبات القدرة المالية (كشف حساب، كفالة، منحة)",
        "رسوم طلب التأشيرة",
        "إثبات نية العودة لبلد الإقامة بعد الدراسة"
      ],
      reqEn: [
        "Form I-20 from the US university/college (Certificate of Eligibility)",
        "Completed DS-160 form",
        "SEVIS fee payment receipt (Form I-901)",
        "Valid passport",
        "Academic transcripts and diplomas",
        "English proficiency test scores (TOEFL/IELTS)",
        "Financial evidence (bank statements, sponsor letter, scholarship letter)",
        "Visa application fee",
        "Proof of intent to return to home country"
      ]
    },
    {
      titleAr: "تأشيرة العمل H-1B",
      titleEn: "H-1B Work Visa",
      reqAr: [
        "نموذج I-129 معتمد من USCIS",
        "تعبئة نموذج DS-160",
        "جواز سفر ساري المفعول",
        "موافقة LCA",
        "عرض عمل يوضح الراتب وتفاصيل الوظيفة",
        "المؤهلات العلمية وشهادات الخبرة",
        "رسوم طلب التأشيرة"
      ],
      reqEn: [
        "Approved Form I-129 (Petition for Nonimmigrant Worker) by USCIS",
        "Form DS-160",
        "Valid passport",
        "Labor Condition Application (LCA) approval",
        "Employment offer letter with salary details",
        "Educational qualifications and work experience documents",
        "Visa application fee"
      ]
    },
    {
      titleAr: "تأشيرات الهجرة (IV) / العائلية",
      titleEn: "Immigrant Visa (IV) / Family-based",
      reqAr: [
        "عريضة هجرة معتمدة (I-130 أو I-140)",
        "تعبئة نموذج DS-260",
        "فحص طبي من طبيب معتمد",
        "شهادة خلو سوابق من كل دولة أقام فيها لسنة أو أكثر",
        "شهادة ميلاد (مصدقة)",
        "وثيقة زواج (إذا لزم الأمر)",
        "إثبات الدعم المالي (I-864)",
        "كافة الوثائق المدنية الداعمة"
      ],
      reqEn: [
        "Approved immigrant petition (I-130 or I-140)",
        "DS-260 online immigrant visa application",
        "Medical examination at designated physician (required)",
        "Police clearance certificate from every country lived in for 1+ year",
        "Birth certificate (certified)",
        "Marriage certificate (if applicable)",
        "Financial sponsorship (I-864 Affidavit of Support)",
        "All supporting civil documents"
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة الأمريكية"
        titleEn="US Embassy Services"
        descriptionAr="دعم شامل لطلبات التأشيرة الأمريكية. من تجهيز النماذج إلى التحضير للمقابلة، نحن معك خطوة بخطوة."
        descriptionEn="Comprehensive support for US visa applications. From form preparation to interview coaching, we are with you every step of the way."
        imageFallbackUrl="/heroes/american.jpg"
      />

      <section className="py-20 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="mb-16">
              <h2 className={`text-3xl font-bold text-secondary mb-8 border-${lang === "ar" ? "r" : "l"}-4 border-primary px-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("تجهيز ملف التأشيرة والمقابلة", "Visa File and Interview Preparation")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <FileText />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("تجهيز الوثائق والنماذج", "Document and Form Preparation")}
                      </h3>
                      <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("تعبئة دقيقة لنموذج DS-160، وتجهيز الإثباتات المالية والوثائق الداعمة للطلب.", "Accurate completion of the DS-160 form, and preparation of financial proofs and supporting documents.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Presentation />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("التدريب على المقابلة", "Interview Coaching")}
                      </h3>
                      <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("جلسات تدريبية مكثفة للتحضير لمقابلة القنصل، وكيفية الإجابة بثقة على الأسئلة المتوقعة.", "Intensive coaching sessions to prepare for the consular interview and answer expected questions confidently.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Users />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("المرافقة والترجمة", "Escort and Translation")}
                      </h3>
                      <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("مرافقة العميل للمقابلة، وخدمات الترجمة المعتمدة (عربي ↔ إنجليزي) لجميع الوثائق.", "Escorting clients to interviews, and certified translation services (Arabic ↔ English) for all documents.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <FileText />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("الفحص الطبي وحجز المواعيد", "Medical Exams and Appointments")}
                      </h3>
                      <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                        {t("مساعدة في حجز مواعيد المقابلة، والمرافقة أثناء إجراء الفحوصات الطبية المطلوبة لتأشيرات الهجرة.", "Assistance in booking interview appointments and escorting during required medical exams for immigrant visas.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className={`text-3xl font-bold text-secondary mb-8 border-${lang === "ar" ? "r" : "l"}-4 border-accent px-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("متطلبات التأشيرات", "Visa Requirements")}
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {visas.map((visa, i) => (
                  <AccordionItem key={i} value={`visa-${i}`} className="border rounded-xl px-4 bg-gray-50 hover:border-primary/30 transition-colors">
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
                        {t("المتطلبات الأساسية:", "Basic Requirements:")}
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
        </div>
      </section>
    </Layout>
  );
}