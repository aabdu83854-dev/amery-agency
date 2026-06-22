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

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <HeroSection 
        titleAr="اتصل بنا"
        titleEn="CONTACT US"
        descriptionAr="نحن هنا لمساعدتك والإجابة على كافة استفساراتك. لا تتردد في التواصل معنا عبر قنواتنا المتعددة أو بزيارة مكتبنا."
        imageFallbackUrl="/heroes/contact.jpg"
        height="small"
      />

      <section className="py-20 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold font-arabic text-secondary mb-8">معلومات التواصل</h2>
              
              <div className="grid gap-6 mb-12">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold font-arabic text-lg mb-2">العنوان</h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed" dir="ltr" style={{textAlign: 'right'}}>
                      Pearl Avenue 822, Jalan Pasir Emas,<br />
                      Taman Berjaya, 43000 Kajang,<br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-bold font-arabic text-lg mb-2">رقم الهاتف & واتساب</h3>
                    <p className="text-muted-foreground font-sans" dir="ltr" style={{textAlign: 'right'}}>
                      01111600826
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-bold font-arabic text-lg mb-2">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground font-sans" dir="ltr" style={{textAlign: 'right'}}>
                      ALAMERI.T.A10@GMAIL.COM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h3 className="font-bold font-arabic text-lg mb-2">ساعات العمل</h3>
                    <p className="text-muted-foreground font-arabic text-sm">الاثنين - الجمعة: 9:00 ص - 5:00 م</p>
                    <p className="text-muted-foreground font-arabic text-sm mt-1">السبت: 9:00 ص - 1:00 م</p>
                    <p className="text-muted-foreground font-arabic text-sm mt-1">الأحد: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold font-arabic text-secondary mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-arabic font-medium">الاسم الكامل</Label>
                    <Input id="name" required className="font-arabic text-right h-12" placeholder="الاسم الكامل" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-arabic font-medium">رقم الهاتف / واتساب</Label>
                    <Input id="phone" required className="font-sans text-right h-12" placeholder="رقم الهاتف" dir="ltr" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-arabic font-medium">البريد الإلكتروني (اختياري)</Label>
                  <Input id="email" type="email" className="font-sans text-right h-12" placeholder="example@email.com" dir="ltr" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="font-arabic font-medium">نوع الخدمة المطلوبة</Label>
                  <Select required>
                    <SelectTrigger className="font-arabic h-12 text-right justify-between flex-row-reverse" dir="rtl">
                      <SelectValue placeholder="اختر الخدمة" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" className="font-arabic">
                      <SelectItem value="chinese">السفارة الصينية</SelectItem>
                      <SelectItem value="yemeni">السفارة اليمنية</SelectItem>
                      <SelectItem value="american">السفارة الأمريكية</SelectItem>
                      <SelectItem value="tourism">خدمات السياحة</SelectItem>
                      <SelectItem value="facilitation">خدمات التسهيل (تأجير، استقبال...)</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-arabic font-medium">الرسالة / الاستفسار</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="font-arabic text-right min-h-[120px] resize-none" 
                    placeholder="كيف يمكننا مساعدتك؟" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 font-arabic text-lg rounded-xl gap-2 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500 font-arabic">
          <MapPin className="w-12 h-12 mb-4 opacity-50" />
          <p className="text-lg">خريطة الموقع (Kajang, Selangor)</p>
          <p className="text-sm font-sans mt-2">Map embed placeholder</p>
        </div>
      </section>

    </Layout>
  );
}
