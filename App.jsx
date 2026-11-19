import React, { useEffect, useMemo, useState } from "react";
import qistakLogo from "./assets/qistak-logo.png";
import {
  LayoutDashboard,
  Wallet,
  ReceiptText,
  ChartNoAxesCombined,
  Sparkles,
  PiggyBank,
  CalendarDays,
  Settings,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  SlidersHorizontal,
  CircleHelp,
  Menu,
  X,
  TrendingUp,
  ShieldCheck,
  Target,
  CircleDollarSign,
  CarFront,
  Smartphone,
  Home,
  CreditCard,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  ArrowLeftRight,
  Languages,
  Trash2,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const seed = {
  income: 12500,
  expenses: 4650,
  commitments: [
    {
      id: 1,
      name: "تمويل السيارة",
      category: "car",
      amount: 1850,
      due: 5,
      remaining: 28,
    },
    {
      id: 2,
      name: "إيجار السكن",
      category: "home",
      amount: 2500,
      due: 1,
      remaining: 12,
    },
    {
      id: 3,
      name: "اشتراك الجوال",
      category: "phone",
      amount: 220,
      due: 18,
      remaining: 0,
    },
    {
      id: 4,
      name: "تقسيط جهاز",
      category: "device",
      amount: 425,
      due: 23,
      remaining: 5,
    },
  ],
  goals: [
    { id: 1, name: "صندوق الطوارئ", target: 15000, saved: 6200 },
    { id: 2, name: "رحلة الصيف", target: 8000, saved: 3200 },
  ],
};
const copy = {
  ar: {
    app: "قسطك",
    tagline: "اعرف أثر قرارك قبل ما تلتزم.",
    overview: "نظرة عامة",
    dashboard: "لوحة التحكم",
    profile: "ملفي المالي",
    cashflow: "الدخل والمصروفات",
    commitments: "التزاماتي",
    forecast: "التوقعات المالية",
    simulator: "محاكاة القرار",
    coach: "المساعد الذكي",
    goals: "أهداف الادخار",
    calendar: "التقويم المالي",
    settings: "الإعدادات",
    welcome: "مساء الخير 👋",
    subtitle:
      "هذه صورة واضحة لوضعك المالي — وكل قرار اليوم يصنع فرقًا في بكرة.",
    balance: "المتاح بعد الالتزامات",
    income: "إجمالي الدخل الشهري",
    expenses: "المصروفات الشهرية",
    obligations: "الالتزامات الشهرية",
    savings: "قدرتك على الادخار",
    ofIncome: "من دخلك",
    monthlyFlow: "التدفق النقدي",
    last6: "آخر 6 أشهر",
    commitmentsTitle: "التزاماتك القادمة",
    viewAll: "عرض الكل",
    due: "الاستحقاق",
    amount: "المبلغ",
    insights: "رؤى قسطك",
    insight1: "مساحة ادخارك جيدة هذا الشهر",
    insight2: "لديك التزامان خلال الأسبوع القادم. تأكد من توفر الرصيد.",
    insight3: "يمكنك توفير 300 ر.س شهريًا بمراجعة المصروفات المتكررة.",
    simulatorTitle: "قبل ما توافق على قسط جديد…",
    simulatorDesc: "جرّب القرار وشوف تأثيره على ميزانيتك خلال الأشهر القادمة.",
    trySim: "جرّب المحاكاة",
    financialHealth: "مؤشر التوازن المالي",
    healthy: "متوازن",
    spendRatio: "نسبة الالتزامات إلى الدخل",
    quickActions: "إجراءات سريعة",
    addCommitment: "إضافة التزام",
    addGoal: "هدف ادخار جديد",
    monthly: "شهريًا",
    sar: "ر.س",
    simTitle: "محاكي القرارات المالية",
    simSub: "اختبر أثر أي التزام جديد على مستقبلك المالي قبل اتخاذ القرار.",
    newPayment: "القسط الجديد",
    paymentName: "اسم الالتزام",
    paymentPlaceholder: "مثال: قسط سيارة",
    paymentAmount: "قيمة القسط الشهري",
    duration: "مدة الالتزام (بالأشهر)",
    start: "ابدأ المحاكاة",
    current: "وضعك الحالي",
    after: "بعد القرار",
    available: "المتاح شهريًا",
    savingsRate: "نسبة الادخار",
    sixMonths: "الرصيد المتوقع بعد 6 أشهر",
    recommendation: "توصية قسطك",
    safe: "القرار يبدو مناسبًا",
    caution: "انتبه، القرار قد يضغط ميزانيتك",
    risky: "القرار قد يسبب عجزًا شهريًا",
    safeText: "يظل لديك هامش مالي جيد بعد إضافة الالتزام.",
    cautionText: "سيقل المبلغ المتاح لك. راجع مصروفاتك قبل الالتزام.",
    riskyText:
      "القسط يتجاوز المساحة المالية المتاحة. لا ننصح بالالتزام قبل إعادة التخطيط.",
    commitmentsSub: "تابع جميع أقساطك وفواتيرك والتزاماتك في مكان واحد.",
    add: "إضافة",
    category: "النوع",
    car: "سيارة",
    home: "سكن",
    phone: "اتصالات",
    device: "أجهزة",
    other: "أخرى",
    noData: "لا توجد بيانات",
    goalsTitle: "أهدافك المالية",
    progress: "الإنجاز",
    saved: "المدخر",
    target: "المستهدف",
    coachTitle: "مساعدك المالي الذكي",
    coachSub: "اسأل قسطك عن ميزانيتك أو خططك المالية.",
    ask: "اكتب سؤالك هنا…",
    send: "إرسال",
    coachHello:
      "أهلًا! أنا مساعد قسطك. أقدر أساعدك تفهم ميزانيتك وتحاكي قراراتك المالية.",
    calendarTitle: "التقويم المالي",
    calendarSub: "مواعيد التزاماتك القادمة خلال الشهر.",
    profileTitle: "ملفي المالي",
    profileSub: "حدّث بياناتك حتى تكون التوقعات أقرب لواقعك.",
    monthlyIncome: "الدخل الشهري",
    monthlyExpenses: "المصروفات الأساسية",
    save: "حفظ التغييرات",
    settingsTitle: "الإعدادات",
    language: "لغة التطبيق",
    arabic: "العربية",
    english: "English",
    notification: "التنبيهات",
    privacy: "الخصوصية والأمان",
    demo: "نسخة تجريبية — بياناتك محفوظة على هذا الجهاز فقط.",
    addModal: "إضافة التزام جديد",
    cancel: "إلغاء",
    saveItem: "حفظ الالتزام",
    name: "الاسم",
    date: "يوم الاستحقاق",
    empty: "ابدأ بإضافة التزاماتك لمتابعتها هنا.",
    delete: "حذف",
    months: "شهر",
    remaining: "متبقي",
    forecastTitle: "توقعاتك المالية",
    forecastSub: "تصور مبسط للتدفق النقدي المتوقع خلال الأشهر الستة القادمة.",
    expectedBalance: "الرصيد المتوقع",
    noCommit: "لا يوجد التزام جديد",
    disclaimer:
      "هذه محاكاة توعوية تقديرية وليست نصيحة مالية أو قرارًا ائتمانيًا. تعتمد النتائج على البيانات المدخلة.",
    assistantDisclaimer:
      "مساعد توعوي يعتمد على بيانات النسخة التجريبية؛ لا يقدم توصية استثمارية أو ائتمانية.",
    search: "بحث",
    all: "الكل",
    upcoming: "القادمة",
    dueSoon: "قريبًا",
    status: "الحالة",
    noResults: "لا توجد نتائج",
    currency: "العملة",
    sarName: "الريال السعودي (SAR)",
    edit: "تعديل",
    monthsLabel: "الأشهر القادمة",
  },
  en: {
    app: "QISTAK",
    tagline: "Understand your financial future before you commit.",
    overview: "Overview",
    dashboard: "Dashboard",
    profile: "Financial profile",
    cashflow: "Income & expenses",
    commitments: "My commitments",
    forecast: "Financial forecast",
    simulator: "Decision simulator",
    coach: "AI coach",
    goals: "Savings goals",
    calendar: "Financial calendar",
    settings: "Settings",
    welcome: "Good evening 👋",
    subtitle:
      "A clearer picture of your finances — every decision today shapes tomorrow.",
    balance: "Available after commitments",
    income: "Monthly income",
    expenses: "Monthly expenses",
    obligations: "Monthly commitments",
    savings: "Savings capacity",
    ofIncome: "of your income",
    monthlyFlow: "Cash flow",
    last6: "Last 6 months",
    commitmentsTitle: "Upcoming commitments",
    viewAll: "View all",
    due: "Due",
    amount: "Amount",
    insights: "QISTAK insights",
    insight1: "Your savings capacity looks healthy this month",
    insight2:
      "You have two payments due next week. Make sure funds are available.",
    insight3: "You could save SAR 300 monthly by reviewing recurring expenses.",
    simulatorTitle: "Before accepting a new payment…",
    simulatorDesc:
      "Test the decision and see how it affects your budget over the coming months.",
    trySim: "Try simulator",
    financialHealth: "Financial balance",
    healthy: "Balanced",
    spendRatio: "Commitments-to-income ratio",
    quickActions: "Quick actions",
    addCommitment: "Add commitment",
    addGoal: "New savings goal",
    monthly: "monthly",
    sar: "SAR",
    simTitle: "Financial decision simulator",
    simSub:
      "Test how a new commitment may affect your finances before deciding.",
    newPayment: "New monthly payment",
    paymentName: "Commitment name",
    paymentPlaceholder: "e.g. Car installment",
    paymentAmount: "Monthly payment amount",
    duration: "Commitment term (months)",
    start: "Run simulation",
    current: "Current position",
    after: "After decision",
    available: "Monthly available",
    savingsRate: "Savings rate",
    sixMonths: "Projected balance after 6 months",
    recommendation: "QISTAK recommendation",
    safe: "This may fit your budget",
    caution: "Caution: this may strain your budget",
    risky: "This may create a monthly deficit",
    safeText: "You retain a reasonable financial buffer after this commitment.",
    cautionText:
      "Your available balance will shrink. Review expenses before committing.",
    riskyText:
      "The payment exceeds your available capacity. Re-plan before taking it on.",
    commitmentsSub:
      "Track installments, bills, and all recurring commitments in one place.",
    add: "Add",
    category: "Category",
    car: "Car",
    home: "Housing",
    phone: "Telecom",
    device: "Device",
    other: "Other",
    noData: "No data",
    goalsTitle: "Your savings goals",
    progress: "Progress",
    saved: "Saved",
    target: "Target",
    coachTitle: "Your AI financial coach",
    coachSub: "Ask QISTAK about your budget or financial plans.",
    ask: "Ask a question…",
    send: "Send",
    coachHello:
      "Hello! I’m QISTAK Coach. I can help you understand your budget and simulate financial decisions.",
    calendarTitle: "Financial calendar",
    calendarSub: "Your upcoming commitment due dates this month.",
    profileTitle: "Financial profile",
    profileSub: "Update your details to make forecasts more relevant.",
    monthlyIncome: "Monthly income",
    monthlyExpenses: "Essential monthly expenses",
    save: "Save changes",
    settingsTitle: "Settings",
    language: "App language",
    arabic: "العربية",
    english: "English",
    notification: "Notifications",
    privacy: "Privacy & security",
    demo: "Demo version — your data is stored on this device only.",
    addModal: "Add a new commitment",
    cancel: "Cancel",
    saveItem: "Save commitment",
    name: "Name",
    date: "Due day",
    empty: "Add your commitments to track them here.",
    delete: "Delete",
    months: "months",
    remaining: "remaining",
    forecastTitle: "Your financial forecast",
    forecastSub:
      "A simplified view of expected cash flow over the next six months.",
    expectedBalance: "Projected balance",
    noCommit: "No new commitment",
    disclaimer:
      "This is an educational estimate, not financial advice or a credit decision. Results depend on the information entered.",
    assistantDisclaimer:
      "An educational assistant using demo data; it does not provide investment or credit advice.",
    search: "Search",
    all: "All",
    upcoming: "Upcoming",
    dueSoon: "Due soon",
    status: "Status",
    noResults: "No results",
    currency: "Currency",
    sarName: "Saudi Riyal (SAR)",
    edit: "Edit",
    monthsLabel: "Coming months",
  },
};

const nav = [
  ["dashboard", "dashboard", LayoutDashboard],
  ["profile", "profile", Wallet],
  ["cashflow", "cashflow", ArrowLeftRight],
  ["commitments", "commitments", ReceiptText],
  ["forecast", "forecast", ChartNoAxesCombined],
  ["simulator", "simulator", SlidersHorizontal],
  ["coach", "coach", Sparkles],
  ["goals", "goals", PiggyBank],
  ["calendar", "calendar", CalendarDays],
  ["settings", "settings", Settings],
];
const fmt = (n, lang) =>
  new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-US", {
    maximumFractionDigits: 0,
  }).format(Math.round(n || 0));
const money = (n, lang) => `${fmt(n, lang)} ${lang === "ar" ? "ر.س" : "SAR"}`;
const iconFor = (c) =>
  c === "car"
    ? CarFront
    : c === "home"
      ? Home
      : c === "phone"
        ? Smartphone
        : c === "device"
          ? CreditCard
          : ReceiptText;

function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("qistak-lang") || "ar",
  );
  const [page, setPage] = useState("dashboard");
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("qistak-data")) || seed;
    } catch {
      return seed;
    }
  });
  const [modal, setModal] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [sim, setSim] = useState({
    name: "قسط جديد",
    amount: 650,
    duration: 24,
  });
  const [ran, setRan] = useState(false);
  const [chat, setChat] = useState([{ role: "assistant", text: null }]);
  const [question, setQuestion] = useState("");
  const [newItem, setNewItem] = useState({
    name: "",
    amount: "",
    due: 1,
    category: "other",
    remaining: 0,
  });
  const t = copy[lang],
    rtl = lang === "ar";
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    localStorage.setItem("qistak-lang", lang);
  }, [lang, rtl]);
  useEffect(
    () => localStorage.setItem("qistak-data", JSON.stringify(data)),
    [data],
  );
  const committed = data.commitments.reduce((s, x) => s + Number(x.amount), 0);
  const available = data.income - data.expenses - committed;
  const saveCapacity = Math.max(0, available);
  const ratio = data.income ? committed / data.income : 0;
  const monthlyNet = data.income - data.expenses - committed;
  const projection = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        month: rtl
          ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"][i]
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i],
        balance: Math.max(0, monthlyNet * (i + 1)),
      })),
    [monthlyNet, rtl],
  );
  const simAvailable = available - Number(sim.amount || 0);
  const simResult =
    simAvailable < 0
      ? "risky"
      : simAvailable < data.income * 0.1
        ? "caution"
        : "safe";
  const resultBalance = simAvailable * 6;
  const navTo = (p) => {
    setPage(p);
    setMobile(false);
  };
  const addCommitment = () => {
    if (!newItem.name.trim() || Number(newItem.amount) <= 0) return;
    setData((d) => ({
      ...d,
      commitments: [
        ...d.commitments,
        {
          ...newItem,
          id: Date.now(),
          amount: Number(newItem.amount),
          due: Number(newItem.due),
          remaining: Number(newItem.remaining),
        },
      ],
    }));
    setNewItem({
      name: "",
      amount: "",
      due: 1,
      category: "other",
      remaining: 0,
    });
    setModal(false);
  };
  const removeItem = (id) =>
    setData((d) => ({
      ...d,
      commitments: d.commitments.filter((x) => x.id !== id),
    }));
  const answerCoach = () => {
    if (!question.trim()) return;
    const q = question.trim();
    let a = rtl
      ? `بناءً على بياناتك الحالية، دخلك الشهري ${money(data.income, lang)} والتزاماتك ${money(committed, lang)} ومصروفاتك ${money(data.expenses, lang)}. المتاح بعد ذلك ${money(available, lang)}. ${available > 0 ? "حاولي تخصيص جزء ثابت للادخار مع ترك هامش للطوارئ." : "راجعي الالتزامات والمصروفات قبل إضافة التزام جديد."} يمكنك استخدام «محاكاة القرار» لاختبار أي قسط جديد.`
      : `Based on your current profile, monthly income is ${money(data.income, lang)}, commitments are ${money(committed, lang)}, and expenses are ${money(data.expenses, lang)}. Your remaining amount is ${money(available, lang)}. ${available > 0 ? "Consider setting a consistent savings amount while keeping an emergency buffer." : "Review expenses and commitments before adding a new payment."} Use the Decision Simulator to test a new installment.`;
    setChat((c) => [
      ...c,
      { role: "user", text: q },
      { role: "assistant", text: a },
    ]);
    setQuestion("");
  };
  const percent = (n, d) => (d ? Math.min(100, Math.round((n / d) * 100)) : 0);
  const changeData = (k, v) => setData((d) => ({ ...d, [k]: Number(v) || 0 }));
  const sidebar = (
    <aside className={`sidebar ${mobile ? "show" : ""}`}>
      <div className="brand">
        <img src={qistakLogo} alt="QISTAK" className="brand-mark" />

        <div className="brand-info">
         <b>{t.app}</b>
          <small>{t.tagline}</small>
        </div>

        <button className="icon-btn close-nav" onClick={() => setMobile(false)}>
          <X size={18} />
        </button>
      </div>
      <div className="nav-label">{t.overview}</div>
      <nav>
        {nav.map(([key, label, Icon]) => (
          <button
            key={key}
            className={`nav-item ${page === key ? "active" : ""}`}
            onClick={() => navTo(key)}
          >
            <Icon size={19} />
            <span>{t[label]}</span>
            {key === "simulator" && <span className="new-pill">AI</span>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card">
          <div className="help-icon">
            <Lightbulb size={18} />
          </div>
          <b>
            {rtl
              ? "قرارك اليوم يصنع فرق بكرة"
              : "Your decisions shape tomorrow"}
          </b>
          <p>
            {rtl
              ? "جرّب المحاكاة قبل أي التزام جديد."
              : "Simulate before taking on a new commitment."}
          </p>
          <button onClick={() => navTo("simulator")}>
            {t.trySim} <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="user-mini">
          <div className="avatar">S</div>
          <div>
            <b>{rtl ? "مستخدم قسطك" : "QISTAK user"}</b>
            <small>{rtl ? "حساب تجريبي" : "Demo account"}</small>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </aside>
  );
  const header = (
    <header className="topbar">
      <button className="icon-btn mobile-menu" onClick={() => setMobile(true)}>
        <Menu />
      </button>
      <div className="crumb">{t[page] || t.dashboard}</div>
      <div className="top-actions">
        <div className="demo-label">
          <span /> {rtl ? "وضع تجريبي" : "Demo mode"}
        </div>
        <button className="icon-btn" title={t.search}>
          <Search size={18} />
        </button>
        <button className="icon-btn notification">
          <Bell size={18} />
          <i />
        </button>
        <button className="lang-btn" onClick={() => setLang(rtl ? "en" : "ar")}>
          <Languages size={16} />
          {rtl ? "EN" : "عربي"}
        </button>
      </div>
    </header>
  );
  const metric = (label, value, sub, Icon, color, extra) => (
    <div className="metric-card">
      <div className="metric-top">
        <span>{label}</span>
        <div className={`metric-icon ${color}`}>
          <Icon size={19} />
        </div>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-sub">
        {sub}
        {extra && <b>{extra}</b>}
      </div>
    </div>
  );
  const commitmentRows = (items) =>
    items.map((item) => {
      const I = iconFor(item.category);
      return (
        <div className="commit-row" key={item.id}>
          <div className="commit-left">
            <div className="commit-icon">
              <I size={18} />
            </div>
            <div>
              <b>{item.name}</b>
              <small>
                {t[item.category] || t.other} · {t.due} {item.due}
              </small>
            </div>
          </div>
          <div className="commit-right">
            <b>{money(item.amount, lang)}</b>
            <small>{t.monthly}</small>
          </div>
          <button
            className="delete-btn"
            title={t.delete}
            onClick={() => removeItem(item.id)}
          >
            <Trash2 size={15} />
          </button>
        </div>
      );
    });
  const chart = (
    <div className="panel chart-panel">
      <div className="panel-head">
        <div>
          <h3>{t.monthlyFlow}</h3>
          <p>{t.last6}</p>
        </div>
        <span className="chart-legend">
          <i /> {t.balance}
        </span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={projection}>
            <defs>
              <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#17a99a" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#17a99a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#edf1f5"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8a96a5" }}
            />
            <YAxis
              orientation={rtl ? "right" : "left"}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8a96a5" }}
              tickFormatter={(v) => `${Math.round(v / 1000)}k`}
            />
            <Tooltip formatter={(v) => money(v, lang)} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#17a99a"
              strokeWidth={3}
              fill="url(#fillBalance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
  const insights = (
    <div className="panel insights">
      <div className="panel-head">
        <div>
          <h3>{t.insights}</h3>
          <p>
            {rtl
              ? "ملاحظات مبنية على بياناتك"
              : "Based on your financial profile"}
          </p>
        </div>
        <div className="sparkle">
          <Sparkles size={18} />
        </div>
      </div>
      {[
        [CheckCircle2, t.insight1, "good"],
        [AlertTriangle, t.insight2, "warn"],
        [Lightbulb, t.insight3, "info"],
      ].map(([I, txt, kind], i) => (
        <div className={`insight ${kind}`} key={i}>
          <I size={17} />
          <span>{txt}</span>
        </div>
      ))}
    </div>
  );
  const dashboard = (
    <>
      <div className="welcome-row">
        <div>
          <h1>{t.welcome}</h1>
          <p>{t.subtitle}</p>
        </div>
        <button className="primary-btn" onClick={() => setModal(true)}>
          <Plus size={17} />
          {t.addCommitment}
        </button>
      </div>
      <div className="metrics-grid">
        {metric(
          t.balance,
          money(available, lang),
          rtl
            ? "بعد خصم المصروفات والالتزامات"
            : "After expenses and commitments",
          Wallet,
          "teal",
        )}
        {metric(
          t.income,
          money(data.income, lang),
          rtl ? "مصدر دخلك الشهري" : "Your monthly income",
          ArrowDownRight,
          "blue",
        )}
        {metric(
          t.obligations,
          money(committed, lang),
          `${percent(committed, data.income)}% ${t.ofIncome}`,
          ReceiptText,
          "purple",
        )}
        {metric(
          t.savings,
          money(saveCapacity, lang),
          t.ofIncome,
          TrendingUp,
          "orange",
        )}
      </div>
      <div className="dashboard-grid">
        <div className="main-column">
          {chart}
          <div className="panel">
            <div className="panel-head">
              <div>
                <h3>{t.commitmentsTitle}</h3>
                <p>
                  {rtl
                    ? "التزامات تحتاج متابعتك"
                    : "Payments to keep an eye on"}
                </p>
              </div>
              <button className="text-btn" onClick={() => navTo("commitments")}>
                {t.viewAll}
                <ChevronLeft size={15} />
              </button>
            </div>
            {commitmentRows(data.commitments.slice(0, 4))}
          </div>
        </div>
        <div className="side-column">
          <div className="health-card">
            <div className="health-top">
              <span>{t.financialHealth}</span>
              <ShieldCheck size={19} />
            </div>
            <div className="health-score">
              {Math.max(0, Math.min(100, Math.round(100 - ratio * 100)))}
              <small>/100</small>
            </div>
            <b>{ratio < 0.35 ? t.healthy : t.caution}</b>
            <div className="progress-track">
              <i style={{ width: `${Math.max(0, 100 - ratio * 100)}%` }} />
            </div>
            <small>
              {t.spendRatio}: {percent(committed, data.income)}%
            </small>
          </div>
          {insights}
          <div className="sim-banner">
            <div className="sim-art">
              <ChartNoAxesCombined size={26} />
              <Sparkles size={15} />
            </div>
            <h3>{t.simulatorTitle}</h3>
            <p>{t.simulatorDesc}</p>
            <button onClick={() => navTo("simulator")}>
              {t.trySim}
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
  const simulator = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.simTitle}</h1>
          <p>{t.simSub}</p>
        </div>
        <span className="ai-chip">
          <Sparkles size={14} /> AI powered
        </span>
      </div>
      <div className="sim-layout">
        <div className="panel sim-form">
          <div className="panel-head">
            <div>
              <h3>{t.newPayment}</h3>
              <p>
                {rtl
                  ? "أدخل تفاصيل الالتزام الذي تفكر فيه"
                  : "Enter the commitment you are considering"}
              </p>
            </div>
            <div className="metric-icon teal">
              <SlidersHorizontal size={19} />
            </div>
          </div>
          <label>{t.paymentName}</label>
          <input
            value={sim.name}
            onChange={(e) => {
              setSim((s) => ({ ...s, name: e.target.value }));
              setRan(false);
            }}
            placeholder={t.paymentPlaceholder}
          />
          <label>{t.paymentAmount}</label>
          <div className="amount-input">
            <input
              type="number"
              min="0"
              value={sim.amount}
              onChange={(e) => {
                setSim((s) => ({ ...s, amount: e.target.value }));
                setRan(false);
              }}
            />
            <span>{t.sar}</span>
          </div>
          <input
            className="range"
            type="range"
            min="100"
            max="5000"
            step="50"
            value={sim.amount}
            onChange={(e) => {
              setSim((s) => ({ ...s, amount: e.target.value }));
              setRan(false);
            }}
          />
          <div className="range-labels">
            <span>100</span>
            <span>5,000</span>
          </div>
          <label>{t.duration}</label>
          <select
            value={sim.duration}
            onChange={(e) =>
              setSim((s) => ({ ...s, duration: e.target.value }))
            }
          >
            <option value="6">6 {t.months}</option>
            <option value="12">12 {t.months}</option>
            <option value="24">24 {t.months}</option>
            <option value="36">36 {t.months}</option>
            <option value="48">48 {t.months}</option>
            <option value="60">60 {t.months}</option>
          </select>
          <button className="primary-btn full" onClick={() => setRan(true)}>
            <Sparkles size={17} />
            {t.start}
          </button>
          <p className="disclaimer">
            <ShieldCheck size={14} />
            {t.disclaimer}
          </p>
        </div>
        <div className="sim-results">
          <div className="result-card">
            <div className="result-title">
              <span>{t.current}</span>
              <span>{t.after}</span>
            </div>
            <div className="compare">
              <div>
                <small>{t.available}</small>
                <b>{money(available, lang)}</b>
              </div>
              <ArrowLeftRight />
              <div>
                <small>{t.available}</small>
                <b className={simAvailable < 0 ? "negative" : ""}>
                  {money(simAvailable, lang)}
                </b>
              </div>
            </div>
            <div className="compare-bar">
              <i
                style={{
                  width: `${Math.max(0, Math.min(100, percent(simAvailable, data.income)))}%`,
                }}
              />
            </div>
          </div>
          {ran ? (
            <div className={`recommendation ${simResult}`}>
              <div className="rec-head">
                {simResult === "safe" ? (
                  <CheckCircle2 />
                ) : simResult === "caution" ? (
                  <AlertTriangle />
                ) : (
                  <AlertTriangle />
                )}
                <b>{t.recommendation}</b>
              </div>
              <h2>{t[simResult]}</h2>
              <p>{t[simResult + "Text"]}</p>
              <div className="result-stats">
                <div>
                  <small>{t.available}</small>
                  <b>{money(simAvailable, lang)}</b>
                </div>
                <div>
                  <small>{t.sixMonths}</small>
                  <b>{money(resultBalance, lang)}</b>
                </div>
                <div>
                  <small>{t.savingsRate}</small>
                  <b>
                    {fmt(
                      data.income
                        ? (Math.max(0, simAvailable) / data.income) * 100
                        : 0,
                      lang,
                    )}
                    %
                  </b>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-result">
              <div className="empty-icon">
                <ChartNoAxesCombined size={27} />
              </div>
              <h3>{rtl ? "نتيجتك بانتظارك" : "Your result is waiting"}</h3>
              <p>
                {rtl
                  ? "أدخل مبلغ القسط واضغط «ابدأ المحاكاة» لمشاهدة أثر القرار."
                  : "Enter a payment amount and run the simulation to see its impact."}
              </p>
            </div>
          )}
          <div className="panel mini-insight">
            <Lightbulb size={19} />
            <div>
              <b>{rtl ? "كيف تعمل المحاكاة؟" : "How does it work?"}</b>
              <p>
                {rtl
                  ? "نخصم القسط الجديد من المبلغ المتاح شهريًا، ثم نعرض لك الأثر التقديري على مدى 6 أشهر."
                  : "We subtract the new payment from your monthly available amount and estimate the impact over six months."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const commitmentsPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.commitments}</h1>
          <p>{t.commitmentsSub}</p>
        </div>
        <button className="primary-btn" onClick={() => setModal(true)}>
          <Plus size={17} />
          {t.add}
        </button>
      </div>
      <div className="metrics-grid three">
        {metric(
          t.obligations,
          money(committed, lang),
          t.monthly,
          ReceiptText,
          "purple",
        )}
        {metric(t.balance, money(available, lang), t.monthly, Wallet, "teal")}
        {metric(
          t.spendRatio,
          `${percent(committed, data.income)}%`,
          t.ofIncome,
          ChartNoAxesCombined,
          "blue",
        )}
      </div>
      <div className="panel">
        <div className="panel-head">
          <div>
            <h3>{t.commitmentsTitle}</h3>
            <p>
              {data.commitments.length}{" "}
              {rtl ? "التزامات مسجلة" : "registered commitments"}
            </p>
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={15} />
            {t.all}
          </button>
        </div>
        {data.commitments.length ? (
          commitmentRows(data.commitments)
        ) : (
          <div className="empty-state">
            {t.empty}
            <button className="text-btn" onClick={() => setModal(true)}>
              {t.add}
            </button>
          </div>
        )}
      </div>
    </>
  );
  const goalsPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.goalsTitle}</h1>
          <p>
            {rtl
              ? "خطوات صغيرة تقربك من أهدافك"
              : "Small steps bring your goals closer"}
          </p>
        </div>
        <button
          className="primary-btn"
          onClick={() =>
            setData((d) => ({
              ...d,
              goals: [
                ...d.goals,
                {
                  id: Date.now(),
                  name: rtl ? "هدف جديد" : "New goal",
                  target: 5000,
                  saved: 0,
                },
              ],
            }))
          }
        >
          <Plus size={17} />
          {t.addGoal}
        </button>
      </div>
      <div className="goals-grid">
        {data.goals.map((g) => (
          <div className="panel goal-card" key={g.id}>
            <div className="goal-top">
              <div className="goal-icon">
                <Target />
              </div>
              <span>{percent(g.saved, g.target)}%</span>
            </div>
            <h3>{g.name}</h3>
            <div className="goal-amount">
              <b>{money(g.saved, lang)}</b>
              <small>
                {t.target}: {money(g.target, lang)}
              </small>
            </div>
            <div className="progress-track">
              <i style={{ width: `${percent(g.saved, g.target)}%` }} />
            </div>
            <small>{t.progress}</small>
            <button
              className="text-btn"
              onClick={() =>
                setData((d) => ({
                  ...d,
                  goals: d.goals.map((x) =>
                    x.id === g.id
                      ? { ...x, saved: Math.min(x.target, x.saved + 250) }
                      : x,
                  ),
                }))
              }
            >
              {rtl ? "+ أضف 250 ر.س" : " + Add SAR 250"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
  const coachPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.coachTitle}</h1>
          <p>{t.coachSub}</p>
        </div>
        <span className="ai-chip">
          <Sparkles size={14} /> AI
        </span>
      </div>
      <div className="panel chat-panel">
        <div className="chat-head">
          <div className="coach-avatar">
            <Sparkles />
          </div>
          <div>
            <b>QISTAK Coach</b>
            <small>
              <i /> {rtl ? "متصل لمساعدتك" : "Ready to help"}
            </small>
          </div>
        </div>
        <div className="chat-messages">
          {chat.map((m, i) => (
            <div className={`bubble ${m.role}`} key={i}>
              {m.text || t.coachHello}
            </div>
          ))}
        </div>
        <div className="suggestions">
          {(rtl
            ? ["هل أقدر أضيف قسط جديد؟", "كيف أزيد ادخاري؟", "حلل وضعي المالي"]
            : [
                "Can I afford a new payment?",
                "How can I save more?",
                "Analyze my finances",
              ]
          ).map((s) => (
            <button key={s} onClick={() => setQuestion(s)}>
              {s}
            </button>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && answerCoach()}
            placeholder={t.ask}
          />
          <button onClick={answerCoach}>
            <ArrowUpRight size={18} />
          </button>
        </div>
        <p className="disclaimer">{t.assistantDisclaimer}</p>
      </div>
    </>
  );
  const profilePage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.profileTitle}</h1>
          <p>{t.profileSub}</p>
        </div>
      </div>
      <div className="panel profile-form">
        <div className="form-grid">
          <div>
            <label>{t.monthlyIncome}</label>
            <input
              type="number"
              value={data.income}
              onChange={(e) => changeData("income", e.target.value)}
            />
          </div>
          <div>
            <label>{t.monthlyExpenses}</label>
            <input
              type="number"
              value={data.expenses}
              onChange={(e) => changeData("expenses", e.target.value)}
            />
          </div>
        </div>
        <div className="profile-note">
          <ShieldCheck size={18} />
          <span>
            {rtl
              ? "يتم حفظ البيانات على جهازك في هذه النسخة التجريبية."
              : "In this demo, your data is saved locally on this device."}
          </span>
        </div>
      </div>
    </>
  );
  const forecastPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.forecastTitle}</h1>
          <p>{t.forecastSub}</p>
        </div>
      </div>
      {chart}
      <div className="panel">
        <h3>{t.expectedBalance}</h3>
        <div className="forecast-list">
          {projection.map((p, i) => (
            <div key={i}>
              <span>{p.month}</span>
              <b>{money(p.balance, lang)}</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  const calendarPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.calendarTitle}</h1>
          <p>{t.calendarSub}</p>
        </div>
      </div>
      <div className="panel">
        {[...data.commitments]
          .sort((a, b) => a.due - b.due)
          .map((x, i) => (
            <div className="calendar-row" key={x.id}>
              <div className="date-box">
                <b>{x.due}</b>
                <small>{rtl ? "يوم" : "DAY"}</small>
              </div>
              <div className="calendar-info">
                <b>{x.name}</b>
                <small>{t[x.category] || t.other}</small>
              </div>
              <strong>{money(x.amount, lang)}</strong>
            </div>
          ))}
      </div>
    </>
  );
  const settingsPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.settingsTitle}</h1>
          <p>
            {rtl ? "خصص تجربتك في قسطك" : "Personalize your QISTAK experience"}
          </p>
        </div>
      </div>
      <div className="panel settings-panel">
        <div className="setting-row">
          <div>
            <b>{t.language}</b>
            <small>
              {rtl ? "اختر لغة الواجهة" : "Choose your interface language"}
            </small>
          </div>
          <div className="lang-options">
            <button
              className={rtl ? "selected" : ""}
              onClick={() => setLang("ar")}
            >
              العربية
            </button>
            <button
              className={!rtl ? "selected" : ""}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>
        </div>
        <div className="setting-row">
          <div>
            <b>{t.currency}</b>
            <small>{t.sarName}</small>
          </div>
          <span className="currency-pill">SAR ر.س</span>
        </div>
        <div className="setting-row">
          <div>
            <b>{t.privacy}</b>
            <small>{t.demo}</small>
          </div>
          <ShieldCheck color="#17a99a" />
        </div>
      </div>
    </>
  );
  const cashflowPage = (
    <>
      <div className="page-heading">
        <div>
          <h1>{t.cashflow}</h1>
          <p>
            {rtl
              ? "ملخص دخلك ومصروفاتك والتزاماتك"
              : "A breakdown of income, expenses and commitments"}
          </p>
        </div>
      </div>
      <div className="metrics-grid three">
        {metric(
          t.income,
          money(data.income, lang),
          t.monthly,
          ArrowDownRight,
          "blue",
        )}
        {metric(
          t.expenses,
          money(data.expenses, lang),
          t.monthly,
          ArrowUpRight,
          "orange",
        )}
        {metric(t.balance, money(available, lang), t.monthly, Wallet, "teal")}
      </div>
      {chart}
      <div className="panel">
        <div className="panel-head">
          <h3>{rtl ? "توزيع الدخل" : "Income allocation"}</h3>
        </div>
        {[
          [t.expenses, data.expenses, "orange"],
          [t.obligations, committed, "purple"],
          [t.balance, Math.max(0, available), "teal"],
        ].map(([label, val, color]) => (
          <div className="allocation" key={label}>
            <div>
              <span>{label}</span>
              <b>{money(val, lang)}</b>
            </div>
            <div className="progress-track">
              <i
                className={color}
                style={{ width: `${percent(val, data.income)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
  const pages = {
    dashboard,
    simulator,
    commitments: commitmentsPage,
    goals: goalsPage,
    coach: coachPage,
    profile: profilePage,
    forecast: forecastPage,
    calendar: calendarPage,
    settings: settingsPage,
    cashflow: cashflowPage,
  };
  return (
    <div className="app-shell">
      {sidebar}
      <main className="main-area">
        {header}
        <div className="content">
          {pages[page] || dashboard}
          <footer>
            {t.demo}
            <span>QISTAK © 2026</span>
          </footer>
        </div>
      </main>
      {mobile && <div className="scrim" onClick={() => setMobile(false)} />}
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>{t.addModal}</h3>
              <button className="icon-btn" onClick={() => setModal(false)}>
                <X />
              </button>
            </div>
            <label>{t.name}</label>
            <input
              value={newItem.name}
              onChange={(e) =>
                setNewItem((s) => ({ ...s, name: e.target.value }))
              }
              placeholder={t.paymentPlaceholder}
            />
            <label>{t.amount}</label>
            <input
              type="number"
              min="1"
              value={newItem.amount}
              onChange={(e) =>
                setNewItem((s) => ({ ...s, amount: e.target.value }))
              }
            />
            <label>{t.category}</label>
            <select
              value={newItem.category}
              onChange={(e) =>
                setNewItem((s) => ({ ...s, category: e.target.value }))
              }
            >
              {["car", "home", "phone", "device", "other"].map((c) => (
                <option value={c} key={c}>
                  {t[c]}
                </option>
              ))}
            </select>
            <label>{t.date}</label>
            <input
              type="number"
              min="1"
              max="31"
              value={newItem.due}
              onChange={(e) =>
                setNewItem((s) => ({ ...s, due: e.target.value }))
              }
            />
            <div className="modal-actions">
              <button className="secondary-btn" onClick={() => setModal(false)}>
                {t.cancel}
              </button>
              <button className="primary-btn" onClick={addCommitment}>
                {t.saveItem}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
