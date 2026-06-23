export type DestinationHighlight = {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
};

export type DestinationAttraction = {
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  image: string;
};

export type PracticalInfo = {
  bestTimeAr: string;
  bestTimeEn: string;
  howToGetThereAr: string;
  howToGetThereEn: string;
  tipsAr: string;
  tipsEn: string;
};

export type Destination = {
  id: string;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  descAr: string;
  descEn: string;
  heroImage: string;
  image: string; // for the grid
  gallery: string[];
  highlights: DestinationHighlight[];
  attractions: DestinationAttraction[];
  practicalInfo: PracticalInfo;
  category: "general" | "terengganu" | "putrajaya";
};

const BASE = import.meta.env.BASE_URL;

export const DESTINATIONS: Destination[] = [
  {
    id: "langkawi",
    nameAr: "جزيرة لنكاوي",
    nameEn: "Langkawi Island",
    taglineAr: "جوهرة قدح الاستوائية",
    taglineEn: "The Tropical Jewel of Kedah",
    descAr: "أرخبيل استوائي ساحر يتكون من 99 جزيرة قبالة الساحل الغربي لماليزيا. تتميز بشواطئها الرملية البيضاء ومياها الصافية، وتعتبر وجهة مثالية للباحثين عن الاسترخاء والأنشطة المائية في آن واحد.\n\nتضم الجزيرة معالم شهيرة مثل التلفريك (Langkawi SkyCab) الذي يأخذك في رحلة مذهلة فوق الغابات المطيرة الكثيفة للوصول إلى جسر السماء (SkyBridge) المعلق بين قمم الجبال. كما تشتهر بغابات المانغروف التي يمكنك استكشافها بالقوارب، وشلالات الآبار السبعة، إلى جانب كونها منطقة معفاة من الرسوم الجمركية.",
    descEn: "A magical tropical archipelago consisting of 99 islands off the west coast of Malaysia. Known for its white sandy beaches and clear waters, it is an ideal destination for those seeking both relaxation and water activities.\n\nThe island features famous landmarks like the Langkawi SkyCab cable car, which takes you on an amazing journey over dense rainforests to the SkyBridge suspended between mountain peaks. It is also famous for its mangrove forests which you can explore by boat, the Seven Wells Waterfalls, and being a duty-free shopping zone.",
    image: "/tourism/langkawi.png",
    heroImage: `${BASE}tourism/g/langkawi-1.jpg`,
    gallery: [
      `${BASE}tourism/g/langkawi-1.jpg`,
      `${BASE}tourism/g/langkawi-2.jpg`,
      `${BASE}tourism/g/langkawi-3.jpg`,
      `${BASE}tourism/g/langkawi-4.jpg`,
      `${BASE}tourism/g/langkawi-5.jpg`,
      `${BASE}tourism/g/langkawi-6.jpg`,
    ],
    highlights: [
      { titleAr: "شواطئ رملية", titleEn: "Sandy Beaches", descAr: "رمال بيضاء ناعمة", descEn: "Pure white sands", icon: "Umbrella" },
      { titleAr: "تلفريك وجسر", titleEn: "Cable Car & Bridge", descAr: "إطلالات بانورامية من الأعلى", descEn: "Panoramic views from above", icon: "Mountain" },
      { titleAr: "طبيعة برية", titleEn: "Wild Nature", descAr: "غابات المانغروف", descEn: "Mangrove forests", icon: "TreePine" },
      { titleAr: "تسوق حر", titleEn: "Duty Free", descAr: "جزيرة معفاة من الجمارك", descEn: "Duty-free island", icon: "ShoppingBag" }
    ],
    attractions: [
      {
        nameAr: "تلفريك لنكاوي",
        nameEn: "Langkawi SkyCab",
        descAr: "أحد أشد خطوط التلفريك انحداراً في العالم.",
        descEn: "One of the steepest cable car rides in the world.",
        image: `${BASE}tourism/g/langkawi-7.jpg`
      },
      {
        nameAr: "ميدان النسر",
        nameEn: "Eagle Square",
        descAr: "تمثال ضخم لنسر يستعد للطيران، رمز الجزيرة.",
        descEn: "A massive statue of an eagle ready to take flight, the island's symbol.",
        image: `${BASE}tourism/g/langkawi-8.jpg`
      },
      {
        nameAr: "غابات المانغروف",
        nameEn: "Kilim Geoforest Park",
        descAr: "رحلات بالقوارب لاستكشاف الطبيعة والكهوف.",
        descEn: "Boat tours to explore nature and limestone caves.",
        image: `${BASE}tourism/g/langkawi-9.jpg`
      },
      {
        nameAr: "شاطئ سينانج",
        nameEn: "Pantai Cenang",
        descAr: "أشهر شواطئ لنكاوي، نابض بالحياة والأنشطة.",
        descEn: "Langkawi's most popular beach, bustling with life and activities.",
        image: `${BASE}tourism/g/langkawi-10.jpg`
      }
    ],
    practicalInfo: {
      bestTimeAr: "بين نوفمبر ومارس (موسم الجفاف)",
      bestTimeEn: "Between November and March (dry season)",
      howToGetThereAr: "رحلة طيران داخلية قصيرة أو عبارة بحرية من بينانج",
      howToGetThereEn: "Short domestic flight or ferry from Penang",
      tipsAr: "استأجر سيارة أو دراجة نارية للتنقل بحرية في الجزيرة",
      tipsEn: "Rent a car or scooter to explore the island freely"
    },
    category: "general"
  },
  {
    id: "penang",
    nameAr: "جزيرة بينانج",
    nameEn: "Penang",
    taglineAr: "عاصمة الطهي وتراث الملايو",
    taglineEn: "The culinary capital and Malay heritage",
    descAr: "تُعرف جزيرة بينانج بأنها 'لؤلؤة الشرق'، وهي وجهة فريدة تمزج بين الثقافات المتعددة والتراث التاريخي. عاصمتها 'جورج تاون' مدرجة ضمن مواقع التراث العالمي لليونسكو، وتشتهر بهندستها المعمارية الاستعمارية وفنون الشارع الجدارية الرائعة.\n\nتعتبر بينانج عاصمة الطهي في ماليزيا، حيث تقدم أشهى المأكولات الشعبية في شوارعها النابضة بالحياة. يمكنك زيارة 'تل بينانج' باستخدام القطار الجبلي المائل للحصول على إطلالة مذهلة وهواء منعش، أو زيارة المعابد المتنوعة وحديقة الفراشات والحديقة النباتية.",
    descEn: "Known as the 'Pearl of the Orient', Penang is a unique destination blending multiple cultures and historical heritage. Its capital, 'George Town', is a UNESCO World Heritage site, famous for its colonial architecture and stunning street art murals.\n\nPenang is considered the culinary capital of Malaysia, offering delicious local street food in its vibrant alleys. You can visit 'Penang Hill' using the funicular railway for breathtaking views and cool air, or visit diverse temples, the Butterfly Farm, and Botanical Gardens.",
    image: "/tourism/penang.png",
    heroImage: `${BASE}tourism/penang.jpg`,
    gallery: [
      `${BASE}tourism/g/penang-1.jpg`,
      `${BASE}tourism/g/penang-2.jpg`,
      `${BASE}tourism/g/penang-3.jpg`,
      `${BASE}tourism/g/penang-4.jpg`,
      `${BASE}tourism/g/penang-5.jpg`,
      `${BASE}tourism/g/penang-6.jpg`,
    ],
    highlights: [
      { titleAr: "تراث عالمي", titleEn: "World Heritage", descAr: "جورج تاون التاريخية", descEn: "Historic George Town", icon: "Landmark" },
      { titleAr: "أطباق محلية", titleEn: "Local Cuisine", descAr: "أشهر المأكولات في ماليزيا", descEn: "Malaysia's most famous street food", icon: "Utensils" },
      { titleAr: "فنون الشارع", titleEn: "Street Art", descAr: "جداريات تفاعلية", descEn: "Interactive murals", icon: "Paintbrush" },
      { titleAr: "إطلالات مرتفعة", titleEn: "Elevated Views", descAr: "تل بينانج بالقطار الجبلي", descEn: "Penang Hill via funicular", icon: "Mountain" }
    ],
    attractions: [
      {
        nameAr: "جورج تاون وفنون الشارع",
        nameEn: "George Town Street Art",
        descAr: "شوارع تاريخية مزينة بجداريات تفاعلية رائعة.",
        descEn: "Historic streets adorned with brilliant interactive murals.",
        image: `${BASE}tourism/g/penang-7.jpg`
      },
      {
        nameAr: "تل بينانج",
        nameEn: "Penang Hill",
        descAr: "منتجع جبلي بارد يوفر إطلالات بانورامية على الجزيرة.",
        descEn: "A cool hill resort offering panoramic views of the island.",
        image: `${BASE}tourism/g/penang-8.jpg`
      },
      {
        nameAr: "معبد كيك لوك سي",
        nameEn: "Kek Lok Si Temple",
        descAr: "أكبر معبد بوذي في ماليزيا معمار مذهل.",
        descEn: "The largest Buddhist temple in Malaysia with stunning architecture.",
        image: `${BASE}tourism/g/penang-9.jpg`
      },
      {
        nameAr: "عقارات العشائر العائمة",
        nameEn: "Clan Jetties",
        descAr: "قرى خشبية تقليدية مبنية فوق الماء.",
        descEn: "Traditional wooden villages built over the water.",
        image: `${BASE}tourism/g/penang-10.jpg`
      }
    ],
    practicalInfo: {
      bestTimeAr: "طوال العام، ويفضل تجنب المواسم الممطرة في سبتمبر وأكتوبر",
      bestTimeEn: "All year round, preferably avoiding heavy rains in Sep-Oct",
      howToGetThereAr: "طيران، أو عبّارة، أو عبر جسر بينانج للسيارات",
      howToGetThereEn: "Flight, ferry, or via the Penang Bridge by car",
      tipsAr: "لا تفوت فرصة تجربة الأطعمة المحلية في أسواق الشارع الليلية",
      tipsEn: "Don't miss trying local street food at the night markets"
    },
    category: "general"
  },
  {
    id: "cameron",
    nameAr: "مرتفعات كاميرون",
    nameEn: "Cameron Highlands",
    taglineAr: "ملاذ بارد وسط مزارع الشاي",
    taglineEn: "A cool retreat amidst tea plantations",
    descAr: "تعتبر مرتفعات كاميرون الملاذ الجبلي الأشهر في ماليزيا، حيث تتميز بمناخها المعتدل والبارد طوال العام. تكتسي الجبال باللون الأخضر الزاهي بفضل مزارع الشاي الممتدة على التلال، مما يوفر مناظر طبيعية تحبس الأنفاس.\n\nتزخر المنطقة بالعديد من الأنشطة الهادئة، مثل زيارة مزارع الفراولة والزهور ومناحل العسل، وتذوق الشاي الطازج في المقاهي الإنجليزية ذات الطراز الكلاسيكي. لمحبي المغامرة، تقدم 'غابة الطحالب' (Mossy Forest) مسارات مشي مشوقة في غابة تبدو وكأنها من القصص الخيالية.",
    descEn: "Cameron Highlands is Malaysia's most popular hill retreat, known for its mild and cool climate year-round. The mountains are blanketed in vibrant green thanks to the rolling tea plantations, offering breathtaking landscapes.\n\nThe area is full of relaxing activities, such as visiting strawberry farms, flower gardens, and honey bee farms, as well as tasting fresh tea in classic English-style teahouses. For adventure lovers, the 'Mossy Forest' offers intriguing hiking trails in a forest that looks straight out of a fairy tale.",
    image: "/tourism/cameron.png",
    heroImage: `${BASE}tourism/g/cameron-1.jpg`,
    gallery: [
      `${BASE}tourism/g/cameron-1.jpg`,
      `${BASE}tourism/g/cameron-2.jpg`,
      `${BASE}tourism/g/cameron-3.jpg`,
      `${BASE}tourism/g/cameron-4.jpg`,
      `${BASE}tourism/g/cameron-5.jpg`,
      `${BASE}tourism/g/cameron-6.jpg`,
    ],
    highlights: [
      { titleAr: "مزارع الشاي", titleEn: "Tea Plantations", descAr: "تلال خضراء ساحرة", descEn: "Stunning green hills", icon: "Leaf" },
      { titleAr: "جو بارد", titleEn: "Cool Climate", descAr: "هروب من الحرارة الاستوائية", descEn: "Escape from tropical heat", icon: "Wind" },
      { titleAr: "قطف الفراولة", titleEn: "Strawberry Picking", descAr: "تجربة عائلية ممتعة", descEn: "Fun family experience", icon: "Apple" },
      { titleAr: "طبيعة غامضة", titleEn: "Mystical Nature", descAr: "غابة الطحالب السحرية", descEn: "Magical Mossy Forest", icon: "TreePine" }
    ],
    attractions: [
      {
        nameAr: "مزارع شاي بوه",
        nameEn: "BOH Tea Plantation",
        descAr: "أكبر مزارع الشاي مع مقهى ذو إطلالة خلابة.",
        descEn: "Largest tea plantations with a scenic cafe.",
        image: `${BASE}tourism/g/cameron-7.jpg`
      },
      {
        nameAr: "غابة الطحالب",
        nameEn: "Mossy Forest",
        descAr: "غابة جبلية باردة تغطيها الطحالب الخضراء.",
        descEn: "Cool mountainous forest covered in green moss.",
        image: `${BASE}tourism/g/cameron-8.jpg`
      },
      {
        nameAr: "مزارع الفراولة",
        nameEn: "Strawberry Farms",
        descAr: "قطف الفراولة الطازجة وتذوق الحلوى اللذيذة.",
        descEn: "Pick fresh strawberries and taste delicious desserts.",
        image: `${BASE}tourism/g/cameron-9.jpg`
      },
      {
        nameAr: "حديقة الزهور",
        nameEn: "Flora Park",
        descAr: "حدائق زهور خلابة مصممة بألوان زاهية.",
        descEn: "Beautifully designed flower gardens with vibrant colors.",
        image: `${BASE}tourism/g/cameron-10.jpg`
      }
    ],
    practicalInfo: {
      bestTimeAr: "طوال العام، يفضل تجنب عطلات نهاية الأسبوع المحلية المزدحمة",
      bestTimeEn: "Year-round, best to avoid crowded local weekends",
      howToGetThereAr: "بالسيارة أو الحافلة من كوالالمبور (حوالي 3-4 ساعات)",
      howToGetThereEn: "By car or bus from KL (approx 3-4 hours)",
      tipsAr: "أحضر ملابس دافئة للمساء، فدرجة الحرارة تنخفض بشكل ملحوظ",
      tipsEn: "Bring warm clothes for the evening as temperatures drop significantly"
    },
    category: "general"
  },
  {
    id: "perhentian",
    nameAr: "جزر برهنتيان",
    nameEn: "Perhentian Islands",
    taglineAr: "جنة الغطس في الساحل الشرقي",
    taglineEn: "The diving paradise of the East Coast",
    descAr: "تعتبر جزر برهنتيان (Perhentian) الواقعة قبالة ساحل ولاية ترنجانو، من أجمل الجزر الاستوائية في العالم. تتكون من جزيرتين رئيسيتين: 'برهنتيان بيسار' (الكبيرة) الهادئة والمناسبة للعائلات، و'برهنتيان كيسيل' (الصغيرة) النابضة بالحياة والمفضلة للشباب والرحالة.\n\nتتميز الجزيرتان بمياه كريستالية شديدة الصفاء ورمال بيضاء ناعمة، وهما من أفضل الوجهات للغطس والغوص في ماليزيا. يمكنك السباحة جنباً إلى جنب مع السلاحف البحرية العظيمة، وأسماك القرش المرجانية غير المؤذية، وسط حدائق مرجانية زاهية الألوان.",
    descEn: "The Perhentian Islands, located off the coast of Terengganu state, are among the most beautiful tropical islands in the world. They consist of two main islands: 'Perhentian Besar' (Big) which is quiet and family-friendly, and 'Perhentian Kecil' (Small) which is lively and popular with youth and backpackers.\n\nBoth islands feature crystal clear waters and soft white sands, making them one of the best destinations for snorkeling and scuba diving in Malaysia. You can swim alongside giant sea turtles, harmless reef sharks, amid vividly colored coral gardens.",
    image: "/tourism/perhentian.png",
    heroImage: `${BASE}tourism/perhentian.jpg`,
    gallery: [
      `${BASE}tourism/g/perhentian-1.jpg`,
      `${BASE}tourism/g/perhentian-2.jpg`,
      `${BASE}tourism/g/perhentian-3.jpg`,
      `${BASE}tourism/g/perhentian-4.jpg`,
      `${BASE}tourism/g/perhentian-5.jpg`,
      `${BASE}tourism/g/perhentian-6.jpg`,
    ],
    highlights: [
      { titleAr: "مياه كريستالية", titleEn: "Crystal Waters", descAr: "سباحة في مياه شفافة", descEn: "Swim in transparent waters", icon: "Waves" },
      { titleAr: "سلاحف بحرية", titleEn: "Sea Turtles", descAr: "مشاهدة السلاحف عن قرب", descEn: "Spotting sea turtles close up", icon: "Eye" },
      { titleAr: "غوص وغطس", titleEn: "Diving & Snorkeling", descAr: "حدائق مرجانية خلابة", descEn: "Stunning coral gardens", icon: "Ship" },
      { titleAr: "استرخاء تام", titleEn: "Total Relaxation", descAr: "جزر بلا سيارات أو ضوضاء", descEn: "Car-free, noise-free islands", icon: "Sun" }
    ],
    attractions: [
      {
        nameAr: "نقطة السلاحف",
        nameEn: "Turtle Point",
        descAr: "منطقة للغطس تتيح لك السباحة بجوار السلاحف البحرية.",
        descEn: "A snorkeling area allowing you to swim next to sea turtles.",
        image: `${BASE}tourism/g/perhentian-7.jpg`
      },
      {
        nameAr: "شاطئ لونج بيتش",
        nameEn: "Long Beach (Kecil)",
        descAr: "شاطئ نابض بالحياة يتميز برماله البيضاء وأنشطته المسائية.",
        descEn: "A vibrant beach featuring white sands and evening activities.",
        image: `${BASE}tourism/g/perhentian-8.jpg`
      },
      {
        nameAr: "حديقة المرجان",
        nameEn: "Coral Garden",
        descAr: "تشكيلات مرجانية مبهرة تضج بأسماك النيمو والأسماك الملونة.",
        descEn: "Dazzling coral formations bustling with Nemo and colorful fish.",
        image: `${BASE}tourism/g/perhentian-9.jpg`
      },
      {
        nameAr: "برهنتيان بيسار",
        nameEn: "Perhentian Besar",
        descAr: "منتجعات عائلية هادئة وغابات مطيرة تمتد حتى الشاطئ.",
        descEn: "Quiet family resorts and rainforests stretching to the beach.",
        image: `${BASE}tourism/g/perhentian-10.jpg`
      }
    ],
    practicalInfo: {
      bestTimeAr: "بين مارس وسبتمبر (الجزيرة تغلق أثناء الرياح الموسمية)",
      bestTimeEn: "Between March and September (island closes during monsoon)",
      howToGetThereAr: "قارب سريع من مرفأ 'كوالا بيسوت' (Kuala Besut)",
      howToGetThereEn: "Speedboat from 'Kuala Besut' jetty",
      tipsAr: "لا توجد صرافات آلية (ATM) في الجزيرة، أحضر نقوداً كافية",
      tipsEn: "There are no ATMs on the island, bring enough cash"
    },
    category: "terengganu"
  },
  {
    id: "putrajaya-lake",
    nameAr: "بحيرة بتراجايا",
    nameEn: "Putrajaya Lake",
    taglineAr: "قلب العاصمة الإدارية النابض",
    taglineEn: "The beating heart of the administrative capital",
    descAr: "بحيرة بتراجايا هي بحيرة صناعية ضخمة تمتد على مساحة 650 هكتاراً وتعد المحور المركزي لمدينة بتراجايا الإدارية. تم تصميم البحيرة لتكون نظام تبريد طبيعي للمدينة ولتضفي لمسة جمالية تتناغم مع الهندسة المعمارية الحديثة والمباني الحكومية الفخمة المحيطة بها.\n\nيمكن للزوار الاستمتاع بجولة بحرية ساحرة باستخدام القوارب التقليدية أو السفن السياحية المريحة، ومشاهدة الجسور المعمارية المذهلة مثل جسر 'سيري واواسان' ذي التصميم المستقبلي، وجسر 'بوترا' المستوحى من العمارة الإيرانية. كما يوفر الكورنيش المحيط بالبحيرة مسارات ممتازة للمشي وركوب الدراجات.",
    descEn: "Putrajaya Lake is a massive man-made lake covering 650 hectares, serving as the central axis of the Putrajaya administrative city. The lake was designed as a natural cooling system for the city and to add a beautiful touch complementing the modern architecture and grand government buildings surrounding it.\n\nVisitors can enjoy a magical cruise using traditional perahu boats or comfortable cruise ships, witnessing stunning architectural bridges like the futuristic 'Seri Wawasan' Bridge and the Iranian-inspired 'Putra' Bridge. The promenade surrounding the lake also offers excellent walking and cycling paths.",
    image: "/tourism/putrajaya-lake.png",
    heroImage: `${BASE}tourism/putrajaya-lake.jpg`,
    gallery: [
      `${BASE}tourism/g/putrajaya-lake-1.jpg`,
      `${BASE}tourism/g/putrajaya-lake-2.jpg`,
      `${BASE}tourism/g/putrajaya-lake-3.jpg`,
      `${BASE}tourism/g/putrajaya-lake-4.jpg`,
      `${BASE}tourism/g/putrajaya-lake-5.jpg`,
      `${BASE}tourism/g/putrajaya-lake-6.jpg`,
    ],
    highlights: [
      { titleAr: "جولات بحرية", titleEn: "Lake Cruises", descAr: "قوارب تقليدية وحديثة", descEn: "Traditional and modern boats", icon: "Ship" },
      { titleAr: "جسور معمارية", titleEn: "Architectural Bridges", descAr: "تصاميم فريدة ومضاءة ليلاً", descEn: "Unique designs, illuminated at night", icon: "Mountain" },
      { titleAr: "مناظر بانورامية", titleEn: "Panoramic Views", descAr: "انعكاس المباني على الماء", descEn: "Reflection of buildings on water", icon: "Camera" },
      { titleAr: "رياضات مائية", titleEn: "Water Sports", descAr: "تجديف وأنشطة بحرية", descEn: "Kayaking and marine activities", icon: "Waves" }
    ],
    attractions: [
      {
        nameAr: "كروز بتراجايا",
        nameEn: "Cruise Tasik Putrajaya",
        descAr: "رحلات نهارية وليلية مريحة لاستكشاف معالم المدينة من الماء.",
        descEn: "Comfortable day and night cruises to explore city landmarks from the water.",
        image: `${BASE}tourism/g/putrajaya-lake-7.jpg`
      },
      {
        nameAr: "جسر سيري واواسان",
        nameEn: "Seri Wawasan Bridge",
        descAr: "جسر بتصميم شراع سفينة يضاء بألوان رائعة في المساء.",
        descEn: "A sail-shaped bridge beautifully illuminated in the evening.",
        image: `${BASE}tourism/g/putrajaya-lake-8.jpg`
      },
      {
        nameAr: "مسجد بوترا (من البحيرة)",
        nameEn: "Putra Mosque (Lake View)",
        descAr: "إطلالة ساحرة للمسجد الوردي العائم جزئياً على البحيرة.",
        descEn: "A magical view of the pink mosque floating partially on the lake.",
        image: `${BASE}tourism/g/putrajaya-lake-9.jpg`
      },
      {
        nameAr: "نصب الألفية",
        nameEn: "Millennium Monument",
        descAr: "نصب تذكاري شاهق يشبه زهرة الكركديه على حافة البحيرة.",
        descEn: "A towering monument resembling a hibiscus flower on the lake's edge.",
        image: `${BASE}tourism/g/putrajaya-lake-10.jpg`
      }
    ],
    practicalInfo: {
      bestTimeAr: "وقت الغروب أو في المساء للاستمتاع بالأضواء والجو المعتدل",
      bestTimeEn: "Sunset or evening to enjoy the lights and mild weather",
      howToGetThereAr: "قطار KLIA Transit إلى محطة Putrajaya & Cyberjaya",
      howToGetThereEn: "KLIA Transit train to Putrajaya & Cyberjaya station",
      tipsAr: "تتوفر رحلات عشاء على القوارب، وهي خيار رائع للمناسبات الخاصة",
      tipsEn: "Dinner cruises are available, a great option for special occasions"
    },
    category: "putrajaya"
  },

  // ─── General (continued) ────────────────────────────────────────────
  {
    id: "malacca",
    nameAr: "مدينة ملقا (ملاكا)",
    nameEn: "Malacca (Melaka)",
    taglineAr: "عاصمة السلطنة الإسلامية وجوهرة التراث الماليزي",
    taglineEn: "Capital of the Islamic Sultanate and gem of Malay heritage",
    descAr: "ملقا مدينة تاريخية ساحلية تأسست في القرن الخامس عشر، وكانت عاصمة لسلطنة ملقا الإسلامية التي نشرت الإسلام في أرخبيل الملايو وجعلت المدينة مركزاً تجارياً وحضارياً عالمياً. وهي مدرجة ضمن قائمة التراث العالمي لليونسكو.\n\nتزخر المدينة بالمعالم الإسلامية والتراث الماليزي الأصيل، وأبرزها مسجد مضيق ملقا العائم الساحر عند غروب الشمس، وأقدم المساجد في ماليزيا، وقصر سلطنة ملقا الذي يروي قصة العصر الذهبي للملايو. ولا تفوت رحلة القارب الهادئة على نهر ملقا التاريخي.",
    descEn: "Malacca is a historic coastal city founded in the 15th century, and was the capital of the Islamic Malacca Sultanate that spread Islam across the Malay Archipelago and made the city a global trade and cultural hub. It is listed as a UNESCO World Heritage Site.\n\nThe city is rich in Islamic landmarks and authentic Malay heritage, most notably the enchanting floating Malacca Straits Mosque at sunset, Malaysia's oldest mosques, and the Malacca Sultanate Palace that tells the story of the Malay golden age. Don't miss the peaceful boat ride along the historic Malacca River.",
    image: "/tourism/malacca.png",
    heroImage: `${BASE}tourism/malacca.jpg`,
    gallery: [
      `${BASE}tourism/g/malacca-1.jpg`,
      `${BASE}tourism/g/malacca-2.jpg`,
      `${BASE}tourism/g/malacca-3.jpg`,
      `${BASE}tourism/g/malacca-4.jpg`,
      `${BASE}tourism/g/malacca-5.jpg`,
      `${BASE}tourism/g/malacca-6.jpg`,
    ],
    highlights: [
      { titleAr: "تراث عالمي", titleEn: "World Heritage", descAr: "مدرجة في قائمة اليونسكو", descEn: "Listed by UNESCO", icon: "Landmark" },
      { titleAr: "سلطنة إسلامية", titleEn: "Islamic Sultanate", descAr: "عاصمة سلطنة ملقا التاريخية", descEn: "Capital of the historic Malacca Sultanate", icon: "Crown" },
      { titleAr: "مسجد عائم", titleEn: "Floating Mosque", descAr: "مسجد مضيق ملقا الساحر", descEn: "The stunning Malacca Straits Mosque", icon: "Building2" },
      { titleAr: "رحلة نهرية", titleEn: "River Cruise", descAr: "استكشاف المدينة من الماء", descEn: "Explore the city from the water", icon: "Ship" }
    ],
    attractions: [
      { nameAr: "مسجد مضيق ملقا العائم", nameEn: "Malacca Straits Mosque", descAr: "مسجد ساحر يبدو عائماً على الماء، وأجمل أوقات زيارته عند الغروب.", descEn: "A stunning mosque that appears to float on the water, best visited at sunset.", image: `${BASE}tourism/g/malacca-7.jpg` },
      { nameAr: "مسجد كامبونج هولو", nameEn: "Kampung Hulu Mosque", descAr: "أقدم مسجد قائم في ماليزيا بطراز معماري فريد يعود لعام 1728م.", descEn: "Malaysia's oldest functioning mosque, with unique architecture dating to 1728.", image: `${BASE}tourism/g/malacca-8.jpg` },
      { nameAr: "قصر سلطنة ملقا", nameEn: "Malacca Sultanate Palace", descAr: "نموذج خشبي مذهل لقصر السلاطين يضم متحفاً للتراث الماليزي الإسلامي.", descEn: "A magnificent wooden replica of the sultans' palace housing a Malay-Islamic heritage museum.", image: `${BASE}tourism/g/malacca-9.jpg` },
      { nameAr: "رحلة نهر ملقا", nameEn: "Malacca River Cruise", descAr: "جولة قارب هادئة على ضفاف النهر التاريخي.", descEn: "A peaceful boat tour along the historic riverbanks.", image: `${BASE}tourism/g/malacca-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "وقت الغروب لمشاهدة مسجد المضيق العائم في أبهى صوره",
      bestTimeEn: "Sunset time to see the floating Straits Mosque at its most beautiful",
      howToGetThereAr: "حافلة سريعة من كوالالمبور (ساعتان) أو سيارة",
      howToGetThereEn: "Express bus from KL (2 hours) or by car",
      tipsAr: "خصص وقتاً لزيارة المسجد العائم على جزيرة ملقا واصطحب الكاميرا",
      tipsEn: "Set aside time for the floating mosque on Malacca Island and bring your camera"
    },
    category: "general"
  },
  {
    id: "batucaves",
    nameAr: "كهوف باتو",
    nameEn: "Batu Caves",
    taglineAr: "معبد هندوسي داخل كهوف جيرية ضخمة",
    taglineEn: "A Hindu temple inside massive limestone caves",
    descAr: "كهوف باتو هي سلسلة من الكهوف الجيرية الضخمة تقع شمال كوالالمبور بمسافة 13 كيلومتراً، وهي موقع ديني هندوسي مقدس. يرمز إليها التمثال الذهبي العملاق للإله موروغان (43 متراً) الذي يستقبلك عند مدخل الدرج الملون المكون من 272 درجة.\n\nعند الصعود إلى القمة ستجد 'كهف الكاتدرائية' الرئيسي ذو الأسقف الشاهقة والمضاء بشكل طبيعي من فتحات علوية. كما تضم المنطقة 'كهف معرض الفنون' وكهف 'راماياناH' المليء بالمشاهد الملونة من الملحمة الهندية الشهيرة. تحتضن الكهوف مهرجان 'تايبوسام' السنوي الذي يجذب مئات الآلاف من الزوار.",
    descEn: "Batu Caves are a series of massive limestone caves located 13km north of Kuala Lumpur, a sacred Hindu religious site. Symbolized by the colossal golden statue of Lord Murugan (43m) that greets you at the entrance of the colorful 272-step stairway.\n\nAt the top, you'll find the main 'Cathedral Cave' with soaring ceilings naturally lit from upper openings. The area also includes the 'Art Gallery Cave' and 'Ramayana Cave' filled with colorful scenes from the famous Indian epic. The caves host the annual 'Thaipusam' festival which draws hundreds of thousands of visitors.",
    image: "/tourism/batucaves.png",
    heroImage: `${BASE}tourism/batucaves.jpg`,
    gallery: [
      `${BASE}tourism/g/batucaves-1.jpg`,
      `${BASE}tourism/g/batucaves-2.jpg`,
      `${BASE}tourism/g/batucaves-3.jpg`,
      `${BASE}tourism/g/batucaves-4.jpg`,
      `${BASE}tourism/g/batucaves-5.jpg`,
      `${BASE}tourism/g/batucaves-6.jpg`,
    ],
    highlights: [
      { titleAr: "تمثال ذهبي عملاق", titleEn: "Giant Golden Statue", descAr: "موروغان الـ43 متراً", descEn: "43-meter Murugan", icon: "Star" },
      { titleAr: "درج ملون", titleEn: "Colorful Stairway", descAr: "272 درجة بألوان قوس قزح", descEn: "272 rainbow-colored steps", icon: "Camera" },
      { titleAr: "كهوف ضخمة", titleEn: "Massive Caves", descAr: "كهف الكاتدرائية الطبيعي", descEn: "Natural Cathedral Cave", icon: "Mountain" },
      { titleAr: "مهرجان تايبوسام", titleEn: "Thaipusam Festival", descAr: "احتفال ديني مذهل يناير-فبراير", descEn: "Amazing religious festival Jan-Feb", icon: "Users" }
    ],
    attractions: [
      { nameAr: "تمثال موروغان الذهبي", nameEn: "Lord Murugan Statue", descAr: "التمثال الذهبي الأطول من نوعه في العالم.", descEn: "World's tallest golden statue of its kind.", image: `${BASE}tourism/g/batucaves-7.jpg` },
      { nameAr: "كهف الكاتدرائية", nameEn: "Cathedral Cave", descAr: "الكهف الرئيسي بأسقفه الشاهقة وإضاءته الطبيعية.", descEn: "Main cave with soaring ceilings and natural lighting.", image: `${BASE}tourism/g/batucaves-8.jpg` },
      { nameAr: "كهف راماياناH", nameEn: "Ramayana Cave", descAr: "تماثيل ملونة تصور مشاهد الملحمة الهندية.", descEn: "Colorful statues depicting scenes from the Indian epic.", image: `${BASE}tourism/g/batucaves-9.jpg` },
      { nameAr: "الكهف المظلم", nameEn: "Dark Cave", descAr: "كهف بيولوجي نادر يضم 23 نوعاً من الخفافيش.", descEn: "Rare biological cave housing 23 species of bats.", image: `${BASE}tourism/g/batucaves-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "الصباح الباكر قبل الحشود وحرارة الشمس",
      bestTimeEn: "Early morning before the crowds and sun heat",
      howToGetThereAr: "قطار Komuter من محطة KL Sentral مباشرة",
      howToGetThereEn: "Komuter train from KL Sentral station directly",
      tipsAr: "ارتدِ حذاءً مريحاً لتسلق الـ272 درجة، والدخول مجاني",
      tipsEn: "Wear comfortable shoes for the 272 steps, and entry is free"
    },
    category: "general"
  },
  {
    id: "tamannegara",
    nameAr: "غابة تامان نيجارا",
    nameEn: "Taman Negara",
    taglineAr: "من أقدم الغابات المطيرة في العالم",
    taglineEn: "One of the world's oldest rainforests",
    descAr: "تامان نيجارا هي محمية طبيعية وطنية تمتد على أكثر من 4300 كيلومتر مربع وتعود إلى 130 مليون سنة، مما يجعلها من أقدم الغابات المطيرة على وجه الأرض. تضم الغابة تنوعاً بيولوجياً هائلاً يشمل النمور الماليزية والفيلة البرية والطيور النادرة.\n\nأبرز تجاربها جسور السير فوق الأشجار (Canopy Walk) المعلقة على ارتفاع 40 متراً، وهي من الأطول في العالم. كما تتيح الغابة رحلات قوارب في نهر تيمبيلينج، وزيارات لقرى السكان الأصليين (أوراق أصلي)، وجولات ليلية مثيرة لمراقبة الحياة البرية.",
    descEn: "Taman Negara is a national nature reserve covering over 4,300 square kilometers and dating back 130 million years, making it one of the oldest rainforests on Earth. The forest has enormous biodiversity including Malayan tigers, wild elephants, and rare birds.\n\nIts main highlight is the Canopy Walk suspended bridges 40 meters above the trees, among the world's longest. The forest also offers boat trips on the Tembeling River, visits to indigenous Orang Asli villages, and exciting night walks for wildlife watching.",
    image: "/tourism/tamannegara.png",
    heroImage: `${BASE}tourism/g/tamannegara-1.jpg`,
    gallery: [
      `${BASE}tourism/g/tamannegara-1.jpg`,
      `${BASE}tourism/g/tamannegara-2.jpg`,
      `${BASE}tourism/g/tamannegara-3.jpg`,
      `${BASE}tourism/g/tamannegara-4.jpg`,
      `${BASE}tourism/g/tamannegara-5.jpg`,
      `${BASE}tourism/g/tamannegara-6.jpg`,
    ],
    highlights: [
      { titleAr: "أقدم غابة مطيرة", titleEn: "Oldest Rainforest", descAr: "130 مليون سنة من التاريخ", descEn: "130 million years of history", icon: "TreePine" },
      { titleAr: "جسور معلقة", titleEn: "Canopy Walkway", descAr: "40 متراً فوق الأشجار", descEn: "40 meters above the trees", icon: "Mountain" },
      { titleAr: "رحلات نهرية", titleEn: "River Expeditions", descAr: "قوارب في نهر تيمبيلينج", descEn: "Boats on Tembeling River", icon: "Ship" },
      { titleAr: "حياة برية", titleEn: "Wildlife", descAr: "نمور وفيلة وطيور نادرة", descEn: "Tigers, elephants and rare birds", icon: "Eye" }
    ],
    attractions: [
      { nameAr: "جسور الغابة المعلقة", nameEn: "Canopy Walkway", descAr: "أحد أطول جسور الغابة في العالم.", descEn: "One of the world's longest canopy walkways.", image: `${BASE}tourism/g/tamannegara-7.jpg` },
      { nameAr: "رحلة نهر تيمبيلينج", nameEn: "Tembeling River Boat", descAr: "رحلة قارب بين الغابات الكثيفة.", descEn: "Boat ride through dense jungle.", image: `${BASE}tourism/g/tamannegara-8.jpg` },
      { nameAr: "قرية أوراق أصلي", nameEn: "Orang Asli Village", descAr: "تعرف على ثقافة السكان الأصليين وحياتهم.", descEn: "Learn about the indigenous peoples' culture.", image: `${BASE}tourism/g/tamannegara-9.jpg` },
      { nameAr: "الجولة الليلية", nameEn: "Night Jungle Walk", descAr: "مغامرة ليلية لمراقبة الحيوانات النشطة.", descEn: "Night adventure to spot nocturnal animals.", image: `${BASE}tourism/g/tamannegara-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "بين مارس ومايو (أقل أمطاراً)، وتجنب موسم الفيضانات ديسمبر-يناير",
      bestTimeEn: "March to May (less rain); avoid flood season Dec-Jan",
      howToGetThereAr: "حافلة من كوالالمبور إلى Jerantut ثم قارب إلى المحمية",
      howToGetThereEn: "Bus from KL to Jerantut, then boat to the reserve",
      tipsAr: "احجز مبكراً في المواسم المزدحمة وأحضر طارد الحشرات",
      tipsEn: "Book early in peak seasons and bring insect repellent"
    },
    category: "general"
  },
  {
    id: "redang",
    nameAr: "جزيرة ريدانج",
    nameEn: "Redang Island",
    taglineAr: "كريستال المياه وكنز الشعاب المرجانية",
    taglineEn: "Crystal waters and coral reef treasure",
    descAr: "جزيرة ريدانج هي جوهرة بحر الصين الجنوبي وإحدى أجمل جزر ماليزيا قاطبةً. تقع ضمن 'منتزه ريدانج البحري' المحمي، مما يحافظ على مياهها الفيروزية وشعابها المرجانية الزاهية في حالة استثنائية.\n\nتعتبر الجزيرة وجهة لا غنى عنها لعشاق الغطس والغوص، حيث يمكنك السباحة جنباً إلى جنب مع السلاحف البحرية الضخمة، والأسماك الملونة بأنواعها المتعددة، وسط مشهد تحت مائي ساحر. الشاطئ الرئيسي 'باسر بانجانج' من أجمل الشواطئ في جنوب شرق آسيا بأكمله.",
    descEn: "Redang Island is a jewel of the South China Sea and one of Malaysia's most beautiful islands. Located within the protected 'Redang Marine Park', which preserves its turquoise waters and vibrant coral reefs in exceptional condition.\n\nThe island is a must-visit for snorkeling and diving enthusiasts, where you can swim alongside giant sea turtles and colorful fish of many species, amidst a breathtaking underwater scene. The main beach 'Pasir Panjang' is one of the most beautiful beaches in all of Southeast Asia.",
    image: "/tourism/redang.png",
    heroImage: `${BASE}tourism/g/redang-1.jpg`,
    gallery: [
      `${BASE}tourism/g/redang-1.jpg`,
      `${BASE}tourism/g/redang-2.jpg`,
      `${BASE}tourism/g/redang-3.jpg`,
      `${BASE}tourism/g/redang-4.jpg`,
      `${BASE}tourism/g/redang-5.jpg`,
      `${BASE}tourism/g/redang-6.jpg`,
    ],
    highlights: [
      { titleAr: "منتزه بحري محمي", titleEn: "Protected Marine Park", descAr: "شعاب مرجانية بكر", descEn: "Pristine coral reefs", icon: "Shield" },
      { titleAr: "سلاحف بحرية", titleEn: "Sea Turtles", descAr: "مشاهدة السلاحف عن قرب", descEn: "Up-close turtle encounters", icon: "Eye" },
      { titleAr: "مياه كريستالية", titleEn: "Crystal Waters", descAr: "رؤية القاع بوضوح تام", descEn: "See the seabed clearly", icon: "Waves" },
      { titleAr: "شعاب ملونة", titleEn: "Colorful Reefs", descAr: "حياة بحرية متنوعة", descEn: "Diverse marine life", icon: "Star" }
    ],
    attractions: [
      { nameAr: "شاطئ باسر بانجانج", nameEn: "Pasir Panjang Beach", descAr: "رمال بيضاء ومياه فيروزية ساحرة.", descEn: "White sands and mesmerizing turquoise waters.", image: `${BASE}tourism/g/redang-7.jpg` },
      { nameAr: "محطة أبحاث ريدانج", nameEn: "Redang Marine Research Station", descAr: "مركز لحماية السلاحف والحياة البحرية.", descEn: "Center for turtle and marine life protection.", image: `${BASE}tourism/g/redang-8.jpg` },
      { nameAr: "الغطس في المنتزه البحري", nameEn: "Marine Park Snorkeling", descAr: "تجربة الغطس في شعاب ملونة محمية.", descEn: "Snorkeling in protected colorful reefs.", image: `${BASE}tourism/g/redang-9.jpg` },
      { nameAr: "صيد الحبار الليلي", nameEn: "Night Squid Fishing", descAr: "نشاط ليلي ممتع على القوارب التقليدية.", descEn: "Fun night activity on traditional boats.", image: `${BASE}tourism/g/redang-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "مارس حتى أكتوبر (مغلقة نوفمبر-فبراير بسبب الرياح الموسمية)",
      bestTimeEn: "March to October (closed Nov-Feb due to monsoon)",
      howToGetThereAr: "عبّارة سريعة من كوالا ترنجانو أو مينار",
      howToGetThereEn: "Speed boat from Kuala Terengganu or Merang jetty",
      tipsAr: "احجز الفندق مسبقاً في موسم الذروة، الجزيرة تمتلئ بسرعة",
      tipsEn: "Book accommodation in advance during peak season, fills up fast"
    },
    category: "terengganu"
  },
  {
    id: "klcc",
    nameAr: "مركز كوالالمبور (KLCC)",
    nameEn: "Kuala Lumpur City Centre",
    taglineAr: "قلب العاصمة النابض بالحياة",
    taglineEn: "The vibrant heart of the capital",
    descAr: "منطقة KLCC هي المركز الترفيهي والتجاري الأول في كوالالمبور، تحتضن الوجهات الأكثر شهرة في العاصمة الماليزية. تُشكّل البرجان التوأمان الخلفية الرئيسية للمنطقة، لتضفيان عليها طابعاً معمارياً فريداً يجذب ملايين الزوار سنوياً.\n\nفي المنطقة ذاتها ستجد 'أكواريا KLCC' أحد أكبر أحواض الأسماك في آسيا، وحديقة KLCC الفسيحة مع نوافيرها الراقصة المضاءة، ومركز التسوق الفاخر 'سوريا KLCC'. في المساء تتحول الحديقة إلى مشهد ساحر بعروض الضوء والنوافير.",
    descEn: "The KLCC area is Kuala Lumpur's premier entertainment and commercial center, housing the Malaysian capital's most famous destinations. The Twin Towers form the main backdrop of the area, giving it a unique architectural character that attracts millions of visitors annually.\n\nIn the same area you'll find 'Aquaria KLCC', one of Asia's largest aquariums, the spacious KLCC Park with its illuminated dancing fountains, and the luxury 'Suria KLCC' shopping center. In the evening, the park transforms into a magical scene with light and fountain shows.",
    image: "/tourism/klcc.png",
    heroImage: `${BASE}tourism/klcc.jpg`,
    gallery: [
      `${BASE}tourism/g/klcc-1.jpg`,
      `${BASE}tourism/g/klcc-2.jpg`,
      `${BASE}tourism/g/klcc-3.jpg`,
      `${BASE}tourism/g/klcc-4.jpg`,
      `${BASE}tourism/g/klcc-5.jpg`,
      `${BASE}tourism/g/klcc-6.jpg`,
    ],
    highlights: [
      { titleAr: "تسوق فاخر", titleEn: "Luxury Shopping", descAr: "أرقى المتاجر العالمية", descEn: "World's finest stores", icon: "ShoppingBag" },
      { titleAr: "نوافير راقصة", titleEn: "Dancing Fountains", descAr: "عروض مائية ضوئية مذهلة", descEn: "Amazing water light shows", icon: "Waves" },
      { titleAr: "أكواريا", titleEn: "Aquaria", descAr: "أحد أكبر أحواض أسماك آسيا", descEn: "One of Asia's largest aquariums", icon: "Eye" },
      { titleAr: "حديقة خضراء", titleEn: "KLCC Park", descAr: "واحة خضراء وسط المدينة", descEn: "Green oasis in the city", icon: "TreePine" }
    ],
    attractions: [
      { nameAr: "أكواريا كيه إل سي سي", nameEn: "Aquaria KLCC", descAr: "آلاف الكائنات البحرية في نفق زجاجي.", descEn: "Thousands of marine creatures in a glass tunnel.", image: `${BASE}tourism/g/klcc-7.jpg` },
      { nameAr: "عروض النوافير الراقصة", nameEn: "Dancing Fountain Show", descAr: "عروض ليلية مجانية مع الموسيقى.", descEn: "Free nightly shows with music.", image: `${BASE}tourism/g/klcc-8.jpg` },
      { nameAr: "سوريا كيه إل سي سي", nameEn: "Suria KLCC Mall", descAr: "6 طوابق من التسوق الفاخر.", descEn: "6 floors of luxury shopping.", image: `${BASE}tourism/g/klcc-9.jpg` },
      { nameAr: "حديقة كيه إل سي سي", nameEn: "KLCC Park", descAr: "مسارات مشي وملاعب أطفال وبحيرات.", descEn: "Walking trails, children's playground and lakes.", image: `${BASE}tourism/g/klcc-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "المساء لعروض النوافير (9 م و10 م)",
      bestTimeEn: "Evening for fountain shows (9pm & 10pm)",
      howToGetThereAr: "محطة KLCC (خط أمبانج LRT) مباشرة تحت المركز",
      howToGetThereEn: "KLCC station (Ampang LRT line) directly under the center",
      tipsAr: "الدخول للحديقة مجاني، واحجز تذاكر أكواريا مسبقاً عبر الإنترنت",
      tipsEn: "Park entry is free; book Aquaria tickets online in advance"
    },
    category: "general"
  },
  {
    id: "genting",
    nameAr: "مرتفعات جنتنج",
    nameEn: "Genting Highlands",
    taglineAr: "مدينة الترفيه فوق السحاب",
    taglineEn: "The city of entertainment above the clouds",
    descAr: "مرتفعات جنتنج هي وجهة سياحية وترفيهية لا مثيل لها تقع على ارتفاع 1800 متر فوق مستوى سطح البحر. تحيط بها الغيوم الكثيفة والضباب طوال العام، مما يوفر مناخاً بارداً منعشاً ومشهداً طبيعياً ساحراً بعيداً عن حر المدينة.\n\nتضم المرتفعات مدينة الملاهي الداخلية 'سكايتروبوليس' وملاهي الهواء الطلق 'جنتنج سكاي ووردز' التي تضم ألعاباً مثيرة لجميع الأعمار، إلى جانب مراكز التسوق الضخمة ومجمع فنادق ضخم وأشهر المطاعم الماليزية والدولية.",
    descEn: "Genting Highlands is an unparalleled tourism and entertainment destination located at 1,800 meters above sea level. It is surrounded by thick clouds and mist year-round, providing a cool refreshing climate and a breathtaking natural scenery far from the city heat.\n\nThe highlands feature the 'Skytropolis' indoor entertainment city and 'Genting SkyWorlds' outdoor theme park with thrilling rides for all ages, alongside massive shopping centers, a large hotel complex, and famous Malaysian and international restaurants.",
    image: "/tourism/genting.png",
    heroImage: `${BASE}tourism/g/genting-1.jpg`,
    gallery: [
      `${BASE}tourism/g/genting-1.jpg`,
      `${BASE}tourism/g/genting-2.jpg`,
      `${BASE}tourism/g/genting-3.jpg`,
      `${BASE}tourism/g/genting-4.jpg`,
      `${BASE}tourism/g/genting-5.jpg`,
      `${BASE}tourism/g/genting-6.jpg`,
    ],
    highlights: [
      { titleAr: "مناخ بارد", titleEn: "Cool Climate", descAr: "1800م فوق سطح البحر", descEn: "1800m above sea level", icon: "Wind" },
      { titleAr: "ملاهي ضخمة", titleEn: "Theme Parks", descAr: "داخلية وخارجية لجميع الأعمار", descEn: "Indoor & outdoor for all ages", icon: "Star" },
      { titleAr: "تلفريك أواناSkyCab", titleEn: "Awana SkyWay", descAr: "أطول تلفريك في ماليزيا", descEn: "Malaysia's longest cable car", icon: "Mountain" },
      { titleAr: "تسوق وترفيه", titleEn: "Shopping & Fun", descAr: "مراكز تسوق ضخمة", descEn: "Massive shopping complexes", icon: "ShoppingBag" }
    ],
    attractions: [
      { nameAr: "سكايتروبوليس", nameEn: "Skytropolis Indoor", descAr: "مدينة ملاهي داخلية ضخمة للعائلات.", descEn: "Massive indoor theme park for families.", image: `${BASE}tourism/g/genting-7.jpg` },
      { nameAr: "جنتنج سكاي ووردز", nameEn: "Genting SkyWorlds", descAr: "ملاهي هواء الطلق مثيرة بمناطق متعددة.", descEn: "Outdoor theme park with multiple themed zones.", image: `${BASE}tourism/g/genting-8.jpg` },
      { nameAr: "تلفريك أوانا", nameEn: "Awana SkyWay Cable Car", descAr: "تلفريك بانورامي فوق الغابات والضباب.", descEn: "Panoramic cable car above forests and mist.", image: `${BASE}tourism/g/genting-9.jpg` },
      { nameAr: "معبد كهوف شين سوي", nameEn: "Chin Swee Caves Temple", descAr: "معبد صيني تاريخي بإطلالة جبلية.", descEn: "Historic Chinese temple with mountain views.", image: `${BASE}tourism/g/genting-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "طوال العام — المناخ بارد دائماً (15-25°C)، ويزدحم عطل نهاية الأسبوع",
      bestTimeEn: "Year-round — always cool (15-25°C), crowded on weekends",
      howToGetThereAr: "تلفريك أوانا من محطة Gohtong Jaya أو حافلة من KL",
      howToGetThereEn: "Awana SkyWay from Gohtong Jaya station, or bus from KL",
      tipsAr: "أحضر ملابس دافئة، البرودة مفاجئة خاصة في الليل",
      tipsEn: "Bring warm clothes — the cold can be surprising especially at night"
    },
    category: "general"
  },

  // ─── Terengganu (continued) ─────────────────────────────────────────
  {
    id: "kapas",
    nameAr: "جزيرة كاباس",
    nameEn: "Kapas Island",
    taglineAr: "الجزيرة البيضاء الهادئة بعيداً عن الحشود",
    taglineEn: "The quiet white island away from the crowds",
    descAr: "جزيرة كاباس، التي تعني 'القطن' بالملايو، هي جزيرة صغيرة هادئة تقع على بعد 6 كيلومترات من مدينة مرانج بترنجانو. تتميز بشواطئها البيضاء الناعمة ومياهها الشفافة الفيروزية التي تجعلها تبدو وكأنها منتجع مجزأ في المحيط.\n\nتعتبر كاباس وجهة مثالية لمن يريد الهروب من ضجيج الحياة اليومية والاستمتاع بهدوء حقيقي. رغم صغرها، تقدم تجارب غطس وغوص رائعة، وكهوفاً بحرية مثيرة للاستكشاف، ومسارات مشي عبر الغابات الاستوائية الكثيفة للوصول إلى شواطئ مخفية.",
    descEn: "Kapas Island, meaning 'cotton' in Malay, is a small quiet island located 6 kilometers from Marang town in Terengganu. Known for its soft white beaches and transparent turquoise waters that make it look like a resort carved in the ocean.\n\nKapas is ideal for those wanting to escape daily hustle and enjoy true tranquility. Despite its small size, it offers wonderful snorkeling and diving experiences, exciting sea caves to explore, and hiking trails through dense tropical forests leading to hidden beaches.",
    image: "/tourism/kapas.png",
    heroImage: `${BASE}tourism/kapas.jpg`,
    gallery: [
      `${BASE}tourism/g/kapas-1.jpg`,
      `${BASE}tourism/g/kapas-2.jpg`,
      `${BASE}tourism/g/kapas-3.jpg`,
      `${BASE}tourism/g/kapas-4.jpg`,
      `${BASE}tourism/g/kapas-5.jpg`,
      `${BASE}tourism/g/kapas-6.jpg`,
    ],
    highlights: [
      { titleAr: "شواطئ بكر", titleEn: "Pristine Beaches", descAr: "رمال بيضاء كالقطن", descEn: "Cotton-white pristine sands", icon: "Sun" },
      { titleAr: "هدوء تام", titleEn: "Total Serenity", descAr: "بعيد عن الحشود والضوضاء", descEn: "Away from crowds and noise", icon: "Wind" },
      { titleAr: "كهوف بحرية", titleEn: "Sea Caves", descAr: "كهف جوسوق الغامض", descEn: "Mysterious Gua Busuk cave", icon: "Mountain" },
      { titleAr: "مسارات الغابة", titleEn: "Forest Trails", descAr: "عبر غابات استوائية كثيفة", descEn: "Through dense tropical forests", icon: "TreePine" }
    ],
    attractions: [
      { nameAr: "مسار الكابس-دراغون", nameEn: "Kapas-Dragon Trail", descAr: "مسار مشي يربط كاباس بجزيرة أناك كاباس.", descEn: "Hiking trail linking Kapas to Anak Kapas island.", image: `${BASE}tourism/g/kapas-7.jpg` },
      { nameAr: "كهف جوسوق", nameEn: "Gua Busuk", descAr: "كهف بحري مثير يمكن استكشافه بالكياك.", descEn: "Exciting sea cave explorable by kayak.", image: `${BASE}tourism/g/kapas-8.jpg` },
      { nameAr: "نقاط الغطس الشمالية", nameEn: "Northern Snorkeling Spots", descAr: "أحسن مناطق الغطس في الجزيرة.", descEn: "Best snorkeling spots on the island.", image: `${BASE}tourism/g/kapas-9.jpg` },
      { nameAr: "جولات الكياك", nameEn: "Kayaking Tours", descAr: "استكشاف محيط الجزيرة بالكياك.", descEn: "Explore the island's surroundings by kayak.", image: `${BASE}tourism/g/kapas-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "مارس حتى أكتوبر (موسم الصيف)",
      bestTimeEn: "March to October (summer season)",
      howToGetThereAr: "عبّارة من ميناء مرانج (15 دقيقة فقط)",
      howToGetThereEn: "Ferry from Marang jetty (only 15 minutes)",
      tipsAr: "لا صراف آلي في الجزيرة، أحضر نقوداً كافية",
      tipsEn: "No ATM on the island, bring enough cash"
    },
    category: "terengganu"
  },
  {
    id: "langterngah",
    nameAr: "جزيرة لانج تيرنجاه",
    nameEn: "Lang Tengah Island",
    taglineAr: "الجزيرة البكر المخفية بين جزيرتين",
    taglineEn: "The pristine hidden island between two famous ones",
    descAr: "جزيرة لانج تيرنجاه هي الجوهرة المخفية لترنجانو، تقع بين جزيرتي برهنتيان وريدانج الشهيرتين. تتميز بعدد محدود من المنتجعات الصغيرة مما يضمن هدوءاً نادراً وبيئة طبيعية بكر بعيدة عن الازدحام السياحي.\n\nتتميز الجزيرة بمياه فيروزية شديدة الصفاء وشعاب مرجانية غنية بالحياة البحرية، وتعتبر من أفضل وجهات الغطس في ماليزيا. يمكنك الاستمتاع بمشاهدة السلاحف البحرية بشكل شبه مضمون، والسباحة وسط أسماك مدرسة ملونة في بحيرة زرقاء فاتنة.",
    descEn: "Lang Tengah Island is Terengganu's hidden jewel, located between the famous Perhentian and Redang islands. It features a limited number of small resorts, ensuring rare tranquility and a pristine natural environment far from tourist crowds.\n\nThe island features crystal turquoise waters and coral reefs rich with marine life, making it one of Malaysia's top diving destinations. You can almost guarantee sea turtle sightings, and swim amongst colorful fish schools in a mesmerizing blue lagoon.",
    image: "/tourism/langterngah.png",
    heroImage: `${BASE}tourism/g/langterngah-1.jpg`,
    gallery: [
      `${BASE}tourism/g/langterngah-1.jpg`,
      `${BASE}tourism/g/langterngah-2.jpg`,
      `${BASE}tourism/g/langterngah-3.jpg`,
      `${BASE}tourism/g/langterngah-4.jpg`,
      `${BASE}tourism/g/langterngah-5.jpg`,
      `${BASE}tourism/g/langterngah-6.jpg`,
    ],
    highlights: [
      { titleAr: "خصوصية كاملة", titleEn: "Complete Privacy", descAr: "منتجعات محدودة بلا ازدحام", descEn: "Limited resorts, no crowding", icon: "Shield" },
      { titleAr: "غوص استثنائي", titleEn: "Exceptional Diving", descAr: "رؤية تحت مائية فائقة الوضوح", descEn: "Exceptional underwater visibility", icon: "Eye" },
      { titleAr: "بحيرة زرقاء", titleEn: "Blue Lagoon", descAr: "مياه فيروزية ساحرة للسباحة", descEn: "Enchanting turquoise swimming waters", icon: "Waves" },
      { titleAr: "سلاحف مضمونة", titleEn: "Turtle Sightings", descAr: "مشاهدة شبه مضمونة للسلاحف", descEn: "Almost guaranteed turtle encounters", icon: "Star" }
    ],
    attractions: [
      { nameAr: "البحيرة الزرقاء", nameEn: "Blue Lagoon", descAr: "منطقة سباحة بمياه هادئة وفيروزية.", descEn: "Swimming area with calm turquoise waters.", image: `${BASE}tourism/g/langterngah-7.jpg` },
      { nameAr: "نقطة السلاحف", nameEn: "Turtle Point Diving", descAr: "موقع غوص شهير بتواجد السلاحف.", descEn: "Famous dive site known for turtle presence.", image: `${BASE}tourism/g/langterngah-8.jpg` },
      { nameAr: "الغطس الليلي", nameEn: "Night Snorkeling", descAr: "شاهد العوالق البيولوجية المضيئة بالليل.", descEn: "Witness bioluminescent plankton at night.", image: `${BASE}tourism/g/langterngah-9.jpg` },
      { nameAr: "مسار الغابة الجبلي", nameEn: "Jungle Trek", descAr: "مسار قصير يوصل لنقطة مراقبة بانورامية.", descEn: "Short trail leading to a panoramic viewpoint.", image: `${BASE}tourism/g/langterngah-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "مارس حتى أكتوبر، تجنب موسم الأمطار نوفمبر-فبراير",
      bestTimeEn: "March to October, avoid monsoon Nov-Feb",
      howToGetThereAr: "عبّارة خاصة من كوالا ترنجانو أو مينار (حجز مسبق مطلوب)",
      howToGetThereEn: "Private boat from Kuala Terengganu or Merang (pre-booking required)",
      tipsAr: "احجز المنتجع مبكراً جداً — المقاعد محدودة وتنفد بسرعة",
      tipsEn: "Book your resort very early — limited spots sell out fast"
    },
    category: "terengganu"
  },
  {
    id: "tenggol",
    nameAr: "جزيرة تينجول",
    nameEn: "Tenggol Island",
    taglineAr: "الجزيرة الأكثر نائية لعشاق الغوص المحترفين",
    taglineEn: "Malaysia's remotest island for professional divers",
    descAr: "جزيرة تينجول هي الجزيرة الأبعد والأكثر نائيةً في ساحل ترنجانو، مما يجعلها وجهة حصرية للغواصين المحترفين وعشاق المغامرات البحرية الحقيقية. تضم مياهها ثروات بحرية نادرة لا توجد في أي جزيرة ماليزية أخرى.\n\nتشتهر الجزيرة بمشاهدات القرش الحوت العملاق وأسماك المانتا الضخمة في مواسم معينة، فضلاً عن حدائق مرجانية بكر لم تمسها يد الإنسان. الشعاب العميقة تضم تشكيلات 'بومي' المرجانية الضخمة التي تعيش حولها الأسماك الضخمة وثعابين البحر ونجوم البحر.",
    descEn: "Tenggol Island is the most remote island off Terengganu's coast, making it an exclusive destination for professional divers and true ocean adventure lovers. Its waters contain rare marine treasures found nowhere else in Malaysia.\n\nThe island is famous for whale shark and giant manta ray sightings during certain seasons, as well as pristine coral gardens untouched by human hands. The deep reefs contain massive 'bommie' coral formations inhabited by large fish, sea snakes, and starfish.",
    image: "/tourism/tenggol.png",
    heroImage: `${BASE}tourism/g/tenggol-1.jpg`,
    gallery: [
      `${BASE}tourism/g/tenggol-1.jpg`,
      `${BASE}tourism/g/tenggol-2.jpg`,
      `${BASE}tourism/g/tenggol-3.jpg`,
      `${BASE}tourism/g/tenggol-4.jpg`,
      `${BASE}tourism/g/tenggol-5.jpg`,
      `${BASE}tourism/g/tenggol-6.jpg`,
    ],
    highlights: [
      { titleAr: "قرش الحوت", titleEn: "Whale Sharks", descAr: "مشاهدات نادرة موسمية", descEn: "Rare seasonal sightings", icon: "Eye" },
      { titleAr: "أسماك المانتا", titleEn: "Manta Rays", descAr: "أكبر أسماك الشيطان في العالم", descEn: "World's largest devil fish", icon: "Waves" },
      { titleAr: "شعاب بكر", titleEn: "Pristine Reefs", descAr: "لم تمسها يد الإنسان", descEn: "Untouched by human hands", icon: "Shield" },
      { titleAr: "عزلة تامة", titleEn: "Complete Isolation", descAr: "الجزيرة الأكثر نائية", descEn: "Malaysia's remotest island", icon: "Mountain" }
    ],
    attractions: [
      { nameAr: "ممر المانتا", nameEn: "Manta Passage", descAr: "موقع الغوص الأشهر لمشاهدة المانتا.", descEn: "Most famous dive site for manta rays.", image: `${BASE}tourism/g/tenggol-7.jpg` },
      { nameAr: "مواقع قرش الحوت", nameEn: "Whale Shark Spots", descAr: "مشاهدة أضخم سمك في العالم.", descEn: "Spotting the world's largest fish.", image: `${BASE}tourism/g/tenggol-8.jpg` },
      { nameAr: "صخرة النمر", nameEn: "Tiger Rock", descAr: "موقع غوص عميق بشعاب رائعة.", descEn: "Deep dive site with spectacular reefs.", image: `${BASE}tourism/g/tenggol-9.jpg` },
      { nameAr: "غابة المراوح البحرية", nameEn: "Sea Fan Forest", descAr: "حديقة مراوح بحرية عملاقة نادرة.", descEn: "Rare giant sea fan garden.", image: `${BASE}tourism/g/tenggol-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "مارس حتى أغسطس لمشاهدة قرش الحوت",
      bestTimeEn: "March to August for whale shark sightings",
      howToGetThereAr: "قارب خاص من Kuala Dungun (~90 دقيقة، يوصّى بحجز باكيج كامل)",
      howToGetThereEn: "Private boat from Kuala Dungun (~90 min, full package recommended)",
      tipsAr: "وجهة للغواصين المتمرسين — يشترط امتلاك شهادة PADI على الأقل",
      tipsEn: "For experienced divers only — minimum PADI certification required"
    },
    category: "terengganu"
  },
  {
    id: "terengganu-city",
    nameAr: "مدينة كوالا ترنجانو",
    nameEn: "Kuala Terengganu City",
    taglineAr: "عاصمة الثقافة الملايوية الأصيلة",
    taglineEn: "Capital of authentic Malay culture",
    descAr: "كوالا ترنجانو عاصمة ولاية ترنجانو الساحلية، مدينة تمزج بين الأصالة الثقافية والجمال الطبيعي. تشتهر بمسجدها المعائم الأيقوني الذي يطفو على نهر ترنجانو، والذي أصبح رمزاً للمدينة ووجهة تصوير لا تُنسى.\n\nتتميز المدينة بصناعة الباتيك التقليدية وصناعة القوارب الشراعية الكلاسيكية، ومتحف ولاية ترنجانو الذي يعتبر الأكبر في ماليزيا بمساحة أكثر من 40 هكتاراً. أسواقها التقليدية تعج بالمصنوعات اليدوية الفريدة والأطعمة المحلية.",
    descEn: "Kuala Terengganu is the capital of coastal Terengganu state, a city blending cultural authenticity with natural beauty. Famous for its iconic floating mosque that drifts on the Terengganu River, which has become the city's symbol and an unforgettable photography destination.\n\nThe city is known for its traditional batik craft and classic sailboat construction, and the Terengganu State Museum, Malaysia's largest at over 40 hectares. Its traditional markets are filled with unique handicrafts and local foods.",
    image: "/tourism/terengganu-city.png",
    heroImage: `${BASE}tourism/terengganu-city.jpg`,
    gallery: [
      `${BASE}tourism/g/terengganu-city-1.jpg`,
      `${BASE}tourism/g/terengganu-city-2.jpg`,
      `${BASE}tourism/g/terengganu-city-3.jpg`,
      `${BASE}tourism/g/terengganu-city-4.jpg`,
      `${BASE}tourism/g/terengganu-city-5.jpg`,
      `${BASE}tourism/g/terengganu-city-6.jpg`,
    ],
    highlights: [
      { titleAr: "المسجد المعائم", titleEn: "Floating Mosque", descAr: "أيقونة ترنجانو على النهر", descEn: "Terengganu's riverside icon", icon: "Landmark" },
      { titleAr: "صناعة الباتيك", titleEn: "Batik Crafts", descAr: "نسيج تقليدي ملوّن", descEn: "Colorful traditional fabric", icon: "Paintbrush" },
      { titleAr: "أكبر متحف", titleEn: "Largest Museum", descAr: "متحف الولاية على 40 هكتاراً", descEn: "State museum on 40 hectares", icon: "Landmark" },
      { titleAr: "سوق تقليدي", titleEn: "Traditional Market", descAr: "مصنوعات يدوية وأطعمة محلية", descEn: "Handicrafts and local food", icon: "Utensils" }
    ],
    attractions: [
      { nameAr: "مسجد ترنجانو المعائم", nameEn: "Tengku Tengah Zaharah Mosque", descAr: "المسجد الأبيض الأيقوني العائم على الماء.", descEn: "The iconic white mosque floating on water.", image: `${BASE}tourism/g/terengganu-city-7.jpg` },
      { nameAr: "متحف ولاية ترنجانو", nameEn: "Terengganu State Museum", descAr: "أكبر متحف في ماليزيا بمبانٍ تراثية ضخمة.", descEn: "Malaysia's largest museum with grand heritage buildings.", image: `${BASE}tourism/g/terengganu-city-8.jpg` },
      { nameAr: "سوق باسر باياونج", nameEn: "Pasar Payang Central Market", descAr: "سوق شعبي نابض بالمصنوعات والأطعمة.", descEn: "Vibrant market full of crafts and local food.", image: `${BASE}tourism/g/terengganu-city-9.jpg` },
      { nameAr: "جزيرة دويونج", nameEn: "Pulau Duyong", descAr: "مركز صناعة القوارب التقليدية الكلاسيكية.", descEn: "Traditional classic boat building center.", image: `${BASE}tourism/g/terengganu-city-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "مارس حتى أكتوبر لتجنب موسم الرياح الموسمية",
      bestTimeEn: "March to October to avoid monsoon season",
      howToGetThereAr: "طيران داخلي إلى مطار سلطان محمود أو حافلة من كوالالمبور",
      howToGetThereEn: "Domestic flight to Sultan Mahmud Airport or bus from KL",
      tipsAr: "زر سوق باياونج في الصباح الباكر للحصول على أفضل المنتجات",
      tipsEn: "Visit Pasar Payang early morning for the best products"
    },
    category: "terengganu"
  },

  // ─── Putrajaya (continued) ──────────────────────────────────────────
  {
    id: "putra-mosque",
    nameAr: "مسجد بوترا",
    nameEn: "Putra Mosque",
    taglineAr: "القبة الوردية الأيقونية على بحيرة بتراجايا",
    taglineEn: "The iconic pink dome on Putrajaya Lake",
    descAr: "مسجد بوترا هو أحد أجمل المساجد في جنوب شرق آسيا، يتميز بقبته الوردية الفريدة المستوحاة من مسجد الإمام في طهران. يطل مباشرة على بحيرة بتراجايا مما يمنحه مظهراً يوحي بأنه يطفو على سطح الماء، خاصة في ساعات الغروب.\n\nيتسع المسجد لأربعة عشر ألف مصلٍّ وهو مفتوح للزوار غير المسلمين خارج أوقات الصلاة. تصميمه الداخلي يجمع بين الزخارف الإسلامية المعقدة والفسيفساء المذهبة والقباب المتعددة التي تضفي عليه طابعاً روحانياً فريداً.",
    descEn: "Putra Mosque is one of Southeast Asia's most beautiful mosques, featuring a unique pink dome inspired by the Imam mosque in Tehran. It overlooks Putrajaya Lake directly, giving it the appearance of floating on the water's surface, especially at sunset.\n\nThe mosque accommodates 14,000 worshippers and is open to non-Muslim visitors outside prayer times. Its interior design combines intricate Islamic decorations, golden mosaics, and multiple domes that give it a unique spiritual character.",
    image: "/tourism/putra-mosque.png",
    heroImage: `${BASE}tourism/putra-mosque.jpg`,
    gallery: [
      `${BASE}tourism/g/putra-mosque-1.jpg`,
      `${BASE}tourism/g/putra-mosque-2.jpg`,
      `${BASE}tourism/g/putra-mosque-3.jpg`,
      `${BASE}tourism/g/putra-mosque-4.jpg`,
      `${BASE}tourism/g/putra-mosque-5.jpg`,
      `${BASE}tourism/g/putra-mosque-6.jpg`,
    ],
    highlights: [
      { titleAr: "قبة وردية فريدة", titleEn: "Unique Pink Dome", descAr: "مستوحاة من مسجد الإمام في طهران", descEn: "Inspired by Tehran's Imam mosque", icon: "Landmark" },
      { titleAr: "إطلالة على البحيرة", titleEn: "Lake Views", descAr: "يبدو كأنه يطفو على الماء", descEn: "Appears to float on water", icon: "Waves" },
      { titleAr: "زخارف إسلامية", titleEn: "Islamic Decor", descAr: "فسيفساء ذهبية مذهلة", descEn: "Stunning golden mosaics", icon: "Star" },
      { titleAr: "مفتوح للسياح", titleEn: "Open to Tourists", descAr: "زيارات خارج أوقات الصلاة", descEn: "Visits outside prayer times", icon: "Users" }
    ],
    attractions: [
      { nameAr: "قاعة الصلاة الرئيسية", nameEn: "Main Prayer Hall", descAr: "تستوعب 14,000 مصلٍّ بزخارف إسلامية رائعة.", descEn: "Accommodates 14,000 worshippers with stunning Islamic decor.", image: `${BASE}tourism/g/putra-mosque-7.jpg` },
      { nameAr: "صحن المسجد المفتوح", nameEn: "Open Courtyard (Sahn)", descAr: "ساحة فضاء تطل على البحيرة.", descEn: "Open courtyard overlooking the lake.", image: `${BASE}tourism/g/putra-mosque-8.jpg` },
      { nameAr: "نقطة التصوير الغروبي", nameEn: "Sunset Photography Spot", descAr: "أجمل نقطة لتصوير المسجد على البحيرة.", descEn: "Best point to photograph the mosque over the lake.", image: `${BASE}tourism/g/putra-mosque-9.jpg` },
      { nameAr: "معرض المسجد", nameEn: "Exhibition Gallery", descAr: "معرض تعريفي بتاريخ المسجد والإسلام.", descEn: "Introductory exhibition on mosque history and Islam.", image: `${BASE}tourism/g/putra-mosque-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "وقت الغروب للحصول على أجمل الصور",
      bestTimeEn: "Sunset time for the most beautiful photos",
      howToGetThereAr: "قطار KLIA Transit ثم تاكسي أو حافلة محلية",
      howToGetThereEn: "KLIA Transit train then taxi or local bus",
      tipsAr: "للزيارة ارتدِ ملابس محتشمة، وتُوفَّر أردية مجانية للزائرين",
      tipsEn: "Wear modest clothes for your visit; free robes provided for visitors"
    },
    category: "putrajaya"
  },
  {
    id: "putrajaya-botanical",
    nameAr: "الحديقة النباتية بتراجايا",
    nameEn: "Putrajaya Botanical Garden",
    taglineAr: "92 هكتاراً من الجنة الاستوائية",
    taglineEn: "92 hectares of tropical paradise",
    descAr: "الحديقة النباتية في بتراجايا هي إحدى أكبر الحدائق النباتية في جنوب شرق آسيا، تمتد على مساحة 92 هكتاراً وتضم أكثر من 700 نوع من النباتات المدارية والمحلية. صُممت لتكون متنفساً طبيعياً لسكان المدينة الإدارية وزوارها.\n\nتنقسم الحديقة إلى أقسام متخصصة متعددة، منها: حديقة النخيل التي تضم أكثر من 1000 نوع من النخيل، والحديقة العطرية التي تضم الأعشاب الطبية والتوابل، وحديقة الزهور وحديقة الأوركيد والبروميلياد، وحديقة الخيزران الخضراء النادرة.",
    descEn: "The Putrajaya Botanical Garden is one of Southeast Asia's largest botanical gardens, spanning 92 hectares and housing over 700 species of tropical and local plants. It was designed as a natural retreat for administrative city residents and visitors.\n\nThe garden is divided into multiple specialized sections, including: the Palm Garden with over 1,000 palm species, the Fragrant Garden with medicinal herbs and spices, the Flower Garden, the Orchid and Bromeliad Garden, and the rare Green Bamboo Garden.",
    image: "/tourism/putrajaya-botanical.png",
    heroImage: `${BASE}tourism/g/putrajaya-botanical-1.jpg`,
    gallery: [
      `${BASE}tourism/g/putrajaya-botanical-1.jpg`,
      `${BASE}tourism/g/putrajaya-botanical-2.jpg`,
      `${BASE}tourism/g/putrajaya-botanical-3.jpg`,
      `${BASE}tourism/g/putrajaya-botanical-4.jpg`,
      `${BASE}tourism/g/putrajaya-botanical-5.jpg`,
      `${BASE}tourism/g/putrajaya-botanical-6.jpg`,
    ],
    highlights: [
      { titleAr: "700+ نوع نباتي", titleEn: "700+ Plant Species", descAr: "تنوع نباتي استثنائي", descEn: "Exceptional plant diversity", icon: "Leaf" },
      { titleAr: "حديقة النخيل", titleEn: "Palm Garden", descAr: "1000+ نوع من النخيل", descEn: "1000+ palm species", icon: "TreePine" },
      { titleAr: "مسارات المشي", titleEn: "Walking Trails", descAr: "طرق مريحة بين النباتات", descEn: "Comfortable paths among plants", icon: "Wind" },
      { titleAr: "هواء نقي", titleEn: "Fresh Air", descAr: "متنفس طبيعي في قلب المدينة", descEn: "Natural retreat in the city heart", icon: "Sun" }
    ],
    attractions: [
      { nameAr: "حديقة النخيل", nameEn: "Palm Garden", descAr: "أكثر من 1000 نوع من أشجار النخيل.", descEn: "Over 1,000 species of palm trees.", image: `${BASE}tourism/g/putrajaya-botanical-7.jpg` },
      { nameAr: "الحديقة العطرية", nameEn: "Fragrant Garden", descAr: "أعشاب طبية وتوابل استوائية عطرة.", descEn: "Medicinal herbs and aromatic tropical spices.", image: `${BASE}tourism/g/putrajaya-botanical-8.jpg` },
      { nameAr: "حديقة الأوركيد", nameEn: "Orchid Garden", descAr: "مئات أنواع الأوركيد الاستوائية النادرة.", descEn: "Hundreds of rare tropical orchid varieties.", image: `${BASE}tourism/g/putrajaya-botanical-9.jpg` },
      { nameAr: "حديقة الخيزران", nameEn: "Bamboo Garden", descAr: "حديقة خيزران خضراء هادئة ومنعشة.", descEn: "Calm and refreshing green bamboo garden.", image: `${BASE}tourism/g/putrajaya-botanical-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "الصباح الباكر أو المساء — مفتوحة يومياً",
      bestTimeEn: "Early morning or evening — open daily",
      howToGetThereAr: "تاكسي أو حافلة من محطة Putrajaya & Cyberjaya",
      howToGetThereEn: "Taxi or bus from Putrajaya & Cyberjaya station",
      tipsAr: "الدخول مجاني — أحضر ماء وضع واقي للشمس",
      tipsEn: "Free entry — bring water and apply sunscreen"
    },
    category: "putrajaya"
  },
  {
    id: "palace-justice",
    nameAr: "قصر العدالة",
    nameEn: "Palace of Justice",
    taglineAr: "تحفة معمارية أندلسية في قلب بتراجايا",
    taglineEn: "An Andalusian architectural masterpiece in Putrajaya",
    descAr: "قصر العدالة أو 'بالاس أوف جاستيس' هو مقر المحكمة الاتحادية لماليزيا ويعتبر أحد أكثر المباني الحكومية إثارةً للإعجاب المعماري في البلاد. يجمع في تصميمه بين الطراز الغرناطي الأندلسي بقببه المتعددة وأقواسه المعمارية والمعمار الإسلامي الحديث.\n\nبُني المبنى باستخدام الحجر الهندي والرخام الإيطالي، وتتصدره أقواس ضخمة وعمود مركزي بارز. يقع في موقع استراتيجي على الطريق الرئيسية مقابل ميدان بوترا، مما يجعله معلماً بصرياً أساسياً يرتبط ارتباطاً وثيقاً بصورة بتراجايا الإدارية.",
    descEn: "The Palace of Justice, or 'Istana Kehakiman', is the seat of Malaysia's Federal Court and one of the country's most architecturally impressive government buildings. Its design blends the Andalusian Granadan style with its multiple domes and architectural arches, with modern Islamic architecture.\n\nThe building is constructed using Indian stone and Italian marble, fronted by massive arches and a prominent central column. It sits in a strategic location on the main road opposite Putra Square, making it an essential visual landmark closely linked to Putrajaya's administrative image.",
    image: "/tourism/palace-justice.png",
    heroImage: `${BASE}tourism/g/palace-justice-1.jpg`,
    gallery: [
      `${BASE}tourism/g/palace-justice-1.jpg`,
      `${BASE}tourism/g/palace-justice-2.jpg`,
      `${BASE}tourism/g/palace-justice-3.jpg`,
      `${BASE}tourism/g/palace-justice-4.jpg`,
      `${BASE}tourism/g/palace-justice-5.jpg`,
      `${BASE}tourism/g/palace-justice-6.jpg`,
    ],
    highlights: [
      { titleAr: "طراز أندلسي", titleEn: "Andalusian Style", descAr: "مستوحى من غرناطة الإسلامية", descEn: "Inspired by Islamic Granada", icon: "Landmark" },
      { titleAr: "رخام إيطالي", titleEn: "Italian Marble", descAr: "مواد فاخرة من جميع أنحاء العالم", descEn: "Luxury materials from across the world", icon: "Star" },
      { titleAr: "قباب متعددة", titleEn: "Multiple Domes", descAr: "6 قباب تتوج المبنى", descEn: "6 domes crowning the building", icon: "Mountain" },
      { titleAr: "تصوير رائع", titleEn: "Photography Gem", descAr: "أحد أجمل مباني ماليزيا", descEn: "One of Malaysia's most photogenic buildings", icon: "Camera" }
    ],
    attractions: [
      { nameAr: "واجهة المبنى الضخمة", nameEn: "Grand Building Facade", descAr: "أقواس وقباب أندلسية مذهلة للتصوير.", descEn: "Stunning Andalusian arches and domes for photography.", image: `${BASE}tourism/g/palace-justice-7.jpg` },
      { nameAr: "ساحة بوترا", nameEn: "Putra Square", descAr: "الميدان الرئيسي المقابل للقصر.", descEn: "Main square opposite the palace.", image: `${BASE}tourism/g/palace-justice-1.jpg` },
      { nameAr: "حديقة الفسيفساء", nameEn: "Mosaic Garden Details", descAr: "تفاصيل فسيفساء إسلامية دقيقة مذهلة.", descEn: "Stunning intricate Islamic mosaic details.", image: `${BASE}tourism/g/palace-justice-2.jpg` },
      { nameAr: "الجسر الرئيسي المجاور", nameEn: "Wawasan Bridge Nearby", descAr: "جسر مستقبلي على بعد خطوات.", descEn: "Futuristic bridge just steps away.", image: `${BASE}tourism/g/palace-justice-3.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "الصباح لأفضل إضاءة للتصوير",
      bestTimeEn: "Morning for the best photography lighting",
      howToGetThereAr: "تاكسي أو حافلة سياحية من محطة Putrajaya",
      howToGetThereEn: "Taxi or tourist bus from Putrajaya station",
      tipsAr: "الدخول للمبنى غير متاح، لكن واجهته الخارجية رائعة للتصوير",
      tipsEn: "Entry is not permitted, but the exterior is stunning for photography"
    },
    category: "putrajaya"
  },
  {
    id: "perdana-putra",
    nameAr: "مبنى برداني بوترا",
    nameEn: "Perdana Putra",
    taglineAr: "المقر الرسمي لرئيس وزراء ماليزيا",
    taglineEn: "Official office of Malaysia's Prime Minister",
    descAr: "مبنى برداني بوترا هو المقر الرسمي لعمل رئيس وزراء ماليزيا، ويُشكّل المحور البصري الأساسي لمدينة بتراجايا الإدارية. يتميز بقبته الضخمة ذات اللون الأخضر المنير المستوحاة من الهندسة الإسلامية الكلاسيكية.\n\nيقع المبنى على تلة مرتفعة تطل مباشرة على بحيرة بتراجايا، مما يوفر إطلالة بانورامية ساحرة من الجانبين. تُحيط به مسطحات خضراء واسعة وميدان بوترا الشهير. الساعة الزهرية المزروعة بالأزهار الملونة أمام المبنى أصبحت معلماً سياحياً شهيراً.",
    descEn: "Perdana Putra is the official working office of Malaysia's Prime Minister and forms the primary visual axis of the Putrajaya administrative city. It is distinguished by its large dome in luminous green color inspired by classic Islamic architecture.\n\nThe building sits on an elevated hill overlooking Putrajaya Lake directly, providing a breathtaking panoramic view from both sides. It is surrounded by spacious green lawns and the famous Putra Square. The floral clock planted with colorful flowers in front of the building has become a famous tourist landmark.",
    image: "/tourism/perdana-putra.png",
    heroImage: `${BASE}tourism/perdana-putra.jpg`,
    gallery: [
      `${BASE}tourism/g/perdana-putra-1.jpg`,
      `${BASE}tourism/g/perdana-putra-2.jpg`,
      `${BASE}tourism/g/perdana-putra-3.jpg`,
      `${BASE}tourism/g/perdana-putra-4.jpg`,
      `${BASE}tourism/g/perdana-putra-5.jpg`,
      `${BASE}tourism/g/perdana-putra-6.jpg`,
    ],
    highlights: [
      { titleAr: "مركز بتراجايا", titleEn: "Putrajaya's Center", descAr: "المحور البصري للعاصمة الإدارية", descEn: "Visual axis of the administrative capital", icon: "Landmark" },
      { titleAr: "قبة خضراء", titleEn: "Green Dome", descAr: "معمار إسلامي كلاسيكي مميز", descEn: "Distinctive classic Islamic architecture", icon: "Star" },
      { titleAr: "ساعة زهرية", titleEn: "Floral Clock", descAr: "معلم سياحي فريد من نوعه", descEn: "Unique one-of-a-kind tourist landmark", icon: "Camera" },
      { titleAr: "إطلالة على البحيرة", titleEn: "Lake Views", descAr: "منظر بانورامي من الأعلى", descEn: "Panoramic view from above", icon: "Eye" }
    ],
    attractions: [
      { nameAr: "الساعة الزهرية", nameEn: "Floral Clock", descAr: "ساعة ضخمة مزروعة بالأزهار الملونة.", descEn: "Large clock planted with colorful flowers.", image: `${BASE}tourism/g/perdana-putra-7.jpg` },
      { nameAr: "ميدان بوترا", nameEn: "Putra Square", descAr: "الميدان الرسمي أمام المبنى للصور الرسمية.", descEn: "Official square in front of the building.", image: `${BASE}tourism/g/perdana-putra-8.jpg` },
      { nameAr: "إطلالة البحيرة المقابلة", nameEn: "Lake View Vantage Point", descAr: "أجمل زاوية لتصوير المبنى من حافة البحيرة.", descEn: "Best angle to photograph the building from the lakeside.", image: `${BASE}tourism/g/perdana-putra-9.jpg` },
      { nameAr: "نصب الألفية القريب", nameEn: "Nearby Millennium Monument", descAr: "نصب تذكاري بشكل زهرة الكركديه الوطنية.", descEn: "Memorial monument shaped like the national hibiscus.", image: `${BASE}tourism/g/perdana-putra-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "الصباح للتصوير مع ضوء الشمس الذهبي",
      bestTimeEn: "Morning for golden sunlight photography",
      howToGetThereAr: "سيارة أو تاكسي من محطة Putrajaya",
      howToGetThereEn: "Car or taxi from Putrajaya station",
      tipsAr: "التصوير من الجانب المقابل للبحيرة يعطي أجمل الزوايا",
      tipsEn: "Photographing from the opposite lake side gives the best angles"
    },
    category: "putrajaya"
  },
  {
    id: "putrajaya-wetlands",
    nameAr: "الأراضي الرطبة بتراجايا",
    nameEn: "Putrajaya Wetlands",
    taglineAr: "محمية طبيعية نادرة وسط مدينة إدارية",
    taglineEn: "A rare nature reserve inside an administrative city",
    descAr: "الأراضي الرطبة في بتراجايا هي محمية طبيعية فريدة ونادرة تقع في قلب المدينة الإدارية، تمتد على مساحة 197 هكتاراً. تعمل كمصفاة طبيعية لتنقية مياه بحيرة بتراجايا وموطناً لأكثر من 100 نوع من الطيور المهاجرة والمحلية.\n\nتُعد وجهة مثالية لعشاق الطبيعة ومراقبة الطيور، حيث تجد شبكة من الممرات الخشبية فوق المياه تأخذك في رحلة عبر بيئة المانغروف والأعشاب المائية. في المساء يمكن مشاهدة اليراعات التي تضيء المانغروف كأنجم ساقطة، وهو مشهد ساحر لا يُنسى.",
    descEn: "The Putrajaya Wetlands are a unique and rare nature reserve located in the heart of the administrative city, spanning 197 hectares. They act as a natural filter to purify Putrajaya Lake water and serve as a habitat for over 100 species of migratory and local birds.\n\nIt is an ideal destination for nature lovers and birdwatching, where you'll find a network of wooden walkways over the water taking you through mangrove and aquatic vegetation environments. In the evening, fireflies can be seen illuminating the mangroves like falling stars, creating an unforgettable magical scene.",
    image: "/tourism/putrajaya-wetlands.png",
    heroImage: `${BASE}tourism/g/putrajaya-wetlands-1.jpg`,
    gallery: [
      `${BASE}tourism/g/putrajaya-wetlands-1.jpg`,
      `${BASE}tourism/g/putrajaya-wetlands-2.jpg`,
      `${BASE}tourism/g/putrajaya-wetlands-3.jpg`,
      `${BASE}tourism/g/putrajaya-wetlands-4.jpg`,
      `${BASE}tourism/g/putrajaya-wetlands-5.jpg`,
      `${BASE}tourism/g/putrajaya-wetlands-6.jpg`,
    ],
    highlights: [
      { titleAr: "100+ نوع طيور", titleEn: "100+ Bird Species", descAr: "طيور مهاجرة ومحلية", descEn: "Migratory and local birds", icon: "Eye" },
      { titleAr: "ممرات خشبية", titleEn: "Wooden Boardwalks", descAr: "فوق المياه وسط المانغروف", descEn: "Over water through mangroves", icon: "TreePine" },
      { titleAr: "يراعات ليلية", titleEn: "Fireflies", descAr: "عرض ضوئي طبيعي ساحر", descEn: "Enchanting natural light show", icon: "Star" },
      { titleAr: "محمية بيولوجية", titleEn: "Biodiversity Reserve", descAr: "نظام بيئي متكامل ونادر", descEn: "Complete and rare ecosystem", icon: "Shield" }
    ],
    attractions: [
      { nameAr: "برج مراقبة الطيور", nameEn: "Bird Watching Tower", descAr: "برج مرتفع لرصد الطيور بمنظار.", descEn: "Elevated tower for bird spotting with binoculars.", image: `${BASE}tourism/g/putrajaya-wetlands-7.jpg` },
      { nameAr: "ممشى المانغروف الخشبي", nameEn: "Mangrove Boardwalk", descAr: "جولة مشي ممتعة فوق المياه.", descEn: "Enjoyable walk above the water.", image: `${BASE}tourism/g/putrajaya-wetlands-8.jpg` },
      { nameAr: "جولة اليراعات الليلية", nameEn: "Night Firefly Walk", descAr: "مشهد ساحر من اليراعات في المانغروف.", descEn: "Magical firefly scene in the mangroves.", image: `${BASE}tourism/g/putrajaya-wetlands-9.jpg` },
      { nameAr: "مركز أبحاث الأراضي الرطبة", nameEn: "Wetland Research Centre", descAr: "تعرف على بيئة الأراضي الرطبة وأهميتها.", descEn: "Learn about wetland ecology and its importance.", image: `${BASE}tourism/g/putrajaya-wetlands-10.jpg` }
    ],
    practicalInfo: {
      bestTimeAr: "الصباح الباكر لمراقبة الطيور، أو المساء لمشاهدة اليراعات",
      bestTimeEn: "Early morning for birds, or evening for firefly watching",
      howToGetThereAr: "تاكسي من محطة Putrajaya & Cyberjaya",
      howToGetThereEn: "Taxi from Putrajaya & Cyberjaya station",
      tipsAr: "أحضر طارد الحشرات ومنظاراً للتمتع بمراقبة الطيور على أكمل وجه",
      tipsEn: "Bring insect repellent and binoculars for the best birdwatching"
    },
    category: "putrajaya"
  }
];
