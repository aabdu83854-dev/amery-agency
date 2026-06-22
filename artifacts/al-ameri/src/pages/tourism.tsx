import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/hero-section";

const destinations = [
  {
    id: "petronas",
    nameAr: "برجا بتروناس التوأم",
    nameEn: "Petronas Twin Towers",
    desc: "أيقونة العاصمة كوالالمبور المعمارية. يتميزان بتصميمهما الإسلامي المذهل والجسر المعلق الذي يربط بينهما، مع حديقة خلابة ومركز تسوق فخم تحتهما.",
    image: "/tourism/petronas.png"
  },
  {
    id: "langkawi",
    nameAr: "جزيرة لنكاوي",
    nameEn: "Langkawi Island",
    desc: "أرخبيل استوائي ساحر يتميز بشواطئه الرملية البيضاء ومياهه الصافية. تضم التلفريك الشهير وجسر السماء وغابات المانغروف الغنية بالحياة البرية.",
    image: "/tourism/langkawi.png"
  },
  {
    id: "penang",
    nameAr: "جزيرة بينانج",
    nameEn: "Penang",
    desc: "عاصمة الطهي في ماليزيا. تتميز بمدينة جورج تاون التاريخية المليئة بفنون الشارع والهندسة المعمارية الاستعمارية وتل بينانج المرتفع.",
    image: "/tourism/penang.png"
  },
  {
    id: "cameron",
    nameAr: "مرتفعات كاميرون",
    nameEn: "Cameron Highlands",
    desc: "ملاذ بارد يتميز بمزارع الشاي الخضراء الممتدة على التلال، ومزارع الفراولة والزهور، ومناخها المعتدل الذي يوفر استراحة من حرارة الجو الاستوائي.",
    image: "/tourism/cameron.png"
  },
  {
    id: "malacca",
    nameAr: "مدينة ملقا (ملاكا)",
    nameEn: "Malacca",
    desc: "مدينة تاريخية مدرجة في التراث العالمي لليونسكو. تشتهر بالميدان الهولندي الأحمر وشارع جونكر والتأثيرات الثقافية البرتغالية والهولندية.",
    image: "/tourism/malacca.png"
  },
  {
    id: "batucaves",
    nameAr: "كهوف باتو",
    nameEn: "Batu Caves",
    desc: "معبد هندوسي مذهل داخل كهوف جيرية ضخمة. يشتهر بتمثاله الذهبي العملاق والدرج الملون المكون من 272 درجة للصعود إلى الكهف الرئيسي.",
    image: "/tourism/batucaves.png"
  },
  {
    id: "tamannegara",
    nameAr: "غابة تامان نيجارا",
    nameEn: "Taman Negara",
    desc: "من أقدم الغابات المطيرة في العالم. تقدم تجربة استثنائية لعشاق الطبيعة من خلال مسارات المشي المعلقة فوق الأشجار ورحلات القوارب في النهر.",
    image: "/tourism/tamannegara.png"
  },
  {
    id: "redang",
    nameAr: "جزيرة ريدانج",
    nameEn: "Redang Island",
    desc: "وجهة مثالية للغوص والغطس، بفضل مياهها الفيروزية الكريستالية والشعاب المرجانية الغنية التي تجعلها واحدة من أجمل جزر ماليزيا.",
    image: "/tourism/redang.png"
  },
  {
    id: "klcc",
    nameAr: "مركز كوالالمبور (KLCC)",
    nameEn: "Kuala Lumpur City Centre",
    desc: "قلب العاصمة النابض بالحياة. يضم حديقة واسعة مع نوافير راقصة وعالم ما تحت الماء (أكواريا) ومراكز تسوق راقية.",
    image: "/tourism/klcc.png"
  },
  {
    id: "genting",
    nameAr: "مرتفعات جنتنج",
    nameEn: "Genting Highlands",
    desc: "مدينة الترفيه فوق السحاب. تضم مدينة ملاهي ضخمة ومراكز تسوق وصعود مثير عبر التلفريك وسط الضباب الكثيف.",
    image: "/tourism/genting.png"
  }
];

export default function Tourism() {
  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
  };

  return (
    <Layout>
      <HeroSection 
        titleAr="اكتشف سحر ماليزيا"
        titleEn="TOURISM IN MALAYSIA"
        descriptionAr="ماليزيا، جنة آسيا الاستوائية، تقدم مزيجاً فريداً من الطبيعة الساحرة، المدن الحديثة، والثقافة المتنوعة. رتب رحلتك معنا لتجربة لا تُنسى."
        imageFallbackUrl="/heroes/tourism.jpg"
      />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold font-arabic text-secondary mb-4 relative inline-block">
              أجمل الوجهات السياحية
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-muted-foreground font-arabic mt-8 text-lg">
              نوفر برامج سياحية مرنة ومصممة خصيصاً لتناسب تفضيلاتك العائلية أو الفردية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
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
                    <h3 className="text-2xl font-bold font-arabic text-white mb-1 drop-shadow-md">{dest.nameAr}</h3>
                    <p className="text-sm font-sans text-white/80 uppercase tracking-wider">{dest.nameEn}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-muted-foreground font-arabic leading-relaxed">
                    {dest.desc}
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
