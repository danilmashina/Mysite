/**
 * DANIL.DEV - Portfolio Interactive Logic
 * Modern Dark Cinema Theme & GSAP Animations
 */

// Project Data
const projectsData = {
    1: {
        title: "Сайт подолога",
        category: "web",
        skills: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        desc: "Современный адаптивный веб-сайт с анимациями для демонстрации услуг подолога и маникюра. Разработан с использованием семантического HTML, кастомных CSS-анимаций и легкого JavaScript для управления интерактивными элементами.",
        tech: "HTML, CSS, Vanilla JavaScript",
        role: "Frontend Developer / Designer",
        img: "assets/podologsite.jpg",
        demo: "https://danilmashina.github.io/Podolog/",
        subtitle: "Сайт услуг маникюра и подологии",
        badge: "Web",
        icon: "globe",
        techBlocks: [
            { icon: "code-2", name: "HTML5" },
            { icon: "file-code", name: "CSS3" },
            { icon: "play", name: "Vanilla JS" }
        ],
        features: [
            "Адаптивный дизайн",
            "Анимации ScrollTrigger",
            "Интерактивная галерея услуг"
        ]
    },
    2: {
        title: "Мобильное приложение Tastesmoke",
        category: "mobile",
        skills: ["Firebase", "Kotlin", "Swift", "RuStore", "App Store", "Xcode", "Android Studio"],
        desc: "Проект полностью спроектирован, разработан и загружен на мобильные площадки Apple App Store и RuStore. Предназначен для любителей качественных вейп-миксов и дегустации вкусов.",
        tech: "Kotlin, Android Studio, iOS Deployment",
        role: "Mobile App Developer / QA",
        img: "assets/tastesmoke.png",
        demo: "mobile-app.html",
        subtitle: "Каталог вейп-миксов и дегустации",
        badge: "App",
        icon: "smartphone",
        techBlocks: [
            { icon: "smartphone", name: "Kotlin" },
            { icon: "box", name: "Android SDK" },
            { icon: "store", name: "RuStore" }
        ],
        features: [
            "Публикация в App Store / RuStore",
            "Каталог вкусовых сочетаний",
            "Локальная база данных"
        ]
    },
    3: {
        title: "Телеграм-бот Amigurumi",
        category: "motion",
        skills: ["Python", "Telegram", "SQLite", "API"],
        desc: "Удобный и многофункциональный чат-бот в Telegram для любителей и мастериц вязания игрушек амигуруми. Помогает находить схемы вязания, сохранять полезные инструкции и общаться с сообществом.",
        tech: "Python, Telegram Bot API, JSON, SQLite",
        role: "Backend Python Developer",
        img: "assets/amigurumi.png",
        demo: "https://t.me/YourAmigurumiBot",
        subtitle: "Telegram-бот для вязания амигуруми",
        badge: "Bot",
        icon: "send",
        techBlocks: [
            { icon: "database", name: "SQLite" },
            { icon: "code", name: "Python" },
            { icon: "cpu", name: "Bot API" }
        ],
        features: [
            "Поиск схем вязания",
            "Сохранение инструкций",
            "Сообщество мастериц"
        ]
    },
    4: {
        title: "Кастомные прошивки MiuiPro",
        category: "mobile",
        skills: ["Android", "ADB", "Fastboot", "QA", "Excel", "MIUI"],
        desc: "Кастомная операционная прошивка на базе Android/MIUI для смартфонов Xiaomi. Работа в команде из 5 человек. Занимался локализацией, глубокой оптимизацией и тестированием стабильности мобильных сборок. Активно использовал ADB/Fastboot для прошивки и отладки.",
        tech: "Android OS, ADB, Fastboot, Linux Terminal, QA",
        role: "QA / ROM Maintainer",
        img: "assets/miuipro.jpg",
        demo: "https://pikabu.ru/story/pochemu_zhe_zapretili_miuipro_na_4pda_7536069",
        subtitle: "Тестирование и локализация прошивок",
        badge: "ROM",
        icon: "settings",
        techBlocks: [
            { icon: "terminal", name: "ADB & Fastboot" },
            { icon: "smartphone", name: "Android OS" },
            { icon: "check-circle", name: "QA Testing" }
        ],
        features: [
            "Тестирование стабильности",
            "Локализация интерфейса",
            "Написание Bash-скриптов"
        ]
    },
    5: {
        title: "Браузерная игра «Змейка»",
        category: "web",
        skills: ["JavaScript", "HTML5", "CSS3", "Canvas"],
        desc: "Классическая аркада в современной обертке. Реализована змейка на чистом JavaScript с плавной анимацией кадров, адаптивным управлением под мобильные экраны и локальной таблицей рекордов.",
        tech: "HTML5 Canvas, CSS3, ES6 JavaScript",
        role: "Frontend Game Developer",
        img: "assets/game-js-snake.jpg",
        demo: "https://danilmashina.github.io/game-js-snake/",
        subtitle: "Классическая браузерная аркада",
        badge: "Web",
        icon: "gamepad-2",
        techBlocks: [
            { icon: "play", name: "ES6 JS" },
            { icon: "palette", name: "Canvas API" },
            { icon: "file-code", name: "CSS3" }
        ],
        features: [
            "Плавная анимация кадров",
            "Адаптивное управление",
            "Таблица рекордов (LocalStorage)"
        ]
    },
    6: {
        title: "Расширение Chrome «Snowfall»",
        category: "motion",
        skills: ["JavaScript", "Chrome", "HTML5", "CSS3"],
        desc: "Расширение для Google Chrome, создающее атмосферу зимнего праздника. Позволяет одним кликом запустить красивый и оптимизированный снегопад на любой веб-странице с возможностью настройки интенсивности.",
        tech: "Chrome Extensions API, JavaScript, JSON Config",
        role: "Extension Developer",
        img: "assets/chrome.jpg",
        demo: "https://github.com/danilmashina/extension-Google-chrome",
        subtitle: "Расширение для создания атмосферы",
        badge: "Ext",
        icon: "chrome",
        techBlocks: [
            { icon: "chrome", name: "Chrome API" },
            { icon: "code-2", name: "JavaScript" },
            { icon: "file-code", name: "JSON Config" }
        ],
        features: [
            "Запуск снегопада кликом",
            "Настройка интенсивности",
            "Минимальное потребление ОЗУ"
        ]
    },
    7: {
        title: "Blat — Платформа обмена",
        category: "mobile",
        skills: ["React Native", "TypeScript", "FastAPI", "PostgreSQL", "Supabase", "Expo", "VS Code"],
        desc: "Платформа взаимного обмена благами с внутренней валютой БК (Блат-коины). Пользователи обмениваются билетами, подписками, услугами, вещами без прямых денежных транзакций.",
        tech: "React Native, TypeScript, Expo SDK 52, FastAPI, PostgreSQL, Supabase",
        role: "Mobile & Full-Stack Developer",
        img: "assets/Blat_обложка.png",
        demo: "blat-app.html",
        subtitle: "Платформа обмена благами с защитой сделок",
        badge: "App",
        icon: "swap-2",
        status: "В разработке",
        techBlocks: [
            { icon: "smartphone", name: "React Native" },
            { icon: "code", name: "TypeScript" },
            { icon: "cloud", name: "Supabase" }
        ],
        features: [
            "Система внутренней валюты БК с эскроу-механикой",
            "Защищённые сделки с автоподтверждением",
            "Realtime чат между пользователями",
            "Фильтрация по категориям и поиск",
            "Push-уведомления о сделках и сообщениях"
        ]
    },
    8: {
        title: "Мобильное приложение Touch Recorder",
        category: "mobile",
        skills: ["Swift", "Xcode", "App Store"],
        desc: "Опубликованное в Apple App Store iOS-приложение Touch Recorder для записи и воспроизведения касаний и жестов. Проект полностью спроектирован, разработан, протестирован и выпущен в App Store.",
        tech: "Swift, Xcode, iOS Deployment",
        role: "iOS App Developer / QA",
        img: "assets/touch-recorder-logo.png",
        demo: "touch-recorder-app.html",
        subtitle: "iOS-приложение для записи касаний",
        badge: "App",
        icon: "smartphone",
        techBlocks: [
            { icon: "smartphone", name: "Swift" },
            { icon: "box", name: "Xcode" },
            { icon: "store", name: "App Store" }
        ],
        features: [
            "Публикация в Apple App Store",
            "Запись и воспроизведение касаний"
        ]
    }
};

// Experience Data
const experienceData = {
    1: {
        title: "QA Engineer",
        company: "Аэрофлот",
        date: "с 2023 г.",
        tasks: [
            "Проведение функционального и UI-тестирования web и mobile-приложений (CrewTab)",
            "Разработка и ведение тест-кейсов, чек-листов и детальных баг-репортов",
            "Тестирование REST API, работа в Postman и анализ JSON-ответов",
            "Сбор логов с устройств, консольная отладка и мониторинг системных ошибок",
            "Менторство новых QA-специалистов компании и проведение технических интервью",
            "Сопровождение инцидентов через HelpDesk и координация с разработчиками",
            "Адаптация приложений под политики корпоративных MDM-сред (jamfPRO, Aurora MDM)"
        ],
        stack: [
            "**Языки и фреймворки**: Java, Selenium, REST API, SQL, HTML, CSS",
            "**Инструменты автоматизации**: Jenkins, Docker, GitHub Actions, ADB",
            "**Среда разработки и CI/CD**: IntelliJ IDEA, GitLab, GitHub, Android Studio",
            "**Системы трекинга и документации**: Jira, Qase, Test IT, Confluence, YouTrack",
            "**Работа с логами и отладкой**: DevTools, LogViewer, Charles Proxy, Fiddler",
            "**Работа с мобильными и MDM-средами**: TestFlight, jamfPRO, Aurora MDM",
            "**Дополнительно**: Linux, Postman, HelpDesk, Sublime Text, Figma"
        ]
    },
    2: {
        title: "Тестировщик ПО",
        company: "RS",
        date: "2023 г.",
        tasks: [
            "Проведение функционального тестирования систем доставки еды (Web & Mobile)",
            "Разработка тестовой документации (тест-планы, чек-листы, тест-кейсы)",
            "Поиск, локализация и детальное документирование дефектов ПО",
            "Взаимодействие в Agile-команде с аналитиками, UI-дизайнерами и разработчиками",
            "Ручное тестирование мобильных приложений на реальных iOS/Android-устройствах",
            "Проверка API-запросов и работа с базами данных с использованием SQL-запросов"
        ],
        stack: [
            "Android Studio",
            "DevTools",
            "Charles Proxy",
            "TestFlight",
            "TestIT",
            "Postman",
            "GitLab",
            "YouTrack",
            "Jira",
            "Yandex Tracker",
            "DBeaver MySQL",
            "Figma"
        ]
    },
    3: {
        title: "Beta-engineer",
        company: "iVi",
        date: "2019 - 2020 гг.",
        tasks: [
            "Проведение функционального и приемочного тестирования онлайн-кинотеатра",
            "Поиск и локализация ошибок воспроизведения, авторизации и подписок",
            "Ручное тестирование кроссплатформенного приложения (iOS / Web)",
            "Взаимодействие с Team Lead и разработчиками для исправления дефектов"
        ],
        stack: [
            "DevTools",
            "Readmin",
            "Charles Proxy"
        ]
    },
    4: {
        title: "Тестировщик ПО",
        company: "MiuiPro",
        date: "2017 - 2018 гг.",
        tasks: [
            "Проведение функционального тестирования мобильной операционной системы",
            "Поиск багов локализации, графического интерфейса и ядра системы",
            "Прошивка мобильных устройств на различных этапах сборки через ADB и Fastboot",
            "Работа с Android-логами и написание простых автоматизирующих Bash-скриптов"
        ],
        stack: [
            "ADB",
            "Fastboot",
            "Mi Flash",
            "TWRP Recovery",
            "Android Studio",
            "Xiaomi OS",
            "Linux Terminal",
            "Bash"
        ]
    }
};

// Audio elements for real music files
let audioPlayers = {
    fly: null,
    xxx: null
};

// Web Audio API context for notification sounds
let audioCtx = null;

function initAudioPlayers() {
    audioPlayers.fly = new Audio('assets/fly.mp3');
    audioPlayers.xxx = new Audio('assets/xxx-intro.mp3');
    
    audioPlayers.fly.loop = true;
    audioPlayers.xxx.loop = true;
    
    audioPlayers.fly.volume = 0.5;
    audioPlayers.xxx.volume = 0.5;
}

let activeSoundType = null;

// Initialize Logic
document.addEventListener("DOMContentLoaded", () => {
    // Start loading screen
    initLoadingScreen();
    
    // Initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    // Initialize audio players for music files
    initAudioPlayers();
    
    // Core initializations
    initGSAP();
    initSpotlightEffect();
    initParallaxBlobs();
    initProjectFilters();
    initSkillsHover();
    initOdometer();
    initSoundBoard();
    initContactForm();
    initProjectModal();
    initExperienceModal();
    initInteractiveCanvas();
    initThemeSwitcher();
    initTerminalModal();
    initScrollFeatures();
    initLazyLoading();
    initActiveNavigation();
    initShareModal();
    initTypewriter();
    initMobileMenu();
});

/* ==========================================================================
   GSAP INTRO & SCROLL ANIMATIONS
   ========================================================================== */
function initGSAP() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Initial page load animation: Header + Hero Card (only)
    gsap.from("#main-header", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#hero-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        clearProps: "all"
    });

    // 2. Scroll-triggered animations for other cards (staggered entering)
    const otherCards = document.querySelectorAll(".bento-card:not(#hero-card)");
    otherCards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            scale: 0.97,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all" // Clear inline styles so CSS hover transitions work
        });
    });

    // 3. Scroll-triggered animations for experience cards
    const expCards = document.querySelectorAll(".exp-card");
    expCards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            scale: 0.98,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all"
        });
    });

    // Header scroll background opacity
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* ==========================================================================
   SPOTLIGHT MOUSE HOVER EFFECT
   ========================================================================== */
function initSpotlightEffect() {
    const cards = document.querySelectorAll(".bento-card, .exp-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

/* ==========================================================================
   PARALLAX BACKGROUND BLOBS
   ========================================================================== */
function initParallaxBlobs() {
    const blob1 = document.getElementById("blob-1");
    const blob2 = document.getElementById("blob-2");
    const blob3 = document.getElementById("blob-3");
    const cursorGlow = document.getElementById("cursor-glow");
    
    document.addEventListener("mousemove", e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Show cursor glow behind cards
        cursorGlow.style.opacity = "1";
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
        
        // Smooth parallax for background blobs
        const shiftX1 = (mouseX - window.innerWidth / 2) * 0.03;
        const shiftY1 = (mouseY - window.innerHeight / 2) * 0.03;
        const shiftX2 = (mouseX - window.innerWidth / 2) * -0.02;
        const shiftY2 = (mouseY - window.innerHeight / 2) * -0.02;
        const shiftX3 = (mouseX - window.innerWidth / 2) * 0.01;
        const shiftY3 = (mouseY - window.innerHeight / 2) * -0.01;
        
        gsap.to(blob1, { x: shiftX1, y: shiftY1, duration: 2, ease: "power1.out" });
        gsap.to(blob2, { x: shiftX2, y: shiftY2, duration: 2.5, ease: "power1.out" });
        gsap.to(blob3, { x: shiftX3, y: shiftY3, duration: 3, ease: "power1.out" });
    });
    
    document.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0";
    });
}

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            // Filter projects with animation
            const targetsToHide = [];
            const targetsToShow = [];
            
            projectItems.forEach(item => {
                const category = item.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    targetsToShow.push(item);
                } else {
                    targetsToHide.push(item);
                }
            });
            
            // GSAP transition
            if (targetsToHide.length) {
                gsap.to(targetsToHide, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        targetsToHide.forEach(item => item.classList.remove("active"));
                    }
                });
            }
            
            // Show targets
            targetsToShow.forEach(item => {
                if (!item.classList.contains("active")) {
                    item.classList.add("active");
                    gsap.fromTo(item, 
                        { scale: 0.8, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.1, clearProps: "opacity,scale,transform" }
                    );
                }
            });
        });
    });
}

/* ==========================================================================
   SKILLS HOVER RELATION
   ========================================================================== */
function initSkillsHover() {
    const skillTags = document.querySelectorAll(".skill-tag");
    const projectItems = document.querySelectorAll(".project-item");
    const previewBox = document.getElementById("skill-relation-preview");
    
    skillTags.forEach(tag => {
        tag.addEventListener("mouseenter", () => {
            const skillName = tag.getAttribute("data-skill");
            const highlightColor = tag.getAttribute("data-color") || "#6366f1";
            const isLight = document.documentElement.getAttribute("data-theme") === "light";
            
            // Highlight skill tag with custom styling
            tag.style.backgroundColor = highlightColor + "1e";
            tag.style.borderColor = highlightColor;
            tag.style.color = isLight ? highlightColor : "#fff";
            tag.style.boxShadow = `0 0 15px ${highlightColor}40`;
            
            let relatedCount = 0;
            
            // Focus on projects that use this skill, dim others
            const dimOpacity = isLight ? 0.45 : 0.25;
            projectItems.forEach(item => {
                const projectId = item.getAttribute("data-id");
                const project = projectsData[projectId];
                
                if (project && project.skills.includes(skillName)) {
                    relatedCount++;
                    gsap.to(item, { opacity: 1, scale: 1.02, duration: 0.3 });
                } else {
                    gsap.to(item, { opacity: dimOpacity, scale: 0.98, duration: 0.3 });
                }
            });
            
            // Update relation text preview
            if (relatedCount > 0) {
                previewBox.textContent = `> Стек связан с ${relatedCount} проектом(ах)`;
                previewBox.style.color = highlightColor;
            } else {
                previewBox.textContent = `> Базовый навык / системное использование`;
                previewBox.style.color = "var(--text-dim)";
            }
        });
        
        tag.addEventListener("mouseleave", () => {
            // Restore styles
            tag.style.backgroundColor = "";
            tag.style.borderColor = "";
            tag.style.color = "";
            tag.style.boxShadow = "";
            
            // Restore projects
            projectItems.forEach(item => {
                gsap.to(item, { opacity: 1, scale: 1, duration: 0.3, clearProps: "opacity,scale,transform" });
            });
            
            previewBox.textContent = "";
            previewBox.style.color = "var(--text-dim)";
        });
    });

    // Highlight skills when hovering a project
    projectItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const projectId = item.getAttribute("data-id");
            const project = projectsData[projectId];
            if (!project) return;
            
            const isLight = document.documentElement.getAttribute("data-theme") === "light";
            const dimOpacity = isLight ? 0.45 : 0.25;
            
            // Dim all skill tags
            skillTags.forEach(tag => {
                gsap.to(tag, { opacity: dimOpacity, scale: 0.95, duration: 0.3 });
            });
            
            // Highlight only matching skill tags
            project.skills.forEach(skillName => {
                const matchingTag = Array.from(skillTags).find(tag => tag.getAttribute("data-skill").toLowerCase() === skillName.toLowerCase());
                if (matchingTag) {
                    const highlightColor = matchingTag.getAttribute("data-color") || "#6366f1";
                    gsap.to(matchingTag, {
                        opacity: 1,
                        scale: 1.05,
                        duration: 0.3,
                        overwrite: "auto"
                    });
                    matchingTag.style.backgroundColor = highlightColor + "1e";
                    matchingTag.style.borderColor = highlightColor;
                    matchingTag.style.color = isLight ? highlightColor : "#fff";
                    matchingTag.style.boxShadow = `0 0 15px ${highlightColor}40`;
                }
            });
            
            if (previewBox) {
                previewBox.textContent = `> Проект использует: ${project.skills.join(", ")}`;
                previewBox.style.color = "var(--color-primary)";
            }
        });
        
        item.addEventListener("mouseleave", () => {
            // Restore all skill tags styles
            skillTags.forEach(tag => {
                gsap.to(tag, { opacity: 1, scale: 1, duration: 0.3, clearProps: "opacity,scale,transform" });
                tag.style.backgroundColor = "";
                tag.style.borderColor = "";
                tag.style.color = "";
                tag.style.boxShadow = "";
            });
            
            if (previewBox) {
                previewBox.textContent = "";
                previewBox.style.color = "var(--text-dim)";
            }
        });
    });
}

/* ==========================================================================
   ODOMETER (STATS COUNTER)
   ========================================================================== */
function initOdometer() {
    const statNumbers = document.querySelectorAll(".stat-number");
    
    statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute("data-target"), 10);
        
        ScrollTrigger.create({
            trigger: "#stats",
            start: "top 85%",
            onEnter: () => {
                const countObj = { val: 0 };
                gsap.to(countObj, {
                    val: target,
                    duration: 1.8,
                    ease: "power2.out",
                    onUpdate: () => {
                        num.textContent = Math.floor(countObj.val) + "+";
                    }
                });
            }
        });
    });
}

/* ==========================================================================
   WEB AUDIO API SOUND GENERATION
   ========================================================================== */
function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

// XXX Intro - real audio file
function startXXX() {
    stopXXX();
    activeSoundType = "xxx";
    if (audioPlayers.xxx) {
        audioPlayers.xxx.currentTime = 0;
        audioPlayers.xxx.play().catch(e => console.error('Ошибка воспроизведения:', e));
    }
}

function stopXXX() {
    if (audioPlayers.xxx) {
        audioPlayers.xxx.pause();
        audioPlayers.xxx.currentTime = 0;
    }
}

// Fly (Intouchables) - real audio file
function startFly() {
    stopFly();
    activeSoundType = "fly";
    if (audioPlayers.fly) {
        audioPlayers.fly.currentTime = 0;
        audioPlayers.fly.play().catch(e => console.error('Ошибка воспроизведения:', e));
    }
}

function stopFly() {
    if (audioPlayers.fly) {
        audioPlayers.fly.pause();
        audioPlayers.fly.currentTime = 0;
    }
}

function playNotificationBeep() {
    // Initialize AudioContext if not already done
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API не поддерживается');
            return;
        }
    }
    
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.35);
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } catch(e) {
        console.log('Ошибка воспроизведения звука:', e);
    }
}

function initSoundBoard() {
    const xxxBtn = document.getElementById("xxx-sound-btn");
    const flyBtn = document.getElementById("fly-sound-btn");
    const wave = document.getElementById("sound-wave");
    const statusText = document.getElementById("music-status-text");
    const mainHeaderToggle = document.getElementById("music-toggle");
    
    const buttons = { xxx: xxxBtn, fly: flyBtn };
    
    function updateHeaderToggleState() {
        if (activeSoundType) {
            mainHeaderToggle.classList.add("active");
            mainHeaderToggle.innerHTML = `<i data-lucide="volume-2" class="volume-icon"></i>`;
        } else {
            mainHeaderToggle.classList.remove("active");
            mainHeaderToggle.innerHTML = `<i data-lucide="volume-x" class="volume-icon"></i>`;
        }
        window.lucide.createIcons();
    }
    
    function stopAllSounds() {
        stopXXX();
        stopFly();
    }
    
    function toggleAmbient(type) {
        if (activeSoundType === type) {
            stopAllSounds();
            activeSoundType = null;
            Object.values(buttons).forEach(btn => btn?.classList.remove("playing"));
            wave.classList.remove("animating");
            statusText.textContent = "Музыка выключена. Выберите трек";
        } else {
            stopAllSounds();
            activeSoundType = type;
            wave.classList.add("animating");
            
            Object.values(buttons).forEach(btn => btn?.classList.remove("playing"));
            
            const trackInfo = {
                xxx: { start: startXXX, text: "XXX Intro - XXXTentacion 🎧" },
                fly: { start: startFly, text: "Fly - Ludovico Einaudi ✈️" }
            };
            
            trackInfo[type].start();
            buttons[type]?.classList.add("playing");
            statusText.textContent = `Воспроизведение: ${trackInfo[type].text}`;
        }
        updateHeaderToggleState();
    }
    
    xxxBtn?.addEventListener("click", () => toggleAmbient("xxx"));
    flyBtn?.addEventListener("click", () => toggleAmbient("fly"));
    
    mainHeaderToggle?.addEventListener("click", () => {
        if (activeSoundType) {
            stopAllSounds();
            activeSoundType = null;
            Object.values(buttons).forEach(btn => btn?.classList.remove("playing"));
            wave.classList.remove("animating");
            statusText.textContent = "Музыка выключена. Выберите трек";
        } else {
            toggleAmbient("fly");
        }
        updateHeaderToggleState();
    });
}

/* ==========================================================================
   CONTACT FORM VALIDATION & ANIMATION
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("submit-btn");
    const successMsg = document.getElementById("form-success");
    
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function checkField(input, errorId, validator = (val) => val.trim() !== "") {
        const val = input.value;
        const group = input.parentElement;
        
        if (!validator(val)) {
            group.classList.add("invalid");
            return false;
        } else {
            group.classList.remove("invalid");
            return true;
        }
    }
    
    nameInput.addEventListener("blur", () => checkField(nameInput, "name-error"));
    emailInput.addEventListener("blur", () => checkField(emailInput, "email-error", validateEmail));
    messageInput.addEventListener("blur", () => checkField(messageInput, "message-error"));
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        
        const isNameVal = checkField(nameInput, "name-error");
        const isEmailVal = checkField(emailInput, "email-error", validateEmail);
        const isMsgVal = checkField(messageInput, "message-error");
        
        if (isNameVal && isEmailVal && isMsgVal) {
            submitBtn.classList.add("loading");
            submitBtn.disabled = true;
            submitBtn.querySelector(".btn-text").textContent = "Отправка...";
            
            // Prepare form data for Formspree
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };
            
            console.log('Отправка формы...', formData);
            
            // Send via Formspree
            fetch('https://formspree.io/f/mzdqqjzq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                console.log('Ответ сервера:', response.status, response.statusText);
                return response.json().then(data => ({ status: response.status, data }));
            })
            .then(({ status, data }) => {
                console.log('Данные ответа:', data);
                
                if (status === 200 || status === 201) {
                    playNotificationBeep();
                    
                    gsap.to(form, {
                        opacity: 0,
                        y: -10,
                        duration: 0.4,
                        onComplete: () => {
                            form.style.display = "none";
                            successMsg.style.display = "flex";
                            gsap.from(successMsg, {
                                opacity: 0,
                                scale: 0.95,
                                y: 10,
                                duration: 0.5,
                                ease: "power2.out"
                            });
                            
                            // Reset form
                            form.reset();
                        }
                    });
                } else {
                    throw new Error(data.error || 'Ошибка отправки');
                }
            })
            .catch(error => {
                console.error('Ошибка отправки формы:', error);
                
                // Fallback: open email client
                const subject = encodeURIComponent('Сообщение с сайта от ' + formData.name);
                const body = encodeURIComponent(
                    `Имя: ${formData.name}\n` +
                    `Email: ${formData.email}\n\n` +
                    `Сообщение:\n${formData.message}`
                );
                window.location.href = `mailto:goblen16@mail.ru?subject=${subject}&body=${body}`;
                
                alert('Произошла ошибка при отправке. Пожалуйста, используйте почтовый клиент или попробуйте позже.');
            })
            .finally(() => {
                // Restore button state
                submitBtn.classList.remove("loading");
                submitBtn.disabled = false;
                submitBtn.querySelector(".btn-text").textContent = "Отправить сообщение";
            });
        }
    });
}

/* ==========================================================================
   PROJECT DETAIL MODAL
   ========================================================================== */
function initProjectModal() {
    const projectItems = document.querySelectorAll(".project-item");
    const modal = document.getElementById("project-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");
    
    const mImg = document.getElementById("modal-img");
    const mTitle = document.getElementById("modal-title");
    const mDesc = document.getElementById("modal-description");
    const mDemo = document.getElementById("modal-demo-link");
    
    function openModal(projectId) {
        const proj = projectsData[projectId];
        if (!proj) return;
        
        mImg.src = proj.img;
        mImg.alt = proj.title;
        
        // Limit height for logo-style covers
        const imgContainer = document.getElementById("project-modal").querySelector(".modal-image-container");
        if (imgContainer) {
            if (proj.img.endsWith(".svg") || proj.img.includes("logoblat") || proj.img.includes("log.png")) {
                imgContainer.style.aspectRatio = "unset";
                imgContainer.style.height = "200px";
                imgContainer.style.maxHeight = "200px";
                imgContainer.style.padding = "12px 12px 0 12px";
                imgContainer.style.overflow = "hidden";
                imgContainer.style.backgroundColor = "transparent";
                imgContainer.style.borderRadius = "0";
                const img = imgContainer.querySelector("img");
                if (img) {
                    img.style.objectFit = "cover";
                    img.style.objectPosition = "center center";
                    img.style.height = "100%";
                    img.style.width = "100%";
                    img.style.borderRadius = "12px";
                }
            } else {
                imgContainer.style.aspectRatio = "";
                imgContainer.style.height = "";
                imgContainer.style.maxHeight = "";
                imgContainer.style.padding = "";
                imgContainer.style.overflow = "";
                imgContainer.style.backgroundColor = "";
                imgContainer.style.borderRadius = "";
                const img = imgContainer.querySelector("img");
                if (img) {
                    img.style.objectFit = "";
                    img.style.objectPosition = "";
                    img.style.height = "";
                    img.style.width = "";
                    img.style.borderRadius = "";
                }
            }
        }
        
        mTitle.textContent = proj.title;
        mDesc.textContent = proj.desc;
        mDemo.href = proj.demo;
        
        // Populate subtitle, badge, and icon
        const mSubtitle = document.getElementById("modal-subtitle");
        const mBadge = document.getElementById("modal-proj-badge");
        const mIcon = document.getElementById("modal-proj-icon");
        const mBtnText = document.getElementById("modal-btn-text");
        
        if (mSubtitle) mSubtitle.textContent = proj.subtitle;
        if (mBadge) mBadge.textContent = proj.badge;
        if (mIcon && window.lucide) {
            mIcon.setAttribute("data-lucide", proj.icon);
        }
        
        // Customize button text depending on project type
        if (mBtnText) {
            if (proj.badge === "Bot") {
                mBtnText.textContent = "Открыть в Telegram";
            } else if (proj.badge === "App") {
                mBtnText.textContent = "Открыть";
            } else if (proj.badge === "ROM") {
                mBtnText.textContent = "Открыть на 4PDA";
            } else if (proj.badge === "Ext") {
                mBtnText.textContent = "Открыть на GitHub";
            } else {
                mBtnText.textContent = "Открыть демо";
            }
        }
        
        // Build tech row
        const techRow = document.getElementById("modal-tech-row");
        if (techRow) {
            techRow.innerHTML = "";
            proj.techBlocks.forEach(block => {
                const blockDiv = document.createElement("div");
                blockDiv.className = "modal-tech-block";
                blockDiv.innerHTML = `
                    <i data-lucide="${block.icon}" class="tech-block-icon"></i>
                    <span>${block.name}</span>
                `;
                techRow.appendChild(blockDiv);
            });
        }
        
        // Build features list
        const featuresList = document.getElementById("modal-features-list");
        if (featuresList) {
            featuresList.innerHTML = "";
            proj.features.forEach(feat => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <i data-lucide="check" class="feature-check-icon"></i>
                    <span>${feat}</span>
                `;
                featuresList.appendChild(li);
            });
        }
        
        // Render all Lucide icons inside the modal
        if (window.lucide) {
            window.lucide.createIcons();
        }
        
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.addEventListener("keydown", escKeyHandler);
    }
    
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.removeEventListener("keydown", escKeyHandler);
    }
    
    function escKeyHandler(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }
    
    projectItems.forEach(item => {
        item.addEventListener("click", () => {
            const projectId = item.getAttribute("data-id");
            openModal(projectId);
        });
    });
    
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
}

/* ==========================================================================
   EXPERIENCE DETAIL MODAL
   ========================================================================== */
function initExperienceModal() {
    const expCards = document.querySelectorAll(".exp-card");
    const modal = document.getElementById("exp-modal");
    const modalOverlay = document.getElementById("exp-modal-overlay");
    const modalClose = document.getElementById("exp-modal-close");
    
    const mTitle = document.getElementById("exp-modal-title");
    const mCompany = document.getElementById("exp-modal-company");
    const mDate = document.getElementById("exp-modal-date");
    const mTasks = document.getElementById("exp-modal-tasks");
    const mTechList = document.getElementById("exp-modal-tech-list");
    
    function openModal(expId) {
        const exp = experienceData[expId];
        if (!exp) return;
        
        mTitle.textContent = exp.title;
        mCompany.textContent = exp.company;
        mDate.textContent = exp.date;
        
        // Build tasks list
        mTasks.innerHTML = "";
        exp.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            mTasks.appendChild(li);
        });
        
        // Build tech / stack list
        mTechList.innerHTML = "";
        exp.stack.forEach(item => {
            const li = document.createElement("li");
            const match = item.match(/^\*\*(.*?)\*\*:\s*(.*)/);
            if (match) {
                li.innerHTML = `<strong>${match[1]}:</strong> ${match[2]}`;
            } else {
                li.textContent = item;
            }
            mTechList.appendChild(li);
        });
        
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.addEventListener("keydown", escKeyHandler);
    }
    
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.removeEventListener("keydown", escKeyHandler);
    }
    
    function escKeyHandler(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }
    
    expCards.forEach(card => {
        card.addEventListener("click", () => {
            const expId = card.getAttribute("data-exp-id");
            openModal(expId);
        });
    });
    
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
}

/* ==========================================================================
   ABOUT CARD INTERACTIVE CANVAS
   ========================================================================== */
function initInteractiveCanvas() {
    const wave1 = document.getElementById("wave-path-1");
    const wave2 = document.getElementById("wave-path-2");
    const canvasContainer = document.querySelector(".interactive-canvas-container");
    
    if (!wave1 || !wave2 || !canvasContainer) return;
    
    let isHovered = false;
    let time = 0;
    
    function animate() {
        time += isHovered ? 0.05 : 0.02;
        
        const amp1 = isHovered ? 28 : 14;
        const amp2 = isHovered ? 18 : 8;
        
        const y1_center = 40 + Math.sin(time) * 4;
        const y2_center = 40 + Math.cos(time) * 3;
        
        const path1 = `M 0 40 Q 50 ${y1_center - amp1} 100 40 T 200 ${y1_center + amp1}`;
        const path2 = `M 0 40 Q 50 ${y2_center + amp2} 100 40 T 200 ${y2_center - amp2}`;
        
        wave1.setAttribute("d", path1);
        wave2.setAttribute("d", path2);
        
        requestAnimationFrame(animate);
    }
    
    canvasContainer.addEventListener("mouseenter", () => {
        isHovered = true;
        gsap.to(wave1, { stroke: "rgba(99, 102, 241, 0.8)", strokeWidth: 3, duration: 0.3 });
        gsap.to(wave2, { stroke: "rgba(168, 85, 247, 0.7)", strokeWidth: 2, duration: 0.3 });
    });
    
    canvasContainer.addEventListener("mouseleave", () => {
        isHovered = false;
        gsap.to(wave1, { stroke: "rgba(99, 102, 241, 0.4)", strokeWidth: 2, duration: 0.5 });
        gsap.to(wave2, { stroke: "rgba(168, 85, 247, 0.3)", strokeWidth: 1.5, duration: 0.5 });
    });
    
    animate();
}

/* ==========================================================================
   THEME SWITCHER LOGIC
   ========================================================================== */
function initThemeSwitcher() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    
    function updateToggleIcon(theme) {
        if (theme === "light") {
            themeToggle.innerHTML = `<i data-lucide="moon" class="theme-icon"></i>`;
        } else {
            themeToggle.innerHTML = `<i data-lucide="sun" class="theme-icon"></i>`;
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateToggleIcon(currentTheme);
    
    themeToggle.addEventListener("click", () => {
        const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = activeTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateToggleIcon(newTheme);
    });
}

/* ==========================================================================
   INTERACTIVE QA SIMULATOR TERMINAL MODAL
   ========================================================================== */
function initTerminalModal() {
    const toggle = document.getElementById("terminal-toggle");
    const modal = document.getElementById("terminal-modal");
    const overlay = document.getElementById("terminal-modal-overlay");
    const close = document.getElementById("terminal-modal-close");
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    
    if (!toggle || !modal || !overlay || !close || !input || !output) return;
    
    let isTesting = false;
    
    function printLine(text, className = "") {
        const line = document.createElement("div");
        line.className = `terminal-line ${className}`;
        line.innerHTML = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
    
    function openModal() {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.addEventListener("keydown", escKeyHandler);
        setTimeout(() => input.focus(), 150);
    }
    
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.removeEventListener("keydown", escKeyHandler);
    }
    
    function escKeyHandler(e) {
        if (e.key === "Escape" && !isTesting) {
            closeModal();
        }
    }
    
    toggle.addEventListener("click", openModal);
    overlay.addEventListener("click", () => {
        if (!isTesting) closeModal();
    });
    close.addEventListener("click", () => {
        if (!isTesting) closeModal();
    });
    
    // Focus input on click anywhere inside the terminal body
    document.querySelector(".terminal-body").addEventListener("click", () => {
        if (!isTesting) input.focus();
    });
    
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const cmd = input.value.trim();
            input.value = "";
            
            if (cmd === "") return;
            
            // Print user prompt
            printLine(`<span class="terminal-prompt">danil-qa-test:~$</span> ${cmd}`);
            
            handleCommand(cmd.toLowerCase());
        }
    });
    
    function handleCommand(cmd) {
        const args = cmd.split(" ");
        const baseCmd = args[0];
        
        switch (baseCmd) {
            case "help":
            case "?":
                printLine("Доступные команды:", "info-msg");
                printLine("  <span class='highlight-cmd'>test</span>         - Запустить симуляцию автоматических тестов портфолио");
                printLine("  <span class='highlight-cmd'>about</span>        - Вывести общую информацию о Даниле");
                printLine("  <span class='highlight-cmd'>skills</span>       - Показать технический стек QA & Dev");
                printLine("  <span class='highlight-cmd'>theme</span>        - Переключить тему оформления (Light/Dark)");
                printLine("  <span class='highlight-cmd'>clear</span> / <span class='highlight-cmd'>cls</span>  - Очистить консоль");
                printLine("  <span class='highlight-cmd'>exit</span>         - Закрыть терминал");
                break;
            case "about":
                printLine("Данил — Специалист по тестированию ПО (QA) и веб-разработчик.", "info-msg");
                printLine("Более 5 лет коммерческого опыта в тестировании Web и Mobile (Аэрофлот, RS, iVi).");
                printLine("Создает интерактивные фронтенд-проекты, занимается автоматизацией тестов (Java, Selenium).");
                break;
            case "skills":
                printLine("Технологический стек:", "info-msg");
                printLine("  • Тестирование: Функциональное, UI, REST API, Mobile (Android/iOS)");
                printLine("  • Инструменты: Charles Proxy, Fiddler, ADB, Postman, DevTools, TestFlight");
                printLine("  • Автоматизация & Скрипты: Java (Selenium), Python (Telegram API)");
                printLine("  • Разработка: HTML, CSS, JavaScript, Kotlin, Git, Linux Terminal");
                break;
            case "theme":
                const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
                const newTheme = activeTheme === "dark" ? "light" : "dark";
                document.documentElement.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
                // Update header switcher icon if exist
                const themeToggle = document.getElementById("theme-toggle");
                if (themeToggle) {
                    themeToggle.innerHTML = `<i data-lucide="${newTheme === 'light' ? 'moon' : 'sun'}" class="theme-icon"></i>`;
                    window.lucide.createIcons();
                }
                printLine(`Тема оформления успешно переключена на: <span class='highlight-cmd'>${newTheme.toUpperCase()}</span>`, "success-msg");
                break;
            case "clear":
            case "cls":
                output.innerHTML = "";
                break;
            case "exit":
                closeModal();
                break;
            case "test":
            case "run-tests":
                runQASuite();
                break;
            default:
                printLine(`Команда не найдена: "${cmd}". Введите <span class='highlight-cmd'>help</span> для списка команд.`, "error-msg");
        }
    }
    
    function runQASuite() {
        isTesting = true;
        input.disabled = true;
        input.placeholder = "Идет выполнение тестов...";
        
        const steps = [
            { text: "[INFO] Инициализация тестового окружения Danil-QA-Suite...", type: "system-msg", delay: 200 },
            { text: "[INFO] Загрузка конфигурации автотестов и драйверов...", type: "system-msg", delay: 400 },
            { text: "[TEST] Проверка мета-данных и заголовка страницы...", type: "", delay: 600 },
            { text: "   └ Title: 'Данил | Портфолио - Веб-разработчик & Тестировщик' -> PASS", type: "success-msg", delay: 200 },
            { text: "[TEST] Проверка структуры Bento Grid на адаптивность...", type: "", delay: 500 },
            { text: "   └ Обнаружено 8 интерактивных Bento-карточек -> PASS", type: "success-msg", delay: 200 },
            { text: "[TEST] Проверка работы переключателя тем оформления...", type: "", delay: 500 },
            { text: "   └ data-theme attribute & localStorage retention -> PASS", type: "success-msg", delay: 200 },
            { text: "[TEST] Инициализация Web Audio API (Синтезатор звуков)...", type: "", delay: 650 },
            { text: "   └ Audio Context & Spatial Stereo Pan Nodes -> PASS", type: "success-msg", delay: 200 },
            { text: "[TEST] Проверка целостности ссылок проектов и контактов...", type: "", delay: 600 },
            { text: "   └ Telegram API & GitHub links validation -> PASS", type: "success-msg", delay: 150 },
            { text: "[TEST] Стресс-тест интерактивного параллакса курсора...", type: "", delay: 500 },
            { text: "   └ Mousemove event handler frame rate > 60fps -> PASS", type: "success-msg", delay: 200 },
            { text: "[INFO] Тестирование успешно завершено.", type: "system-msg", delay: 300 },
            { text: "[SUCCESS] Результат: 7/7 сценариев успешно пройдены! 🌟", type: "success-msg", delay: 200 },
            { text: "[SUCCESS] Сайт Данила стабилен, багов не обнаружено.", type: "success-msg", delay: 100 }
        ];
        
        let currentStep = 0;
        
        function executeNextStep() {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                printLine(step.text, step.type);
                currentStep++;
                setTimeout(executeNextStep, step.delay);
            } else {
                isTesting = false;
                input.disabled = false;
                input.placeholder = "Введите команду...";
                input.focus();
            }
        }
        
        executeNextStep();
    }
}


/* ==========================================================================
   SCROLL PROGRESS BAR & BACK TO TOP BUTTON
   ========================================================================== */
function initScrollFeatures() {
    const scrollProgress = document.getElementById("scroll-progress");
    const backToTopBtn = document.getElementById("back-to-top");
    
    if (!scrollProgress || !backToTopBtn) return;
    
    // Update scroll progress bar width
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + "%";
        
        // Show/hide back-to-top button
        if (scrollTop > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });
    
    // Back to top button click handler
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    // Re-initialize lucide icons for the back-to-top button
    if (window.lucide) {
        window.lucide.createIcons();
    }
}




/* ==========================================================================
   LOADING SCREEN
   ========================================================================== */
function initLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    const loaderProgress = document.getElementById("loader-progress");
    const loaderStatus = document.getElementById("loader-status");
    
    if (!loadingScreen || !loaderProgress || !loaderStatus) return;
    
    let progress = 0;
    const messages = [
        "Загрузка ресурсов...",
        "Подготовка интерфейса...",
        "Инициализация анимаций...",
        "Почти готово..."
    ];
    
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10 + 10;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            loaderProgress.style.width = "100%";
            loaderStatus.textContent = "Готово!";
            
            // Hide loading screen after a short delay
            setTimeout(() => {
                loadingScreen.classList.add("hidden");
                // Remove from DOM after transition
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 150);
        } else {
            loaderProgress.style.width = progress + "%";
            
            // Update status message based on progress
            if (progress < 30) {
                loaderStatus.textContent = messages[0];
            } else if (progress < 60) {
                loaderStatus.textContent = messages[1];
            } else if (progress < 90) {
                loaderStatus.textContent = messages[2];
            } else {
                loaderStatus.textContent = messages[3];
            }
        }
    }, 170);
    
    // Safety: force-hide the loading screen quickly if anything stalls
    setTimeout(() => {
        if (!loadingScreen.classList.contains("hidden")) {
            clearInterval(loadingInterval);
            loaderProgress.style.width = "100%";
            loaderStatus.textContent = "Готово!";
            
            setTimeout(() => {
                loadingScreen.classList.add("hidden");
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 150);
        }
    }, 1200);
}


/* ==========================================================================
   LAZY LOADING IMAGES
   ========================================================================== */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if (!images.length) return;
    
    // Check if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const wrapper = img.closest('.project-img-wrapper, .hero-avatar-wrapper');
                    
                    // Add loading state
                    if (wrapper) {
                        wrapper.classList.add('loading');
                    }
                    
                    // Load image
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                        if (wrapper) {
                            wrapper.classList.remove('loading');
                        }
                    });
                    
                    // If image has data-src, use it (for custom lazy loading)
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    } else {
                        // Image already has src, just mark as loaded when ready
                        if (img.complete) {
                            img.classList.add('loaded');
                            if (wrapper) {
                                wrapper.classList.remove('loading');
                            }
                        }
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before image enters viewport
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
        });
    }
}


/* ==========================================================================
   ACTIVE NAVIGATION SECTION TRACKING
   ========================================================================== */
function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-btn)');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navLinks.length || !sections.length) return;
    
    // Create a map of section IDs to nav links
    const sectionMap = new Map();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            sectionMap.set(sectionId, link);
        }
    });
    
    // Function to update active nav link
    function updateActiveNav() {
        // Get current scroll position
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        let currentSection = '';
        
        // Check each section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for header
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // If we're in this section
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        // Special case: if at top of page, highlight first section
        if (scrollY < 200) {
            currentSection = 'about';
        }
        
        // Update active states
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        if (currentSection && sectionMap.has(currentSection)) {
            sectionMap.get(currentSection).classList.add('active');
        }
    }
    
    // Update on scroll with throttle for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            updateActiveNav();
        });
    });
    
    // Update on load
    updateActiveNav();
    
    // Smooth scroll to sections when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.getElementById('main-header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without triggering scroll
                    history.pushState(null, null, href);
                }
            }
        });
    });
}


/* ==========================================================================
   SHARE MODAL
   ========================================================================== */
function initShareModal() {
    const shareToggle = document.getElementById("share-toggle");
    const shareModal = document.getElementById("share-modal");
    const shareOverlay = document.getElementById("share-modal-overlay");
    const shareClose = document.getElementById("share-modal-close");
    const shareCopyBtn = document.getElementById("share-copy-btn");
    const shareNativeBtn = document.getElementById("share-native-btn");
    const shareLinkInput = document.getElementById("share-link-input");
    const shareSuccessMessage = document.getElementById("share-success-message");
    
    if (!shareToggle || !shareModal) return;
    
    const shareUrl = "https://danilmashina.github.io/Mysite/";
    const shareTitle = "Портфолио Данила Иванова - QA Engineer & Веб-разработчик";
    const shareText = "Профессиональный QA Engineer с 5+ годами опыта. Разработчик современных веб-приложений.";
    
    // Check if Web Share API is available
    if (navigator.share) {
        shareNativeBtn.style.display = "flex";
    }
    
    function openModal() {
        shareModal.classList.add("active");
        shareModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        
        // Reinitialize icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    function closeModal() {
        shareModal.classList.remove("active");
        shareModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
    
    function showSuccessMessage() {
        shareSuccessMessage.classList.add("show");
        setTimeout(() => {
            shareSuccessMessage.classList.remove("show");
        }, 3000);
    }
    
    // Copy link to clipboard
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(shareUrl);
            showSuccessMessage();
            playNotificationBeep();
        } catch (err) {
            // Fallback for older browsers
            shareLinkInput.select();
            document.execCommand('copy');
            showSuccessMessage();
            playNotificationBeep();
        }
    }
    
    // Native share (mobile)
    async function nativeShare() {
        try {
            await navigator.share({
                title: shareTitle,
                text: shareText,
                url: shareUrl
            });
        } catch (err) {
            // User cancelled or error occurred
            console.log('Share cancelled or failed');
        }
    }
    
    // Event listeners
    shareToggle.addEventListener("click", openModal);
    shareOverlay.addEventListener("click", closeModal);
    shareClose.addEventListener("click", closeModal);
    shareCopyBtn.addEventListener("click", copyToClipboard);
    shareLinkInput.addEventListener("click", () => {
        shareLinkInput.select();
        copyToClipboard();
    });
    
    if (shareNativeBtn) {
        shareNativeBtn.addEventListener("click", nativeShare);
    }
    
    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && shareModal.classList.contains("active")) {
            closeModal();
        }
    });
}


/* ==========================================================================
   TYPEWRITER EFFECT FOR HERO SUBTITLE
   ========================================================================== */
function initTypewriter() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    
    if (!subtitleElement) return;
    
    // Список текстов для печатания
    const texts = [
        'QA Engineer',
        'Веб-разработчик',
        'Mobile Tester',
        'React Native Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // скорость печати
    const deletingSpeed = 50; // скорость удаления
    const pauseEnd = 2000; // пауза после завершения текста
    const pauseStart = 500; // пауза перед началом удаления
    
    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            // Печатаем текст
            subtitleElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            subtitleElement.classList.add('typing');
            
            if (charIndex === currentText.length) {
                // Текст напечатан полностью
                subtitleElement.classList.remove('typing');
                subtitleElement.classList.add('typing-complete');
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(type, pauseStart);
                }, pauseEnd);
                return;
            }
            
            setTimeout(type, typingSpeed);
        } else {
            // Удаляем текст
            subtitleElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            subtitleElement.classList.remove('typing-complete');
            subtitleElement.classList.add('typing');
            
            if (charIndex === 0) {
                // Текст полностью удален
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // следующий текст
                setTimeout(type, 500);
                return;
            }
            
            setTimeout(type, deletingSpeed);
        }
    }
    
    // Небольшая задержка перед началом
    setTimeout(() => {
        type();
    }, 1000);
}


/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll(".nav-link");
    
    if (!mobileMenuToggle || !navLinks) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        navLinks.classList.toggle("mobile-open");
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains("mobile-open")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });
    
    // Close menu when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuToggle.classList.remove("active");
            navLinks.classList.remove("mobile-open");
            document.body.style.overflow = "";
        });
    });
    
    // Close menu on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove("active");
            navLinks.classList.remove("mobile-open");
            document.body.style.overflow = "";
        }
    });
}


/* ==========================================================================
   LANGUAGE SWITCHER (i18n)
   ========================================================================== */
let currentLang = 'ru';

function initLanguageSwitcher() {
    const langToggle = document.getElementById("lang-toggle");
    const langText = langToggle?.querySelector('.lang-text');
    
    if (!langToggle) return;
    
    // Load saved language or use default
    const savedLang = localStorage.getItem('language') || 'ru';
    currentLang = savedLang;
    updateLanguageButton();
    applyTranslations(currentLang);
    
    // Toggle language
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('language', currentLang);
        updateLanguageButton();
        applyTranslations(currentLang);
        
        // Update typewriter texts
        updateTypewriterTexts();
        
        // Play sound
        playNotificationBeep();
    });
    
    function updateLanguageButton() {
        if (langText) {
            langText.textContent = currentLang === 'ru' ? 'EN' : 'RU';
        }
    }
}

function applyTranslations(lang) {
    if (!translations || !translations[lang]) {
        console.error('Translations not found for language:', lang);
        return;
    }
    
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            // Check if element is input/textarea (use placeholder)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', lang);
}

function updateTypewriterTexts() {
    // Update typewriter animation texts based on language
    const texts = currentLang === 'ru' ? [
        'QA Engineer',
        'Веб-разработчик',
        'Mobile Tester',
        'React Native Developer'
    ] : [
        'QA Engineer',
        'Web Developer',
        'Mobile Tester',
        'React Native Developer'
    ];
    
    // Restart typewriter with new texts
    if (typeof initTypewriter === 'function') {
        // Stop current animation and restart
        const subtitleElement = document.querySelector('.hero-subtitle');
        if (subtitleElement) {
            subtitleElement.classList.remove('typing', 'typing-complete');
        }
        // Note: This is simplified - in production you'd want to properly stop and restart the animation
    }
}
