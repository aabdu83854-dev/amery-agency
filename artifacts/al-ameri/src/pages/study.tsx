import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import {
  GraduationCap,
  Languages,
  FileCheck2,
  ClipboardList,
  Plane,
  Home,
  MessageCircle,
  CheckCircle2,
  BookOpen,
  School,
} from "lucide-react";
import { useLanguage } from "@/contexts/language";

export default function Study() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);
  const arFont = lang === "ar" ? "font-arabic" : "";

  const tracks = [
    {
      id: "institutes",
      titleAr: "معاهد اللغة",
      titleEn: "Language Institutes",
      descAr:
        "تبدأ من الصفر أو تبغى ترفع مستواك قبل الجامعة؟ نسجّلك في معهد لغة إنجليزية يناسب مستواك وميزانيتك ومدة إقامتك، سواء دورة قصيرة أو برنامج تأهيلي كامل قبل الدراسة الجامعية.",
      descEn:
        "Starting from zero, or want to raise your level before university? We register you in an English language institute that fits your level, budget and length of stay, from a short course to a full preparatory programme before university.",
      pointsAr: [
        "دورات عامة لكل المستويات",
        "برامج تحضير لاختبارات اللغة مثل IELTS",
        "برامج تأهيلية قبل الجامعة",
        "دورات قصيرة وطويلة",
      ],
      pointsEn: [
        "General courses for all levels",
        "Preparation for language tests such as IELTS",
        "Pre-university preparatory programmes",
        "Short and long courses",
      ],
      icon: <Languages className="w-8 h-8" />,
    },
    {
      id: "universities",
      titleAr: "الجامعات",
      titleEn: "Universities",
      descAr:
        "ماليزيا وجهة دراسية معروفة للطلاب العرب: الدراسة بالإنجليزية، وبيئة مسلمة، وتكاليف معيشة معقولة. نساعدك تختار الجامعة والتخصص، ونجهّز ملف التقديم ونتابعه معك لين يطلع القبول.",
      descEn:
        "Malaysia is a well-known study destination for Arab students: teaching in English, a Muslim-friendly environment and reasonable living costs. We help you choose the university and major, prepare your application file and follow it up with you until the offer is issued.",
      pointsAr: [
        "البكالوريوس والماجستير والدكتوراه",
        "جامعات حكومية وخاصة",
        "السنة التأسيسية والدبلوم",
        "مقارنة الخيارات حسب تخصصك وميزانيتك",
      ],
      pointsEn: [
        "Bachelor's, master's and PhD",
        "Public and private universities",
        "Foundation year and diploma",
        "Comparing options by major and budget",
      ],
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  const steps = [
    {
      titleAr: "استشارة مجانية",
      titleEn: "Free Consultation",
      descAr: "نسمع منك: مؤهلك، التخصص اللي تبغاه، مستوى لغتك، وميزانيتك. وعليها نرشّح لك الخيارات المناسبة.",
      descEn: "We listen first: your qualification, desired major, language level and budget. Then we shortlist suitable options.",
      icon: <MessageCircle className="w-7 h-7" />,
    },
    {
      titleAr: "اختيار المعهد أو الجامعة",
      titleEn: "Choosing the Institute or University",
      descAr: "نشرح لك الفرق بين الخيارات بوضوح: الرسوم، مدة الدراسة، شروط القبول، والمدينة.",
      descEn: "We explain the differences clearly: fees, duration, admission requirements and city.",
      icon: <School className="w-7 h-7" />,
    },
    {
      titleAr: "تجهيز الملف والترجمة المعتمدة",
      titleEn: "File Preparation & Certified Translation",
      descAr: "نراجع وثائقك، ونترجم الشهادات وكشوف الدرجات ترجمة معتمدة، ونتأكد إن الملف كامل قبل التقديم.",
      descEn: "We review your documents, provide certified translation of certificates and transcripts, and make sure the file is complete before applying.",
      icon: <FileCheck2 className="w-7 h-7" />,
    },
    {
      titleAr: "التقديم ومتابعة القبول",
      titleEn: "Application & Follow-up",
      descAr: "نقدّم الطلب ونتابعه مع الجهة التعليمية، ونبلغك بأي مستجد أولاً بأول.",
      descEn: "We submit the application, follow it up with the institution and keep you updated at every step.",
      icon: <ClipboardList className="w-7 h-7" />,
    },
    {
      titleAr: "إجراءات التأشيرة الطلابية",
      titleEn: "Student Visa Procedures",
      descAr: "نمشي معك في متطلبات التأشيرة الطلابية وموافقة الدخول حسب الإجراءات المعتمدة في ماليزيا.",
      descEn: "We guide you through the student visa and entry approval requirements under Malaysia's official procedures.",
      icon: <BookOpen className="w-7 h-7" />,
    },
    {
      titleAr: "الاستقبال من المطار",
      titleEn: "Airport Pickup",
      descAr: "نستقبلك في مطار كوالالمبور بمندوب يتكلم العربية ونوصلك لسكنك.",
      descEn: "An Arabic-speaking representative meets you at Kuala Lumpur airport and takes you to your accommodation.",
      icon: <Plane className="w-7 h-7" />,
    },
    {
      titleAr: "السكن والاستقرار",
      titleEn: "Accommodation & Settling In",
      descAr: "نساعدك في السكن القريب من مكان دراستك، وفي أول معاملاتك بعد الوصول.",
      descEn: "We help with accommodation near your place of study and your first paperwork after arrival.",
      icon: <Home className="w-7 h-7" />,
    },
  ];

  const docsAr = [
    "صورة جواز السفر ساري المفعول",
    "صور شخصية بخلفية حسب المطلوب",
    "الشهادات الدراسية وكشوف الدرجات",
    "ترجمة معتمدة للوثائق إذا كانت بغير الإنجليزية",
    "شهادة لغة إن طلبتها الجهة التعليمية",
  ];
  const docsEn = [
    "Copy of a valid passport",
    "Passport photos with the required background",
    "Academic certificates and transcripts",
    "Certified translation for documents not in English",
    "Language certificate if required by the institution",
  ];

  return (
    <Layout>
      <HeroSection
        titleAr="الدراسة في ماليزيا: معاهد وجامعات"
        titleEn="Study in Malaysia: Institutes & Universities"
        descriptionAr="من أول سؤال لين تجلس في قاعة الدراسة. نسجّلك في معهد اللغة أو الجامعة المناسبة لك، ونجهّز أوراقك، ونستقبلك يوم توصل."
        descriptionEn="From your first question until you are sitting in class. We register you in the right language institute or university, prepare your documents and meet you the day you arrive."
        imageFallbackUrl="/heroes/home.jpg"
      />

      <section className="py-20 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-secondary mb-4 ${arFont}`}>
                {t("وين تبغى تدرس؟", "Where do you want to study?")}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${arFont}`}>
                {t(
                  "مسارين واضحين، ونساعدك تختار اللي يناسب هدفك.",
                  "Two clear tracks, and we help you choose the one that fits your goal."
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tracks.map((track) => (
                <div key={track.id} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {track.icon}
                  </div>
                  <h3 className={`text-2xl font-bold text-secondary mb-2 ${arFont}`}>
                    {t(track.titleAr, track.titleEn)}
                  </h3>
                  {lang === "ar" && (
                    <div className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-4">{track.titleEn}</div>
                  )}
                  <p className={`text-muted-foreground text-lg leading-relaxed mb-6 ${arFont}`}>
                    {t(track.descAr, track.descEn)}
                  </p>
                  <ul className={`space-y-3 ${arFont}`}>
                    {(lang === "ar" ? track.pointsAr : track.pointsEn).map((point) => (
                      <li key={point} className="flex items-start gap-3 text-secondary">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-secondary mb-4 ${arFont}`}>
                {t("كيف نشتغل معك، خطوة بخطوة", "How we work with you, step by step")}
              </h2>
            </div>

            <div className="grid gap-6">
              {steps.map((step, index) => (
                <div key={step.titleEn} className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center font-sans">
                      {index + 1}
                    </div>
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-secondary mb-2 ${arFont}`}>
                      {t(step.titleAr, step.titleEn)}
                    </h3>
                    <p className={`text-muted-foreground text-lg leading-relaxed ${arFont}`}>
                      {t(step.descAr, step.descEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl border border-slate-100 bg-slate-50">
              <h2 className={`text-2xl md:text-3xl font-bold text-secondary mb-6 ${arFont}`}>
                {t("الوثائق المطلوبة غالباً", "Documents usually required")}
              </h2>
              <ul className={`space-y-4 mb-6 ${arFont}`}>
                {(lang === "ar" ? docsAr : docsEn).map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-lg text-secondary">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className={`text-muted-foreground leading-relaxed ${arFont}`}>
                {t(
                  "المتطلبات تختلف من جهة تعليمية لثانية ومن برنامج لثاني. نعطيك القائمة الدقيقة لحالتك في الاستشارة. والقبول النهائي قرار الجهة التعليمية، ودورنا إن ملفك يتقدّم كامل وصحيح ويتابَع لين النتيجة.",
                  "Requirements vary by institution and programme. We give you the exact list for your case during the consultation. Final admission is the institution's decision; our role is to make sure your file is submitted complete and correct, and followed up until the result."
                )}
              </p>
            </div>

            <div className="mt-16 text-center">
              <p className={`text-xl font-medium text-secondary mb-6 ${arFont}`}>
                {t(
                  "قل لنا مؤهلك والتخصص اللي تفكر فيه، ونرد عليك بالخيارات المناسبة.",
                  "Tell us your qualification and the major you have in mind, and we will reply with suitable options."
                )}
              </p>
              <a
                href="https://wa.me/message/EVO4ES3SH4TVA1"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-lg ${arFont}`}
              >
                {t("احجز استشارتك الدراسية المجانية", "Book Your Free Study Consultation")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
