/* ============================================
   i18n — Translations for EN / ZH / JA
   ============================================ */

const TRANSLATIONS = {
  en: {
    // Meta
    'meta.title': 'Yuan Genggeng — Senior Backend Engineer',
    'meta.desc': 'Senior Backend Engineer with 6+ years in distributed systems. Based in Tokyo, Japan.',

    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for opportunities',
    'hero.title': 'Senior Backend Engineer',
    'hero.sub': '6+ years in large-scale distributed systems • Java/Kotlin • Tokyo, Japan',
    'hero.tag1': 'Java / Kotlin',
    'hero.tag2': 'Spring Boot',
    'hero.tag3': 'Distributed Systems',
    'hero.tag4': 'Next.js',
    'hero.tag5': 'AI-Augmented Dev',
    'hero.cta.primary': 'View Experience',
    'hero.cta.ghost': 'Get In Touch',
    'hero.scroll': 'Scroll',

    // About
    'about.label': '// about me',
    'about.title': 'Who I Am',
    'about.lead': 'Senior Backend Engineer with <strong>6+ years</strong> of specialized experience in large-scale distributed systems, backed by a <strong>20-year foundation</strong> in software development.',
    'about.p1': 'Extensive hands-on experience with <strong>Java/Kotlin</strong> ecosystems and <strong>Spring Boot</strong>. Strong background in Legacy Modernization within the insurance sector and large-scale data migration for e-commerce platforms.',
    'about.p2': 'Proficient in modern full-stack development (<strong>Next.js / Convex / FastAPI</strong>) and highly efficient in <strong>AI-augmented workflows</strong> using Claude Code, Codex, and Antigravity.',
    'about.lang.zh': '🇨🇳 Chinese',
    'about.lang.ja': '🇯🇵 Japanese',
    'about.lang.en': '🇺🇸 English',
    'about.level.native': 'Native',
    'about.level.business': 'Business',
    'about.stat1.label': 'Years in Software',
    'about.stat2.label': 'Years Backend Specialist',
    'about.stat3.label': 'Records Migrated',
    'about.stat4.label': 'Languages & Frameworks',

    // Skills
    'skills.label': '// technical skills',
    'skills.title': 'What I Work With',
    'skills.backend.title': 'Backend Development',
    'skills.search.title': 'Search & Data',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.ai.title': 'AI Tools',
    'skills.frontend.title': 'Frontend & Full-Stack',
    'skills.langs.title': 'Languages',

    // Experience
    'exp.label': '// work history',
    'exp.title': 'Professional Experience',
    'exp.ntt.role': 'Contract Backend Engineer',
    'exp.ntt.via': '(via Staffing Agency)',
    'exp.ntt.period': 'Apr 2025 — Present',
    'exp.ntt.badge': 'Current',
    'exp.ntt.project': 'Insurance System Modernization',
    'exp.ntt.b1': 'Migrating a <strong>legacy insurance core system</strong> from Struts 1.x / JDK 1.7 to <strong>Spring MVC / JDK 17</strong>',
    'exp.rakuten.role': 'Backend Engineer',
    'exp.rakuten.period': 'Sep 2021 — Mar 2025',
    'exp.rakuten.project1': 'Membership System & Database Migration',
    'exp.rakuten.b1': 'Refactored Java-based membership APIs into <strong>Kotlin/Vert.x</strong> services using DDD principles',
    'exp.rakuten.b2': 'Migrated Couchbase to <strong>Cassandra</strong> using <strong>Kafka-based CDC</strong> for real-time sync',
    'exp.rakuten.b3': 'Performance tested with <strong>Gatling</strong> across <strong>300 million records</strong>',
    'exp.rakuten.project2': 'Rakuten Fashion (E-commerce)',
    'exp.rakuten.b4': 'Built batch systems with <strong>Spring Boot + RabbitMQ</strong> for automated order error handling',
    'exp.rakuten.b5': 'Standardized API specs with <strong>Swagger (OpenAPI)</strong> across all backend projects',
    'exp.earlier.company': 'Earlier Roles',
    'exp.earlier.role': 'Contract Engineer & Game Client Programmer',
    'exp.earlier.period': '2002 — 2021',
    'exp.earlier.b1': '<strong>Contract (2018–2021):</strong> Mobile payment APIs (Suica), Video Management (NEC/C#), Live streaming (PHP/Laravel)',
    'exp.earlier.b2': '<strong>Game Dev (2002–2018):</strong> 16 years C++/C#/Unity across multiple studios — gameplay & performance',

    // Projects
    'proj.label': '// selected projects',
    'proj.title': "What I've Built",
    'proj.live': 'Live',
    'proj.pera.subtitle': 'High-Performance Japanese Learning Ecosystem',
    'proj.pera.desc': 'A hybrid multi-service platform with Meilisearch powering search across millions of records. Features a multi-tier AI fallback architecture and Stripe subscriptions.',
    'proj.pera.h1': '🔍 Meilisearch for millions of records',
    'proj.pera.h2': '🛡 Resilient multi-tier LLM fallback',
    'proj.pera.h3': '💳 Stripe subscription integration',
    'proj.pera.h4': '🚀 CI/CD to Azure & Railway',
    'proj.jessie.subtitle': 'Real-Time Market Sentiment Dashboard',
    'proj.jessie.desc': 'A React/Convex serverless web app aggregating live market data (VIX, CNN Fear & Greed, major ETFs) and classifying the market into actionable sentiment scenarios.',
    'proj.jessie.h1': '📊 VIX + Fear & Greed live data',
    'proj.jessie.h2': '🔔 Email alerts on scenario changes',
    'proj.jessie.h3': '⚡ Server-side caching for instant loads',
    'proj.jessie.h4': '🔐 Gated admin dashboard (Clerk auth)',

    // Contact
    'contact.label': '// get in touch',
    'contact.title': "Let's Work Together",
    'contact.desc': 'Currently based in Tokyo, Japan. Open to backend engineering opportunities, consulting, and interesting side projects.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.value': 'Tokyo, Japan',
    'contact.visa': 'Visa: Engineer / Specialist (3yr)',

    // Footer
    'hero.name': 'Yuan <span class="text-gradient">Genggeng</span>',
    'footer.name': 'Yuan Genggeng',
    'footer.copy': 'Built with vanilla HTML, CSS & JS • Tokyo 2026',
  },

  zh: {
    // Meta
    'meta.title': '袁耿耿 — 高级后端工程师',
    'hero.name': '袁 <span class="text-gradient">耿耿</span>',
    'footer.name': '袁 耿耿',
    'meta.desc': '高级后端工程师，6年以上分布式系统经验，专注于Java/Kotlin、Spring Boot及AI辅助开发，现居东京。',

    // Nav
    'nav.about': '关于我',
    'nav.skills': '技术栈',
    'nav.experience': '工作经历',
    'nav.projects': '项目案例',
    'nav.contact': '联系我',

    // Hero
    'hero.badge': '开放工作机会',
    'hero.title': '高级后端工程师',
    'hero.sub': '6年以上大规模分布式系统经验 • Java/Kotlin • 东京，日本',
    'hero.tag1': 'Java / Kotlin',
    'hero.tag2': 'Spring Boot',
    'hero.tag3': '分布式系统',
    'hero.tag4': 'Next.js',
    'hero.tag5': 'AI辅助开发',
    'hero.cta.primary': '查看工作经历',
    'hero.cta.ghost': '联系我',
    'hero.scroll': '向下滚动',

    // About
    'about.label': '// 关于我',
    'about.title': '个人简介',
    'about.lead': '高级后端工程师，在大规模分布式系统领域拥有<strong>6年以上</strong>专业经验，整体软件开发经验超过<strong>20年</strong>。',
    'about.p1': '深度掌握<strong>Java/Kotlin</strong>技术栈与<strong>Spring Boot</strong>框架。在保险行业遗留系统现代化改造及电商平台大规模数据迁移方面拥有丰富实战经验。',
    'about.p2': '熟练运用现代全栈技术（<strong>Next.js / Convex / FastAPI</strong>），并能高效利用<strong>AI辅助工作流</strong>（Claude Code、Codex、Antigravity）大幅提升开发效率。',
    'about.lang.zh': '🇨🇳 中文',
    'about.lang.ja': '🇯🇵 日语',
    'about.lang.en': '🇺🇸 英语',
    'about.level.native': '母语',
    'about.level.business': '商务级',
    'about.stat1.label': '年软件开发经验',
    'about.stat2.label': '年后端专项经验',
    'about.stat3.label': '条数据迁移记录',
    'about.stat4.label': '种编程语言/框架',

    // Skills
    'skills.label': '// 技术技能',
    'skills.title': '我的技术栈',
    'skills.backend.title': '后端开发',
    'skills.search.title': '搜索与数据',
    'skills.cloud.title': '云服务与DevOps',
    'skills.ai.title': 'AI工具',
    'skills.frontend.title': '前端与全栈',
    'skills.langs.title': '编程语言',

    // Experience
    'exp.label': '// 工作经历',
    'exp.title': '职业履历',
    'exp.ntt.role': '合同制后端工程师',
    'exp.ntt.via': '（通过人才派遣公司）',
    'exp.ntt.period': '2025年4月 — 至今',
    'exp.ntt.badge': '在职',
    'exp.ntt.project': '保险系统现代化改造',
    'exp.ntt.b1': '将<strong>保险核心遗留系统</strong>从 Struts 1.x / JDK 1.7 迁移至<strong>Spring MVC / JDK 17</strong>',
    'exp.rakuten.role': '后端工程师',
    'exp.rakuten.period': '2021年9月 — 2025年3月',
    'exp.rakuten.project1': '会员系统与数据库迁移',
    'exp.rakuten.b1': '将 Java 会员 API 重构为基于 DDD 原则的<strong>Kotlin/Vert.x</strong>微服务',
    'exp.rakuten.b2': '使用<strong>Kafka CDC</strong>将数据库从 Couchbase 实时迁移至<strong>Cassandra</strong>',
    'exp.rakuten.b3': '使用<strong>Gatling</strong>对<strong>3亿条</strong>记录进行性能压测',
    'exp.rakuten.project2': '乐天时尚电商平台',
    'exp.rakuten.b4': '基于<strong>Spring Boot + RabbitMQ</strong>构建订单异常自动处理批处理系统',
    'exp.rakuten.b5': '在所有后端项目中统一推行<strong>Swagger (OpenAPI)</strong>接口规范文档',
    'exp.earlier.company': '早期经历',
    'exp.earlier.role': '合同工程师 & 游戏客户端程序员',
    'exp.earlier.period': '2002 — 2021年',
    'exp.earlier.b1': '<strong>合同开发（2018–2021）：</strong>移动支付API（Suica）、视频管理系统（NEC/C#）、直播后端（PHP/Laravel）',
    'exp.earlier.b2': '<strong>游戏开发（2002–2018）：</strong>16年 C++/C#/Unity 游戏客户端开发，专注玩法系统与性能优化',

    // Projects
    'proj.label': '// 精选项目',
    'proj.title': '我的作品',
    'proj.live': '访问',
    'proj.pera.subtitle': '高性能日语学习生态系统',
    'proj.pera.desc': '基于混合多服务架构，使用 Meilisearch 在百万级数据上实现高性能搜索，集成多层 AI 降级架构与 Stripe 订阅支付。',
    'proj.pera.h1': '🔍 Meilisearch 支撑百万级检索',
    'proj.pera.h2': '🛡 多层 LLM 容灾降级架构',
    'proj.pera.h3': '💳 Stripe 订阅支付集成',
    'proj.pera.h4': '🚀 CI/CD 部署至 Azure & Railway',
    'proj.jessie.subtitle': '实时市场情绪仪表盘',
    'proj.jessie.desc': '基于 React/Convex 的无服务端 Web 应用，聚合 VIX、CNN 恐慌贪婪指数等实时市场数据，并分类输出可操作的市场情绪信号。',
    'proj.jessie.h1': '📊 VIX + 恐慌贪婪指数实时数据',
    'proj.jessie.h2': '🔔 市场情景变化邮件告警',
    'proj.jessie.h3': '⚡ 服务端缓存实现秒级加载',
    'proj.jessie.h4': '🔐 Clerk 认证 + 管理员后台',

    // Contact
    'contact.label': '// 联系我',
    'contact.title': '期待合作',
    'contact.desc': '目前常驻东京，欢迎洽谈后端开发机会、技术顾问或有趣的副业项目。',
    'contact.email.label': '邮箱',
    'contact.phone.label': '电话',
    'contact.location.label': '所在地',
    'contact.location.value': '东京，日本',
    'contact.visa': '签证：工程师/人文知识/国际业务（3年）',

    // Footer
    'footer.copy': '原生 HTML、CSS & JS 构建 • 东京 2026',
  },

  ja: {
    // Meta
    'meta.title': '袁耿耿 — シニアバックエンドエンジニア',
    'hero.name': '<ruby>袁<rt>えん</rt></ruby> <span class="text-gradient"><ruby>耿耿<rt>こうこう</rt></ruby></span>',
    'footer.name': '袁 耿耿',
    'meta.desc': '6年以上の分散システム経験を持つシニアバックエンドエンジニア。Java/Kotlin・Spring Bootを専門とし、東京在住。',

    // Nav
    'nav.about': '私について',
    'nav.skills': 'スキル',
    'nav.experience': '職務経歴',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',

    // Hero
    'hero.badge': '求職中',
    'hero.title': 'シニアバックエンドエンジニア',
    'hero.sub': '大規模分散システム 6年以上 • Java/Kotlin • 東京',
    'hero.tag1': 'Java / Kotlin',
    'hero.tag2': 'Spring Boot',
    'hero.tag3': '分散システム',
    'hero.tag4': 'Next.js',
    'hero.tag5': 'AI活用開発',
    'hero.cta.primary': '職務経歴を見る',
    'hero.cta.ghost': 'お問い合わせ',
    'hero.scroll': 'スクロール',

    // About
    'about.label': '// 私について',
    'about.title': '自己紹介',
    'about.lead': '大規模分散システムに<strong>6年以上</strong>の専門経験を持つシニアバックエンドエンジニアです。ソフトウェア開発の経験は<strong>20年以上</strong>に及びます。',
    'about.p1': '<strong>Java/Kotlin</strong>エコシステムと<strong>Spring Boot</strong>を深く習熟しています。保険業界のレガシーシステム刷新やECプラットフォームの大規模データ移行において豊富な実績があります。',
    'about.p2': 'モダンなフルスタック開発（<strong>Next.js / Convex / FastAPI</strong>）に精通し、Claude Code・Codex・Antigravityを活用した<strong>AI支援ワークフロー</strong>による高速開発を得意としています。',
    'about.lang.zh': '🇨🇳 中国語',
    'about.lang.ja': '🇯🇵 日本語',
    'about.lang.en': '🇺🇸 英語',
    'about.level.native': 'ネイティブ',
    'about.level.business': 'ビジネスレベル',
    'about.stat1.label': 'ソフトウェア開発年数',
    'about.stat2.label': 'バックエンド専門年数',
    'about.stat3.label': '件のデータ移行実績',
    'about.stat4.label': '言語・フレームワーク',

    // Skills
    'skills.label': '// 技術スキル',
    'skills.title': '使用技術',
    'skills.backend.title': 'バックエンド開発',
    'skills.search.title': '検索・データ',
    'skills.cloud.title': 'クラウド・DevOps',
    'skills.ai.title': 'AIツール',
    'skills.frontend.title': 'フロントエンド・フルスタック',
    'skills.langs.title': 'プログラミング言語',

    // Experience
    'exp.label': '// 職務経歴',
    'exp.title': '職務経歴',
    'exp.ntt.role': '契約バックエンドエンジニア',
    'exp.ntt.via': '（人材派遣経由）',
    'exp.ntt.period': '2025年4月 — 現在',
    'exp.ntt.badge': '在職中',
    'exp.ntt.project': '保険システム近代化プロジェクト',
    'exp.ntt.b1': '<strong>レガシー保険基幹システム</strong>を Struts 1.x / JDK 1.7 から<strong>Spring MVC / JDK 17</strong>へ移行',
    'exp.rakuten.role': 'バックエンドエンジニア',
    'exp.rakuten.period': '2021年9月 — 2025年3月',
    'exp.rakuten.project1': '会員システム & データベース移行',
    'exp.rakuten.b1': 'Javaベースの会員APIをDDD原則に基づく<strong>Kotlin/Vert.x</strong>マイクロサービスへリファクタリング',
    'exp.rakuten.b2': '<strong>Kafka CDC</strong>を用いてCouchbaseから<strong>Cassandra</strong>へのリアルタイムデータ移行を実施',
    'exp.rakuten.b3': '<strong>Gatling</strong>による<strong>3億件</strong>のパフォーマンステストを実施',
    'exp.rakuten.project2': '楽天ファッション（ECプラットフォーム）',
    'exp.rakuten.b4': '<strong>Spring Boot + RabbitMQ</strong>による注文エラー自動処理バッチシステムを構築',
    'exp.rakuten.b5': '全バックエンドプロジェクトへの<strong>Swagger (OpenAPI)</strong>仕様書の統一導入を推進',
    'exp.earlier.company': '過去の経歴',
    'exp.earlier.role': '契約エンジニア & ゲームクライアントプログラマー',
    'exp.earlier.period': '2002 — 2021年',
    'exp.earlier.b1': '<strong>契約開発（2018–2021）：</strong>モバイル決済API（Suica）、映像管理システム（NEC/C#）、ライブ配信バックエンド（PHP/Laravel）',
    'exp.earlier.b2': '<strong>ゲーム開発（2002–2018）：</strong>C++/C#/Unityで16年間、複数スタジオにてゲームプレイシステムとパフォーマンス最適化を担当',

    // Projects
    'proj.label': '// 主要プロジェクト',
    'proj.title': '制作実績',
    'proj.live': '公開中',
    'proj.pera.subtitle': '高性能日本語学習エコシステム',
    'proj.pera.desc': 'Meilisearchで数百万件のデータを高速検索するハイブリッド型マルチサービスプラットフォーム。多層AIフォールバックアーキテクチャとStripe課金を実装。',
    'proj.pera.h1': '🔍 Meilisearchで数百万件を高速検索',
    'proj.pera.h2': '🛡 多層LLMフォールバック構成',
    'proj.pera.h3': '💳 Stripeサブスクリプション統合',
    'proj.pera.h4': '🚀 GitHub Actions → Azure / RailwayへのCI/CD',
    'proj.jessie.subtitle': 'リアルタイム市場センチメントダッシュボード',
    'proj.jessie.desc': 'VIX・CNN恐怖貪欲指数・主要ETFなどのリアルタイム市場データを集約し、市場センチメントを分類・可視化するReact/Convexサーバーレスアプリ。',
    'proj.jessie.h1': '📊 VIX・恐怖貪欲指数のライブデータ',
    'proj.jessie.h2': '🔔 シナリオ変化時のメールアラート',
    'proj.jessie.h3': '⚡ サーバーサイドキャッシュで即時表示',
    'proj.jessie.h4': '🔐 Clerk認証 + 管理者ダッシュボード',

    // Contact
    'contact.label': '// お問い合わせ',
    'contact.title': 'ご連絡お待ちしております',
    'contact.desc': '現在東京在住。バックエンドエンジニアリングのポジション、技術顧問、副業プロジェクトなど幅広くご相談ください。',
    'contact.email.label': 'メール',
    'contact.phone.label': '電話番号',
    'contact.location.label': '所在地',
    'contact.location.value': '東京、日本',
    'contact.visa': 'ビザ：エンジニア/人文知識/国際業務（3年）',

    // Footer
    'footer.copy': 'バニラ HTML・CSS・JS 製 • 東京 2026',
  }
};

// ── Language Engine ──────────────────────────────────────────
const LANG_KEY = 'ygg-lang';
let currentLang = localStorage.getItem(LANG_KEY) || navigator.language.split('-')[0] || 'en';
if (!['en', 'zh', 'ja'].includes(currentLang)) currentLang = 'en';

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS['en'][key] ?? key;
}

function applyTranslations() {
  const lang = currentLang;

  // Update <html lang>
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';

  // Update <title> and meta description
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

  // Update all [data-i18n] elements (innerHTML for elements with HTML, textContent otherwise)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.dataset.i18nHtml !== undefined) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update active state on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

function setLang(lang) {
  if (!['en', 'zh', 'ja'].includes(lang)) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  // Animate transition
  document.body.style.transition = 'opacity 0.18s ease';
  document.body.style.opacity = '0';
  setTimeout(() => {
    applyTranslations();
    document.body.style.opacity = '1';
    setTimeout(() => { document.body.style.transition = ''; }, 200);
  }, 180);
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  // Wire up switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
