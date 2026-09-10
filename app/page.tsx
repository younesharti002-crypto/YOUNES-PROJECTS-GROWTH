import Image from "next/image";
import Link from "next/link";

const formUrl =
  "https://docs.google.com/forms/d/1WPAMZ37Nan6H6oo54pczO4RRo0E_9ASh3q7XzaiavVY/viewform";

const chapters = [
  {
    year: "2009 — 2017",
    title: "من السبورة بدات الحكاية",
    text: "من 2009 كنت كنعطي دروس الدعم، وأسست مدرسة الأحرار. سنوات وأنا كنشوف التلاميذ كيتقدمو، وكنتعلم كيفاش نعلّم، نسيّر ونبني مشروعاً عندو أثر. وبالتوازي، كنت إدارياً داخل Brink’s Maroc.",
    images: [
      ["/assets/teaching-new.jpeg", "يونس يشرح درساً على السبورة"],
      ["/assets/school-group.jpeg", "ذكرى جماعية من مرحلة مدرسة الأحرار"],
    ],
  },
  {
    year: "2017 — 2020",
    title: "القرار اللي بقي فيّ",
    text: "فـ2017 قلت مع راسي: باش ننجح، خاصني نركز على حاجة وحدة. وقفت مدرسة الأحرار واخترت المسار المهني داخل الشركة. القرار كان كيبان منطقياً، ولكن مع الوقت فهمت أنني تخليت على حاجة ناجحة بنيتها بيدي.",
    images: [["/assets/brinks-new.jpeg", "يونس خلال مرحلة العمل الإداري"]],
  },
  {
    year: "2020",
    title: "الاستقرار حتى هو ما كانش مضمون",
    text: "فـ2020 تعاودات هيكلة الشركة، ولقيت راسي خارجها. استثمرت تعويض نهاية الخدمة وفتحت مشروعاً للداند والوجبات السريعة. دخلت بالحلم كامل، ولكن من بعد ستة شهور تسدّ المشروع.",
    images: [
      ["/assets/shop-front.jpeg", "واجهة مشروع الداند والوجبات السريعة"],
      ["/assets/shop-display.jpeg", "منتجات مشروع المحل"],
    ],
  },
  {
    year: "من بعد المشروع",
    title: "ملي حسّيت أنني ضيّعت الطريق",
    text: "الخدمة ماشي عيب، ولكن الانتقال من أستاذ ومسيّر وإداري وصاحب مشروع إلى Magasinier كان قاسياً عليّ. ما كانش عندي حل جاهز؛ كان عندي غير قرار واحد: نقلب، نتعلم ونبدا من الزيرو.",
    images: [["/assets/warehouse.jpeg", "يونس خلال مرحلة العمل كمخزني"]],
  },
  {
    year: "اليوم",
    title: "ما لقيتش طريقاً مختصراً… لقيت بداية",
    text: "وأنا كنقلب فالإنترنت على مهارة نقدر نبني عليها مستقبلي، اكتشفت كيفاش نوظف الذكاء الاصطناعي فالمشاريع. ما بقيتش غير كنتفرج؛ بديت نطبق. وكان CLEANORA أول مشروع رجعت به للبناء.",
    images: [
      ["/assets/learning.jpeg", "يونس خلال مرحلة البحث والتعلم"],
      ["/assets/hero-ai.jpeg", "يونس يبني مشاريعه باستعمال الذكاء الاصطناعي"],
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="landing-page" id="home">
      <header className="site-header">
        <nav className="shell nav-row" aria-label="التنقل الرئيسي">
          <a className="brand" href="#home">
            <span className="brand-mark">Y</span>
            <span>Younes | مشاريع ونمو</span>
          </a>
          <div className="nav-links">
            <a href="#service">التجربة المجانية</a>
            <Link href="/projects">المشاريع</Link>
            <a href="#work">شنو كندير؟</a>
            <Link href="/about">شكون أنا؟</Link>
          </div>
          <Link className="small-cta" href="/platform">
            دخول المنصة
          </Link>
        </nav>
      </header>

      <section className="shell hero">
        <div className="hero-copy">
          <span className="eyebrow">كنتعلم · كنطبق · كنوثق النتائج</span>
          <h1>
            ما تبقاش غير كتفكر فـ<span>PLAN B.</span>
            <br />
            بدا تبنيه.
          </h1>
          <p>
            أنا يونس. كنوثق تجربة بناء المشاريع الرقمية باستعمال AI كما هي:
            من الفكرة للتجربة والتطبيق، شنو خدم وشنو ما خدمش، وكيفاش كنحاول
            نطور كل مشروع خطوة بخطوة.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/platform">
              بدا الاستشارة المجانية
            </Link>
            <span>حساب مجاني · بلا بطاقة بنكية</span>
          </div>
          <div className="hero-proof" aria-label="محاور المحتوى">
            <b>مشاريع رقمية</b><i />
            <b>تجارب عملية</b><i />
            <b>تعلم موثق</b>
          </div>
        </div>
        <div className="hero-art">
          <figure>
            <Image src="/assets/hero-ai.jpeg" alt="يونس يشتغل على مشروع رقمي" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </figure>
          <div className="floating-note">
            <small>الرسالة ديالي</small>
            <strong>ما كنبيعش ليك نجاحاً ما وصلتش ليه. كنشارك معاك الطريق.</strong>
          </div>
        </div>
      </section>

      <section className="rhythm" aria-label="منهج العمل">
        <div className="shell rhythm-grid">
          <div><b>تعلّم</b><span>فهم الفكرة بلا تعقيد</span></div>
          <div><b>طبّق</b><span>حوّل المعرفة لخطوة عملية</span></div>
          <div><b>وثّق</b><span>راجع النتيجة وتعلم منها</span></div>
        </div>
      </section>

      <section className="shell section" id="service">
        <div className="section-heading">
          <div><span className="kicker">أول خدمة فـPLAN B</span><h2>استشارة كتبدأ من واقعك أنت</h2></div>
          <p>كتعمر معلوماتك، كنحللو وضعيتك وفكرتك، ومن بعد كتلقى تقريراً منظماً كيبين ليك البداية المناسبة والمسار اللي يقدر ينفعك.</p>
        </div>
        <div className="consultation-card">
          <div className="consultation-orbit" aria-hidden="true"><span>B</span></div>
          <div className="consultation-copy">
            <span className="kicker">التجربة الأولى مجانية</span>
            <h3>من معلومات مشتتة إلى طريق واضح</h3>
            <ol>
              <li><b>سجّل حسابك</b><span>باش يبقى التقرير والتقدم ديالك محفوظ.</span></li>
              <li><b>جاوب على الأسئلة</b><span>نفس المعلومات العملية الموجودة فاستمارة PLAN B.</span></li>
              <li><b>توصل بالتقرير</b><span>تحليل مبسط وتوصية بالمسار المناسب.</span></li>
              <li><b>بدا التعلم</b><span>اختار الدورة وتابع الدروس، الفيديو والـLive.</span></li>
            </ol>
            <div className="card-actions">
              <Link className="primary-button" href="/platform">خوض التجربة المجانية</Link>
              <a className="text-link" href={formUrl} target="_blank" rel="noopener noreferrer">فتح الاستمارة الحالية ↗</a>
            </div>
          </div>
        </div>
        <div className="pilot-banner"><b>العرض التجريبي</b><span>أول 20 شخص غادي يستافدو من الاستشارة، الدورات، الفيديوهات والـLive مجاناً. من بعد مرحلة الاختبار، كل منتوج غادي يكون عندو السعر ديالو.</span></div>
      </section>

      <section className="shell section" id="work">
        <div className="section-heading">
          <div><span className="kicker">شنو كندير؟</span><h2>من الفكرة إلى مشروع قابل للنمو</h2></div>
          <p>كنبني وكنجرب مشاريع رقمية باستعمال الأدوات والـAI، وكنوثق القرارات، المشاكل والدروس. PLAN B كيوجه التعلم، وH Digital Agency كتتكلف بالتنفيذ التقني والتسويقي.</p>
        </div>
        <div className="work-grid">
          <article><span>01</span><h3>PLAN B</h3><p>استشارة، تقرير، دورات ومسار عملي لأصحاب الأفكار والمشاريع.</p><Link href="/platform">جرب المنصة ←</Link></article>
          <article><span>02</span><h3>H Digital Agency</h3><p>بناء المواقع والمنصات، الأتمتة، التسويق ومساعدة المشاريع على النمو.</p><a href="https://h-digital-agency.vercel.app/" target="_blank" rel="noopener noreferrer">شوف الوكالة ↗</a></article>
          <article><span>03</span><h3>محتوى مشاريع ونمو</h3><p>كنوثق شنو خدم، شنو ما خدمش، والدروس اللي خرجت بها من كل تجربة.</p><Link href="/about">تعرف على الرحلة ←</Link></article>
        </div>
        <div className="projects-link-row">
          <Link className="primary-button" href="/projects">شوف جميع المشاريع</Link>
          <span>CLEANORA · ClinicOS Maroc · Prof Harti · MarkazOS · PLAN B والمزيد</span>
        </div>
      </section>

      <section className="story-section section" id="story">
        <div className="shell">
          <div className="section-heading light-heading">
            <div><span className="kicker">شكون أنا؟</span><h2>باش تعرفني، خاصك تعرف الطريق</h2></div>
            <p>ما غاديش نورّيك غير الصورة الزوينة. الثقة كتبدأ ملي كنحكي حتى على القرارات اللي ندمت عليها والمراحل اللي كانت قاسية.</p>
          </div>
          <p className="story-lead">أنا يونس. <strong>ما عنديش قصة نجاح مكتملة نحكيها ليك.</strong> عندي قصة واحد بنى، اختار، خسر، طاح… ومن بعد قرر يرجع يبني من الصفر.</p>
          <div className="timeline">
            {chapters.map((chapter) => (
              <article className="chapter" key={chapter.year}>
                <div className={`chapter-images count-${chapter.images.length}`}>
                  {chapter.images.map(([src, alt]) => (
                    <div className="chapter-image" key={src}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
                  ))}
                </div>
                <div className="chapter-copy"><span>{chapter.year}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
              </article>
            ))}
          </div>
          <blockquote className="truth">«اليوم ما كنبيعش ليك نجاحاً ما وصلتش ليه. كنشارك معاك الطريق كما هو: شنو تعلمت، شنو طبقت، فين غلطت، وكيفاش كنعاود نبني.»<small>أنا يونس… ومازال كنبني قصتي.</small></blockquote>
          <div className="card-actions"><Link className="primary-button" href="/about">قرا القصة كاملة</Link></div>
        </div>
      </section>

      <section className="shell final-cta">
        <span className="kicker">البداية ما خاصهاش تكون كبيرة</span>
        <h2>خاصها غير تكون واضحة وعملية</h2>
        <p>سجّل وخوض أول تجربة مجانية باش تعرف الخطوة المناسبة للمشروع ديالك.</p>
        <Link className="primary-button" href="/platform">بدا الاستشارة المجانية</Link>
      </section>

      <footer><div className="shell"><strong>Younes | مشاريع ونمو</strong><span>كنتعلم · كنطبق · كنوثق النتائج</span></div></footer>
    </main>
  );
}