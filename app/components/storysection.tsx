'use client';
import ScrollReveal from './ScrollReveal';

const lines = [
  {
    en: "I'm Mohammad — a Computer Engineering student who believes the future belongs to those who can imagine it.",
    fa: "من محمدم — یه دانشجوی مهندسی کامپیوتر که باور داره آینده متعلق به کسایی‌ه که می‌تونن تصورش کنن.",
  },
  {
    en: "NFT VOID was born from a simple obsession: the worlds living inside my head.",
    fa: "NFT VOID از یه وسواس ساده متولد شد: دنیاهایی که توی ذهنم زندگی می‌کنن.",
  },
  {
    en: "Cyberpunk animals, animated characters, creatures that exist somewhere between reality and void — I've always seen them clearly, but never had a way to show them to the world.",
    fa: "حیوانات سایبرپانک، کاراکترهای انیمیشنی، موجوداتی که جایی بین واقعیت و void وجود دارن — همیشه واضح می‌دیدمشون، ولی هیچ‌وقت راهی نداشتم که نشونشون بدم.",
  },
  {
    en: "Until now.",
    fa: "تا الان.",
  },
  {
    en: "I use AI as my brush. Code as my canvas. And my imagination as the only limit.",
    fa: "از هوش مصنوعی به عنوان قلمم استفاده می‌کنم. از کد به عنوان بوم نقاشیم. و تخیلم تنها محدودیتمه.",
  },
  {
    en: "Every NFT in this collection isn't just art — it's a story I've been carrying in my mind, finally set free.",
    fa: "هر NFT توی این کالکشن فقط یه عکس نیست — یه داستانیه که توی ذهنم حملش می‌کردم و بالاخره آزادش کردم.",
  },
  {
    en: "This is just the beginning.",
    fa: "این فقط شروعه.",
  },
];

export default function StorySection() {
  return (
    <section id="story" className="py-24 px-8" style={{background: '#07040e'}}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-[0.5em] mb-3" style={{color: '#7c3aed'}}>LORE</p>
          <h2 className="text-center text-4xl font-bold mb-4 text-white tracking-widest">THE STORY</h2>
          <p className="text-center text-sm mb-16 tracking-widest" style={{color: '#4c1d95'}}>
            ART BORN BETWEEN HUMAN AND MACHINE
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {lines.map((line, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div style={{borderLeft: '2px solid #3b0764', paddingLeft: '1.5rem'}}>
                <p className="text-sm leading-relaxed mb-3" style={{color: '#e9d5ff'}}>
                  {line.en}
                </p>
                <p className="text-sm leading-relaxed" style={{
                  color: '#7c3aed',
                  direction: 'rtl',
                  fontFamily: 'Tahoma, Arial, sans-serif'
                }}>
                  {line.fa}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-3 text-xs tracking-widest transition-all"
              style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>
              NFT VOID — EST. 2026
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}