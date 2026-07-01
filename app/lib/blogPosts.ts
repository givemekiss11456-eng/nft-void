export interface BlogPost {
  slug: string;
  date: string;
  title: { en: string; fa: string };
  excerpt: { en: string; fa: string };
  content: { en: string[]; fa: string[] };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'birth-of-void',
    date: 'June 2026',
    title: {
      en: 'The Birth of VOID',
      fa: 'تولد VOID',
    },
    excerpt: {
      en: 'How a cyberpunk universe was born from late-night code and AI-generated art.',
      fa: 'چطور یک دنیای سایبرپانک از کدنویسی‌های نیمه‌شب و هنر تولید شده با هوش مصنوعی متولد شد.',
    },
    content: {
      en: [
        'It started as most things do — with an idea that wouldn\'t leave me alone. I\'d spend my nights between university assignments sketching out characters in my mind: animals reimagined as cyberpunk warriors, machines with souls, neon cities that only existed in dreams.',
        'I\'m a Computer Engineering student, not a traditional artist. But I realized that didn\'t have to stop me. AI gave me a brush I never had — a way to translate the images in my head into something real, something others could see and own.',
        'NFT VOID became the name for this universe. Not just a collection of images, but a growing mythology. Every piece I create adds another page to a story I\'m still writing.',
        'The technical side excited me just as much as the art. Building the platform itself — the gallery, the wallet integration, the blockchain mechanics — became part of the creative process. Code and art, working together.',
        'This is just the first entry. There\'s a lot more coming.',
      ],
      fa: [
        'مثل خیلی چیزای دیگه شروع شد — با یه ایده که دست از سرم برنمی‌داشت. شبا بین تکالیف دانشگاه، توی ذهنم کاراکتر طراحی می‌کردم: حیواناتی که به شکل جنگجوهای سایبرپانک بازتعریف شدن، ماشین‌هایی با روح، شهرهای نئونی که فقط توی رویا وجود داشتن.',
        'من دانشجوی مهندسی کامپیوترم، نه یه هنرمند سنتی. ولی فهمیدم این نباید جلومو بگیره. هوش مصنوعی یه قلم بهم داد که هیچ‌وقت نداشتم — راهی برای تبدیل تصاویر ذهنم به چیزی واقعی، چیزی که بقیه بتونن ببینن و مالکش بشن.',
        'NFT VOID اسم این دنیا شد. نه فقط یه مجموعه عکس، بلکه یه اسطوره‌شناسی که داره رشد می‌کنه. هر اثری که می‌سازم یه صفحه دیگه به داستانی اضافه می‌کنه که هنوز دارم می‌نویسمش.',
        'بخش فنی قضیه به همون اندازه هنر هیجان‌زدم می‌کرد. ساختن خود پلتفرم — گالری، اتصال کیف پول، مکانیزم بلاکچین — بخشی از فرآیند خلاقانه شد. کد و هنر، دست به دست هم.',
        'این فقط اولین پست بود. چیزای بیشتری در راهه.',
      ],
    },
  },
  {
    slug: 'why-cyberpunk',
    date: 'June 2026',
    title: {
      en: 'Why Cyberpunk?',
      fa: 'چرا سایبرپانک؟',
    },
    excerpt: {
      en: 'Exploring the aesthetic choices behind the VOID collection.',
      fa: 'کاوش در انتخاب‌های زیبایی‌شناختی پشت مجموعه VOID.',
    },
    content: {
      en: [
        'Cyberpunk has always felt like the right lens for the stories I wanted to tell. It\'s a genre obsessed with the tension between humanity and technology — which is exactly the space NFT VOID lives in.',
        'Neon against darkness. Organic shapes wrapped in chrome. Animals and characters that feel both ancient and impossibly futuristic at the same time. That contrast is the heart of the visual identity.',
        'There\'s also something deeply personal about it. As someone building this with AI as a creative partner, the cyberpunk aesthetic — half human, half machine — mirrors the actual process of making the art.',
        'Every VOID piece tries to capture a moment of that tension: a creature caught between two worlds, neither fully natural nor fully synthetic.',
      ],
      fa: [
        'سایبرپانک همیشه برام مثل عدسی درست برای داستان‌هایی بود که می‌خواستم تعریف کنم. این یه ژانره که وسواس داره روی تنشِ بین انسانیت و تکنولوژی — که دقیقاً همون فضاییه که NFT VOID توش زندگی می‌کنه.',
        'نئون در برابر تاریکی. شکل‌های ارگانیک پیچیده‌شده در کروم. حیوانات و کاراکترهایی که همزمان هم باستانی به نظر می‌رسن هم به طرز غیرممکنی آینده‌نگرانه. اون تضاد قلب هویت بصریه.',
        'یه چیز عمیقاً شخصی هم توشه. به عنوان کسی که این رو با هوش مصنوعی به عنوان شریک خلاقیت می‌سازه، استایل سایبرپانک — نیمه انسان، نیمه ماشین — دقیقاً فرآیند واقعی ساخت هنر رو منعکس می‌کنه.',
        'هر اثر VOID سعی می‌کنه یه لحظه از اون تنش رو ثبت کنه: موجودی گیر کرده بین دو دنیا، نه کاملاً طبیعی نه کاملاً مصنوعی.',
      ],
    },
  },
  {
    slug: 'building-in-public',
    date: 'June 2026',
    title: {
      en: 'Building NFT VOID in Public',
      fa: 'ساختن NFT VOID به صورت عمومی',
    },
    excerpt: {
      en: 'A behind-the-scenes look at building an NFT platform from scratch.',
      fa: 'نگاهی پشت‌صحنه به ساخت یک پلتفرم NFT از صفر.',
    },
    content: {
      en: [
        'Building NFT VOID has been a process of learning in real time. Next.js, Supabase, wallet integrations, blockchain basics — none of it I knew well when I started.',
        'I decided early on to document this journey instead of hiding it. Every late night debugging session, every design decision, every small win — it all matters as part of the story.',
        'There\'s something freeing about building in public. It removes the pressure of perfection and replaces it with momentum. Ship something, learn from it, improve it.',
        'The platform itself has grown a lot: a gallery, wallet connection, view tracking, SEO, and now a blog where I can share all of this. Every piece adds up.',
        'If you\'re thinking about building something of your own — just start. The technical gaps close faster than you\'d expect once you\'re actually building.',
      ],
      fa: [
        'ساختن NFT VOID یه فرآیند یادگیری در لحظه بوده. Next.js، Supabase، اتصال کیف پول، مبانی بلاکچین — هیچ‌کدومشون رو وقتی شروع کردم خوب بلد نبودم.',
        'از همون اول تصمیم گرفتم این مسیر رو مستند کنم به جای اینکه پنهانش کنم. هر جلسه دیباگ نیمه‌شب، هر تصمیم طراحی، هر پیروزی کوچیک — همشون بخشی از داستان هستن.',
        'یه چیز آزادکننده‌ای توی ساختن به صورت عمومی هست. فشار کمال‌گرایی رو برمی‌داره و به جاش انگیزه می‌ذاره. یه چیزی رو منتشر کن، ازش یاد بگیر، بهترش کن.',
        'خود پلتفرم خیلی رشد کرده: یه گالری، اتصال کیف پول، ردیابی بازدید، سئو، و حالا یه بلاگ که می‌تونم همه اینا رو توش به اشتراک بذارم. هر تیکه به بقیه اضافه میشه.',
        'اگه داری به ساختن چیزی برای خودت فکر می‌کنی — فقط شروع کن. شکاف‌های فنی سریع‌تر از چیزی که فکرشو می‌کنی پر میشن، وقتی واقعاً داری می‌سازی.',
      ],
    },
  },
  {
    slug: 'art-and-ai',
    date: 'June 2026',
    title: {
      en: 'Art and AI: A New Kind of Collaboration',
      fa: 'هنر و هوش مصنوعی: نوعی جدید از همکاری',
    },
    excerpt: {
      en: 'How AI changed the way I create — not by replacing me, but by extending what I can do.',
      fa: 'چطور هوش مصنوعی نحوه خلق من رو تغییر داد — نه با جایگزین کردنم، بلکه با گسترش توانایی‌هام.',
    },
    content: {
      en: [
        'There\'s a common fear that AI replaces artists. My experience has been the opposite — it gave me a way to become one.',
        'I can see images clearly in my mind, but I never had traditional drawing skills. AI became the bridge between imagination and execution, letting me direct, refine, and curate rather than simply generate.',
        'Every VOID artwork goes through multiple iterations. I describe, I reject, I refine, I describe again. It\'s closer to art direction than typing a prompt and walking away.',
        'The result is something genuinely mine — shaped by my taste, my obsessions, my specific vision of what this universe should look like.',
        'I think the future of digital art will look a lot like this: humans providing vision and judgment, AI providing technical execution. Neither one alone tells the full story.',
      ],
      fa: [
        'یه ترس رایج هست که هوش مصنوعی هنرمندها رو جایگزین می‌کنه. تجربه من برعکس بوده — بهم راهی داد تا خودم یکی بشم.',
        'من می‌تونم تصاویر رو واضح توی ذهنم ببینم، ولی هیچ‌وقت مهارت نقاشی سنتی نداشتم. هوش مصنوعی پلی شد بین تخیل و اجرا، و گذاشت که هدایت کنم، اصلاح کنم و انتخاب کنم به جای اینکه فقط تولید کنم.',
        'هر اثر VOID از چندین تکرار عبور می‌کنه. توصیف می‌کنم، رد می‌کنم، اصلاح می‌کنم، دوباره توصیف می‌کنم. این بیشتر شبیه کارگردانی هنریه تا تایپ کردن یه پرامپت و رفتن.',
        'نتیجه چیزیه که واقعاً مال منه — شکل گرفته با سلیقه من، وسواس‌های من، چشم‌انداز خاص من از اینکه این دنیا باید چه شکلی باشه.',
        'فکر می‌کنم آینده هنر دیجیتال خیلی شبیه همین خواهد بود: انسان‌ها چشم‌انداز و قضاوت رو فراهم می‌کنن، هوش مصنوعی اجرای فنی رو. هیچ‌کدوم به تنهایی داستان کامل رو نمیگه.',
      ],
    },
  },
  {
    slug: 'first-collection-preview',
    date: 'July 2026',
    title: {
      en: 'A First Look at the Genesis Collection',
      fa: 'نگاه اول به مجموعه جنسیس',
    },
    excerpt: {
      en: 'Sneak peek into the characters and creatures that make up the first VOID drop.',
      fa: 'نگاهی اجمالی به کاراکترها و موجوداتی که اولین دراپ VOID رو می‌سازن.',
    },
    content: {
      en: [
        'The Genesis Collection is the foundation of everything VOID will become. Ten pieces, each one a character with its own story, its own corner of this universe.',
        'I wanted the first drop to introduce the range of what VOID can be — some pieces lean heavily into animal forms wrapped in cybernetics, others lean more humanoid, more machine.',
        'Each piece was chosen carefully. Not just for how it looks, but for what it represents in the larger mythology I\'m building. Genesis isn\'t just a launch — it\'s an origin story.',
        'I\'m incredibly excited for people to finally see these and, hopefully, to want to become part of this story by holding a piece of it.',
        'More details on the mint mechanics and timing are coming soon. Stay close to the countdown on the homepage.',
      ],
      fa: [
        'مجموعه جنسیس پایه و اساس همه چیزیه که VOID قراره بشه. ده اثر، که هر کدوم یه کاراکتر با داستان خودش، گوشه خودش از این دنیا هستن.',
        'می‌خواستم اولین دراپ، رنج چیزی که VOID می‌تونه باشه رو معرفی کنه — بعضی آثار بیشتر سمت فرم‌های حیوانی پیچیده‌شده در سایبرنتیک هستن، بعضیا بیشتر انسان‌نما، بیشتر ماشینی.',
        'هر اثر با دقت انتخاب شد. نه فقط به خاطر ظاهرش، بلکه به خاطر چیزی که توی اسطوره‌شناسی بزرگ‌تری که دارم می‌سازم نمایندگی می‌کنه. جنسیس فقط یه راه‌اندازی نیست — یه داستان آغازینه.',
        'خیلی هیجان‌زده‌ام که مردم بالاخره اینا رو ببینن و امیدوارم بخوان با نگه‌داشتن یه تیکه ازش، بخشی از این داستان بشن.',
        'جزئیات بیشتر درباره مکانیزم مینت و زمان‌بندی به زودی میاد. به شمارش معکوس توی صفحه اصلی نزدیک بمونید.',
      ],
    },
  },
  {
    slug: 'design-process',
    date: 'July 2026',
    title: {
      en: 'Inside the Design Process of VOID',
      fa: 'درون فرآیند طراحی VOID',
    },
    excerpt: {
      en: 'From concept sketch to finished piece — the full journey of a single VOID artwork.',
      fa: 'از طرح اولیه تا اثر نهایی — مسیر کامل یک اثر VOID.',
    },
    content: {
      en: [
        'People often ask how a single piece comes together. The honest answer: a lot of iteration, and a lot of deleting things that don\'t work.',
        'It usually starts with a feeling more than an image — a mood, a color palette, a fragment of a story. From there I build a description, generate, and compare it against what I actually had in mind.',
        'Most early generations are rejected outright. The ones that survive get refined again and again — adjusting lighting, color grading, composition — until they actually feel like they belong in the VOID universe.',
        'Consistency matters a lot. Every piece needs to feel connected to the others, part of the same world, even if the subject matter is completely different.',
        'By the time a piece is finished, it\'s gone through dozens of versions. What looks effortless took real work to get right.',
      ],
      fa: [
        'مردم اغلب می‌پرسن چطور یه اثر کنار هم میاد. جواب صادقانه: خیلی تکرار، و خیلی حذف کردن چیزایی که کار نمی‌کنن.',
        'معمولاً با یه احساس شروع میشه بیشتر تا یه تصویر — یه حال‌و‌هوا، یه پالت رنگی، یه تکه از داستان. از اونجا یه توصیف می‌سازم، تولید می‌کنم، و باهاش مقایسه می‌کنم با چیزی که واقعاً تو ذهنم بود.',
        'بیشتر تولیدات اولیه کاملاً رد میشن. اونایی که جون سالم به در می‌برن دوباره و دوباره اصلاح میشن — تنظیم نورپردازی، گرید رنگی، ترکیب‌بندی — تا واقعاً حس کنن که متعلق به دنیای VOID هستن.',
        'یکپارچگی خیلی مهمه. هر اثر باید حس متصل بودن به بقیه رو داشته باشه، بخشی از همون دنیا، حتی اگه موضوع کاملاً متفاوت باشه.',
        'تا وقتی یه اثر تموم بشه، از ده‌ها نسخه عبور کرده. چیزی که بدون تلاش به نظر میاد، کار واقعی برده تا درست از آب دربیاد.',
      ],
    },
  },
  {
    slug: 'why-blockchain-matters',
    date: 'July 2026',
    title: {
      en: 'Why Blockchain Matters for Digital Art',
      fa: 'چرا بلاکچین برای هنر دیجیتال اهمیت داره',
    },
    excerpt: {
      en: 'Ownership, provenance, and why NFTs are more than just a buzzword for digital creators.',
      fa: 'مالکیت، اصالت، و چرا NFT چیزی بیشتر از یه کلمه پرطرفدار برای خالقان دیجیتاله.',
    },
    content: {
      en: [
        'Digital art has always had a strange problem: anyone can copy it perfectly, instantly, for free. That made ownership almost meaningless for a long time.',
        'Blockchain technology changes that equation. An NFT doesn\'t prevent copying the image — but it does create a verifiable, permanent record of who owns the original, who created it, and its full history.',
        'For an independent creator like me, that matters enormously. It means a collector holding a VOID piece has something real — a provable, transferable, unique claim to a piece of this universe.',
        'It also creates a direct relationship between creator and collector, without galleries or middlemen deciding what gets shown or sold.',
        'I won\'t pretend the space doesn\'t have problems — speculation, scams, and hype have all hurt its reputation. But the underlying technology solving a real problem for digital ownership is genuinely valuable, and that\'s what VOID is built on.',
      ],
      fa: [
        'هنر دیجیتال همیشه یه مشکل عجیب داشته: هرکسی می‌تونه ازش یه کپی کامل، آنی و رایگان بگیره. این برای مدت طولانی مالکیت رو تقریباً بی‌معنی می‌کرد.',
        'تکنولوژی بلاکچین این معادله رو تغییر میده. یه NFT جلوی کپی شدن عکس رو نمی‌گیره — ولی یه رکورد قابل تأیید و دائمی از اینکه چه کسی نسخه اصلی رو داره، چه کسی ساختتش، و تاریخچه کاملش رو می‌سازه.',
        'برای یه خالق مستقل مثل من، این خیلی اهمیت داره. یعنی یه کالکتوری که یه اثر VOID رو نگه می‌داره، یه چیز واقعی داره — یه ادعای قابل اثبات، قابل انتقال و منحصربه‌فرد به یه تیکه از این دنیا.',
        'همچنین یه رابطه مستقیم بین خالق و کالکتور می‌سازه، بدون اینکه گالری‌ها یا واسطه‌ها تصمیم بگیرن چی نمایش داده بشه یا فروخته بشه.',
        'وانمود نمی‌کنم این فضا مشکل نداره — سفته‌بازی، کلاهبرداری و هایپ همشون به اعتبارش آسیب زدن. ولی تکنولوژی زیربنایی که داره یه مشکل واقعی برای مالکیت دیجیتال حل می‌کنه واقعاً ارزشمنده، و VOID روی همین ساخته شده.',
      ],
    },
  },
  {
    slug: 'community-and-discord',
    date: 'August 2026',
    title: {
      en: 'Building the VOID Community',
      fa: 'ساختن جامعه VOID',
    },
    excerpt: {
      en: 'Why community comes before collection — and what to expect from the VOID Discord.',
      fa: 'چرا جامعه قبل از مجموعه میاد — و چه انتظاری از Discord VOID داشته باشید.',
    },
    content: {
      en: [
        'A collection without a community is just a folder of images. The thing that actually gives NFT VOID life is the people who show up, talk, and care about where this is going.',
        'That\'s why building the Discord and Twitter presence matters as much as building the art itself. It\'s the space where the story keeps expanding beyond just the artwork.',
        'I want VOID\'s community to feel like an early creative collective — not just holders waiting for floor price movement, but people genuinely invested in the universe and its direction.',
        'Plans for the community include early access to drops, voting on certain creative directions, and behind-the-scenes looks at the art process before it goes public.',
        'If you\'re reading this before the community channels are live — they\'re coming soon. This is an open invitation to be part of it from the very beginning.',
      ],
      fa: [
        'یه مجموعه بدون جامعه فقط یه پوشه عکسه. چیزی که واقعاً به NFT VOID زندگی میده آدمایی هستن که میان، حرف می‌زنن و به مسیری که این پروژه داره میره اهمیت میدن.',
        'برای همینه که ساختن حضور توی Discord و Twitter به همون اندازه ساختن خود هنر اهمیت داره. این فضاییه که داستان فراتر از خود اثر هنری گسترش پیدا می‌کنه.',
        'می‌خوام جامعه VOID حس یه گروه خلاقیت اولیه رو بده — نه فقط نگه‌دارنده‌هایی که منتظر تغییر قیمت کف هستن، بلکه آدمایی که واقعاً به این دنیا و مسیرش علاقه دارن.',
        'برنامه‌ها برای جامعه شامل دسترسی زودهنگام به دراپ‌ها، رأی‌گیری روی بعضی مسیرهای خلاقانه، و نگاهی پشت‌صحنه به فرآیند هنری قبل از انتشار عمومیه.',
        'اگه داری این رو قبل از فعال شدن کانال‌های جامعه می‌خونی — به زودی میان. این یه دعوت بازه برای بودن توی این مسیر از همون ابتدا.',
      ],
    },
  },
  {
    slug: 'lessons-from-solo-building',
    date: 'August 2026',
    title: {
      en: 'Lessons from Building Solo as a Student',
      fa: 'درس‌هایی از ساختن تنها به عنوان یک دانشجو',
    },
    excerpt: {
      en: 'Balancing university exams with building a full NFT platform from scratch.',
      fa: 'تعادل بین امتحانات دانشگاه و ساختن یک پلتفرم کامل NFT از صفر.',
    },
    content: {
      en: [
        'There\'s no perfect time to build something ambitious. I\'m a first-year Computer Engineering student, and most of NFT VOID has been built between lectures, assignments, and exam prep.',
        'The biggest lesson has been ruthless prioritization. Not every feature needs to ship on day one. Backend functionality and core experience always come before visual polish.',
        'Another lesson: ask for help and use the right tools. Whether it\'s AI assistance for code, design, or art generation — being a solo builder doesn\'t mean doing everything completely alone.',
        'Time management became almost a creative skill of its own. Knowing when to push hard on the project and when to step back for exams made the difference between burning out and actually finishing things.',
        'If there\'s one thing I\'d tell another student wanting to build something like this: start before you feel ready. You\'ll never feel fully ready, and that\'s fine.',
      ],
      fa: [
        'هیچ زمان کاملی برای ساختن یه چیز بلندپروازانه وجود نداره. من دانشجوی سال اول مهندسی کامپیوترم، و بیشتر NFT VOID بین کلاس‌ها، تکالیف و آماده‌شدن برای امتحانات ساخته شده.',
        'بزرگ‌ترین درس، اولویت‌بندی بی‌رحمانه بوده. لازم نیست هر فیچری روز اول منتشر بشه. عملکرد بک‌اند و تجربه اصلی همیشه قبل از پولیش بصری میان.',
        'یه درس دیگه: کمک بخواه و از ابزار درست استفاده کن. چه کمک هوش مصنوعی برای کد باشه چه طراحی یا تولید هنر — تنها بودن به عنوان سازنده به معنی انجام همه چیز کاملاً تنها نیست.',
        'مدیریت زمان تقریباً تبدیل به یه مهارت خلاقانه خودش شد. دونستن اینکه کِی روی پروژه فشار بیاری و کِی برای امتحانات عقب بکشی، فرق بین فرسودگی و واقعاً تموم کردن کارها رو ساخت.',
        'اگه یه چیز بود که به یه دانشجوی دیگه که می‌خواد همچین چیزی بسازه بگم: قبل از اینکه احساس آمادگی کنی شروع کن. هیچ‌وقت کاملاً احساس آمادگی نمی‌کنی، و اشکالی هم نداره.',
      ],
    },
  },
  {
    slug: 'whats-next-for-void',
    date: 'August 2026',
    title: {
      en: 'What\'s Next for VOID',
      fa: 'بعدی برای VOID چیه',
    },
    excerpt: {
      en: 'A look ahead at the roadmap, upcoming drops, and the long-term vision for this universe.',
      fa: 'نگاهی به نقشه راه، دراپ‌های آینده، و چشم‌انداز بلندمدت این دنیا.',
    },
    content: {
      en: [
        'With the Genesis Collection close to launch, it\'s worth taking a step back and looking at where VOID is actually headed.',
        'Phase one is the mint itself — ten foundational pieces and the start of an active community on Discord. Phase two introduces a second drop with holder-exclusive content and collaborations with other artists.',
        'Longer term, I want VOID to expand beyond static images. Animated pieces, physical art prints for holders, and eventually some form of community-driven decision-making about future collections are all on the table.',
        'None of this happens overnight, and I\'d rather under-promise and consistently deliver than make big claims I can\'t back up. Every feature on this site so far has been built one deliberate step at a time, and that pace isn\'t changing.',
        'Thank you to everyone who has followed this project from these early days. The real story of VOID is just getting started.',
      ],
      fa: [
        'با نزدیک شدن مجموعه جنسیس به راه‌اندازی، ارزشش رو داره که یه قدم عقب بریم و ببینیم VOID واقعاً به کجا داره میره.',
        'فاز اول خود مینت هست — ده اثر بنیادی و شروع یه جامعه فعال توی Discord. فاز دوم یه دراپ دوم با محتوای انحصاری برای نگه‌دارنده‌ها و همکاری با هنرمندان دیگه معرفی می‌کنه.',
        'در بلندمدت، می‌خوام VOID فراتر از تصاویر ثابت گسترش پیدا کنه. آثار انیمیشنی، پرینت‌های فیزیکی برای نگه‌دارنده‌ها، و در نهایت یه شکلی از تصمیم‌گیری مبتنی بر جامعه درباره مجموعه‌های آینده، همشون روی میز هستن.',
        'هیچ‌کدوم از اینا یک‌شبه اتفاق نمی‌افته، و ترجیح میدم کمتر قول بدم و پیوسته تحویل بدم تا اینکه ادعاهای بزرگی بکنم که نمی‌تونم پشتش وایسم. هر فیچری توی این سایت تا الان قدم به قدم و با دقت ساخته شده، و این سرعت تغییر نمی‌کنه.',
        'ممنون از همه کسایی که این پروژه رو از همین روزای اولیه دنبال کردن. داستان واقعی VOID تازه داره شروع میشه.',
      ],
    },
  },
];