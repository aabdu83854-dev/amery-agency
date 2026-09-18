import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useLanguage } from "@/contexts/language";

const SERVICE_LABELS: Record<string, { ar: string; en: string }> = {
  chinese:      { ar: "السفارة الصينية",                          en: "Chinese Embassy" },
  yemeni:       { ar: "السفارة اليمنية",                          en: "Yemeni Embassy" },
  american:     { ar: "السفارة الأمريكية",                        en: "American Embassy" },
  tourism:      { ar: "خدمات السياحة",                            en: "Tourism Services" },
  facilitation: { ar: "خدمات التسهيل (تأجير، استقبال...)",        en: "Facilitation (Rental, Pickup...)" },
  other:        { ar: "أخرى",                                     en: "Other" },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabel = service
      ? (lang === "ar" ? SERVICE_LABELS[service]?.ar : SERVICE_LABELS[service]?.en) ?? service
      : t("غير محدد", "Not specified");

    const text = lang === "ar"
      ? `مرحباً وكالة العامري للسفر 👋\n\nالاسم: ${name}\nرقم الهاتف: ${phone}${email ? `\nالبريد: ${email}` : ""}\nالخدمة المطلوبة: ${serviceLabel}\n\nالرسالة:\n${message}`
      : `Hello Al-Ameri Travel Agency 👋\n\nName: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\nService needed: ${serviceLabel}\n\nMessage:\n${message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/601111600826?text=${encoded}`, "_blank");
  };

  return (
    <Layout>
      <HeroSection
        titleAr="اتصل بنا"
        titleEn="Contact Us"
        descriptionAr="نحن هنا لمساعدتك والإجابة على كافة استفساراتك. لا تتردد في التواصل معنا عبر قنواتنا المتعددة أو بزيارة مكتبنا."
        descriptionEn="We are here to help you and answer all your inquiries. Feel free to reach us through our multiple channels or by visiting our office."
        imageFallbackUrl="/heroes/contact.jpg"
        height="small"
      />

      <section className="py-20 bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className={`text-3xl font-bold text-secondary mb-8 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("معلومات التواصل", "Contact Information")}
              </h2>

              <div className="grid gap-6 mb-12">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("العنوان", "Address")}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed" dir="ltr" style={{textAlign: lang === "ar" ? "right" : "left"}}>
                      One South,<br />
                      43300 Seri Kembangan,<br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("رقم الهاتف & واتساب", "Phone & WhatsApp")}
                    </h3>
                    <a
                      href="tel:+601111600826"
                      className="text-muted-foreground font-sans hover:text-primary transition-colors"
                      dir="ltr"
                      style={{display: "block", textAlign: lang === "ar" ? "right" : "left"}}
                    >
                      +60 111 160 0826
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("البريد الإلكتروني", "Email Address")}
                    </h3>
                    <a
                      href="mailto:ALAMERI.T.A10@GMAIL.COM"
                      className="text-muted-foreground font-sans hover:text-primary transition-colors text-sm"
                      dir="ltr"
                      style={{display: "block", textAlign: lang === "ar" ? "right" : "left"}}
                    >
                      ALAMERI.T.A10@GMAIL.COM
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("ساعات العمل", "Business Hours")}
                    </h3>
                    <p className={`text-muted-foreground text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("الاثنين - الجمعة: 9:00 ص - 5:00 م", "Monday - Friday: 9:00 AM - 5:00 PM")}
                    </p>
                    <p className={`text-muted-foreground text-sm mt-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("السبت: 9:00 ص - 1:00 م", "Saturday: 9:00 AM - 1:00 PM")}
                    </p>
                    <p className={`text-muted-foreground text-sm mt-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("الأحد: مغلق", "Sunday: Closed")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form → WhatsApp */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <h2 className={`text-2xl font-bold text-secondary mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("أرسل لنا رسالة", "Send Us a Message")}
              </h2>
              <p className={`text-sm text-muted-foreground mb-6 flex items-center gap-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                <MessageCircle className="text-whatsapp w-4 h-4 shrink-0" />
                {t("سيتم فتح واتساب برسالة جاهزة", "WhatsApp will open with a ready message")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("الاسم الكامل *", "Full Name *")}
                    </Label>
                    <Input
                      id="name"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className={`h-12 ${lang === "ar" ? "font-arabic text-right" : ""}`}
                      placeholder={t("الاسم الكامل", "Full Name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("رقم الهاتف / واتساب *", "Phone / WhatsApp *")}
                    </Label>
                    <Input
                      id="phone"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="font-sans h-12"
                      style={{textAlign: lang === "ar" ? "right" : "left"}}
                      placeholder={t("رقم الهاتف", "Phone Number")}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("البريد الإلكتروني (اختياري)", "Email (Optional)")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="font-sans h-12"
                    style={{textAlign: lang === "ar" ? "right" : "left"}}
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("نوع الخدمة المطلوبة *", "Service Needed *")}
                  </Label>
                  <Select required onValueChange={setService}>
                    <SelectTrigger
                      className={`h-12 justify-between ${lang === "ar" ? "font-arabic text-right flex-row-reverse" : "text-left"}`}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    >
                      <SelectValue placeholder={t("اختر الخدمة", "Select a Service")} />
                    </SelectTrigger>
                    <SelectContent dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "font-arabic" : ""}>
                      {Object.entries(SERVICE_LABELS).map(([value, labels]) => (
                        <SelectItem key={value} value={value}>
                          {lang === "ar" ? labels.ar : labels.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("الرسالة / الاستفسار *", "Message / Inquiry *")}
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={`min-h-[120px] resize-none ${lang === "ar" ? "font-arabic text-right" : ""}`}
                    placeholder={t("كيف يمكننا مساعدتك؟", "How can we help you?")}
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full h-14 text-lg rounded-xl gap-3 mt-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold flex items-center justify-center ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <MessageCircle className="w-6 h-6" />
                  {t("إرسال عبر واتساب", "Send via WhatsApp")}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps — One South, Seri Kembangan */}
      <section className="h-[420px] w-full">
        <iframe
          title="Al-Ameri Office Location"
          src="https://maps.google.com/maps?q=One+South+Seri+Kembangan+43300+Selangor+Malaysia&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Layout>
  );
}
