import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/language";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function YemeniEmbassy() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const services = [
    {
      titleAr: "تجديد جواز السفر",
      titleEn: "Passport Renewal",
      reqAr: [
        "جواز السفر القديم (الأصل والصورة)",
        "صورة شخصية حديثة ٤×٦ بخلفية بيضاء",
        "نموذج الطلب مملوء بالكامل",
        "إثبات الإقامة في ماليزيا",
        "رسوم خدمة السفارة",
        "بطاقة الهوية الوطنية (الأصل والصورة)"
      ],
      reqEn: [
        "Original old passport + copy",
        "Recent 4×6 photo, white background",
        "Completed application form",
        "Proof of residence in Malaysia",
        "Embassy service fees",
        "National ID card (original + copy)"
      ]
    },
    {
      titleAr: "شهادة الميلاد",
      titleEn: "Birth Certificate",
      reqAr: [
        "طلب خطي من ولي الأمر",
        "جوازات سفر الوالدين",
        "وثيقة زواج الوالدين (مصدقة)",
        "إثبات الولادة من المستشفى",
        "صورة شخصية للطفل",
        "بطاقة إقامة الوالدين في ماليزيا"
      ],
      reqEn: [
        "Written request from guardian",
        "Parents' passports",
        "Parents' certified marriage certificate",
        "Hospital birth proof document",
        "Child's photo",
        "Parents' Malaysian residency card"
      ]
    },
    {
      titleAr: "توثيق عقد الزواج",
      titleEn: "Marriage Certificate Authentication",
      reqAr: [
        "عقد الزواج الأصلي معتمد من الجهة المختصة",
        "جوازات سفر الزوج والزوجة",
        "صور شخصية للزوجين",
        "إثبات الإقامة",
        "شاهدان وتزكيتهما"
      ],
      reqEn: [
        "Original certified marriage contract",
        "Both spouses' passports",
        "Photos of both spouses",
        "Residence proof",
        "Two witnesses with their IDs"
      ]
    },
    {
      titleAr: "الوكالة الشرعية",
      titleEn: "Power of Attorney",
      reqAr: [
        "جواز سفر الموكّل (الأصل والصورة)",
        "بيانات الوكيل كاملة (الاسم، الهوية، العنوان)",
        "تحديد نوع الوكالة (عامة/خاصة)",
        "توقيع الموكّل أمام موظف القنصلية",
        "رسوم التوثيق"
      ],
      reqEn: [
        "Principal's passport (original + copy)",
        "Agent's full details (name, ID, address)",
        "Type of power of attorney (general/specific)",
        "Principal's signature before consular officer",
        "Notarization fees"
      ]
    },
    {
      titleAr: "تختيم الأوراق",
      titleEn: "Document Stamping",
      reqAr: [
        "الوثيقة الأصلية المراد تختيمها",
        "ترجمة معتمدة إذا كانت الوثيقة بغير العربية",
        "صورة جواز السفر",
        "رسوم الختم حسب نوع الوثيقة"
      ],
      reqEn: [
        "Original document to be stamped",
        "Certified translation if not in Arabic",
        "Copy of passport",
        "Stamp fees depending on document type"
      ]
    },
    {
      titleAr: "المصادقة على الوثائق",
      titleEn: "Document Authentication",
      reqAr: [
        "الوثيقة الأصلية",
        "صورة جواز السفر",
        "تفاصيل الجهة المستهدفة (اسم الجهة والبلد)",
        "رسوم المصادقة",
        "في بعض الحالات: تصديق وزارة الخارجية اليمنية أولاً"
      ],
      reqEn: [
        "Original document",
        "Passport copy",
        "Details of receiving authority",
        "Authentication fees",
        "Sometimes: Yemen MFA authentication first"
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة اليمنية"
        titleEn="Yemeni Embassy Services"
        descriptionAr="نحن نتفهم احتياجات الجالية اليمنية في ماليزيا. نوفر خدمات تخليص المعاملات القنصلية بسرعة وكفاءة لضمان راحة بالك."
        descriptionEn="We understand the needs of the Yemeni community in Malaysia. We provide fast and efficient consular clearance services to ensure your peace of mind."
        imageFallbackUrl="/heroes/yemeni.jpg"
      />

      <section className="py-24 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold text-secondary mb-4 relative inline-block ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("الخدمات القنصلية ومتطلباتها", "Consular Services & Requirements")}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className={`text-muted-foreground text-lg mt-6 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("يقوم فريقنا بمراجعة المعاملات وتجهيزها نيابة عنك لتوفير الجهد والوقت.", "Our team reviews and processes transactions on your behalf to save time and effort.")}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {services.map((service, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 bg-gray-50 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className={`text-lg font-medium text-secondary hover:no-underline ${lang === "ar" ? "font-arabic" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span>{t(service.titleAr, service.titleEn)}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 px-4">
                    <h4 className={`font-bold text-secondary mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("المتطلبات:", "Requirements:")}
                    </h4>
                    <ul className="space-y-3">
                      {(lang === "ar" ? service.reqAr : service.reqEn).map((req, idx) => (
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

            <div className={`mt-16 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center ${lang === "ar" ? "font-arabic" : ""}`}>
              <h3 className="text-2xl font-bold text-secondary mb-4">{t("هل تحتاج إلى مساعدة عاجلة؟", "Need urgent help?")}</h3>
              <p className="text-muted-foreground text-lg mb-6">
                {t("بعض المعاملات تتطلب تجهيزاً خاصاً أو حضوراً شخصياً. تواصل معنا لنرشدك للخطوات الصحيحة.", "Some transactions require special preparation or personal presence. Contact us to guide you through the right steps.")}
              </p>
              <a 
                href="https://wa.me/message/EVO4ES3SH4TVA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1DA851] transition-colors"
              >
                {t("تواصل معنا عبر واتساب", "Contact us via WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}