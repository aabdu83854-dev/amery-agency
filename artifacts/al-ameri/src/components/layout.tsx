import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";

const WHATSAPP_LINK = "https://wa.me/message/EVO4ES3SH4TVA1";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { lang, toggle } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", ar: "الرئيسية", en: "Home" },
    { href: "/chinese-embassy", ar: "السفارة الصينية", en: "Chinese Embassy" },
    { href: "/yemeni-embassy", ar: "السفارة اليمنية", en: "Yemeni Embassy" },
    { href: "/american-embassy", ar: "السفارة الأمريكية", en: "American Embassy" },
    { href: "/tourism", ar: "السياحة", en: "Tourism" },
    { href: "/facilitation", ar: "خدمات التسهيل", en: "Facilitation" },
    { href: "/contact", ar: "اتصل بنا", en: "Contact" },
  ];

  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  return (
    <div className="min-h-screen flex flex-col font-sans" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header 
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-accent/30 shadow-brand py-2.5"
            : "bg-white border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}logo-mark.png`}
                alt="Al-Ameri Travel Agency"
                className="h-10 md:h-12 w-auto object-contain"
                width={406}
                height={382}
              />
              <div className="leading-tight">
                <span className={`block font-bold text-primary text-base md:text-xl ${lang === "ar" ? "font-arabic" : ""}`}>
                  {t("وكالة العامري للسفر", "Al-Ameri Travel Agency")}
                </span>
                <span className="hidden sm:block text-[11px] text-muted-foreground font-sans uppercase tracking-[0.18em] mt-0.5">
                  {t("Al-Ameri Travel Agency", "Travel & Tourism")}
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`relative group py-1 font-medium whitespace-nowrap transition-colors ${lang === "ar" ? "font-arabic" : ""} ${
                    location === link.href ? "text-primary" : "text-secondary/80 hover:text-primary"
                  }`}
                >
                  <span className="block text-sm 2xl:text-base">{lang === "ar" ? link.ar : link.en}</span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggle}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              >
                <Globe size={16} />
                <span>{lang === "ar" ? "EN" : "عربي"}</span>
              </button>

              <Button asChild className={`hidden md:flex gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white shadow-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  <span>{t("تواصل معنا", "Contact Us")}</span>
                </a>
              </Button>
              
              <button 
                className="xl:hidden p-2 rounded-lg text-secondary hover:bg-muted transition-colors"
                aria-label={t("القائمة", "Menu")}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-brand-lg border-t border-accent/30 animate-in slide-in-from-top-2">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-6 py-3 flex justify-between items-center border-s-4 transition-colors ${lang === "ar" ? "font-arabic" : ""} ${
                    location === link.href
                      ? "bg-primary/5 text-primary border-primary"
                      : "text-secondary/80 border-transparent hover:bg-muted hover:text-primary"
                  }`}
                >
                  <span className="font-medium">{lang === "ar" ? link.ar : link.en}</span>
                </Link>
              ))}
              <div className="px-6 mt-4">
                <Button asChild className={`w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white shadow-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    <span>{t("تواصل معنا عبر واتساب", "Contact us via WhatsApp")}</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}logo-mark-white.png`}
                  alt="Al-Ameri Travel Agency"
                  className="h-14 w-auto object-contain"
                  width={406}
                  height={382}
                />
                <div className="leading-tight">
                  <span className={`block text-lg font-bold text-white ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t("وكالة العامري للسفر", "Al-Ameri Travel Agency")}
                  </span>
                  <span className="block text-[11px] text-white/60 font-sans uppercase tracking-[0.18em] mt-1">
                    Al-Ameri Travel Agency
                  </span>
                </div>
              </div>
              <p className={`text-secondary-foreground/80 mb-6 leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {t(
                  "وكالة العامري للسفر هي وكالتك الموثوقة في ماليزيا لخدمات السفارات، وتخليص المعاملات، والسياحة. نخدم الجالية العربية باحترافية وسرعة.",
                  "Al-Ameri Travel Agency is your trusted partner in Malaysia for embassy services, document clearance, and tourism. We serve our clients with professionalism and speed."
                )}
              </p>
            </div>

            <div>
              <h3 className={`heading-rule text-lg font-bold mb-6 text-white ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("روابط سريعة", "Quick Links")}
              </h3>
              <ul className={`space-y-3 ${lang === "ar" ? "font-arabic" : ""}`}>
                {navLinks.slice(1, 6).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-secondary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 block"></span>
                      {lang === "ar" ? link.ar : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`heading-rule text-lg font-bold mb-6 text-white ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("معلومات التواصل", "Contact Info")}
              </h3>
              <ul className={`space-y-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                <li className="flex items-start gap-3 text-secondary-foreground/80">
                  <MapPin className="text-accent shrink-0 mt-1" size={18} />
                  <span>One South, 43300 Seri Kembangan, Selangor, Malaysia</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/80">
                  <Phone className="text-accent shrink-0" size={18} />
                  <a href="tel:01111600826" className="hover:text-accent transition-colors" dir="ltr">01111600826</a>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/80">
                  <Mail className="text-accent shrink-0" size={18} />
                  <a href="mailto:ALAMERI.T.A10@GMAIL.COM" className="hover:text-accent transition-colors" dir="ltr">ALAMERI.T.A10@GMAIL.COM</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`heading-rule text-lg font-bold mb-6 text-white ${lang === "ar" ? "font-arabic" : ""}`}>
                {t("ساعات العمل", "Business Hours")}
              </h3>
              <ul className={`space-y-3 text-secondary-foreground/80 ${lang === "ar" ? "font-arabic" : ""}`}>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>{t("الاثنين - الجمعة", "Monday - Friday")}</span>
                  <span dir="ltr">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>{t("السبت", "Saturday")}</span>
                  <span dir="ltr">9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between text-accent">
                  <span>{t("الأحد", "Sunday")}</span>
                  <span>{t("مغلق", "Closed")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60 ${lang === "ar" ? "flex-row-reverse font-arabic" : "font-sans"}`}>
            <p dir="ltr" className="font-sans">&copy; {new Date().getFullYear()} Al-Ameri Travel Agency. All rights reserved.</p>
            <p dir="rtl">{t("جميع الحقوق محفوظة لوكالة العامري للسفر", "All rights reserved for Al-Ameri Travel Agency")}</p>
          </div>
        </div>
      </footer>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${lang === "ar" ? "left-6" : "right-6"} z-50 bg-whatsapp hover:bg-whatsapp-hover text-white p-4 rounded-full shadow-brand-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center group`}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className={`absolute ${lang === "ar" ? "right-full mr-4" : "left-full ml-4"} bg-white text-secondary px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block ${lang === "ar" ? "font-arabic" : ""}`}>
          {t("تحدث معنا الآن", "Chat with us now")}
        </span>
      </a>
    </div>
  );
}