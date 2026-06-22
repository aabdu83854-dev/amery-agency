import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language";

export default function NotFound() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4" dir={lang === "ar" ? "rtl" : "ltr"}>
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className={`text-2xl font-bold text-secondary mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
          {t("الصفحة غير موجودة", "Page Not Found")}
        </h2>
        <p className={`text-muted-foreground mb-8 max-w-md ${lang === "ar" ? "font-arabic" : ""}`}>
          {t("عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يرجى التحقق من الرابط أو العودة إلى الصفحة الرئيسية.", "Sorry, the page you are looking for does not exist or has been moved. Please check the link or return to the home page.")}
        </p>
        <Button asChild size="lg" className={`rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 ${lang === "ar" ? "font-arabic" : ""}`}>
          <Link href="/">{t("العودة للرئيسية", "Return Home")}</Link>
        </Button>
      </div>
    </Layout>
  );
}