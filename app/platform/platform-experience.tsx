"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type JourneyState = { answers: Record<string, string>; checks: Record<string, boolean> };

const lessons = [
  { id: "1", title: "جرد اللي عندك", description: "المشروع القابل للبداية غالباً كيكون قريب من تجربة عشتها أو مهارة تعلمتيها.", question: "كتب 3 مهارات، 3 تجارب، و3 مشاكل سبق ليك ساعدتي شي حد يحلها:", placeholder: "مثال: التعليم، تنظيم المخزون، التواصل مع الزبناء..." },
  { id: "2", title: "اختار مشكل واحد", description: "اختار مشكلاً واضحاً عند فئة محددة من الناس. كلما كان دقيقاً، كلما كان الحل أسهل فالاختبار.", question: "شكون غادي تعاون؟ وشنو المشكل المحدد اللي كيعاني منو؟", placeholder: "غادي نعاون ... اللي كيعاني من ..." },
  { id: "3", title: "بنِ عرضاً صغيراً", description: "ما تبنيش مشروعاً كبيراً قبل ما تعرف واش الناس محتاجينو. صايب أبسط نتيجة تقدر تقدمها بسرعة.", question: "كمل الجملة: كنعاون [الفئة] باش [النتيجة] من خلال [الحل]:", placeholder: "كنعاون ... باش ... من خلال ..." },
  { id: "4", title: "اختبر مع 5 أشخاص", description: "هضر مع خمسة أشخاص من الفئة اللي اخترتي واسمع للمشكل والكلمات اللي كيستعملوها.", question: "كتب أسماء 5 أشخاص أو فين غادي تلقاهم، وحدد نهار الاختبار:", placeholder: "1. ...\n2. ...\nموعد البداية: ..." },
] as const;

const storageKey = "younes-planb-v2";

export default function PlatformExperience() {
  const [state, setState] = useState<JourneyState>({ answers: {}, checks: {} });
  const [open, setOpen] = useState("1");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let savedState: JourneyState | null = null;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) savedState = JSON.parse(saved) as JourneyState;
    } catch {
      // Draft storage is temporary until account-backed saving is enabled.
    }
    const timer = window.setTimeout(() => {
      if (savedState) setState(savedState);
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, loaded]);

  const done = useMemo(() => lessons.filter((lesson) => state.checks[lesson.id]).length, [state.checks]);
  const percent = done * 25;

  function setAnswer(id: string, value: string) {
    setState((current) => ({ ...current, answers: { ...current.answers, [id]: value } }));
  }

  function setCheck(id: string, value: boolean) {
    setState((current) => ({ ...current, checks: { ...current.checks, [id]: value } }));
  }

  return (
    <div className="platform-shell">
      <aside className="platform-sidebar">
        <Link className="brand" href="/"><span className="brand-mark">Y</span><span>Younes<br /><small>مشاريع ونمو</small></span></Link>
        <span className="badge">نسخة تجريبية</span>
        <nav className="platform-nav" aria-label="أقسام المنصة">
          <a className="active" href="#dashboard">الرئيسية</a>
          <a href="#consultation">الاستشارة</a>
          <a href="#report">التقرير</a>
        </nav>
        <Link className="platform-back" href="/">رجوع للموقع</Link>
      </aside>

      <main className="platform-main" id="dashboard">
        <header className="platform-topbar"><div><strong>منصة PLAN B</strong><br /><span>تعلم · طبق · وثق النتيجة</span></div><div><strong>مرحبا بك</strong><br /><span>بدا بالخطوة الأولى</span></div></header>
        <div className="platform-content">
          <section className="platform-welcome">
            <div className="welcome-card"><div className="mini-orbit" aria-hidden="true"><span>B</span></div><span className="kicker">التجربة المجانية الأولى</span><h1>رتب فكرة المشروع ديالك</h1><p>هاد النموذج الحالي غادي يتحول فالدورة المقبلة لحساب حقيقي، تحليل وتقرير شخصي محفوظ.</p></div>
            <aside className="progress-card" aria-label="نسبة التقدم"><div className="progress-head"><div><span>تقدمك فالمسار</span><br /><b>{done} من 4 مراحل</b></div><strong>{percent}%</strong></div><div className="progress-track"><div style={{ width: `${percent}%` }} /></div><span>{done === 4 ? "برافو! كملت المعطيات الأولية." : "كمّل مرحلة وحدة فكل مرة."}</span></aside>
          </section>

          <section id="consultation">
            <div className="platform-section-head"><div><span className="kicker">المعلومات الأولية</span><h2>أول خريطة للمشروع</h2></div><p>جاوب بطريقتك. دابا الحفظ مؤقت فهاد الجهاز إلى أن نفعّلو الحسابات وقاعدة البيانات.</p></div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => {
                const isOpen = open === lesson.id;
                const isDone = Boolean(state.checks[lesson.id]);
                return (
                  <article className={`lesson-card ${isOpen ? "open" : ""} ${isDone ? "done" : ""}`} key={lesson.id}>
                    <button className="lesson-toggle" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? "" : lesson.id)}>
                      <span className="lesson-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="lesson-title"><small>المرحلة {index + 1}</small><strong>{lesson.title}</strong></span>
                      <span aria-hidden="true">⌄</span>
                    </button>
                    <div className="lesson-body"><p>{lesson.description}</p><div className="lesson-task"><label htmlFor={`answer-${lesson.id}`}>{lesson.question}</label><textarea id={`answer-${lesson.id}`} value={state.answers[lesson.id] ?? ""} onChange={(event) => setAnswer(lesson.id, event.target.value)} placeholder={lesson.placeholder} /><div className="complete-row"><input id={`check-${lesson.id}`} type="checkbox" checked={isDone} onChange={(event) => setCheck(lesson.id, event.target.checked)} /><label htmlFor={`check-${lesson.id}`}>كملت هاد المرحلة</label></div></div></div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="report">
            <div className="platform-section-head"><div><span className="kicker">المرحلة الجاية</span><h2>التقرير الشخصي</h2></div><p>من بعد تفعيل الحسابات، المعلومات غادي تتحلل ويتولد منها تقرير خاص بكل مستخدم.</p></div>
            <div className="report-card"><h3>{done === 4 ? "المعطيات واجدة للتحليل" : "كمل المراحل الأربعة"}</h3><p>{done === 4 ? "النسخة التقنية القادمة غادي تحفظ هاد الأجوبة فالحساب وترسلها للتحليل والمراجعة قبل ظهور التقرير." : `باقي ليك ${4 - done} مراحل باش تكمل المعلومات الأولية.`}</p></div>
            <div className="platform-notice">النسخة الحالية محفوظة غير فهاد الجهاز. الحساب، التقرير الدائم والدورات غادي يتفعلو فالمرحلة التقنية الموالية.</div>
          </section>
        </div>
      </main>
    </div>
  );
}
