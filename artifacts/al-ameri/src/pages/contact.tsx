import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/contexts/language";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("تم إرسال رسالتك بنجاح", "Your message was sent successfully"),
        description: t("سنتواصل معك في أقرب وقت ممكن.", "We will contact you as soon as possible."),
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
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
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed" dir="ltr" style={{textAlign: lang === "ar" ? 'right' : 'left'}}>
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
                    <p className="text-muted-foreground font-sans" dir="ltr" style={{textAlign: lang === "ar" ? 'right' : 'left'}}>
                      01111600826
                    </p>
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
                    <p className="text-muted-foreground font-sans" dir="ltr" style={{textAlign: lang === "ar" ? 'right' : 'left'}}>
                      ALAMERI.T.A10@GMAIL.COM
                    </p>
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

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <h2 className={`text-2xl font-bold text-secondary mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("أرسل لنا رسالة", "Send Us a Message")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("الاسم الكامل", "Full Name")}
                    </Label>
                    <Input id="name" required className={`h-12 ${lang === "ar" ? "font-arabic text-right" : ""}`} placeholder={t("الاسم الكامل", "Full Name")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t("رقم الهاتف / واتساب", "Phone / WhatsApp")}
                    </Label>
                    <Input id="phone" required className="font-sans h-12" style={{textAlign: lang === "ar" ? "right" : "left"}} placeholder={t("رقم الهاتف", "Phone Number")} dir="ltr" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("البريد الإلكتروني (اختياري)", "Email (Optional)")}
                  </Label>
                  <Input id="email" type="email" className="font-sans h-12" style={{textAlign: lang === "ar" ? "right" : "left"}} placeholder="example@email.com" dir="ltr" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("نوع الخدمة المطلوبة", "Service Needed")}
                  </Label>
                  <Select required>
                    <SelectTrigger className={`h-12 justify-between ${lang === "ar" ? "font-arabic text-right flex-row-reverse" : "text-left"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
                      <SelectValue placeholder={t("اختر الخدمة", "Select a Service")} />
                    </SelectTrigger>
                    <SelectContent dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "font-arabic" : ""}>
                      <SelectItem value="chinese">{t("السفارة الصينية", "Chinese Embassy")}</SelectItem>
                      <SelectItem value="yemeni">{t("السفارة اليمنية", "Yemeni Embassy")}</SelectItem>
                      <SelectItem value="american">{t("السفارة الأمريكية", "American Embassy")}</SelectItem>
                      <SelectItem value="tourism">{t("خدمات السياحة", "Tourism Services")}</SelectItem>
                      <SelectItem value="facilitation">{t("خدمات التسهيل (تأجير، استقبال...)", "Facilitation (Rental, Pickup...)")}</SelectItem>
                      <SelectItem value="other">{t("أخرى", "Other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={`font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("الرسالة / الاستفسار", "Message / Inquiry")}
                  </Label>
                  <Textarea 
                    id="message" 
                    required 
                    className={`min-h-[120px] resize-none ${lang === "ar" ? "font-arabic text-right" : ""}`} 
                    placeholder={t("كيف يمكننا مساعدتك؟", "How can we help you?")} 
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full h-14 text-lg rounded-xl gap-2 mt-4 flex items-center justify-center ${lang === "ar" ? "font-arabic" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("جاري الإرسال...", "Sending...") : t("إرسال الرسالة", "Send Message")}
                  {!isSubmitting && <Send className={`w-5 h-5 ${lang === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className={`absolute inset-0 flex items-center justify-center flex-col text-slate-500 ${lang === "ar" ? "font-arabic" : ""}`}>
          <MapPin className="w-12 h-12 mb-4 opacity-50" />
          <p className="text-lg">{t("خريطة الموقع (Seri Kembangan, Selangor)", "Location Map (Seri Kembangan, Selangor)")}</p>
          <p className="text-sm font-sans mt-2">Map embed placeholder</p>
        </div>
      </section>

    </Layout>
  );
}