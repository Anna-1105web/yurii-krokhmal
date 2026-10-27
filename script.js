/* =========================================================
   Yurii Krokhmal — site script
   ========================================================= */

/* ---------- CONFIG: edit these values ---------- */
document.documentElement.classList.add("js");

const CONFIG = {
  instagram: "https://www.instagram.com/yura.krokhmal/",
  telegram: "https://t.me/YURII_KLL",
  whatsapp: "https://wa.me/48538921215", // number is not shown on the page, only used for the link
  telegramLabel: "",   // e.g. "@your_username" — shown on the contact card
  whatsappLabel: "",   // e.g. "+31 6 1234 5678"
  // Form endpoint (e.g. Formspree: "https://formspree.io/f/xxxxabcd").
  // While empty, the form runs in demo mode and clearly says the message was NOT sent.
  // Where form requests go. "/api/lead" is the Vercel function in api/lead.js that forwards
  // each request to Telegram (needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID set in Vercel).
  // If it is unreachable (e.g. the page is opened as a local file), the form falls back to
  // copying the request and opening a Telegram chat with Yurii — it never pretends to send.
  formEndpoint: "/api/lead",
  privacyUrl: "",      // link to a hosted privacy policy; empty = opens the placeholder dialog
  defaultLang: "en",
};

/* ---------- Translations (English is read from the HTML itself) ---------- */
const I18N = {
  uk: {
    "case1.kpi": "заявок за перші 7 днів",
    "case2.kpi": "кліків по посиланню · 2 кандидатки в перший день",
    "case3.kpi": "нових підписників приблизно за 6 місяців",
    "cases.cpr": "Ціна за результат",
    "cases.cpc": "Ціна за клік",
    "cases.spent": "Витрачено",
    "cases.months": "Місяців співпраці",
    "privacy.text": "Форма збирає лише дані, які ви вводите: ім'я, контакт, обрану послугу та повідомлення. Вони використовуються тільки для відповіді на ваш запит, не передаються третім особам і видаляються на ваше прохання. Щоб попросити видалення, напишіть мені в Telegram або Instagram.",
    "pricing.fee": "Оплата за ведення · бюджет окремо",
    "pricing.for": "Для кого",
    "pricing.incl": "Що входить",
    "pricing.how": "Як це працює",
    "pricing.white.sub": "Звичайні ніші з мінімальними обмеженнями",
    "pricing.grey.sub": "Ніші зі суворішою модерацією та правилами",
    "pricing.black.sub": "Ніші з високим ризиком — індивідуальна оцінка",
    "pricing.white.i1": "Аналіз бізнесу",
    "pricing.white.i2": "Рекламна стратегія",
    "pricing.white.i3": "Налаштування та запуск кампаній",
    "pricing.white.i4": "Тестування креативів",
    "pricing.white.i5": "Оптимізація й аналіз результатів",
    "pricing.grey.i1": "Аналіз рекламних обмежень",
    "pricing.grey.i2": "Стратегія з урахуванням правил платформи",
    "pricing.grey.i3": "Тестування дозволених рекламних підходів",
    "pricing.grey.i4": "Оптимізація та контроль ефективності",
    "pricing.black.i1": "Індивідуальна оцінка проєкту перед запуском",
    "pricing.black.i2": "Перевірка на відповідність правилам Meta та законодавству країни",
    "form.msgPh": "Ваш бізнес, ніша та мета — кількома реченнями",
    "pricing.white.name": "Стандартні ніші",
    "pricing.grey.name": "Ніші з обмеженнями",
    "pricing.black.name": "Ніші з високим ризиком",
    "form.optWhite": "Стандартні ніші (White) — 450 € / місяць",
    "form.optGrey": "Ніші з обмеженнями (Grey) — 550 € / місяць",
    "form.optBlack": "Ніші з високим ризиком (Black) — 700 € / місяць",
    "skip": "Перейти до змісту",
    "nav.about": "Про мене", "nav.services": "Послуги", "nav.cases": "Кейси", "nav.process": "Процес", "nav.contact": "Контакти",
    "cta.discuss": "Обговорити проєкт", "cta.cases": "Дивитися кейси",
    "menu.open": "Відкрити меню", "menu.close": "Закрити меню",
    "hero.eyebrow": "Таргетолог Meta Ads · Європа",
    "hero.title": "Реклама, що перетворюється на <em>вимірюване</em> зростання бізнесу.",
    "hero.text": "Планую, запускаю й оптимізую рекламу у Facebook та Instagram для бізнесів у Європі — кожен євро бюджету відстежується, тестується і працює на результат.",
    "hero.portraitAlt": "Юрій Крохмаль у чорній сорочці та краватці сидить на стільці",
    "hero.fc1": "Ціна за результат", "hero.fcSrc": "Реальний кейс · Ads Manager", "hero.fc2": "Заявок за 7 днів", "hero.fc3": "CTR понад", "hero.panel": "Кейс рекрутингу · Амстердам", "hero.igPosts": "дописи", "hero.igFollowers": "підписники", "hero.igFollowing": "відстежує", "hero.igBio": "Реклама для бізнесів, які ростуть · Meta Ads · Європа", "hero.igBtn": "Переглянути профіль",
    "results.kicker": "01 — Докази", "results.title": "Цифри, а не обіцянки.",
    "results.lead": "Кожен показник нижче — з реальної кампанії, з підписаним джерелом. Без округлень «на око».",
    "results.m1.label": "Ліди / заявки", "results.m1.desc": "за перші 7 днів рекрутингової кампанії", "results.m1.src": "Джерело: кейс рекрутингу в Амстердамі",
    "results.m2.label": "Ціна за результат", "results.m2.desc": "найнижча ціна за відвідування профілю/сторінки (діапазон €0,04–0,06)", "results.m2.src": "Джерело: скриншот Meta Ads Manager",
    "results.m3.label": "Рекламний бюджет", "results.m3.desc": "→ тисячі цільових переходів, 280+ заявок за 7 днів", "results.m3.src": "Джерело: кейс рекрутингу в Амстердамі",
    "results.m4.desc": "Додайте підтверджений ROAS з e-commerce кампанії.", "results.m4.src": "Плейсхолдер — замініть перед публікацією",
    "cases.kicker": "02 — Кейси", "cases.title": "Реальні компанії. Реальні обмеження.",
    "cases.lead": "Малі бюджети, конкурентні ринки Європи та сувора модерація — ось як було вирішено кожне завдання.",
    "cases.real": "Підтверджено", "cases.client": "Відгук клієнта", "cases.platform": "Платформа", "cases.budget": "Бюджет", "cases.outcome": "Результат", "cases.read": "Читати кейс",
    "case1.niche": "Рекрутинг · Амстердам, NL", "case1.title": "Сотні кандидатів на роботу з мінімальним бюджетом",
    "case1.budget": "~100€", "case1.outcome": "Тисячі цільових переходів · 280+ заявок за перші 7 днів · CTR понад 6.03€ · 0,04–0,06€ за результат",
    "case2.niche": "Студія масажу · Польща", "case2.title": "Пошук персоналу в чутливій ніші — модерація з першого разу",
    "case2.budget": "€5,50 / день · витрачено €30,91", "case2.outcome": "221 клік · €0,14 за клік · 2 кандидатки в перший день",
    "case3.niche": "Ріст в Instagram", "case3.title": "1 000+ нових підписників з обмеженим бюджетом",
    "case3.outcome": "1 000+ підписників · €0,05–0,15 за результат · ~6 місяців",
    "creatives.kicker": "03 — Креативи", "creatives.title": "Реклама, що виглядає по-людськи, а не шаблонно.",
    "creatives.lead": "Короткі UGC-відео мовою аудиторії з динамічними субтитрами — щоб викликати довіру в перші три секунди.",
    "creatives.p1": "Рідна мова для кожного ринку — українська, польська, англійська",
    "creatives.p2": "Хук, офер і заклик до дії — до 30 секунд",
    "creatives.p3": "Кілька варіантів тестуються між собою, слабкі швидко вимикаються",
    "creatives.v1": "Відеокреатив · українська аудиторія", "creatives.v2": "Відеокреатив · польська аудиторія",
    "services.kicker": "05 — Послуги", "services.title": "Пакети на місяць.",
    "services.s1.title": "Налаштування реклами", "services.s1.text": "Аналіз бізнесу, структура кабінету, аудиторії, офер і перші креативи — правильний запуск з першого дня.",
    "services.s2.title": "Аудит рекламного кабінету", "services.s2.text": "Зрозумілий розбір кабінету та Instagram-профілю: що зливає бюджет, що залишити і що тестувати далі.",
    "services.s3.title": "Оптимізація кампаній", "services.s3.text": "Регулярний аналіз аудиторій, креативів і плейсментів — відключаємо те, що не працює, масштабуємо те, що працює.",
    "services.s4.title": "Ведення реклами", "services.s4.text": "Помісячне ведення з прозорою звітністю, чесними цифрами та прямим зв'язком зі мною.",
    "services.cta": "Обговорити →",
    "pricing.title": "Пакети на місяць", "pricing.lead": "Ціна — це щомісячна оплата за ведення реклами. Вона залежить від того, наскільки суворі рекламні правила у вашій ніші. Рекламний бюджет оплачується окремо, напряму Meta, — від 10€ на день.",
    "pricing.month": "/ місяць", "pricing.cta": "Обговорити пакет", "pricing.flag": "Досвід з модерацією",
    "pricing.white.desc": "Легальні товари й послуги з відносно низьким рівнем рекламних обмежень.",
    "pricing.white.l1": "Beauty: салони, манікюр, брови, вії, перукарні", "pricing.white.l2": "Одяг, аксесуари та e-commerce",
    "pricing.white.l3": "Освіта, їжа та ресторани, локальні послуги", "pricing.white.l4": "Авто, туризм, нерухомість, товари для тварин",
    "pricing.white.inc": "Входить: аналіз бізнесу, рекламна стратегія, налаштування та запуск, тестування креативів, оптимізація й аналіз результатів.",
    "pricing.grey.desc": "Ніші з підвищеними вимогами модерації, специфічними правилами або регуляторними обмеженнями.",
    "pricing.grey.l1": "Косметологія, здоров'я та wellness", "pricing.grey.l2": "БАДи та програми схуднення",
    "pricing.grey.l3": "Фінансові послуги, дейтинг, дозволені крипто-сервіси", "pricing.grey.l4": "Окремі медичні послуги; гемблінг — лише з ліцензією",
    "pricing.grey.inc": "Входить: аналіз рекламних обмежень, стратегія з урахуванням правил платформи, тестування дозволених підходів, оптимізація та контроль ефективності.",
    "pricing.black.desc": "Високоризикові напрямки, що потребують індивідуальної оцінки допустимості рекламування.",
    "pricing.black.l1": "Високоризикові фінансові та інвестиційні пропозиції", "pricing.black.l2": "Криптопроєкти з підвищеним ризиком",
    "pricing.black.l3": "Affiliate-маркетинг в обмежених вертикалях", "pricing.black.l4": "Нестандартні моделі монетизації",
    "pricing.black.inc": "Кожен проєкт попередньо оцінюється на відповідність правилам Meta та законодавству країни.",
    "about.alt1": "Юрій працює за ноутбуком за дерев'яним столом", "about.alt2": "Юрій розмовляє телефоном з клієнтом",
    "about.kicker": "01 — Про мене", "about.title": "Привіт, я Юрій.",
    "about.p1": "Мій старт у рекламі — курс, що виявився суцільною теорією, і злитий бюджет. Замість того, щоб здатися, я почав вивчати таргет з нуля: аналітику, креативи, воронки, психологію покупця. Пробував, тестував, помилявся — і щоразу ставав кращим.",
    "about.p2": "Сьогодні я допомагаю бізнесам у Європі залучати клієнтів і кандидатів, не «зливаючи» бюджет. Швидко адаптую стратегії, реагую на зміни метрик і приймаю рішення на основі даних, а не припущень.",
    "about.quote": "«Таргетолог — це не просто про рекламу. Це про систему, стратегію й мислення.»",
    "about.f1": "років у рекламі", "about.f2": "підписників в Instagram", "about.f3": "NL · PL · вся Європа",
    "about.c1": "Лідогенерація", "about.c2": "Рекрутингова реклама", "about.c3": "Тестування креативів", "about.c4": "Воронки",
    "process.kicker": "06 — Процес", "process.title": "Зрозумілий шлях від першого дзвінка до результату.",
    "process.s1.title": "Знайомство", "process.s1.text": "Говоримо про ваш бізнес, офер, цілі та бюджет. Чесно скажу, чи реклама зараз — правильний інструмент.",
    "process.s2.title": "Аналіз бізнесу та аудиторії", "process.s2.text": "Аналіз ринку й конкурентів: які оголошення збирають найбільше відгуків, хто ваш клієнт і що його мотивує.",
    "process.s3.title": "Стратегія та запуск", "process.s3.text": "Офер, креативи, аудиторії та структура кампаній — підготовлені під модерацію і запущені з прогнозом.",
    "process.s4.title": "Тести, оптимізація, звіти", "process.s4.text": "Постійно тестуємо креативи й аудиторії, слабкі прибираємо кожні кілька днів, а ви отримуєте прозорі звіти.",
    "reviews.kicker": "04 — Відгуки", "reviews.title": "Що кажуть клієнти.",
    "reviews.lead": "Реальні відгуки з Telegram, Instagram-повідомлень і коментарів. Натисніть «Оригінал», щоб побачити скриншот.",
    "reviews.aria": "Відгуки клієнтів",
    "reviews.r1": "«Працювали з Юрою близько пів року, і я дуже задоволена результатами. Навіть з невеликим бюджетом на рекламу вдалося досягти справді крутих показників — більше 1000 нових підписників. Вартість за результат була дуже приємною — від 0,05€ до 0,15€, що для мене стало показником професійного підходу й грамотної оптимізації реклами. Робота була стабільною, зрозумілою та з фокусом на результат. Однозначно рекомендую, особливо якщо хочете максимум ефекту навіть з обмеженим бюджетом.»",
    "reviews.r2": "«Особисто замовляла таргетовану рекламу у Юрія. Робота принесла свої результати — нові підписники, нові клієнти, впізнаваність та перегляди. Дуже приємно було співпрацювати. Чітко будує план, робить прогноз, стратегію та запуск. Спостерігає за просуванням і постійно на зв'язку. Розуміється у своїй роботі. Рекомендую класного таргетолога в Нідерландах!»",
    "reviews.r3": "«Я в захваті від роботи з таргетологом! Він не просто запустив рекламу, а зрозумів мою сферу, допоміг упакувати послуги і привів справжніх клієнтів. Зараз мій графік повністю заповнений, а я отримую задоволення від роботи. Тому рекомендую, не пожалкуєте.»",
    "reviews.r4": "«Працюю з Юрієм уже не перший місяць і можу сказати однозначно — це одна з найкращих співпраць у моїй практиці. Юрій детально розібрав мій акаунт, підказав, як правильно оформити профіль, і запустив рекламу так, що клієнти почали записуватись уже в перші дні. Дуже ціную постійний зв'язок, чесність у цифрах і реальні результати. Якщо ви працюєте в beauty-сфері — рекомендую на 100%.»",
    "reviews.n1": "Клієнтка", "reviews.s1": "Telegram · ~6 місяців співпраці", "reviews.s2": "Коментар в Instagram · майстриня депіляції",
    "reviews.n3": "Клієнтка", "reviews.s3": "Повідомлення в Instagram", "reviews.n4": "Beauty-майстриня", "reviews.s4": "Повідомлення в Instagram",
    "reviews.orig": "Оригінал", "reviews.prev": "Попередній відгук", "reviews.next": "Наступний відгук",
    "reviews.note": "Оригінальні відгуки українською. Емодзі прибрано для читабельності.",
    "faq.kicker": "08 — FAQ", "faq.title": "Відповіді на питання.", "faq.lead": "Не знайшли свого? Напишіть мені напряму — зазвичай відповідаю в той же день.",
    "faq.q1": "Як відбувається співпраця?", "faq.a1": "Починаємо з безкоштовного дзвінка. Я аналізую ваш бізнес, офер і поточну рекламу, потім пропоную план та обсяг робіт. Після узгодження налаштовую або беру в роботу рекламний кабінет, і ми на постійному зв'язку з регулярними звітами.",
    "faq.q2": "Який мінімальний рекламний бюджет?", "faq.a2": "Мінімальний рекламний бюджет — 10€ на день. Оптимальний бюджет залежить від ніші та мети, тому узгоджуємо його після першого дзвінка. Бюджет оплачується напряму Meta.",
    "faq.q3": "Коли чекати на результат?", "faq.a3": "Перші дані з'являються в перші дні після запуску — в одному з кейсів кандидатки написали вже в перший день. Перші тижні — це тестування. Жоден чесний спеціаліст не гарантує точних цифр наперед.",
    "faq.q4": "Що входить у послугу?", "faq.a4": "Аналіз бізнесу, рекламна стратегія, налаштування та запуск кампаній, тестування креативів, оптимізація й аналіз результатів. Для ніш з обмеженнями — ще й аналіз рекламних правил. Рекламний бюджет ви оплачуєте напряму Meta, він не входить у мою оплату.",
    "faq.q5": "Які доступи та інформацію потрібно надати?", "faq.a5": "Партнерський доступ до Meta Business Manager / рекламного кабінету (ніколи не пароль), сторінка Facebook та акаунт Instagram, сайт або лендинг, якщо є, а також ваш офер, ціни, цільова аудиторія і попередні результати.",
    "contact.kicker": "06 — Контакти", "contact.title": "Ваш рекламний бюджет може працювати краще.",
    "contact.wa": "Написати", "contact.lead": "Розкажіть про свій бізнес і мету — я відповім з першою ідеєю, як до цього підійти.",
    "form.name": "Ваше ім'я", "form.method": "Як з вами зв'язатися", "form.contact": "Ваш контакт для відповіді", "form.service": "Послуга, що цікавить",
    "form.choose": "Оберіть пакет", "form.unsure": "Ще не впевнений(-а)", "form.message": "Коротке повідомлення", "form.submit": "Надіслати заявку",
    "form.note": "Надсилаючи форму, ви погоджуєтесь, що я використаю ваші дані лише для відповіді на цей запит.",
    "footer.tag": "Таргетолог Meta Ads для бізнесів у Європі.", "footer.rights": "Усі права захищено.", "footer.privacy": "Політика конфіденційності",
    "modal.close": "Закрити",
  },
  pl: {
    "case1.kpi": "zgłoszeń w pierwszych 7 dniach",
    "case2.kpi": "kliknięć w link · 2 kandydatki pierwszego dnia",
    "case3.kpi": "nowych obserwujących w ok. 6 miesięcy",
    "cases.cpr": "Koszt wyniku",
    "cases.cpc": "Koszt kliknięcia",
    "cases.spent": "Wydano",
    "cases.months": "Miesiące współpracy",
    "privacy.text": "Formularz zbiera tylko dane, które wpisujesz: imię, kontakt, wybraną usługę i wiadomość. Służą wyłącznie do odpowiedzi na zapytanie, nie są przekazywane osobom trzecim i są usuwane na Twoją prośbę. Aby poprosić o usunięcie, napisz do mnie na Telegramie lub Instagramie.",
    "pricing.fee": "Opłata za prowadzenie · budżet osobno",
    "pricing.for": "Dla kogo",
    "pricing.incl": "Co obejmuje",
    "pricing.how": "Jak to działa",
    "pricing.white.sub": "Zwykłe nisze z niewielkimi ograniczeniami",
    "pricing.grey.sub": "Nisze z ostrzejszą moderacją i zasadami",
    "pricing.black.sub": "Nisze wysokiego ryzyka — ocena indywidualna",
    "pricing.white.i1": "Analiza biznesu",
    "pricing.white.i2": "Strategia reklamowa",
    "pricing.white.i3": "Konfiguracja i start kampanii",
    "pricing.white.i4": "Testy kreacji",
    "pricing.white.i5": "Optymalizacja i analiza wyników",
    "pricing.grey.i1": "Analiza ograniczeń reklamowych",
    "pricing.grey.i2": "Strategia zgodna z zasadami platformy",
    "pricing.grey.i3": "Testy dozwolonych podejść reklamowych",
    "pricing.grey.i4": "Optymalizacja i kontrola efektywności",
    "pricing.black.i1": "Indywidualna ocena projektu przed startem",
    "pricing.black.i2": "Sprawdzenie zgodności z zasadami Meta i prawem danego kraju",
    "form.msgPh": "Twoja firma, nisza i cel w kilku zdaniach",
    "pricing.white.name": "Nisze standardowe",
    "pricing.grey.name": "Nisze z ograniczeniami",
    "pricing.black.name": "Nisze wysokiego ryzyka",
    "form.optWhite": "Nisze standardowe (White) — 450 € / miesiąc",
    "form.optGrey": "Nisze z ograniczeniami (Grey) — 550 € / miesiąc",
    "form.optBlack": "Nisze wysokiego ryzyka (Black) — 700 € / miesiąc",
    "skip": "Przejdź do treści",
    "nav.about": "O mnie", "nav.services": "Usługi", "nav.cases": "Case studies", "nav.process": "Proces", "nav.contact": "Kontakt",
    "cta.discuss": "Omówmy projekt", "cta.cases": "Zobacz case studies",
    "menu.open": "Otwórz menu", "menu.close": "Zamknij menu",
    "hero.eyebrow": "Specjalista Meta Ads · Europa",
    "hero.title": "Reklama, która zamienia się w <em>mierzalny</em> wzrost biznesu.",
    "hero.text": "Planuję, uruchamiam i optymalizuję kampanie na Facebooku i Instagramie dla firm w całej Europie — każde euro budżetu jest mierzone, testowane i rozliczane.",
    "hero.portraitAlt": "Jurij Krochmal w czarnej koszuli i krawacie siedzi na krześle",
    "hero.fc1": "Koszt wyniku", "hero.fcSrc": "Prawdziwy case · Ads Manager", "hero.fc2": "Zgłoszeń w 7 dni", "hero.fc3": "CTR ponad", "hero.panel": "Case rekrutacji · Amsterdam", "hero.igPosts": "posty", "hero.igFollowers": "obserwujący", "hero.igFollowing": "obserwowani", "hero.igBio": "Reklamy dla firm, które rosną · Meta Ads · Europa", "hero.igBtn": "Zobacz profil",
    "results.kicker": "01 — Dowody", "results.title": "Liczby, nie obietnice.",
    "results.lead": "Każda liczba poniżej pochodzi z prawdziwej kampanii i ma podane źródło. Bez zaokrągleń „na oko”.",
    "results.m1.label": "Leady / zgłoszenia", "results.m1.desc": "w pierwszych 7 dniach kampanii rekrutacyjnej", "results.m1.src": "Źródło: case rekrutacji w Amsterdamie",
    "results.m2.label": "Koszt wyniku", "results.m2.desc": "najniższy koszt odwiedzin profilu/strony (zakres €0,04–0,06)", "results.m2.src": "Źródło: zrzut ekranu z Meta Ads Manager",
    "results.m3.label": "Budżet reklamowy", "results.m3.desc": "→ tysiące docelowych przejść, 280+ zgłoszeń w 7 dni", "results.m3.src": "Źródło: case rekrutacji w Amsterdamie",
    "results.m4.desc": "Dodaj zweryfikowany ROAS z kampanii e-commerce.", "results.m4.src": "Placeholder — zastąp przed publikacją",
    "cases.kicker": "02 — Case studies", "cases.title": "Prawdziwe kampanie. Prawdziwe ograniczenia.",
    "cases.lead": "Małe budżety, konkurencyjne rynki europejskie i surowa moderacja — tak rozwiązałem każde z tych zadań.",
    "cases.real": "Zweryfikowane", "cases.client": "Opinia klienta", "cases.platform": "Platforma", "cases.budget": "Budżet", "cases.outcome": "Wynik", "cases.read": "Czytaj case study",
    "case1.niche": "Rekrutacja · Amsterdam, NL", "case1.title": "Setki kandydatów do pracy przy minimalnym budżecie",
    "case1.budget": "~100€", "case1.outcome": "Tysiące docelowych przejść · 280+ zgłoszeń w pierwszych 7 dniach · CTR ponad 6.03€ · 0,04–0,06€ za wynik",
    "case2.niche": "Studio masażu · Polska", "case2.title": "Rekrutacja w wrażliwej niszy — moderacja za pierwszym razem",
    "case2.budget": "€5,50 / dzień · wydano €30,91", "case2.outcome": "221 kliknięć · €0,14 za kliknięcie · 2 kandydatki pierwszego dnia",
    "case3.niche": "Wzrost na Instagramie", "case3.title": "Ponad 1 000 nowych obserwujących przy ograniczonym budżecie",
    "case3.outcome": "1 000+ obserwujących · €0,05–0,15 za wynik · ~6 miesięcy",
    "creatives.kicker": "03 — Kreacje", "creatives.title": "Reklamy, które wyglądają ludzko, a nie szablonowo.",
    "creatives.lead": "Krótkie filmy w stylu UGC w języku odbiorców, z dynamicznymi napisami — by zdobyć zaufanie w pierwszych trzech sekundach.",
    "creatives.p1": "Język ojczysty dla każdego rynku — ukraiński, polski, angielski",
    "creatives.p2": "Hook, oferta i wezwanie do działania w mniej niż 30 sekund",
    "creatives.p3": "Kilka wariantów testowanych równolegle, słabe szybko wyłączane",
    "creatives.v1": "Kreacja wideo · odbiorcy ukraińscy", "creatives.v2": "Kreacja wideo · odbiorcy polscy",
    "services.kicker": "05 — Usługi", "services.title": "Pakiety miesięczne.",
    "services.s1.title": "Konfiguracja reklam", "services.s1.text": "Analiza biznesu, struktura konta, grupy odbiorców, oferta i pierwsze kreacje — poprawny start od pierwszego dnia.",
    "services.s2.title": "Audyt konta reklamowego", "services.s2.text": "Jasna analiza konta reklamowego i profilu na Instagramie: co marnuje budżet, co zostawić i co testować dalej.",
    "services.s3.title": "Optymalizacja kampanii", "services.s3.text": "Regularny przegląd grup odbiorców, kreacji i umiejscowień — wyłączamy to, co nie działa, skalujemy to, co działa.",
    "services.s4.title": "Stałe prowadzenie kampanii", "services.s4.text": "Prowadzenie miesięczne z przejrzystymi raportami, uczciwymi liczbami i bezpośrednim kontaktem ze mną.",
    "services.cta": "Omówmy to →",
    "pricing.title": "Pakiety miesięczne", "pricing.lead": "Cena to miesięczna opłata za prowadzenie reklam. Zależy od tego, jak surowe są zasady reklamowe w Twojej niszy. Budżet reklamowy płacisz osobno, bezpośrednio do Meta — od 10€ dziennie.",
    "pricing.month": "/ miesiąc", "pricing.cta": "Omów pakiet", "pricing.flag": "Doświadczenie z moderacją",
    "pricing.white.desc": "Legalne produkty i usługi o stosunkowo niskim poziomie ograniczeń reklamowych.",
    "pricing.white.l1": "Beauty: salony, paznokcie, brwi, rzęsy, fryzjerzy", "pricing.white.l2": "Odzież, akcesoria i e-commerce",
    "pricing.white.l3": "Edukacja, gastronomia, usługi lokalne", "pricing.white.l4": "Motoryzacja, turystyka, nieruchomości, zoologia",
    "pricing.white.inc": "W cenie: analiza biznesu, strategia reklamowa, konfiguracja i start kampanii, testy kreacji, optymalizacja i analiza wyników.",
    "pricing.grey.desc": "Nisze z ostrzejszą moderacją, specyficznymi zasadami reklam lub dodatkowymi ograniczeniami prawnymi.",
    "pricing.grey.l1": "Kosmetologia, zdrowie i wellness", "pricing.grey.l2": "Suplementy i programy odchudzające",
    "pricing.grey.l3": "Usługi finansowe, randki, dozwolone krypto", "pricing.grey.l4": "Wybrane usługi medyczne; hazard tylko z licencją",
    "pricing.grey.inc": "W cenie: analiza ograniczeń reklamowych, strategia zgodna z zasadami platformy, testy dozwolonych podejść, optymalizacja i kontrola efektywności.",
    "pricing.black.desc": "Branże wysokiego ryzyka, które wymagają indywidualnej oceny, czy w ogóle można je reklamować.",
    "pricing.black.l1": "Oferty finansowe i inwestycyjne wysokiego ryzyka", "pricing.black.l2": "Projekty krypto o podwyższonym ryzyku",
    "pricing.black.l3": "Marketing afiliacyjny w ograniczonych branżach", "pricing.black.l4": "Niestandardowe modele monetyzacji",
    "pricing.black.inc": "Każdy projekt jest wcześniej oceniany pod kątem zgodności z zasadami Meta i prawem danego kraju.",
    "about.alt1": "Jurij pracuje przy laptopie przy drewnianym stole", "about.alt2": "Jurij rozmawia przez telefon z klientem",
    "about.kicker": "01 — O mnie", "about.title": "Cześć, jestem Jurij.",
    "about.p1": "Mój start w reklamie to kurs pełen teorii bez praktyki — i przepalony budżet. Zamiast się poddać, nauczyłem się targetowania od zera: analityki, kreacji, lejków i psychologii kupującego. Testowałem, myliłem się i za każdym razem byłem lepszy.",
    "about.p2": "Dziś pomagam firmom w Europie pozyskiwać klientów i kandydatów bez „przepalania” budżetu. Szybko dostosowuję strategie, reaguję na zmiany metryk i podejmuję decyzje na podstawie danych, a nie przypuszczeń.",
    "about.quote": "„Targetowanie to nie tylko reklama. To system, strategia i sposób myślenia.”",
    "about.f1": "lat w reklamie płatnej", "about.f2": "obserwujących na Instagramie", "about.f3": "NL · PL · cała Europa",
    "about.c1": "Generowanie leadów", "about.c2": "Reklamy rekrutacyjne", "about.c3": "Testy kreacji", "about.c4": "Lejki sprzedażowe",
    "process.kicker": "06 — Proces", "process.title": "Jasna droga od pierwszej rozmowy do wyników.",
    "process.s1.title": "Rozmowa wstępna", "process.s1.text": "Rozmawiamy o Twojej firmie, ofercie, celach i budżecie. Szczerze powiem, czy reklama to teraz właściwe narzędzie.",
    "process.s2.title": "Analiza biznesu i odbiorców", "process.s2.text": "Analiza rynku i konkurencji: które reklamy zbierają najwięcej odpowiedzi, kim jest Twój klient i co go motywuje.",
    "process.s3.title": "Strategia i uruchomienie", "process.s3.text": "Oferta, kreacje, grupy odbiorców i struktura kampanii — przygotowane pod moderację i uruchomione z prognozą.",
    "process.s4.title": "Testy, optymalizacja, raporty", "process.s4.text": "Stale testujemy kreacje i grupy odbiorców, słabe usuwamy co kilka dni, a Ty dostajesz przejrzyste raporty.",
    "reviews.kicker": "04 — Opinie", "reviews.title": "Co mówią klienci.",
    "reviews.lead": "Prawdziwe opinie z Telegrama, wiadomości i komentarzy na Instagramie. Oryginalnie po ukraińsku — kliknij „Oryginał”, aby zobaczyć zrzut ekranu.",
    "reviews.aria": "Opinie klientów",
    "reviews.r1": "„Współpracowaliśmy z Jurą około pół roku i jestem bardzo zadowolona z wyników. Nawet przy niewielkim budżecie udało się osiągnąć naprawdę świetne rezultaty — ponad 1000 nowych obserwujących. Koszt wyniku był bardzo przyjemny — od 0,05€ do 0,15€, co pokazało mi profesjonalne podejście i umiejętną optymalizację. Stabilna, zrozumiała praca nastawiona na wynik. Zdecydowanie polecam, zwłaszcza jeśli chcesz maksymalnego efektu przy ograniczonym budżecie.”",
    "reviews.r2": "„Osobiście zamawiałam u Jurija reklamę targetowaną. Praca przyniosła efekty — nowych obserwujących, nowych klientów, rozpoznawalność i wyświetlenia. Bardzo miła współpraca. Jasno buduje plan, robi prognozę, strategię i start. Monitoruje postępy i jest stale w kontakcie. Zna się na swojej pracy. Polecam świetnego specjalistę od reklam w Holandii!”",
    "reviews.r3": "„Jestem zachwycona współpracą! Nie tylko uruchomił reklamę, ale zrozumiał moją branżę, pomógł opakować usługi i przyprowadził prawdziwych klientów. Teraz mój grafik jest całkowicie wypełniony, a praca sprawia mi przyjemność. Polecam — nie pożałujecie.”",
    "reviews.r4": "„Pracuję z Jurijem już kolejny miesiąc i mogę powiedzieć jednoznacznie — to jedna z najlepszych współprac w mojej praktyce. Szczegółowo przeanalizował moje konto, podpowiedział, jak dobrze urządzić profil, i uruchomił reklamę tak, że klientki zaczęły się zapisywać już w pierwszych dniach. Cenię stały kontakt, uczciwość w liczbach i realne wyniki. Jeśli działasz w branży beauty — polecam na 100%.”",
    "reviews.n1": "Klientka", "reviews.s1": "Telegram · ~6 miesięcy współpracy", "reviews.s2": "Komentarz na Instagramie · specjalistka depilacji",
    "reviews.n3": "Klientka", "reviews.s3": "Wiadomość na Instagramie", "reviews.n4": "Specjalistka beauty", "reviews.s4": "Wiadomość na Instagramie",
    "reviews.orig": "Oryginał", "reviews.prev": "Poprzednia opinia", "reviews.next": "Następna opinia",
    "reviews.note": "Przetłumaczone z ukraińskiego. Emoji usunięte dla czytelności.",
    "faq.kicker": "08 — FAQ", "faq.title": "Odpowiedzi na pytania.", "faq.lead": "Nie ma tu Twojego pytania? Napisz bezpośrednio — zwykle odpowiadam tego samego dnia.",
    "faq.q1": "Jak wygląda współpraca?", "faq.a1": "Zaczynamy od bezpłatnej rozmowy. Analizuję Twój biznes, ofertę i obecne reklamy, a potem proponuję plan i zakres prac. Po akceptacji konfiguruję lub przejmuję konto reklamowe i jesteśmy w stałym kontakcie z regularnymi raportami.",
    "faq.q2": "Jaki jest minimalny budżet reklamowy?", "faq.a2": "Minimalny budżet reklamowy to 10€ dziennie. Optymalny budżet zależy od niszy i celu, więc ustalamy go po pierwszej rozmowie. Budżet płacisz bezpośrednio do Meta.",
    "faq.q3": "Kiedy można spodziewać się wyników?", "faq.a3": "Pierwsze dane pojawiają się w pierwszych dniach po starcie — w jednym z case’ów kandydatki napisały już pierwszego dnia. Pierwsze tygodnie to testy. Żaden uczciwy specjalista nie gwarantuje dokładnych liczb z góry.",
    "faq.q4": "Co obejmuje usługa?", "faq.a4": "Analizę biznesu, strategię reklamową, konfigurację i uruchomienie kampanii, testy kreacji, optymalizację i analizę wyników. W niszach z ograniczeniami — także analizę zasad reklamowych. Budżet reklamowy płacisz bezpośrednio do Meta; nie jest częścią mojego wynagrodzenia.",
    "faq.q5": "Jakie dostępy i informacje muszę przekazać?", "faq.a5": "Dostęp partnerski do Meta Business Managera / konta reklamowego (nigdy hasło), stronę na Facebooku i konto na Instagramie, stronę www lub landing page, jeśli są, a także ofertę, ceny, grupę docelową i dotychczasowe wyniki.",
    "contact.kicker": "06 — Kontakt", "contact.title": "Twój budżet reklamowy może pracować lepiej.",
    "contact.wa": "Napisz", "contact.lead": "Opowiedz o swojej firmie i celu — odpowiem z pierwszym pomysłem, jak do tego podejść.",
    "form.name": "Twoje imię", "form.method": "Preferowany kontakt", "form.contact": "Twój kontakt do odpowiedzi", "form.service": "Interesująca usługa",
    "form.choose": "Wybierz pakiet", "form.unsure": "Jeszcze nie wiem", "form.message": "Krótka wiadomość", "form.submit": "Wyślij zapytanie",
    "form.note": "Wysyłając formularz, zgadzasz się, że użyję Twoich danych wyłącznie do odpowiedzi na to zapytanie.",
    "footer.tag": "Specjalista Meta Ads dla firm w Europie.", "footer.rights": "Wszelkie prawa zastrzeżone.", "footer.privacy": "Polityka prywatności",
    "modal.close": "Zamknij",
  },
};

/* Strings used only by JavaScript (all three languages) */
const UI = {
  en: {
    leadHead: "New request from the website", leadName: "Name", leadContact: "Contact", leadService: "Service",
    fallbackCopied: "Your request is copied. Open Telegram, paste it into the chat with Yurii and press Send.",
    fallbackManual: "Copy the request below, open Telegram and send it to Yurii.",
    openTelegram: "Open Telegram",
    "menu.close": "Close menu",
    errName: "Please enter your name.",
    errContact: "Please add a username, phone number or email so I can reply.",
    errEmail: "Please enter a valid email address.",
    errService: "Please choose a service.",
    errMessage: "Please write a few words (at least 10 characters).",
    sending: "Sending…",
    success: "Thank you! Your request has been sent to Yurii in Telegram. He will reply soon.",
    error: "Something went wrong and the message was not sent. Please try again or write to me on Instagram or Telegram.",
    demo: "Demo mode: this form is not connected to a backend yet, so your message was NOT sent. Please write to me on <a data-social=\"instagram\" target=\"_blank\" rel=\"noopener\">Instagram</a> or Telegram instead.",
    slide: "Slide {n} of {t}",
    review: "Review {n} of {t}",
    challenge: "Client challenge", strategy: "Strategy — what I did", platform: "Ad platform", budget: "Budget", outcome: "Verified outcome", insight: "Conclusion",
    prevSlide: "Previous slide", nextSlide: "Next slide",
  },
  uk: {
    leadHead: "Нова заявка з сайту", leadName: "Ім'я", leadContact: "Контакт", leadService: "Послуга",
    fallbackCopied: "Текст заявки скопійовано. Відкрийте Telegram, вставте його в чат з Юрієм і натисніть «Надіслати».",
    fallbackManual: "Скопіюйте заявку нижче, відкрийте Telegram і надішліть її Юрію.",
    openTelegram: "Відкрити Telegram",
    "menu.close": "Закрити меню",
    errName: "Будь ласка, вкажіть ім'я.",
    errContact: "Додайте нік, номер телефону або email, щоб я міг відповісти.",
    errEmail: "Вкажіть коректну email-адресу.",
    errService: "Будь ласка, оберіть послугу.",
    errMessage: "Напишіть кілька слів (щонайменше 10 символів).",
    sending: "Надсилаю…",
    success: "Дякую! Заявку надіслано Юрію в Telegram. Він незабаром відповість.",
    error: "Щось пішло не так, повідомлення не надіслано. Спробуйте ще раз або напишіть мені в Instagram чи Telegram.",
    demo: "Демо-режим: форма ще не підключена до сервера, тому повідомлення НЕ надіслано. Будь ласка, напишіть мені в <a data-social=\"instagram\" target=\"_blank\" rel=\"noopener\">Instagram</a> або Telegram.",
    slide: "Слайд {n} з {t}",
    review: "Відгук {n} з {t}",
    challenge: "Завдання клієнта", strategy: "Стратегія — що я зробив", platform: "Рекламна платформа", budget: "Бюджет", outcome: "Підтверджений результат", insight: "Висновок",
    prevSlide: "Попередній слайд", nextSlide: "Наступний слайд",
  },
  pl: {
    leadHead: "Nowe zapytanie ze strony", leadName: "Imię", leadContact: "Kontakt", leadService: "Usługa",
    fallbackCopied: "Treść zapytania została skopiowana. Otwórz Telegram, wklej ją w czacie z Jurijem i wyślij.",
    fallbackManual: "Skopiuj zapytanie poniżej, otwórz Telegram i wyślij je Jurijowi.",
    openTelegram: "Otwórz Telegram",
    "menu.close": "Zamknij menu",
    errName: "Podaj swoje imię.",
    errContact: "Dodaj nazwę użytkownika, numer telefonu lub e-mail, abym mógł odpowiedzieć.",
    errEmail: "Podaj poprawny adres e-mail.",
    errService: "Wybierz usługę.",
    errMessage: "Napisz kilka słów (co najmniej 10 znaków).",
    sending: "Wysyłanie…",
    success: "Dziękuję! Zapytanie trafiło do Jurija na Telegramie. Wkrótce odpowie.",
    error: "Coś poszło nie tak i wiadomość nie została wysłana. Spróbuj ponownie lub napisz do mnie na Instagramie lub Telegramie.",
    demo: "Tryb demo: formularz nie jest jeszcze podłączony do serwera, więc wiadomość NIE została wysłana. Napisz do mnie na <a data-social=\"instagram\" target=\"_blank\" rel=\"noopener\">Instagramie</a> lub Telegramie.",
    slide: "Slajd {n} z {t}",
    review: "Opinia {n} z {t}",
    challenge: "Wyzwanie klienta", strategy: "Strategia — co zrobiłem", platform: "Platforma reklamowa", budget: "Budżet", outcome: "Zweryfikowany wynik", insight: "Wniosek",
    prevSlide: "Poprzedni slajd", nextSlide: "Następny slajd",
  },
};

/* ---------- Case study content (for the "Read case study" dialog) ---------- */
const CASES = {
  case1: {
    images: [1, 2, 3, 4, 5, 6].map((n) => `assets/case-amsterdam-${n}.webp`),
    kpis: [["280+", { en: "applications in 7 days", uk: "заявок за 7 днів", pl: "zgłoszeń w 7 dni" }],
           ["€0.04–0.06", { en: "cost per result", uk: "ціна за результат", pl: "koszt wyniku" }],
           ["~100€", { en: "budget", uk: "бюджет", pl: "budżet" }],
           ["6.03€+", { en: "high CTR", uk: "високий CTR", pl: "wysoki CTR" }]],
    platform: "Facebook & Instagram Ads (Meta)",
    en: {
      niche: "Recruitment agency · Amsterdam, NL",
      title: "Hundreds of job candidates on a minimal budget",
      challenge: "Find workers without experience from Ukraine and Poland, ready to work in hotels, technical staff and cleaning. Competition is high and the cost per click in Europe keeps rising — we had to attract people cheaply but with quality.",
      steps: [
        "Analysed the market and competitors — found which job ads get the most responses.",
        "Built a simple, emotional offer: “Work in Amsterdam — accommodation provided, no experience needed, decent pay.”",
        "Launched Facebook & Instagram Ads targeting Ukrainians and Poles currently living in the EU.",
        "Tested video creatives with short text that build trust and real emotion — not a template “vacancy” ad.",
        "Optimised the campaign every 2 days, removing ineffective audiences.",
      ],
      budget: "~100€",
      outcome: "For ~100€: thousands of targeted clicks; 280+ applications from interested people in the first 7 days; high CTR over 6.03€; 0.04–0.06€ per result; hundreds of people hired.",
      insight: "We deliberately optimised for traffic instead of lead forms — it was many times cheaper. Even in competitive niches you can get cheap clicks with the right offer and audience testing.",
    },
    uk: {
      niche: "Агенція з працевлаштування · Амстердам, NL",
      title: "Сотні кандидатів на роботу з мінімальним бюджетом",
      challenge: "Знайти працівників без досвіду з України та Польщі, готових працювати в готелі, технічному персоналі та прибиранні. Конкуренція висока, а вартість кліку в Європі постійно росте — треба було залучати людей дешево, але якісно.",
      steps: [
        "Проаналізував ринок і конкурентів — виявив, які оголошення набирають найбільше відгуків.",
        "Розробив простий, емоційний офер: «Робота в Амстердамі — проживання надається, без досвіду, гідна оплата».",
        "Запустив рекламу у Facebook та Instagram на українців і поляків, які зараз перебувають у ЄС.",
        "Тестували відеокреативи з коротким текстом, що викликають довіру й реальні емоції (не шаблон «вакансія»).",
        "Оптимізували кампанію кожні 2 дні, прибираючи неефективні аудиторії.",
      ],
      budget: "~100€",
      outcome: "За ~100€: тисячі цільових переходів; 280+ заявок від зацікавлених людей за перші 7 днів; високий CTR понад 6.03€; 0,04–0,06€ за результат; сотні людей залучені до роботи.",
      insight: "Ми свідомо пішли не в ліди, а в трафік — це в рази дешевше. Навіть у конкурентних нішах можна отримувати дешеві кліки, якщо грамотно подати пропозицію і тестувати різні аудиторії.",
    },
    pl: {
      niche: "Agencja pracy · Amsterdam, NL",
      title: "Setki kandydatów do pracy przy minimalnym budżecie",
      challenge: "Znaleźć pracowników bez doświadczenia z Ukrainy i Polski, gotowych pracować w hotelach, jako personel techniczny i przy sprzątaniu. Konkurencja jest duża, a koszt kliknięcia w Europie stale rośnie — trzeba było pozyskać ludzi tanio, ale jakościowo.",
      steps: [
        "Przeanalizowałem rynek i konkurencję — sprawdziłem, które ogłoszenia zbierają najwięcej odpowiedzi.",
        "Stworzyłem prostą, emocjonalną ofertę: „Praca w Amsterdamie — zakwaterowanie zapewnione, bez doświadczenia, godne wynagrodzenie”.",
        "Uruchomiłem reklamy na Facebooku i Instagramie skierowane do Ukraińców i Polaków przebywających w UE.",
        "Testowaliśmy kreacje wideo z krótkim tekstem, budujące zaufanie i prawdziwe emocje (nie szablon „oferta pracy”).",
        "Optymalizowaliśmy kampanię co 2 dni, usuwając nieskuteczne grupy odbiorców.",
      ],
      budget: "~100€",
      outcome: "Za ~100€: tysiące docelowych przejść; ponad 280 zgłoszeń od zainteresowanych w pierwszych 7 dniach; wysoki CTR ponad 6.03€; 0,04–0,06€ za wynik; setki osób zatrudnionych.",
      insight: "Celowo optymalizowaliśmy pod ruch, a nie formularze leadowe — to wielokrotnie taniej. Nawet w konkurencyjnych niszach można mieć tanie kliknięcia, jeśli dobrze podasz ofertę i testujesz różne grupy odbiorców.",
    },
  },
  case2: {
    images: [1, 2, 3, 4, 5].map((n) => `assets/case-massage-${n}.webp`),
    kpis: [["221", { en: "link clicks", uk: "клік по посиланню", pl: "kliknięć w link" }],
           ["€0.14", { en: "cost per click", uk: "ціна за клік", pl: "koszt kliknięcia" }],
           ["€30.91", { en: "total spend", uk: "витрачено", pl: "wydano" }],
           ["2", { en: "candidates on day one", uk: "кандидатки в 1-й день", pl: "kandydatki 1. dnia" }]],
    platform: "Facebook Ads (Meta)",
    en: {
      niche: "Massage studio · Poland",
      title: "Recruiting staff in a sensitive niche — approved on first review",
      challenge: "Find female employees for a massage salon via Facebook Ads, with ads correct enough to pass moderation without bans.",
      steps: [
        "Prepared an ad that respects Meta policies for a sensitive niche.",
        "Creative: a calm spa atmosphere, neutral colours and Polish copy — “Looking for an oil massage therapist · High earnings · Flexible schedule · Join our team”.",
        "Launched on a small daily budget of €5.50 and tracked responses directly with the client.",
      ],
      budget: "€5.50 per day · €30.91 spent",
      outcome: "Moderation passed on the first try; 221 link clicks at €0.14 per click; 2 candidates wrote on the very first day.",
      insight: "Even in “sensitive” niches you can get stable results by doing everything professionally: local language, clean visuals and a clear call to action.",
    },
    uk: {
      niche: "Студія масажу · Польща",
      title: "Пошук персоналу в «чутливій» ніші — модерація з першого разу",
      challenge: "Знайти працівниць у салон масажу через Facebook Ads і зробити коректну рекламу, яка пройде модерацію без банів.",
      steps: [
        "Підготував рекламу з урахуванням правил Meta для чутливої ніші.",
        "Креатив: спокійна атмосфера spa, нейтральні кольори, текст польською — «Szukamy masażystki olejkowej · Wysokie zarobki · Elastyczny grafik · Dołącz do naszego zespołu».",
        "Запустив на невеликому бюджеті €5,50 на день і відстежував відгуки разом з клієнтом.",
      ],
      budget: "€5,50 на день · витрачено €30,91",
      outcome: "Модерація пройдена з першого разу; 221 клік по посиланню по €0,14; уже в перший день написали 2 кандидатки.",
      insight: "Навіть у «чутливих» нішах можна отримати стабільний результат, якщо зробити все професійно: локальна мова, чистий візуал і чіткий CTA.",
    },
    pl: {
      niche: "Studio masażu · Polska",
      title: "Rekrutacja w „wrażliwej” niszy — moderacja za pierwszym razem",
      challenge: "Znaleźć pracownice do salonu masażu przez Facebook Ads i przygotować poprawną reklamę, która przejdzie moderację bez blokad.",
      steps: [
        "Przygotowałem reklamę zgodną z zasadami Meta dla wrażliwej niszy.",
        "Kreacja: spokojna atmosfera spa, neutralne kolory i tekst po polsku — „Szukamy masażystki olejkowej · Wysokie zarobki · Elastyczny grafik · Dołącz do naszego zespołu”.",
        "Start z małym budżetem €5,50 dziennie i śledzenie odpowiedzi razem z klientem.",
      ],
      budget: "€5,50 dziennie · wydano €30,91",
      outcome: "Moderacja przeszła za pierwszym razem; 221 kliknięć w link po €0,14; już pierwszego dnia napisały 2 kandydatki.",
      insight: "Nawet w „wrażliwych” niszach można osiągnąć stabilny wynik, jeśli wszystko zrobi się profesjonalnie: lokalny język, czysta grafika i jasne CTA.",
    },
  },
  case3: {
    images: ["assets/review-1.webp"],
    kpis: [["1,000+", { en: "new followers", uk: "нових підписників", pl: "nowych obserwujących" }],
           ["€0.05–0.15", { en: "cost per result", uk: "ціна за результат", pl: "koszt wyniku" }],
           ["~6", { en: "months of cooperation", uk: "місяців співпраці", pl: "miesięcy współpracy" }]],
    en: {
      niche: "Instagram growth · client review",
      outcomeLabel: "Result, as reported by the client",
      title: "1,000+ new followers on a limited budget",
      outcome: "In the client's own words: over 1,000 new followers at €0.05–0.15 per result during about six months of cooperation, with stable, results-focused work.",
      insight: "The figures come from the client's review (screenshot on the right), not from an Ads Manager export.",
    },
    uk: {
      niche: "Ріст в Instagram · відгук клієнта",
      outcomeLabel: "Результат зі слів клієнтки",
      title: "1 000+ нових підписників з обмеженим бюджетом",
      outcome: "Словами клієнтки: понад 1 000 нових підписників по €0,05–0,15 за результат приблизно за пів року співпраці — стабільна робота з фокусом на результат.",
      insight: "Цифри взято з відгуку клієнтки (скриншот праворуч), а не з вивантаження Ads Manager.",
    },
    pl: {
      niche: "Wzrost na Instagramie · opinia klienta",
      outcomeLabel: "Wynik według klientki",
      title: "Ponad 1 000 nowych obserwujących przy ograniczonym budżecie",
      outcome: "Słowami klientki: ponad 1 000 nowych obserwujących po €0,05–0,15 za wynik w ciągu około pół roku współpracy — stabilna praca nastawiona na wynik.",
      insight: "Liczby pochodzą z opinii klientki (zrzut ekranu obok), a nie z eksportu z Ads Manager.",
    },
  },
};

/* =========================================================
   Helpers
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const storage = {
  get(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } },
};

let currentLang = "en";
const t = (key) => (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key;

/* =========================================================
   i18n
   ========================================================= */
const EN_TEXT = {};   // filled from the HTML on load
const EN_ATTR = {};

function captureEnglish() {
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in EN_TEXT)) EN_TEXT[key] = el.innerHTML;
  });
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (!(key in EN_ATTR)) EN_ATTR[key] = el.getAttribute(attr) || "";
    });
  });
}

function applyLanguage(lang) {
  if (!["en", "uk", "pl"].includes(lang)) lang = "en";
  currentLang = lang;
  const dict = lang === "en" ? null : I18N[lang];

  // Most text already contains all three languages (shown by CSS); only the rest
  // (e.g. <option> labels) is rewritten here.
  $$("[data-i18n]").forEach((el) => {
    if (el.querySelector(":scope > .i18n")) return;
    const key = el.dataset.i18n;
    const value = dict && dict[key] != null ? dict[key] : EN_TEXT[key];
    if (value != null) el.innerHTML = value;
  });
  const radio = document.getElementById(`lang-${lang}`);
  if (radio && !radio.checked) radio.checked = true;
  document.documentElement.classList.remove("l-en", "l-uk", "l-pl");
  document.documentElement.classList.add(`l-${lang}`);
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      const value = dict && dict[key] != null ? dict[key] : EN_ATTR[key];
      if (value != null) el.setAttribute(attr, value);
    });
  });

  document.documentElement.lang = lang === "uk" ? "uk" : lang;

  storage.set("yk-lang", lang);

  updateMenuLabel();
  applySocialLinks();
  if (reviewCarousel) reviewCarousel.announce();
}

function initLanguage() {
  captureEnglish();
  $$(".lang-radio").forEach((r) => r.addEventListener("change", () => { if (r.checked) applyLanguage(r.value); }));
  const saved = storage.get("yk-lang");
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const restored = ($(".lang-radio:checked") || {}).value;
  applyLanguage(fromUrl || saved || restored || CONFIG.defaultLang);
}

/* =========================================================
   Social links from CONFIG
   ========================================================= */
function applySocialLinks() {
  // The real profile links are written directly in the HTML, so they work even if this
  // script never runs. CONFIG can override them; an empty CONFIG value leaves them as they are.
  $$("[data-social]").forEach((a) => {
    const url = CONFIG[a.dataset.social];
    if (url) a.href = url;
    if (/^https?:/.test(a.getAttribute("href") || "")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
  $$("[data-social-label]").forEach((el) => {
    const label = CONFIG[`${el.dataset.socialLabel}Label`];
    if (label) el.textContent = label;
  });
}

/* =========================================================
   Header + mobile nav
   ========================================================= */
const header = $(".site-header");
const nav = $("#main-nav");
const toggle = $(".nav-toggle");

function updateMenuLabel() {
  if (!toggle) return;
  const open = toggle.getAttribute("aria-expanded") === "true";
  const dict = I18N[currentLang] || {};
  toggle.setAttribute("aria-label", open ? t("menu.close") : (dict["menu.open"] || EN_ATTR["menu.open"] || "Open menu"));
}

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
  updateMenuLabel();
}

function initNav() {
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); toggle.focus(); }
  });
  const desktopMq = window.matchMedia("(min-width: 1024px)");
  const onDesktop = (e) => { if (e.matches) setMenu(false); };
  // Safari < 14 only supports the older addListener API.
  if (desktopMq.addEventListener) desktopMq.addEventListener("change", onDesktop);
  else if (desktopMq.addListener) desktopMq.addListener(onDesktop);

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Highlight the nav item of the section in view
  const links = $$('.main-nav a[href^="#"]:not(.btn)');
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }
}

/* =========================================================
   Scroll reveal + counters
   ========================================================= */
function initReveal() {
  const items = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("landed"));
    return;
  }

  // Decide where each block comes from: the side of the screen it sits on, or from below if centred.
  const assignDirection = (el) => {
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const center = (r.left + r.right) / 2 / vw;
    const wide = r.width > vw * 0.62;
    if (el.classList.contains("section-head") || el.classList.contains("pricing-head")) { el.dataset.from = "soft"; return; }
    // On phones every card is full-width, so position alone would send all of them straight up.
    // Alternate selected cards from the left and right instead.
    if (vw < 700 && el.matches(".case-card, .price-card, .contact-form, .about-copy, .carousel3d")) {
      const group = $$(".reveal", el.parentElement).filter((s) => s.matches(".case-card, .price-card, .contact-form, .about-copy, .carousel3d"));
      el.dataset.from = group.indexOf(el) % 2 ? "right" : "left";
      return;
    }
    el.dataset.from = wide || (center > 0.42 && center < 0.58) ? "up" : center < 0.5 ? "left" : "right";
  };
  items.forEach(assignDirection);

  // Elements that enter in the same frame are staggered one after another.
  let batch = [];
  let batchTimer = null;
  const flush = () => {
    batch.sort((x, y) => {
      const a = x.getBoundingClientRect(), b = y.getBoundingClientRect();
      return Math.abs(a.top - b.top) > 40 ? a.top - b.top : a.left - b.left;
    });
    batch.forEach((el, i) => {
      el.style.setProperty("--delay", `${Math.min(i, 5) * 110}ms`);
      el.classList.add("in");
    });
    batch = [];
    batchTimer = null;
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      batch.push(entry.target);
      io.unobserve(entry.target);
    });
    if (batch.length && !batchTimer) batchTimer = requestAnimationFrame(flush);
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  items.forEach((el) => {
    io.observe(el);
    // After landing, hand the element back to its normal (hoverable) state.
    el.addEventListener("animationend", (e) => {
      if (e.animationName === "land3d" || e.animationName === "landSoft") el.classList.add("landed");
    });
  });
}

function formatCounter(el, value) {
  const decimals = Number(el.dataset.decimals || 0);
  const num = value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return `${el.dataset.prefix || ""}${num}${el.dataset.suffix || ""}`;
}

function initCounters() {
  const counters = $$(".counter");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) return; // final values already in the HTML
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatCounter(el, target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = formatCounter(el, target);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => { el.textContent = formatCounter(el, 0); io.observe(el); });
}

/* =========================================================
   3D tilt + hero parallax (fine pointers only)
   ========================================================= */
function initTilt() {
  if (prefersReducedMotion || !finePointer) return;
  $$(".tilt").forEach((card) => {
    const max = card.classList.contains("video-card") || card.classList.contains("photo-window") ? 6 : 8;
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.classList.add("is-tilting");
      card.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
      card.style.transform = `perspective(900px) translate3d(0, -6px, 18px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-tilting");
      card.style.transform = "";
    });
  });
}

function initHeroParallax() {
  // Desktop only: an extremely small tilt of the portrait toward the cursor (max ~1.5°),
  // and a few pixels of drift on the two cards. Nothing moves on touch screens.
  const stage = $("#hero-stage");
  if (!stage || prefersReducedMotion || !finePointer) return;
  const photo = $("[data-tilt=photo]", stage);
  const layers = $$("[data-depth]", stage);
  const hero = stage.closest(".hero") || stage;
  let frame = null, x = 0, y = 0;
  const apply = () => {
    frame = null;
    if (photo) {
      photo.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
      photo.style.setProperty("--tilt-x", `${(-y * 2).toFixed(2)}deg`);
    }
    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 4);
      layer.style.setProperty("--fx", `${(x * depth).toFixed(1)}px`);
      layer.style.setProperty("--fy", `${(y * depth).toFixed(1)}px`);
    });
  };
  hero.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    x = Math.max(-0.5, Math.min(0.5, (e.clientX - (r.left + r.width / 2)) / window.innerWidth));
    y = Math.max(-0.5, Math.min(0.5, (e.clientY - (r.top + r.height / 2)) / window.innerHeight));
    if (!frame) frame = requestAnimationFrame(apply);
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { x = 0; y = 0; if (!frame) frame = requestAnimationFrame(apply); });
}

/* =========================================================
   Testimonials — 3D coverflow carousel
   ========================================================= */
let reviewCarousel = null;

function initReviews() {
  const stage = $("#review-stage");
  if (!stage) return;
  const cards = $$(".review-card", stage);
  const dotsWrap = $("#review-dots");
  const live = $("#review-live");
  let index = 0;
  let timer = null;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `${i + 1}`);
    dot.addEventListener("click", () => go(i, true));
    dotsWrap.appendChild(dot);
  });
  const dots = $$("button", dotsWrap);

  function layout() {
    const n = cards.length;
    const narrow = window.innerWidth < 700;
    cards.forEach((card, i) => {
      let offset = i - index;
      if (offset > n / 2) offset -= n;
      if (offset < -n / 2) offset += n;
      const abs = Math.abs(offset);
      const spread = narrow ? 18 : 36;
      card.style.setProperty("--x", `${offset * spread}%`);
      card.style.setProperty("--z", `${-abs * (narrow ? 160 : 220)}px`);
      card.style.setProperty("--r", `${offset * (narrow ? -18 : -28)}deg`);
      card.style.setProperty("--o", abs > 1 ? "0" : abs === 1 ? (narrow ? "0.35" : "0.6") : "1");
      card.style.setProperty("--b", abs === 0 ? "1" : "0.6");
      card.style.zIndex = String(10 - abs);
      card.classList.toggle("active", offset === 0);
      card.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
      $$("button", card).forEach((b) => (b.tabIndex = offset === 0 ? 0 : -1));
    });
    dots.forEach((d, i) => d.setAttribute("aria-current", String(i === index)));
  }

  function announce() {
    live.textContent = t("review").replace("{n}", index + 1).replace("{t}", cards.length);
  }

  function go(i, user = false) {
    index = (i + cards.length) % cards.length;
    layout();
    announce();
    if (user) restart();
  }

  function restart() {
    clearInterval(timer);
    if (prefersReducedMotion) return;
    timer = setInterval(() => go(index + 1), 7000);
  }

  $("#review-prev").addEventListener("click", () => go(index - 1, true));
  $("#review-next").addEventListener("click", () => go(index + 1, true));
  cards.forEach((card, i) => card.addEventListener("click", (e) => {
    if (i !== index && !e.target.closest(".review-orig")) go(i, true);
  }));

  // Swipe / drag
  let startX = null;
  stage.addEventListener("pointerdown", (e) => { startX = e.clientX; });
  stage.addEventListener("pointerup", (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1), true);
    startX = null;
  });
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(index - 1, true);
    if (e.key === "ArrowRight") go(index + 1, true);
  });

  // Pause while hovered or focused, and when off-screen
  stage.addEventListener("mouseenter", () => clearInterval(timer));
  stage.addEventListener("mouseleave", restart);
  stage.addEventListener("focusin", () => clearInterval(timer));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? restart() : clearInterval(timer))).observe(stage);
  }
  window.addEventListener("resize", layout);

  // "Original" screenshot buttons
  $$(".review-orig").forEach((btn) => btn.addEventListener("click", () => openImage(btn.dataset.img)));

  layout();
  reviewCarousel = { announce };
}

/* =========================================================
   Dialogs: case study, image, privacy
   ========================================================= */

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  document.body.style.overflow = "hidden";
}
function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function openImage(src) {
  const dialog = $("#image-modal");
  const img = $("#image-modal-img");
  img.src = src;
  img.alt = I18N[currentLang]?.["reviews.orig"] || "Original";
  openDialog(dialog);
}

function initDialogs() {
  // Case studies open as #case-N panels (plain links, see initCaseSheets).

  $$(".modal").forEach((dialog) => {
    $$("[data-close]", dialog).forEach((b) => b.addEventListener("click", () => closeDialog(dialog)));
    dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDialog(dialog); }); // backdrop click
    dialog.addEventListener("close", () => {
      document.body.style.overflow = "";
    });
  });

  const privacy = $("#privacy-link");
  if (CONFIG.privacyUrl) {
    privacy.href = CONFIG.privacyUrl;
  } else {
    privacy.addEventListener("click", (e) => { e.preventDefault(); openDialog($("#privacy-modal")); });
  }
}

/* =========================================================
   Pre-select a service when a service/pricing CTA is clicked
   ========================================================= */
function initServiceLinks() {
  const select = $("#f-service");
  $$("[data-service]").forEach((link) => link.addEventListener("click", () => {
    select.value = link.dataset.service;
  }));
  // Placeholder hint in the "contact" field follows the chosen method
  const method = $("#f-method");
  const contact = $("#f-contact");
  const hints = { telegram: "@username", instagram: "@username", whatsapp: "+48 600 000 000", email: "name@example.com" };
  method.addEventListener("change", () => {
    contact.placeholder = hints[method.value];
    contact.type = method.value === "email" ? "email" : method.value === "whatsapp" ? "tel" : "text";
  });
}

/* =========================================================
   Contact form
   ========================================================= */
function initForm() {
  const form = $("#contact-form");
  // With the script running we validate ourselves; without it the browser's own
  // required-field checks and the plain POST to /api/lead are used.
  form.noValidate = true;
  const status = $("#form-status");
  const submit = $(".btn-submit", form);

  const setError = (name, message) => {
    const input = form.elements[name];
    const field = input.closest(".field");
    const err = $(`#f-${name}-err`);
    field.classList.toggle("invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (err) {
      err.textContent = message || "";
      input.setAttribute("aria-describedby", err.id);
    }
  };

  const validate = () => {
    const data = Object.fromEntries(new FormData(form));
    const errors = {};
    if (!data.name || data.name.trim().length < 2) errors.name = t("errName");
    if (!data.contact || data.contact.trim().length < 3) errors.contact = t("errContact");
    else if (data.method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.trim())) errors.contact = t("errEmail");
    if (!data.service) errors.service = t("errService");
    if (!data.message || data.message.trim().length < 10) errors.message = t("errMessage");
    ["name", "contact", "service", "message"].forEach((k) => setError(k, errors[k]));
    return { ok: Object.keys(errors).length === 0, data, errors };
  };

  const showStatus = (type, html) => {
    status.hidden = false;
    status.className = `form-status ${type}`;
    status.innerHTML = html;
    applySocialLinks();
  };

  ["name", "contact", "service", "message"].forEach((name) => {
    form.elements[name].addEventListener("input", () => {
      if (form.elements[name].closest(".field").classList.contains("invalid")) validate();
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.hidden = true;
    const { ok, data, errors } = validate();
    if (!ok) {
      form.elements[Object.keys(errors)[0]].focus();
      return;
    }
    if (data._gotcha) return; // honeypot filled — likely a bot

    submit.classList.add("loading");
    const label = $("span[data-i18n]", submit);
    const original = label.innerHTML;
    label.textContent = t("sending");

    const select = form.elements.service;
    const serviceLabel = select.options[select.selectedIndex].text;
    const leadText = [
      t("leadHead"),
      `${t("leadName")}: ${data.name.trim()}`,
      `${t("leadContact")}: ${data.method} — ${data.contact.trim()}`,
      `${t("leadService")}: ${serviceLabel}`,
      "",
      data.message.trim(),
    ].join("\n");
    // Copy right away, while the click still counts as a user action (needed for the fallback).
    let copied = false;
    const copyPromise = navigator.clipboard && window.isSecureContext !== false
      ? navigator.clipboard.writeText(leadText).then(() => { copied = true; }).catch(() => {})
      : Promise.resolve();

    try {
      if (!CONFIG.formEndpoint || location.protocol === "file:") throw new Error("no-endpoint");
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, service: serviceLabel, language: currentLang, page: location.href }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showStatus("success", t("success"));
      form.reset();
    } catch (err) {
      await copyPromise;
      const tg = CONFIG.telegram || "https://t.me/YURII_KLL";
      showStatus("demo", `${copied ? t("fallbackCopied") : t("fallbackManual")} <a class="btn btn-primary btn-sm status-btn" href="${tg}" target="_blank" rel="noopener noreferrer">${t("openTelegram")}</a>${copied ? "" : `<textarea class="lead-copy" readonly rows="5">${leadText.replace(/</g, "&lt;")}</textarea>`}`);
    } finally {
      submit.classList.remove("loading");
      label.innerHTML = original;
    }
  });
}

/* =========================================================
   Boot
   ========================================================= */
function initFloatingTelegram() {
  // Hide the floating Telegram button over the contact section and footer, where it would
  // cover links and the same Telegram link is already on screen.
  const btn = $(".float-tg");
  if (!btn || !("IntersectionObserver" in window)) return;
  const targets = [$("#contact"), $(".site-footer")].filter(Boolean);
  const visible = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    btn.classList.toggle("is-hidden", visible.size > 0);
  }, { threshold: 0.05 });
  targets.forEach((t) => io.observe(t));
}

/* =========================================================
   Tile assembly — the real image (video poster or photo) is cut into
   tiles that fly in through 3D space and lock together. When finished,
   the tile layer is removed so the real element (and video controls)
   is untouched and fully interactive.
   ========================================================= */
const loadImage = (src) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.onerror = reject;
  img.src = src;
});

function assembleTarget(target, { delay = 0, small = false, fromX = 0 } = {}) {
  const media = target.querySelector("img, video");
  const src = media.tagName === "VIDEO" ? media.getAttribute("poster") : (media.currentSrc || media.src);
  const finish = () => {
    target.classList.remove("is-assembling");
    target.classList.add("is-assembled");
    target.closest(".video-card, .about-photo")?.classList.add("is-assembled");
  };
  if (!src || typeof target.animate !== "function") { finish(); return; }

  loadImage(src).then((img) => {
    const w = target.clientWidth, h = target.clientHeight;
    if (!w || !h) { finish(); return; }
    const cols = small ? 3 : 4, rows = small ? 4 : 5;
    const tw = w / cols, th = h / rows;
    // Reproduce object-fit: cover + object-position of the real element.
    const pos = (getComputedStyle(media).objectPosition || "50% 50%").split(" ").map((v) => parseFloat(v) / 100);
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const bw = img.naturalWidth * scale, bh = img.naturalHeight * scale;
    const ox = (w - bw) * (isNaN(pos[0]) ? 0.5 : pos[0]);
    const oy = (h - bh) * (isNaN(pos[1]) ? 0.5 : pos[1]);

    const layer = document.createElement("div");
    layer.className = "tiles";
    layer.setAttribute("aria-hidden", "true");
    const spread = small ? 0.55 : 1;
    const anims = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const t = document.createElement("i");
        t.style.cssText = `left:${c * tw}px;top:${r * th}px;width:${Math.ceil(tw) + 1}px;height:${Math.ceil(th) + 1}px;` +
          `background-image:url("${src}");background-size:${bw}px ${bh}px;background-position:${ox - c * tw}px ${oy - r * th}px;`;
        layer.appendChild(t);
        // Tiles come from the direction they sit in, from deeper in space, slightly turned.
        const dx = (c - (cols - 1) / 2) * tw * 0.9 * spread + (Math.random() - 0.5) * 40 * spread;
        const dy = (r - (rows - 1) / 2) * th * 0.7 * spread + 50 * spread;
        const dz = -(220 + Math.random() * 260) * spread;
        const rx = (Math.random() - 0.5) * 70 * spread, ry = (Math.random() - 0.5) * 70 * spread;
        const dist = Math.hypot(c - (cols - 1) / 2, r - (rows - 1) / 2);
        anims.push({ t, from: `translate3d(${dx}px, ${dy}px, ${dz}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(.7)`, wait: dist * 55 + Math.random() * 90 });
      }
    }
    target.appendChild(layer);

    const tileDur = small ? 780 : 950;
    let longest = 0;
    anims.forEach(({ t, from, wait }) => {
      const d = delay + wait;
      longest = Math.max(longest, d + tileDur);
      t.animate(
        [{ transform: from, opacity: 0 }, { opacity: 1, offset: 0.35 }, { transform: "translate3d(0,0,0) rotateX(0) rotateY(0) scale(1)", opacity: 1 }],
        { duration: tileDur, delay: d, easing: "cubic-bezier(.16,.84,.3,1)", fill: "both" }
      );
    });
    // The whole panel turns into place while its tiles assemble.
    target.animate(
      [{ transform: `perspective(1200px) translate3d(${fromX}px, ${small ? 18 : 24}px, -40px) rotateX(${small ? 10 : 16}deg) rotateY(${(small ? -8 : -14) * (fromX > 0 ? -1 : 1)}deg) scale(.94)` },
       { transform: "perspective(1200px) translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(1)" }],
      { duration: longest - delay + 150, delay, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
    ).finished.then(() => {
      target.classList.add("is-revealing");           // real element fades in over the finished mosaic
      layer.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, easing: "ease-out", fill: "forwards" })
        .finished.then(() => {
          layer.remove();
          target.getAnimations().forEach((a) => a.cancel());
          target.classList.remove("is-revealing");
          finish();
        });
    });
  }).catch(finish);
}

function initAssemble() {
  const targets = $$("[data-assemble]");
  if (!targets.length) return;
  if (prefersReducedMotion || !("IntersectionObserver" in window) || typeof document.body.animate !== "function") {
    targets.forEach((t) => { t.classList.add("is-assembled"); t.closest(".video-card, .about-photo")?.classList.add("is-assembled"); });
    return;
  }
  const small = window.innerWidth < 700;
  targets.forEach((t) => t.classList.add("is-assembling"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      const order = Number(entry.target.dataset.assemble || 0);
      assembleTarget(entry.target, { delay: order * 380, small, fromX: Number(entry.target.dataset.fromX || 0) * (small ? 0.6 : 1) });
    });
  }, { threshold: 0.25 });
  targets.forEach((t) => io.observe(t));
}

/* About photos: rear and front panels drift at different speeds on scroll,
   and (on desktop) lean slightly toward the cursor. */
function initAboutParallax() {
  const box = $("#about-media");
  if (!box || prefersReducedMotion) return;
  const rear = $(".about-photo-a", box), front = $(".about-photo-b", box);
  const amp = window.innerWidth < 700 ? 0.5 : 1;
  let mx = 0, my = 0, ticking = false, inView = false;
  const update = () => {
    ticking = false;
    const r = box.getBoundingClientRect();
    const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight)); // -1..1
    rear.style.setProperty("--py", `${(p * 16 * amp).toFixed(1)}px`);
    front.style.setProperty("--py", `${(p * -30 * amp).toFixed(1)}px`);
    rear.style.setProperty("--mx", `${(mx * -6).toFixed(1)}px`);
    front.style.setProperty("--mx", `${(mx * 12).toFixed(1)}px`);
    rear.style.setProperty("--mry", `${(mx * 3).toFixed(2)}deg`);
    front.style.setProperty("--mry", `${(mx * 5).toFixed(2)}deg`);
    front.style.setProperty("--mrx", `${(my * -4).toFixed(2)}deg`);
  };
  const request = () => { if (inView && !ticking) { ticking = true; requestAnimationFrame(update); } };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; request(); }, { rootMargin: "100px 0px" }).observe(box);
  } else inView = true;
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  if (finePointer) {
    box.addEventListener("pointermove", (e) => {
      const r = box.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      request();
    });
    box.addEventListener("pointerleave", () => { mx = 0; my = 0; request(); });
  }
  update();
}


function initHeroInView() {
  // On phones the portrait sits below the text, so a page-load animation would be over
  // before anyone sees it. Start the portrait/card entrance when it enters the viewport.
  const stage = $("#hero-stage");
  if (!stage) return;
  const go = () => stage.classList.add("is-in");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) { go(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { go(); io.disconnect(); }
  }, { threshold: 0.18 });
  io.observe(stage);
}

function initCaseSheets() {
  // The panels work as plain #case-N links without JavaScript. Here we only add comforts:
  // stop the page behind from scrolling, Esc to close, focus handling and slide arrows.
  const sheets = $$(".case-sheet");
  if (!sheets.length) return;
  let lastTrigger = null;
  let keepY = null; // page position when the panel was opened; the page behind must not move
  const current = () => sheets.find((s) => `#${s.id}` === location.hash) || null;
  const sync = () => {
    const open = current();
    document.documentElement.classList.toggle("sheet-open", !!open);
    if (open && keepY != null) {
      const y = keepY;
      keepY = null;
      window.scrollTo({ top: y, behavior: "instant" });
      requestAnimationFrame(() => { if (Math.abs(window.scrollY - y) > 1) window.scrollTo({ top: y, behavior: "instant" }); });
    }
    if (open) {
      const inner = $(".sheet-inner", open);
      inner.setAttribute("tabindex", "-1");
      inner.focus({ preventScroll: true });
    } else if (lastTrigger) {
      lastTrigger.focus({ preventScroll: true });
      lastTrigger = null;
    }
  };
  $$(".case-open").forEach((a) => a.addEventListener("click", () => { lastTrigger = a; keepY = window.scrollY; }));
  window.addEventListener("hashchange", sync);
  document.addEventListener("keydown", (e) => {
    const open = current();
    if (e.key === "Escape" && open) location.hash = $(".sheet-close", open).getAttribute("href");
  });
  $$("[data-strip]").forEach((btn) => btn.addEventListener("click", () => {
    const strip = $(".sheet-strip", btn.closest(".sheet-gallery"));
    strip.scrollBy({ left: Number(btn.dataset.strip) * strip.clientWidth, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }));
  sync();
}

function boot() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Each feature starts on its own, so an error in one (e.g. an unsupported API on an
  // older phone) cannot stop the language switcher, menu or buttons from working.
  [initLanguage, initHeroInView, initNav, initReviews, initReveal, initCounters, initTilt, initHeroParallax,
   initDialogs, initCaseSheets, initServiceLinks, initForm, initFloatingTelegram, initAssemble, initAboutParallax].forEach((fn) => {
    try { fn(); } catch (err) { console.warn(`[site] ${fn.name} failed:`, err); }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();

