/* ========================================================================== 
   INHISTORIA — JAVASCRIPT
   --------------------------------------------------------------------------
   This file is intentionally separated into readable sections so it is easy
   to customize later.

   01. Configuration
   02. Navigation data
   03. Image / portfolio data
   04. SVG icons
   05. Shared header
   06. Home page sections
   07. Through Our Lens page
   08. Placeholder pages
   09. Page rendering
   10. Interactions
   11. Automatic image rotation
   ========================================================================== */

/* ========================================================================== 
   01. CONFIGURATION
   --------------------------------------------------------------------------
   Change your real social links here.
   ========================================================================== */

const CONFIG = {
    whatsapp: "https://wa.me/6289500000000",
    instagram: "https://instagram.com/inhistoria.id",
    tiktok: "https://tiktok.com/@inhistoria.id"
};

/* ========================================================================== 
   02. NAVIGATION DATA
   -------------------------------------------------------------------------- */

const NAVIGATION = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Through Our Lens",
        path: "/through-our-lens"
    },
    {
        label: "Portfolio",
        path: "/portfolio"
    },
    {
        label: "Package",
        path: "/package"
    },
    {
        label: "Contact",
        path: "/contact"
    },
    {
        label: "Booking",
        path: "/booking"
    }
];

/* ========================================================================== 
   03. IMAGE / PORTFOLIO DATA
   -------------------------------------------------------------------------- */

const HOME_HERO_PHOTOS = [
    "assets/hero-1.jpg",
    "assets/hero-2.png",
    "assets/hero-3.jpg"
];

const HOME_PORTFOLIO = [
    {
        image: "assets/campus-1.jpg",
        title: "UIN SAIZU",
        subtitle: "PURWOKERTO",
        slug: "uin-saizu"
    },
    {
        image: "assets/campus-2.jpg",
        title: "UNIVERSITAS",
        subtitle: "JENDERAL SOEDIRMAN",
        slug: "universitas-jenderal-soedirman"
    },
    {
        image: "assets/campus-3.jpg",
        title: "UNIVERSITAS",
        subtitle: "JENDERAL SOEDIRMAN",
        slug: "universitas-jenderal-soedirman-2"
    },
    {
        image: "assets/campus-4.jpg",
        title: "UNIVERSITAS",
        subtitle: "JENDERAL SOEDIRMAN",
        slug: "universitas-jenderal-soedirman-3"
    }
];

const CLOSING_PHOTOS = [
    "assets/closing-1.jpg",
    "assets/campus-3.jpg",
    "assets/hero-3.jpg"
];

const THROUGH_OUR_LENS_PORTFOLIO = [
    {
        image: "assets/through/card-01.jpg",
        name: "UIN SAIZU",
        location: "Purwokerto",
        slug: "uin-saizu"
    },
    {
        image: "assets/through/card-02.jpg",
        name: "UNIVERSITAS JENDERAL SOEDIRMAN",
        location: "Purwokerto",
        slug: "universitas-jenderal-soedirman"
    },
    {
        image: "assets/through/card-03.jpg",
        name: "UIN SAIZU",
        location: "Purwokerto",
        slug: "uin-saizu-2"
    },
    {
        image: "assets/through/card-04.jpg",
        name: "UNIVERSITAS JENDERAL SOEDIRMAN",
        location: "Purwokerto",
        slug: "universitas-jenderal-soedirman-2"
    },
    {
        image: "assets/through/card-05.jpg",
        name: "UNIVERSITAS JENDERAL SOEDIRMAN",
        location: "Purwokerto",
        slug: "universitas-jenderal-soedirman-3"
    },
    {
        image: "assets/through/card-06.jpg",
        name: "UIN SAIZU",
        location: "Purwokerto",
        slug: "uin-saizu-3"
    }
];

/* ========================================================================== 
   04. SVG ICONS
   ========================================================================== */

function getWhatsAppIcon() {
    return `
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
                fill="currentColor"
                d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
            />
            <path
                fill="currentColor"
                d="M16 3.2A12.77 12.77 0 0 0 5.16 22.7L3.2 28.8l6.3-1.92A12.8 12.8 0 1 0 16 3.2Zm0 23.25c-2.01 0-3.98-.54-5.7-1.56l-.41-.24-3.74 1.14 1.15-3.64-.27-.42A10.55 10.55 0 1 1 16 26.45Z"
            />
        </svg>
    `;
}

/* ========================================================================== 
   05. SHARED HEADER
   ========================================================================== */

function renderHeader() {
    const currentPath = window.location.pathname;

    const navigationLinks = NAVIGATION.map((item) => {
        const activeClass = currentPath === item.path ? "active" : "";

        return `
            <button
                type="button"
                class="${activeClass}"
                data-route="${item.path}"
            >
                ${item.label}
            </button>
        `;
    }).join("");

    return `
        <header class="site-nav" id="siteNav">
            <button
                type="button"
                class="brand-button"
                data-route="/"
                aria-label="Back to home"
            >
                <img src="assets/logo.png" alt="InHistoria">
            </button>

            <nav aria-label="Primary navigation">
                ${navigationLinks}
            </nav>
        </header>
    `;
}

/* ========================================================================== 
   06. HOME PAGE SECTIONS
   ========================================================================== */

function renderHomeHero() {
    const heroPanels = [0, 1, 2].map((offset, panelIndex) => {
        const photoIndex = (homeHeroIndex + offset) % HOME_HERO_PHOTOS.length;
        const image = HOME_HERO_PHOTOS[photoIndex];

        return `
            <div class="hero-panel">
                <img
                    src="${image}?v=${homeHeroIndex}-${panelIndex}"
                    alt="InHistoria graduation photography"
                >
            </div>
        `;
    }).join("");

    return `
        <section class="hero">
            <div class="hero-grid">
                ${heroPanels}
            </div>

            <div class="hero-overlay"></div>

            <div class="hero-copy">
                <span class="eyebrow">INHISTORIA.GRAD</span>

                <h1>Eternal Moment</h1>

                <p>
                    everything that was once close is now eternal in<br>
                    a frame that doesn't go away
                </p>

                <div class="hero-actions">
                    <button
                        type="button"
                        class="button button-light"
                        data-route="/portfolio"
                    >
                        Explore Our Work
                    </button>

                    <button
                        type="button"
                        class="button button-outline"
                        data-route="/booking"
                    >
                        Booking Now
                    </button>
                </div>
            </div>
        </section>
    `;
}

function renderHomePortfolio() {
    const visibleCards = [0, 1, 2, 3].map((offset) => {
        const index = (homePortfolioOffset + offset) % HOME_PORTFOLIO.length;
        return HOME_PORTFOLIO[index];
    });

    const cards = visibleCards.map((item) => {
        return `
            <article
                class="portfolio-card"
                data-route="/portfolio#${encodeURIComponent(item.slug)}"
                tabindex="0"
                role="button"
                aria-label="Open portfolio for ${item.title} ${item.subtitle}"
            >
                <img
                    src="${item.image}"
                    alt="${item.title} ${item.subtitle}"
                >

                <div class="card-gradient"></div>

                <div class="card-copy">
                    <strong>${item.title}</strong>
                    <span>${item.subtitle}</span>
                </div>
            </article>
        `;
    }).join("");

    return `
        <section class="quote-strip">
            <p>
                A glimpse into the stories we've had the chance to capture.
            </p>
        </section>

        <section class="portfolio-preview">
            <div class="portfolio-track">
                ${cards}
            </div>

            <button
                type="button"
                class="slider-arrow left"
                data-slider="-1"
                aria-label="Previous work"
            >
                ‹
            </button>

            <button
                type="button"
                class="slider-arrow right"
                data-slider="1"
                aria-label="Next work"
            >
                ›
            </button>

            <button
                type="button"
                class="all-work"
                data-route="/portfolio"
            >
                Explore All Work
                <span>→</span>
            </button>
        </section>
    `;
}

function renderHomeClosingImage() {
    return `
        <section class="closing-image">
            <img
                class="crossfade-image"
                src="${CLOSING_PHOTOS[closingImageIndex]}?v=${closingImageIndex}"
                alt="InHistoria graduation photography"
            >
        </section>
    `;
}

function renderFooter() {
    const footerLinks = NAVIGATION
        .filter((item) => item.label !== "Home")
        .map((item) => {
            return `
                <button
                    type="button"
                    data-route="${item.path}"
                >
                    ${item.label}
                </button>
            `;
        })
        .join("");

    return `
        <footer class="site-footer">
            <div class="footer-main">
                <button
                    type="button"
                    class="footer-brand"
                    id="backTop"
                    aria-label="Back to top"
                >
                    <img src="assets/logo.png" alt="InHistoria">
                </button>

                <div class="socials">
                    <a
                        href="${CONFIG.instagram}"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        ◎
                    </a>

                    <a
                        href="${CONFIG.tiktok}"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="TikTok"
                    >
                        ♪
                    </a>

                    <a
                        href="${CONFIG.whatsapp}"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                    >
                        ${getWhatsAppIcon()}
                    </a>
                </div>

                <div class="footer-navigation">
                    <h3>Navigation</h3>
                    <div>
                        ${footerLinks}
                    </div>
                </div>
            </div>

            <div class="copyright">
                © 2026 InHistoria.grad. All rights reserved.
            </div>
        </footer>
    `;
}

function renderHomePage() {
    return `
        ${renderHomeHero()}
        ${renderHomePortfolio()}
        ${renderHomeClosingImage()}
        ${renderFooter()}
    `;
}

/* ========================================================================== 
   07. THROUGH OUR LENS PAGE
   ========================================================================== */

function renderThroughOurLensPage() {
    const cards = THROUGH_OUR_LENS_PORTFOLIO.map((item) => {
        return `
            <article
                class="lens-card"
                data-route="/portfolio#${item.slug}"
                tabindex="0"
                role="button"
                aria-label="Open portfolio for ${item.name}"
            >
                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="lens-card-overlay"></div>

                <div class="lens-card-copy">
                    <strong>${item.name}</strong>
                    <span>${item.location}</span>
                </div>
            </article>
        `;
    }).join("");

    return `
        <main class="lens-page">
            <section class="lens-hero">
                <div class="lens-hero-bg"></div>
                <div class="lens-hero-overlay"></div>

                <div class="lens-copy">
                    <h1>Through Our Lens</h1>

                    <p>
                        We believe photography is about more than simply
                        preserving a moment. It is about capturing the warmth,
                        the quiet emotions, and the beauty found in between.
                    </p>
                </div>
            </section>

            <section class="lens-work">
                <div class="lens-work-grid">
                    ${cards}
                </div>

                <button
                    type="button"
                    class="lens-all-work"
                    data-route="/portfolio"
                >
                    Explore All Work
                    <span>→</span>
                </button>
            </section>
        </main>
    `;
}

/* ========================================================================== 
   08. PLACEHOLDER PAGES
   ========================================================================== */

function renderPlaceholderPage() {
    const pageName = window.location.pathname
        .split("/")
        .filter(Boolean)[0] || "page";

    const readableName = pageName.replaceAll("-", " ");

    return `
        <section class="placeholder">
            <p>InHistoria</p>
            <h1>${readableName}</h1>

            <button
                type="button"
                class="button button-light"
                data-route="/"
            >
                Back Home
            </button>
        </section>
    `;
}

/* ========================================================================== 
   09. PAGE RENDERING
   ========================================================================== */

let homeHeroIndex = 0;
let homePortfolioOffset = 0;
let closingImageIndex = 0;

function renderPage() {
    const app = document.getElementById("app");
    const header = document.getElementById("site-header");

    header.innerHTML = renderHeader();

    if (window.location.pathname === "/") {
        app.innerHTML = renderHomePage();
    } else if (window.location.pathname === "/through-our-lens") {
        app.innerHTML = renderThroughOurLensPage();
    } else {
        app.innerHTML = renderPlaceholderPage();
    }

    updateFloatingWhatsApp();
    bindRouteButtons();
    bindHomeInteractions();

    const siteNav = document.getElementById("siteNav");

    if (siteNav) {
        siteNav.classList.toggle("is-visible", window.scrollY < 40);
    }
}

/* ========================================================================== 
   10. INTERACTIONS
   ========================================================================== */

function navigateTo(path) {
    window.history.pushState({}, "", path);
    renderPage();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function bindRouteButtons() {
    document.querySelectorAll("[data-route]").forEach((element) => {
        element.addEventListener("click", () => {
            navigateTo(element.dataset.route);
        });

        /* Make card-style buttons work with Enter / Space too. */
        element.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                navigateTo(element.dataset.route);
            }
        });
    });
}

function bindHomeInteractions() {
    const backToTop = document.getElementById("backTop");

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    document.querySelectorAll("[data-slider]").forEach((button) => {
        button.addEventListener("click", () => {
            const direction = Number(button.dataset.slider);

            homePortfolioOffset =
                (homePortfolioOffset + direction + HOME_PORTFOLIO.length) %
                HOME_PORTFOLIO.length;

            renderPage();
        });
    });
}

function updateFloatingWhatsApp() {
    const whatsappButton = document.getElementById("floatingWa");
    const whatsappIcon = document.getElementById("floatingWaIcon");

    if (!whatsappButton) {
        return;
    }

    whatsappButton.href = CONFIG.whatsapp;

    if (whatsappIcon) {
        whatsappIcon.innerHTML = getWhatsAppIcon();
    }
}

/* Browser back / forward buttons. */
window.addEventListener("popstate", () => {
    renderPage();
    window.scrollTo({ top: 0 });
});

/* Navbar appears when the cursor touches the top area. */
window.addEventListener("mousemove", (event) => {
    const siteNav = document.getElementById("siteNav");

    if (!siteNav) {
        return;
    }

    const shouldShow = event.clientY < 120 || window.scrollY < 40;
    siteNav.classList.toggle("is-visible", shouldShow);
});

/* Navbar also appears when the cursor enters the invisible trigger area. */
document.addEventListener(
    "mouseenter",
    (event) => {
        if (event.target.id !== "navTrigger") {
            return;
        }

        const siteNav = document.getElementById("siteNav");

        if (siteNav) {
            siteNav.classList.add("is-visible");
        }
    },
    true
);

/* WhatsApp becomes slightly transparent while the visitor scrolls. */
let scrollTimer;

window.addEventListener(
    "scroll",
    () => {
        const whatsappButton = document.getElementById("floatingWa");

        if (whatsappButton) {
            whatsappButton.classList.add("is-scrolling");
        }

        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            const button = document.getElementById("floatingWa");

            if (button) {
                button.classList.remove("is-scrolling");
            }
        }, 500);
    },
    { passive: true }
);

/* ========================================================================== 
   11. AUTOMATIC IMAGE ROTATION
   ========================================================================== */

/* Home hero: change the 3-photo arrangement every 5.5 seconds. */
setInterval(() => {
    if (window.location.pathname !== "/") {
        return;
    }

    homeHeroIndex =
        (homeHeroIndex + 1) % HOME_HERO_PHOTOS.length;

    renderPage();
}, 5500);

/* Home closing image: crossfade to the next photo every 6 seconds. */
setInterval(() => {
    if (window.location.pathname !== "/") {
        return;
    }

    closingImageIndex =
        (closingImageIndex + 1) % CLOSING_PHOTOS.length;

    const image = document.querySelector(".crossfade-image");

    if (!image) {
        return;
    }

    image.src = `${CLOSING_PHOTOS[closingImageIndex]}?v=${closingImageIndex}`;

    image.classList.remove("crossfade-image");

    /* Force the browser to restart the CSS animation. */
    void image.offsetWidth;

    image.classList.add("crossfade-image");
}, 6000);

/* ========================================================================== 
   INITIAL PAGE LOAD
   ========================================================================== */

renderPage();
