import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Как работает", href: "#how" },
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const ADVANTAGES = [
  {
    icon: "Percent",
    title: "Минимальная комиссия",
    desc: "Берём меньше, чем Ozon и Wildberries — вы зарабатываете больше с каждого заказа.",
  },
  {
    icon: "Link",
    title: "Прямая ссылка на магазин",
    desc: "Каждый продавец получает уникальный адрес витрины — ведите трафик из соцсетей и мессенджеров.",
  },
  {
    icon: "Truck",
    title: "Доставка по всей России",
    desc: "Почта РФ, СДЭК, курьеры — ваши покупатели получат заказ в любом городе.",
  },
  {
    icon: "ShieldCheck",
    title: "Прозрачные условия",
    desc: "Никаких скрытых платежей и штрафов «ни за что». Понятные правила с первого дня.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Поддержка на старте",
    desc: "Помогаем настроить магазин, загрузить товары и получить первые продажи.",
  },
  {
    icon: "BarChart2",
    title: "Статистика и аналитика",
    desc: "Личный кабинет с понятными отчётами по продажам, выплатам и трафику.",
  },
];

const SELLER_STEPS = [
  { num: "01", title: "Регистрируетесь", desc: "Заполните форму — это займёт 5 минут." },
  { num: "02", title: "Создаёте магазин", desc: "Загружаете товары, описания и фото." },
  { num: "03", title: "Получаете заказы", desc: "Принимаете оплату и отправляете товар." },
  { num: "04", title: "Растёте", desc: "Продвигайте ссылку на магазин и привлекайте новых покупателей." },
];

const BUYER_STEPS = [
  { num: "01", title: "Находите товар", desc: "Поиск по каталогу с удобными фильтрами." },
  { num: "02", title: "Оформляете заказ", desc: "Выбираете доставку и оплачиваете безопасно." },
  { num: "03", title: "Получаете покупку", desc: "Курьер или пункт выдачи — на ваш выбор." },
];

const TARIFFS = [
  {
    name: "Старт",
    badge: "Бесплатно",
    badgeColor: "bg-inch-orange/20 text-inch-orange",
    features: [
      "Комиссия от 3%",
      "До 100 товаров",
      "Прямая ссылка на магазин",
      "Базовая статистика",
      "Почта и чат поддержки",
    ],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Профи",
    badge: "Популярный",
    badgeColor: "bg-inch-orange text-white",
    features: [
      "Комиссия от 1.5%",
      "Неограниченно товаров",
      "Приоритетное размещение",
      "Расширенная аналитика",
      "Персональный менеджер",
    ],
    cta: "Подключить тариф",
    highlight: true,
  },
  {
    name: "Бизнес",
    badge: "Для крупных",
    badgeColor: "bg-white/10 text-white/70",
    features: [
      "Индивидуальная комиссия",
      "API-интеграция",
      "Брендированный магазин",
      "SLA-поддержка 24/7",
      "Финансовый менеджер",
    ],
    cta: "Обсудить условия",
    highlight: false,
  },
];

const REVIEWS = [
  {
    name: "Алексей Воронов",
    role: "Производитель мебели, Самара",
    avatar: "АВ",
    text: "Перешёл с Wildberries — экономлю около 40 000 рублей в месяц на комиссии. Покупатели находят мой магазин прямо из Instagram, это просто огонь.",
    stars: 5,
  },
  {
    name: "Марина Соколова",
    role: "Мастер handmade, Новосибирск",
    avatar: "МС",
    text: "Наконец-то площадка, где меня не штрафуют за каждую мелочь. Прямая ссылка на магазин — отличная идея, делюсь её везде.",
    stars: 5,
  },
  {
    name: "Дмитрий Захаров",
    role: "ИП, электроника, Казань",
    avatar: "ДЗ",
    text: "Выплаты приходят вовремя, поддержка отвечает за несколько часов. Рекомендую всем продавцам, кто устал от крупных маркетплейсов.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "Чем ИНЧ.МАРКЕТ отличается от Ozon и Wildberries?",
    a: "Мы берём минимальную комиссию, не штрафуем продавцов без причины и даём каждому уникальную ссылку на витрину — её можно продвигать самостоятельно в любых каналах.",
  },
  {
    q: "Как быстро можно начать продавать?",
    a: "Регистрация занимает 5 минут. После заполнения профиля и загрузки первых товаров вы уже можете принимать заказы — обычно это занимает один день.",
  },
  {
    q: "Как рассчитывается комиссия?",
    a: "Комиссия начисляется только с успешных продаж и зависит от выбранного тарифа. Никаких скрытых платежей за размещение, хранение или листинг.",
  },
  {
    q: "Как работает доставка?",
    a: "Мы сотрудничаем с Почтой России, СДЭК и курьерскими службами. Вы выбираете удобных партнёров, можно также подключить собственную логистику.",
  },
  {
    q: "Как защищены продавцы и покупатели?",
    a: "Оплата проходит через эскроу — деньги поступают продавцу только после подтверждения доставки. Споры решает наша служба поддержки в течение 24 часов.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"seller" | "buyer">("seller");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="inch-root">
      {/* NAV */}
      <nav className="inch-nav">
        <div className="inch-nav-inner">
          <a href="#" className="inch-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="inch-logo-inch">ИНЧ</span>
            <span className="inch-logo-dot">.</span>
            <span className="inch-logo-market">МАРКЕТ</span>
          </a>
          <ul className="inch-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button onClick={() => scrollTo(l.href)} className="inch-nav-link">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button className="inch-btn-primary inch-btn-sm hidden md:flex" onClick={() => scrollTo("#contacts")}>
            Стать продавцом
          </button>
          <button className="inch-burger md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="inch-mobile-menu">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="inch-mobile-link">
                {l.label}
              </button>
            ))}
            <button className="inch-btn-primary mt-2" onClick={() => scrollTo("#contacts")}>
              Стать продавцом
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="inch-hero">
        <div className="inch-hero-bg" />
        <div className="inch-hero-glow" />
        <div className="inch-container inch-hero-inner">
          <div className="inch-hero-text">
            <div className="inch-badge animate-fade-in">
              <Icon name="Zap" size={14} />
              <span>Альтернатива Ozon и Wildberries</span>
            </div>
            <h1 className="inch-hero-title">
              Маркетплейс<br />
              с <span className="inch-accent">минимальной</span><br />
              комиссией
            </h1>
            <p className="inch-hero-sub">
              Продавайте товары и услуги по всей России. Доставка, прямая ссылка на ваш магазин и прозрачные условия без скрытых платежей.
            </p>
            <div className="inch-hero-btns">
              <button className="inch-btn-primary inch-btn-lg" onClick={() => scrollTo("#contacts")}>
                <Icon name="Store" size={18} />
                Стать продавцом
              </button>
              <button className="inch-btn-outline inch-btn-lg" onClick={() => scrollTo("#services")}>
                <Icon name="ShoppingBag" size={18} />
                Перейти к покупкам
              </button>
            </div>
            <div className="inch-hero-stats">
              <div className="inch-stat">
                <span className="inch-stat-num">от 1.5%</span>
                <span className="inch-stat-label">комиссия</span>
              </div>
              <div className="inch-stat-divider" />
              <div className="inch-stat">
                <span className="inch-stat-num">85+</span>
                <span className="inch-stat-label">регионов</span>
              </div>
              <div className="inch-stat-divider" />
              <div className="inch-stat">
                <span className="inch-stat-num">24 ч</span>
                <span className="inch-stat-label">запуск магазина</span>
              </div>
            </div>
          </div>
          <div className="inch-hero-image">
            <div className="inch-hero-img-wrap">
              <img
                src="https://cdn.poehali.dev/projects/1389c0a4-0aa3-4f08-a8a7-75607baf89b4/files/25e491a0-3898-4558-84cf-6cfb9d58bbd5.jpg"
                alt="ИНЧ.МАРКЕТ"
                className="inch-hero-img"
              />
              <div className="inch-hero-float inch-float-1">
                <Icon name="TrendingUp" size={16} />
                <span>+40% к прибыли</span>
              </div>
              <div className="inch-hero-float inch-float-2">
                <Icon name="Package" size={16} />
                <span>Доставка по РФ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="inch-section inch-section-dark">
        <div className="inch-container">
          <div className="inch-section-head">
            <div className="inch-badge-outline">Почему мы</div>
            <h2 className="inch-section-title">Лучше классических<br /><span className="inch-accent">маркетплейсов</span></h2>
            <p className="inch-section-sub">Честные условия, которые работают на продавца, а не против него.</p>
          </div>
          <div className="inch-grid-3">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="inch-adv-card">
                <div className="inch-adv-icon">
                  <Icon name={adv.icon} size={24} />
                </div>
                <h3 className="inch-adv-title">{adv.title}</h3>
                <p className="inch-adv-desc">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="inch-section">
        <div className="inch-container">
          <div className="inch-section-head">
            <div className="inch-badge-outline">Процесс</div>
            <h2 className="inch-section-title">Как это <span className="inch-accent">работает</span></h2>
          </div>
          <div className="inch-tabs">
            <button
              className={`inch-tab ${activeTab === "seller" ? "inch-tab-active" : ""}`}
              onClick={() => setActiveTab("seller")}
            >
              <Icon name="Store" size={16} />
              Для продавцов
            </button>
            <button
              className={`inch-tab ${activeTab === "buyer" ? "inch-tab-active" : ""}`}
              onClick={() => setActiveTab("buyer")}
            >
              <Icon name="ShoppingCart" size={16} />
              Для покупателей
            </button>
          </div>
          <div className="inch-steps">
            {(activeTab === "seller" ? SELLER_STEPS : BUYER_STEPS).map((step, i) => (
              <div key={i} className="inch-step">
                <div className="inch-step-num">{step.num}</div>
                <div className="inch-step-content">
                  <h3 className="inch-step-title">{step.title}</h3>
                  <p className="inch-step-desc">{step.desc}</p>
                </div>
                {i < (activeTab === "seller" ? SELLER_STEPS : BUYER_STEPS).length - 1 && (
                  <div className="inch-step-arrow">
                    <Icon name="ArrowRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINK PROMO */}
      <section className="inch-section inch-link-promo">
        <div className="inch-container">
          <div className="inch-link-inner">
            <div className="inch-link-text">
              <div className="inch-badge">
                <Icon name="Link" size={14} />
                <span>Уникальная возможность</span>
              </div>
              <h2 className="inch-section-title" style={{ textAlign: "left", marginTop: "1rem" }}>
                Прямая ссылка<br />на <span className="inch-accent">ваш магазин</span>
              </h2>
              <p className="inch-section-sub" style={{ textAlign: "left" }}>
                Каждый продавец получает уникальный адрес витрины: <strong>inch.market/your-shop</strong>. Размещайте его в соцсетях, мессенджерах и на сайте — покупатели попадают прямо к вам.
              </p>
              <ul className="inch-link-list">
                {[
                  "Работает как самостоятельный интернет-магазин",
                  "Сохраняет весь трафик из ваших каналов",
                  "Отображается в поисковых системах",
                  "Доступен без регистрации для покупателей",
                ].map((item, i) => (
                  <li key={i} className="inch-link-item">
                    <Icon name="Check" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="inch-link-demo">
              <div className="inch-browser">
                <div className="inch-browser-bar">
                  <div className="inch-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="inch-browser-url">inch.market/<span className="inch-accent">ваш-магазин</span></div>
                </div>
                <div className="inch-browser-body">
                  <div className="inch-shop-preview">
                    <div className="inch-shop-header">
                      <div className="inch-shop-avatar">ВМ</div>
                      <div>
                        <div className="inch-shop-name">Ваш Магазин</div>
                        <div className="inch-shop-rating">★★★★★ 4.9</div>
                      </div>
                    </div>
                    <div className="inch-shop-grid">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="inch-shop-item" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / TARIFFS */}
      <section id="services" className="inch-section inch-section-dark">
        <div className="inch-container">
          <div className="inch-section-head">
            <div className="inch-badge-outline">Тарифы</div>
            <h2 className="inch-section-title">Выберите <span className="inch-accent">подходящий план</span></h2>
            <p className="inch-section-sub">Начните бесплатно и масштабируйтесь по мере роста.</p>
          </div>
          <div className="inch-grid-3">
            {TARIFFS.map((t, i) => (
              <div key={i} className={`inch-tariff-card ${t.highlight ? "inch-tariff-highlight" : ""}`}>
                <div className="inch-tariff-head">
                  <span className={`inch-tariff-badge ${t.badgeColor}`}>{t.badge}</span>
                  <h3 className="inch-tariff-name">{t.name}</h3>
                </div>
                <ul className="inch-tariff-features">
                  {t.features.map((f, j) => (
                    <li key={j} className="inch-tariff-feature">
                      <Icon name="Check" size={15} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={t.highlight ? "inch-btn-primary" : "inch-btn-ghost"}
                  onClick={() => scrollTo("#contacts")}
                >
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="inch-section inch-section-dark">
        <div className="inch-container inch-faq-wrap">
          <div className="inch-section-head">
            <div className="inch-badge-outline">FAQ</div>
            <h2 className="inch-section-title">Частые <span className="inch-accent">вопросы</span></h2>
          </div>
          <div className="inch-faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`inch-faq-item ${openFaq === i ? "inch-faq-open" : ""}`}>
                <button className="inch-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} />
                </button>
                {openFaq === i && (
                  <div className="inch-faq-a">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="inch-section inch-contacts">
        <div className="inch-container">
          <div className="inch-contacts-inner">
            <div className="inch-contacts-text">
              <div className="inch-badge">
                <Icon name="Rocket" size={14} />
                <span>Начните сегодня</span>
              </div>
              <h2 className="inch-section-title" style={{ textAlign: "left", marginTop: "1rem", color: "#fff" }}>
                Готовы начать<br /><span className="inch-accent">продавать?</span>
              </h2>
              <p className="inch-section-sub" style={{ textAlign: "left", color: "rgba(255,255,255,0.7)" }}>
                Оставьте заявку — наш менеджер свяжется в течение часа и поможет запустить магазин.
              </p>
              <div className="inch-contact-info">
                <a href="mailto:hello@inch.market" className="inch-contact-link">
                  <Icon name="Mail" size={18} />
                  hello@inch.market
                </a>
                <a href="https://t.me/inchmarket" className="inch-contact-link">
                  <Icon name="MessageCircle" size={18} />
                  @inchmarket
                </a>
              </div>
            </div>
            <form className="inch-form" onSubmit={(e) => e.preventDefault()}>
              <div className="inch-form-group">
                <label className="inch-label">Имя</label>
                <input className="inch-input" placeholder="Ваше имя" type="text" />
              </div>
              <div className="inch-form-group">
                <label className="inch-label">Телефон или email</label>
                <input className="inch-input" placeholder="+7 (___) ___-__-__ или email" type="text" />
              </div>
              <div className="inch-form-group">
                <label className="inch-label">Что продаёте?</label>
                <textarea className="inch-input inch-textarea" placeholder="Опишите ваши товары или услуги" rows={3} />
              </div>
              <button type="submit" className="inch-btn-primary inch-btn-lg" style={{ width: "100%" }}>
                <Icon name="Send" size={18} />
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="inch-footer">
        <div className="inch-container">
          <div className="inch-footer-top">
            <div className="inch-footer-brand">
              <span className="inch-logo-inch">ИНЧ</span>
              <span className="inch-logo-dot">.</span>
              <span className="inch-logo-market">МАРКЕТ</span>
              <p className="inch-footer-tagline">Продавайте больше — платите меньше</p>
            </div>
            <div className="inch-footer-links">
              <div className="inch-footer-col">
                <span className="inch-footer-col-title">Продавцам</span>
                <button onClick={() => scrollTo("#services")} className="inch-footer-link">Тарифы</button>
                <button onClick={() => scrollTo("#how")} className="inch-footer-link">Как начать</button>
                <button onClick={() => scrollTo("#faq")} className="inch-footer-link">FAQ</button>
              </div>
              <div className="inch-footer-col">
                <span className="inch-footer-col-title">Покупателям</span>
                <button onClick={() => scrollTo("#advantages")} className="inch-footer-link">Преимущества</button>
                <button onClick={() => scrollTo("#reviews")} className="inch-footer-link">Отзывы</button>
              </div>
              <div className="inch-footer-col">
                <span className="inch-footer-col-title">Контакты</span>
                <a href="mailto:hello@inch.market" className="inch-footer-link">hello@inch.market</a>
                <a href="https://t.me/inchmarket" className="inch-footer-link">Telegram</a>
              </div>
            </div>
          </div>
          <div className="inch-footer-bottom">
            <span>© 2025 ИНЧ.МАРКЕТ. Все права защищены.</span>
            <div className="inch-footer-legal">
              <button className="inch-footer-link">Оферта</button>
              <button className="inch-footer-link">Политика конфиденциальности</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}