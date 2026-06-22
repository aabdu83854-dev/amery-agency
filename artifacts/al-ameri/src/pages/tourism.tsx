import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/language";

export default function Tourism() {
  const { lang } = useLanguage();
  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  const destinations = [
    {
      id: "petronas",
      nameAr: "برجا بتروناس التوأم",
      nameEn: "Petronas Twin Towers",
      descAr: "أيقونة العاصمة كوالالمبور المعمارية. يتميزان بتصميمهما الإسلامي المذهل والجسر المعلق الذي يربط بينهما، مع حديقة خلابة ومركز تسوق فخم تحتهما.",
      descEn: "An architectural icon in Kuala Lumpur. Featuring stunning Islamic design, a connecting sky bridge, and a beautiful park with luxury shopping below.",
      image: "/tourism/petronas.png"
    },
    {
      id: "langkawi",
      nameAr: "جزيرة لنكاوي",
      nameEn: "Langkawi Island",
      descAr: "أرخبيل استوائي ساحر يتميز بشواطئه الرملية البيضاء ومياهه الصافية. تضم التلفريك الشهير وجسر السماء وغابات المانغروف الغنية بالحياة البرية.",
      descEn: "A tropical archipelago boasting white sandy beaches and clear waters. Home to the famous cable car, sky bridge, and wildlife-rich mangrove forests.",
      image: "/tourism/langkawi.png"
    },
    {
      id: "penang",
      nameAr: "جزيرة بينانج",
      nameEn: "Penang",
      descAr: "عاصمة الطهي في ماليزيا. تتميز بمدينة جورج تاون التاريخية المليئة بفنون الشارع والهندسة المعمارية الاستعمارية وتل بينانج المرتفع.",
      descEn: "Malaysia's culinary capital. Features the historic George Town full of street art, colonial architecture, and the elevated Penang Hill.",
      image: "/tourism/penang.png"
    },
    {
      id: "cameron",
      nameAr: "مرتفعات كاميرون",
      nameEn: "Cameron Highlands",
      descAr: "ملاذ بارد يتميز بمزارع الشاي الخضراء الممتدة على التلال، ومزارع الفراولة والزهور، ومناخها المعتدل الذي يوفر استراحة من حرارة الجو الاستوائي.",
      descEn: "A cool retreat with rolling green tea plantations, strawberry and flower farms, and a mild climate providing a break from tropical heat.",
      image: "/tourism/cameron.png"
    },
    {
      id: "malacca",
      nameAr: "مدينة ملقا (ملاكا)",
      nameEn: "Malacca",
      descAr: "مدينة تاريخية مدرجة في التراث العالمي لليونسكو. تشتهر بالميدان الهولندي الأحمر وشارع جونكر والتأثيرات الثقافية البرتغالية والهولندية.",
      descEn: "A UNESCO World Heritage historic city. Famous for its red Dutch Square, Jonker Street, and Portuguese-Dutch cultural influences.",
      image: "/tourism/malacca.png"
    },
    {
      id: "batucaves",
      nameAr: "كهوف باتو",
      nameEn: "Batu Caves",
      descAr: "معبد هندوسي مذهل داخل كهوف جيرية ضخمة. يشتهر بتمثاله الذهبي العملاق والدرج الملون المكون من 272 درجة للصعود إلى الكهف الرئيسي.",
      descEn: "An amazing Hindu temple inside massive limestone caves. Famous for its giant golden statue and the colorful 272 steps leading up to the main cave.",
      image: "/tourism/batucaves.png"
    },
    {
      id: "tamannegara",
      nameAr: "غابة تامان نيجارا",
      nameEn: "Taman Negara",
      descAr: "من أقدم الغابات المطيرة في العالم. تقدم تجربة استثنائية لعشاق الطبيعة من خلال مسارات المشي المعلقة فوق الأشجار ورحلات القوارب في النهر.",
      descEn: "One of the world's oldest rainforests. Offers an exceptional experience for nature lovers with canopy walks and river boat trips.",
      image: "/tourism/tamannegara.png"
    },
    {
      id: "redang",
      nameAr: "جزيرة ريدانج",
      nameEn: "Redang Island",
      descAr: "وجهة مثالية للغوص والغطس، بفضل مياهها الفيروزية الكريستالية والشعاب المرجانية الغنية التي تجعلها واحدة من أجمل جزر ماليزيا.",
      descEn: "A perfect destination for diving and snorkeling, thanks to its crystal turquoise waters and rich coral reefs making it one of Malaysia's most beautiful islands.",
      image: "/tourism/redang.png"
    },
    {
      id: "klcc",
      nameAr: "مركز كوالالمبور (KLCC)",
      nameEn: "Kuala Lumpur City Centre",
      descAr: "قلب العاصمة النابض بالحياة. يضم حديقة واسعة مع نوافير راقصة وعالم ما تحت الماء (أكواريا) ومراكز تسوق راقية.",
      descEn: "The vibrant heart of the capital. Includes a vast park with dancing fountains, Aquaria underwater world, and premium shopping centers.",
      image: "/tourism/klcc.png"
    },
    {
      id: "genting",
      nameAr: "مرتفعات جنتنج",
      nameEn: "Genting Highlands",
      descAr: "مدينة الترفيه فوق السحاب. تضم مدينة ملاهي ضخمة ومراكز تسوق وصعود مثير عبر التلفريك وسط الضباب الكثيف.",
      descEn: "The city of entertainment above the clouds. Features a massive theme park, shopping centers, and a thrilling cable car ride through thick mist.",
      image: "/tourism/genting.png"
    }
  ];

  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
  };

  return (
    <Layout>
      <HeroSection 
        titleAr="اكتشف سحر ماليزيا"
        titleEn="Discover the Magic of Malaysia"
        descriptionAr="ماليزيا، جنة آسيا الاستوائية، تقدم مزيجاً فريداً من الطبيعة الساحرة، المدن الحديثة، والثقافة المتنوعة. رتب رحلتك معنا لتجربة لا تُنسى."
        descriptionEn="Malaysia, tropical Asia's paradise, offers a unique blend of enchanting nature, modern cities, and diverse culture. Plan your trip with us for an unforgettable experience."
        imageFallbackUrl="/heroes/tourism.jpg"
      />

      <section className="py-24 bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-secondary mb-4 relative inline-block ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("أجمل الوجهات السياحية", "Most Beautiful Tourist Destinations")}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className={`text-muted-foreground mt-8 text-lg ${lang === "ar" ? "font-arabic" : ""}`}>
              {t("نوفر برامج سياحية مرنة ومصممة خصيصاً لتناسب تفضيلاتك العائلية أو الفردية.", "We offer flexible tourism programs tailored to suit your family or individual preferences.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={getImageUrl(dest.image)} 
                    alt={dest.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f11?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className={`text-2xl font-bold text-white mb-1 drop-shadow-md ${lang === "ar" ? "font-arabic" : ""}`}>
                      {t(dest.nameAr, dest.nameEn)}
                    </h3>
                    {lang === "ar" && (
                       <p className="text-sm font-sans text-white/80 uppercase tracking-wider">{dest.nameEn}</p>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className={`text-muted-foreground leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {t(dest.descAr, dest.descEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}