import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Presentation, GraduationCap, Briefcase } from "lucide-react";

export default function AmericanEmbassy() {
  return (
    <Layout>
      <HeroSection 
        titleAr="خدمات السفارة الأمريكية"
        titleEn="US EMBASSY SERVICES"
        descriptionAr="دعم شامل لطلبات التأشيرة الأمريكية. من تجهيز النماذج إلى التحضير للمقابلة، نحن معك خطوة بخطوة."
        imageFallbackUrl="/heroes/american.jpg"
      />

      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-arabic text-secondary mb-8 border-r-4 border-primary pr-4">
                تجهيز ملف التأشيرة والمقابلة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <FileText />
                    </div>
                    <div>
                      <h3 className="font-bold font-arabic text-lg mb-2">تجهيز الوثائق والنماذج</h3>
                      <p className="text-muted-foreground font-arabic text-sm">
                        تعبئة دقيقة لنموذج DS-160، وتجهيز الإثباتات المالية والوثائق الداعمة للطلب.
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
                      <h3 className="font-bold font-arabic text-lg mb-2">التدريب على المقابلة</h3>
                      <p className="text-muted-foreground font-arabic text-sm">
                        جلسات تدريبية مكثفة للتحضير لمقابلة القنصل، وكيفية الإجابة بثقة على الأسئلة المتوقعة.
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
                      <h3 className="font-bold font-arabic text-lg mb-2">المرافقة والترجمة</h3>
                      <p className="text-muted-foreground font-arabic text-sm">
                        مرافقة العميل للمقابلة، وخدمات الترجمة المعتمدة (عربي ↔ إنجليزي) لجميع الوثائق.
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
                      <h3 className="font-bold font-arabic text-lg mb-2">الفحص الطبي وحجز المواعيد</h3>
                      <p className="text-muted-foreground font-arabic text-sm">
                        مساعدة في حجز مواعيد المقابلة، والمرافقة أثناء إجراء الفحوصات الطبية المطلوبة لتأشيرات الهجرة.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold font-arabic text-secondary mb-8 border-r-4 border-accent pr-4">
                أنواع التأشيرات المدعومة
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-secondary text-secondary-foreground p-6 rounded-2xl text-center">
                  <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-accent">
                    <Users />
                  </div>
                  <h3 className="font-bold font-arabic text-xl mb-2 text-white">تأشيرة B1/B2</h3>
                  <p className="text-secondary-foreground/80 font-arabic text-sm">
                    تأشيرات الزيارة والسياحة والأعمال قصيرة المدى.
                  </p>
                </div>
                
                <div className="bg-secondary text-secondary-foreground p-6 rounded-2xl text-center">
                  <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-accent">
                    <GraduationCap />
                  </div>
                  <h3 className="font-bold font-arabic text-xl mb-2 text-white">تأشيرة F1</h3>
                  <p className="text-secondary-foreground/80 font-arabic text-sm">
                    تأشيرات الطلاب للدراسة الأكاديمية في الولايات المتحدة.
                  </p>
                </div>

                <div className="bg-secondary text-secondary-foreground p-6 rounded-2xl text-center">
                  <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-accent">
                    <Briefcase />
                  </div>
                  <h3 className="font-bold font-arabic text-xl mb-2 text-white">تأشيرات العمل والهجرة</h3>
                  <p className="text-secondary-foreground/80 font-arabic text-sm">
                    دعم تأشيرات العمل (H-type) وتأشيرات الهجرة (IV).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
