import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/message/EVO4ES3SH4TVA1";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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

  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:01111600826" className="flex items-center gap-2 hover:text-accent transition-colors" dir="ltr">
              <Phone size={14} />
              <span>01111600826</span>
            </a>
            <a href="mailto:ALAMERI.T.A10@GMAIL.COM" className="flex items-center gap-2 hover:text-accent transition-colors" dir="ltr">
              <Mail size={14} />
              <span>ALAMERI.T.A10@GMAIL.COM</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-right">
            <MapPin size={14} />
            <span>Kajang, Selangor, Malaysia</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Al-Ameri Travel Agency Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150x50?text=Al-Ameri+Logo";
                }}
              />
              <div className="hidden sm:block">
                <h1 className="font-bold text-primary text-xl font-arabic leading-tight">وكالة العامري للسفر</h1>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Al-Ameri Travel Agency</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`relative group font-arabic font-medium transition-colors ${
                    location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span className="block text-sm sm:text-base">{link.ar}</span>
                  <span className="block text-[10px] text-muted-foreground font-sans uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {link.en}
                  </span>
                  {location === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button asChild className="hidden md:flex gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-arabic">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  <span>تواصل معنا</span>
                </a>
              </Button>
              
              <button 
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-2">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-6 py-3 font-arabic flex justify-between items-center ${
                    location === link.href ? "bg-primary/5 text-primary border-r-4 border-primary" : "text-foreground border-r-4 border-transparent"
                  }`}
                >
                  <span className="font-medium">{link.ar}</span>
                  <span className="text-xs text-muted-foreground font-sans">{link.en}</span>
                </Link>
              ))}
              <div className="px-6 mt-4">
                <Button asChild className="w-full gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-arabic">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    <span>تواصل معنا عبر واتساب</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6 bg-white/10 p-4 rounded-lg inline-block">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Al-Ameri Logo" 
                  className="h-16 w-auto filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150x50?text=Logo";
                  }}
                />
              </div>
              <p className="text-secondary-foreground/80 mb-6 font-arabic leading-relaxed">
                وكالة العامري للسفر هي وكالتك الموثوقة في ماليزيا لخدمات السفارات، وتخليص المعاملات، والسياحة. نخدم الجالية العربية باحترافية وسرعة.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-arabic mb-6 text-white relative inline-block">
                روابط سريعة
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3 font-arabic">
                {navLinks.slice(1, 6).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-secondary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 block"></span>
                      {link.ar}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold font-arabic mb-6 text-white relative inline-block">
                معلومات التواصل
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-4 font-arabic">
                <li className="flex items-start gap-3 text-secondary-foreground/80">
                  <MapPin className="text-accent shrink-0 mt-1" size={18} />
                  <span>Pearl Avenue 822, Jalan Pasir Emas, Taman Berjaya, 43000 Kajang, Selangor, Malaysia</span>
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

            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-bold font-arabic mb-6 text-white relative inline-block">
                ساعات العمل
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3 font-arabic text-secondary-foreground/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>الاثنين - الجمعة</span>
                  <span dir="ltr">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>السبت</span>
                  <span dir="ltr">9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between text-accent">
                  <span>الأحد</span>
                  <span>مغلق</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60 font-sans">
            <p>&copy; {new Date().getFullYear()} Al-Ameri Travel Agency. All rights reserved.</p>
            <p dir="rtl" className="font-arabic">جميع الحقوق محفوظة لوكالة العامري للسفر</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1.5 rounded-lg shadow-md text-sm font-arabic font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          تحدث معنا الآن
        </span>
      </a>
    </div>
  );
}
