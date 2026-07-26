/* ============================================
   i18n — Translations for EN / ZH / JA
   ============================================ */

const TRANSLATIONS = {
  en: {
    // Meta
    'meta.title': 'Yuan Genggeng — Senior Backend Engineer',
    'meta.desc': 'Senior Backend Engineer with 6+ years in distributed systems, specializing in the Spring Ecosystem. Based in Tokyo, Japan.',

    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for opportunities',
    'hero.title': 'Senior Backend Engineer',
    'hero.sub': '6+ yrs distributed systems · Spring Ecosystem · Tokyo',
    'hero.diff.h1': '@@ insurance core — NTT DATA @@',
    'hero.diff.h2': '@@ membership DB — Rakuten @@',
    'hero.cta.primary': 'View Experience',
    'hero.cta.ghost': 'Get In Touch',
    'hero.scroll': 'Scroll',

    // About
    'about.label': '// about me',
    'about.title': 'Who I Am',
    'about.lead': 'Senior Backend Engineer with <strong>6+ years</strong> of specialized experience in large-scale distributed systems, backed by a <strong>20-year foundation</strong> in software development.',
    'about.p1': 'Strong expertise in the <strong>Spring Ecosystem</strong> (Spring Boot, Spring MVC, Spring Data) and cloud-native backends. Experienced in <strong>Legacy Modernization</strong> — migrating legacy enterprise applications to modern Spring frameworks — and high-concurrency database migrations.',
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
    'skills.spring.title': 'Spring Ecosystem',
    'skills.backend.title': 'Backend Development',
    'skills.search.title': 'Search & Data',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.ai.title': 'AI Tools',
    'skills.frontend.title': 'Frontend & Full-Stack',

    // Experience
    'exp.label': '// work history',
    'exp.title': 'Professional Experience',
    'exp.ntt.role': 'Contract Backend Engineer',
    'exp.ntt.period': 'Apr 2025 — Present',
    'exp.ntt.badge': 'Current',
    'exp.ntt.project': 'Insurance System Modernization (Struts → Spring)',
    'exp.ntt.b1': 'Modernizing a <strong>core insurance application</strong> from TERASOLUNA 2.2.0 (Struts 1.x) / JDK 1.7 to <strong>TERASOLUNA 5.x (Spring MVC) / JDK 17</strong>',
    'exp.ntt.b2': '<strong>Phase 1:</strong> Refactored legacy <strong>JSP</strong> templates and intra-mart custom tags to improve front-end usability',
    'exp.ntt.b3': '<strong>Phase 2:</strong> Refactored business logic into clean, decoupled, testable <strong>Spring-managed beans</strong> using Dependency Injection',
    'exp.rakuten.role': 'Contract Backend Engineer',
    'exp.rakuten.period': 'Sep 2021 — Mar 2025',
    'exp.rakuten.project1': 'Membership System & Database Migration',
    'exp.rakuten.m1': 'Ran a high-concurrency <strong>PoC</strong> on Couchbase, generating <strong>300 million</strong> mock membership records for benchmarking',
    'exp.rakuten.m2': 'Executed the migration from Couchbase to <strong>Cassandra</strong> after stress tests revealed degradation during node rebalancing',
    'exp.rakuten.m3': 'Built an async <strong>Vert.x</strong> benchmarking API server and ran distributed <strong>Gatling</strong> stress tests via GitLab CI/CD',
    'exp.rakuten.m4': 'Packaged a custom <strong>Argon2</strong> hashing library and automated API test suites with <strong>Postman/Newman</strong> on MiniKube',
    'exp.rakuten.project2': 'Rakuten Fashion — Agency Order Management',
    'exp.rakuten.f1': 'Built <strong>Spring Boot @Scheduled</strong> batch tasks with <strong>RabbitMQ</strong> to route stalled orders back for asynchronous re-processing',
    'exp.rakuten.f2': 'Streamlined <strong>Gradle</strong> builds and API version management across microservices with <strong>JFrog Artifactory</strong>',
    'exp.rakuten.f3': 'Standardized API specs with <strong>OpenAPI (Swagger)</strong> across all backend services',
    'exp.earlier.company': 'Earlier Roles',
    'exp.earlier.role': 'Software Engineer & Game Client Programmer',
    'exp.earlier.period': '2002 — 2021',
    'exp.earlier.b1': '<strong>Techoes, Tokyo (2020–2021):</strong> Multiplayer game backend — online chat & AI pathfinding with <strong>Go, gRPC, Protobuf</strong>; live streaming platform (Vue.js, PHP/Laravel)',
    'exp.earlier.b2': '<strong>NEC, Tokyo (2018–2019):</strong> VMS integrations for the National Police Agency (<strong>C# / Milestone XProtect</strong>); Mobile Suica backend APIs & batch tasks',
    'exp.earlier.b3': '<strong>Game Dev, Shanghai (2003–2018):</strong> Client-side development in <strong>C++/C#/Unity/Unreal</strong> across studios incl. 2K Games China — combat systems, UI frameworks, performance optimization',

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
    'proj.tube.subtitle': 'Japanese Video Example-Sentence Search API',
    'proj.tube.desc': 'A developer-facing SaaS that indexes massive YouTube subtitle corpora into searchable segments — query how Japanese is actually used in real videos, with millisecond latency and quota-based billing.',
    'proj.tube.h1': '🔎 Millisecond search over subtitle segments',
    'proj.tube.h2': '🔑 API keys · atomic quota billing via Convex',
    'proj.tube.h3': '💳 Stripe subscriptions + credit packs',
    'proj.tube.h4': '🧪 15+ pytest suites · Railway + Cloudflare',
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
    'hero.name': 'Yuan<br /><span class="name-accent">Genggeng</span>',
    'footer.name': 'Yuan Genggeng',
    'footer.copy': 'Built with vanilla HTML, CSS & JS • Tokyo 2026',
  },

  zh: {
    // Meta
    'meta.title': '袁耿耿 — 高级后端工程师',
    'hero.name': '袁<span class="name-accent">耿耿</span>',
    'footer.name': '袁 耿耿',
    'meta.desc': '高级后端工程师，6年以上分布式系统经验，深耕 Spring 生态（Spring Boot/MVC/Data）及AI辅助开发，现居东京。',

    // Nav
    'nav.about': '关于我',
    'nav.skills': '技术栈',
    'nav.experience': '工作经历',
    'nav.projects': '项目案例',
    'nav.contact': '联系我',

    // Hero
    'hero.badge': '开放工作机会',
    'hero.title': '高级后端工程师',
    'hero.sub': '6年以上大规模分布式系统经验 · Spring 生态 · 东京',
    'hero.diff.h1': '@@ 保险核心系统 — NTT DATA @@',
    'hero.diff.h2': '@@ 会员数据库 — 乐天 @@',
    'hero.cta.primary': '查看工作经历',
    'hero.cta.ghost': '联系我',
    'hero.scroll': '向下滚动',

    // About
    'about.label': '// 关于我',
    'about.title': '个人简介',
    'about.lead': '高级后端工程师，在大规模分布式系统领域拥有<strong>6年以上</strong>专业经验，整体软件开发经验超过<strong>20年</strong>。',
    'about.p1': '深度掌握<strong>Spring 生态</strong>（Spring Boot、Spring MVC、Spring Data）与云原生后端开发。在遗留企业系统向现代 Spring 框架的<strong>现代化改造</strong>及高并发数据库迁移方面拥有丰富实战经验。',
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
    'skills.spring.title': 'Spring 生态',
    'skills.backend.title': '后端开发',
    'skills.search.title': '搜索与数据',
    'skills.cloud.title': '云服务与DevOps',
    'skills.ai.title': 'AI工具',
    'skills.frontend.title': '前端与全栈',

    // Experience
    'exp.label': '// 工作经历',
    'exp.title': '职业履历',
    'exp.ntt.role': '合同制后端工程师',
    'exp.ntt.period': '2025年4月 — 至今',
    'exp.ntt.badge': '在职',
    'exp.ntt.project': '保险系统现代化改造（Struts → Spring）',
    'exp.ntt.b1': '将<strong>保险核心系统</strong>从 TERASOLUNA 2.2.0 (Struts 1.x) / JDK 1.7 现代化迁移至<strong>TERASOLUNA 5.x (Spring MVC) / JDK 17</strong>',
    'exp.ntt.b2': '<strong>第一阶段：</strong>重构遗留<strong>JSP</strong>模板与 intra-mart 自定义标签，优化前端可用性',
    'exp.ntt.b3': '<strong>第二阶段：</strong>基于依赖注入将业务逻辑重构为解耦、可测试的<strong>Spring 管理 Bean</strong>',
    'exp.rakuten.role': '合同制后端工程师',
    'exp.rakuten.period': '2021年9月 — 2025年3月',
    'exp.rakuten.project1': '会员系统与数据库迁移',
    'exp.rakuten.m1': '主导 Couchbase 高并发<strong>PoC</strong>验证，生成<strong>3亿条</strong>模拟会员数据进行基准测试',
    'exp.rakuten.m2': '在压测揭示节点再平衡期间性能劣化后，执行 Couchbase 至<strong>Cassandra</strong>的数据库迁移',
    'exp.rakuten.m3': '基于异步<strong>Vert.x</strong>框架开发基准测试 API 服务，并通过 GitLab CI/CD 执行分布式<strong>Gatling</strong>压测',
    'exp.rakuten.m4': '封装自定义<strong>Argon2</strong>哈希库，并在 MiniKube 环境用<strong>Postman/Newman</strong>自动化 API 测试套件',
    'exp.rakuten.project2': '乐天时尚 — 代理订单管理系统',
    'exp.rakuten.f1': '基于<strong>Spring Boot @Scheduled</strong>与<strong>RabbitMQ</strong>构建定时批处理任务，将滞留订单重新入队异步处理',
    'exp.rakuten.f2': '梳理各微服务的<strong>Gradle</strong>构建配置与 API 版本管理，基于<strong>JFrog Artifactory</strong>解决依赖冲突',
    'exp.rakuten.f3': '在所有后端服务中统一推行<strong>OpenAPI (Swagger)</strong>接口规范',
    'exp.earlier.company': '早期经历',
    'exp.earlier.role': '软件工程师 & 游戏客户端程序员',
    'exp.earlier.period': '2002 — 2021年',
    'exp.earlier.b1': '<strong>Techoes・东京（2020–2021）：</strong>多人游戏后端——基于<strong>Go、gRPC、Protobuf</strong>的在线聊天与 AI 寻路模块；直播平台开发（Vue.js、PHP/Laravel）',
    'exp.earlier.b2': '<strong>NEC・东京（2018–2019）：</strong>警察厅视频管理系统集成（<strong>C# / Milestone XProtect</strong>）；Mobile Suica 后端 API 与批处理任务',
    'exp.earlier.b3': '<strong>游戏开发・上海（2003–2018）：</strong>C++/C#/Unity/Unreal 客户端开发，历经 2K Games China 等多家工作室——战斗系统、UI 框架与性能优化',

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
    'proj.tube.subtitle': '日语视频例句搜索 API（开发者 SaaS）',
    'proj.tube.desc': '面向开发者的商业化 SaaS：将海量 YouTube 字幕切分建立索引，通过 API 毫秒级检索日语表达在真实视频中的用法，内置配额计费与管理后台。',
    'proj.tube.h1': '🔎 字幕片段毫秒级全文检索',
    'proj.tube.h2': '🔑 API Key 鉴权 · Convex 原子扣费',
    'proj.tube.h3': '💳 Stripe 订阅 + 积分包',
    'proj.tube.h4': '🧪 15+ pytest 测试 · Railway + Cloudflare',
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
    'hero.name': '<ruby>袁<rt>えん</rt></ruby> <span class="name-accent"><ruby>耿耿<rt>こうこう</rt></ruby></span>',
    'footer.name': '袁 耿耿',
    'meta.desc': '6年以上の分散システム経験を持つシニアバックエンドエンジニア。Springエコシステム（Spring Boot/MVC/Data）を専門とし、東京在住。',

    // Nav
    'nav.about': '私について',
    'nav.skills': 'スキル',
    'nav.experience': '職務経歴',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',

    // Hero
    'hero.badge': '求職中',
    'hero.title': 'シニアバックエンドエンジニア',
    'hero.sub': '大規模分散システム 6年以上 · Springエコシステム · 東京',
    'hero.diff.h1': '@@ 保険基幹システム — NTT DATA @@',
    'hero.diff.h2': '@@ 会員DB — 楽天 @@',
    'hero.cta.primary': '職務経歴を見る',
    'hero.cta.ghost': 'お問い合わせ',
    'hero.scroll': 'スクロール',

    // About
    'about.label': '// 私について',
    'about.title': '自己紹介',
    'about.lead': '大規模分散システムに<strong>6年以上</strong>の専門経験を持つシニアバックエンドエンジニアです。ソフトウェア開発の経験は<strong>20年以上</strong>に及びます。',
    'about.p1': '<strong>Springエコシステム</strong>（Spring Boot・Spring MVC・Spring Data）とクラウドネイティブなバックエンド開発を深く習熟しています。レガシー企業システムのモダンSpringフレームワークへの<strong>刷新（レガシーモダナイゼーション）</strong>や高並行データベース移行において豊富な実績があります。',
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
    'skills.spring.title': 'Springエコシステム',
    'skills.backend.title': 'バックエンド開発',
    'skills.search.title': '検索・データ',
    'skills.cloud.title': 'クラウド・DevOps',
    'skills.ai.title': 'AIツール',
    'skills.frontend.title': 'フロントエンド・フルスタック',

    // Experience
    'exp.label': '// 職務経歴',
    'exp.title': '職務経歴',
    'exp.ntt.role': '契約バックエンドエンジニア',
    'exp.ntt.period': '2025年4月 — 現在',
    'exp.ntt.badge': '在職中',
    'exp.ntt.project': '保険システム近代化（Struts → Spring）',
    'exp.ntt.b1': '<strong>保険基幹システム</strong>を TERASOLUNA 2.2.0 (Struts 1.x) / JDK 1.7 から<strong>TERASOLUNA 5.x (Spring MVC) / JDK 17</strong>へ近代化移行',
    'exp.ntt.b2': '<strong>フェーズ1：</strong>レガシー<strong>JSP</strong>テンプレートと intra-mart カスタムタグをリファクタリングし、フロントエンドの操作性を改善',
    'exp.ntt.b3': '<strong>フェーズ2：</strong>DIを活用し、ビジネスロジックを疎結合でテスト可能な<strong>Spring管理Bean</strong>へリファクタリング',
    'exp.rakuten.role': '契約バックエンドエンジニア',
    'exp.rakuten.period': '2021年9月 — 2025年3月',
    'exp.rakuten.project1': '会員システム & データベース移行',
    'exp.rakuten.m1': 'Couchbaseの高並行<strong>PoC</strong>を実施し、ベンチマーク用に<strong>3億件</strong>のモック会員データを生成',
    'exp.rakuten.m2': '負荷試験でノードリバランス時の性能劣化が判明したため、Couchbaseから<strong>Cassandra</strong>への移行を実施',
    'exp.rakuten.m3': '非同期<strong>Vert.x</strong>ベンチマークAPIサーバーを開発し、GitLab CI/CD経由で分散<strong>Gatling</strong>負荷試験を実行',
    'exp.rakuten.m4': 'カスタム<strong>Argon2</strong>ハッシュライブラリを開発・配布し、MiniKube環境で<strong>Postman/Newman</strong>によるAPIテストを自動化',
    'exp.rakuten.project2': '楽天ファッション — 代理注文管理システム',
    'exp.rakuten.f1': '<strong>Spring Boot @Scheduled</strong>と<strong>RabbitMQ</strong>による定期バッチを構築し、滞留注文をキューへ再投入して非同期再処理',
    'exp.rakuten.f2': '各マイクロサービスの<strong>Gradle</strong>ビルド設定とAPIバージョン管理を<strong>JFrog Artifactory</strong>で整理し、依存関係の競合を解消',
    'exp.rakuten.f3': '全バックエンドサービスへの<strong>OpenAPI (Swagger)</strong>仕様書の統一導入を推進',
    'exp.earlier.company': '過去の経歴',
    'exp.earlier.role': 'ソフトウェアエンジニア & ゲームクライアントプログラマー',
    'exp.earlier.period': '2002 — 2021年',
    'exp.earlier.b1': '<strong>Techoes・東京（2020–2021）：</strong>マルチプレイヤーゲームバックエンド——<strong>Go・gRPC・Protobuf</strong>によるチャット & AI経路探索モジュール；ライブ配信プラットフォーム（Vue.js、PHP/Laravel）',
    'exp.earlier.b2': '<strong>NEC・東京（2018–2019）：</strong>警察庁向け映像管理システム統合（<strong>C# / Milestone XProtect</strong>）；モバイルSuicaバックエンドAPI & バッチ処理',
    'exp.earlier.b3': '<strong>ゲーム開発・上海（2003–2018）：</strong>2K Games China等の複数スタジオにて<strong>C++/C#/Unity/Unreal</strong>クライアント開発——戦闘システム、UIフレームワーク、パフォーマンス最適化',

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
    'proj.tube.subtitle': '日本語動画例文検索API（開発者向けSaaS）',
    'proj.tube.desc': '大量のYouTube字幕をセグメント化してインデックス構築し、実際の動画での日本語表現をミリ秒で検索できる開発者向け商用SaaS。クォータ課金・管理画面を完備。',
    'proj.tube.h1': '🔎 字幕セグメントのミリ秒全文検索',
    'proj.tube.h2': '🔑 APIキー認証 · Convexアトミック課金',
    'proj.tube.h3': '💳 Stripeサブスク + クレジットパック',
    'proj.tube.h4': '🧪 pytest 15+ · Railway + Cloudflare',
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
