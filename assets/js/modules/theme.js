document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if ("Escape" === e.key || 27 === e.keyCode) {
            const e = document.querySelector(".sidebar"),
                t = document.querySelector(".contacts");
            e?.classList.contains("is-active") && u(), t?.classList.contains("is-active") && m();
        }
    });
    const e = document.querySelector(".header__menu");
    e &&
        e.addEventListener("keydown", (t) => {
            ("Enter" !== t.key && " " !== t.key) || (t.preventDefault(), e.click());
        });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const e = [
            [".hero__title", { reveal: "up" }],
            [".hero__year", { reveal: "up", delay: "2" }],
            [".hero__badge", { reveal: "up", delay: "3" }],
            [".hero__description", { reveal: "up", delay: "4" }],
            [".hero__actions", { reveal: "up", delay: "5" }],
            [".hero__social-list", { reveal: "up", delay: "6" }],
            [".hero__anchor", { reveal: "up", delay: "5" }],
            [".about-us__overline", { reveal: "up", delay: "1" }],
            [".about-us__title", { reveal: "up", delay: "2" }],
            [".about-us__description", { reveal: "up", delay: "3" }],
            [".about-us__actions", { reveal: "up", delay: "4" }],
            [".about-us__anchor", { reveal: "left", delay: "3" }],
        ];
        setTimeout(() => {
            e.forEach(([e, t]) => {
                document.querySelectorAll(e).forEach((e) => {
                    (e.dataset.reveal = t.reveal),
                        t.delay && (e.dataset.delay = t.delay),
                        t.duration && (e.dataset.duration = t.duration),
                        e.classList.add("is-visible");
                });
            });
        }, 400);
    }
    const t = document.querySelectorAll(".filter-btn"),
        a = document.querySelectorAll(".cases__item");
    t.length > 0 &&
        t.forEach((e) => {
            e.addEventListener("click", () => {
                t.forEach((e) => e.classList.remove("is-active")), e.classList.add("is-active");
                const l = e.getAttribute("data-filter");
                a.forEach((e) => {
                    const t = e.getAttribute("data-category");
                    "all" === l || l === t
                        ? ((e.style.display = "block"),
                          setTimeout(() => {
                              e.classList.remove("is-hidden");
                          }, 10))
                        : (e.classList.add("is-hidden"),
                          setTimeout(() => {
                              e.classList.contains("is-hidden") && (e.style.display = "none");
                          }, 400));
                });
            });
        });
    const l = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!l) {
        [
            [".resume__overline", { reveal: "up", delay: "1" }],
            [".resume__title", { reveal: "up", delay: "2", duration: "slow" }],
            [".resume__content p", { reveal: "up", delay: "3" }],
            [".resume__tags", { reveal: "up", delay: "4" }],
            [".resume__btn", { reveal: "up", delay: "5", duration: "fast" }],
            [".cases__overline", { reveal: "up", delay: "1" }],
            [".cases__title", { reveal: "up", delay: "2" }],
            [".cases__header .btn", { reveal: "up", delay: "3", duration: "fast" }],
            [".cases__filters", { reveal: "up", delay: "3" }],
            [".cases__item:nth-child(1)", { reveal: "up", delay: "2" }],
            [".cases__item:nth-child(2)", { reveal: "up", delay: "3" }],
            [".cases__item:nth-child(3)", { reveal: "up", delay: "2" }],
            [".cases__item:nth-child(4)", { reveal: "up", delay: "3" }],
            [".testimonials__overline", { reveal: "up", delay: "1" }],
            [".testimonials__title", { reveal: "up", delay: "2" }],
            [".solutions__overline", { reveal: "up", delay: "1" }],
            [".solutions__title", { reveal: "up", delay: "2", duration: "slow" }],
            [".solutions__description", { reveal: "left", delay: "3" }],
            [".solutions__grid > li:nth-child(1)", { reveal: "up", delay: "1" }],
            [".solutions__grid > li:nth-child(2)", { reveal: "up", delay: "2" }],
            [".solutions__grid > li:nth-child(3)", { reveal: "up", delay: "3" }],
            [".solutions__grid > li:nth-child(4)", { reveal: "up", delay: "4" }],
            [".process__overline", { reveal: "up", delay: "1" }],
            [".process__title", { reveal: "up", delay: "2" }],
            [".process__description", { reveal: "right", delay: "3" }],
            [".process__card:nth-child(1)", { reveal: "up", delay: "1" }],
            [".process__card:nth-child(2)", { reveal: "up", delay: "2" }],
            [".process__card:nth-child(3)", { reveal: "up", delay: "3" }],
            [".process__card:nth-child(4)", { reveal: "up", delay: "4" }],
            [".faq__overline", { reveal: "up", delay: "1" }],
            [".faq__title", { reveal: "up", delay: "2" }],
            [".faq__description", { reveal: "up", delay: "3" }],
            [".faq__intro .btn", { reveal: "up", delay: "4", duration: "fast" }],
            [".faq__item:nth-child(1)", { reveal: "up", delay: "2" }],
            [".faq__item:nth-child(2)", { reveal: "up", delay: "3" }],
            [".faq__item:nth-child(3)", { reveal: "up", delay: "4" }],
            [".footer__cta h2", { reveal: "up", delay: "1", duration: "slow" }],
            [".footer__cta .btn", { reveal: "scale", delay: "2" }],
            [".footer__logo", { reveal: "up", delay: "3", duration: "fast" }],
            [".footer__column:nth-child(1)", { reveal: "up", delay: "1" }],
            [".footer__column:nth-child(2)", { reveal: "up", delay: "2" }],
            [".footer__column:nth-child(3)", { reveal: "up", delay: "3" }],
            [".footer__bottom", { reveal: "up", delay: "1", duration: "fast" }],
            [".philosophy__overline", { reveal: "up", delay: "1" }],
            [".philosophy__title", { reveal: "up", delay: "2" }],
            [".philosophy__content p", { reveal: "up", delay: "3" }],
            [".skills__overline", { reveal: "up", delay: "1" }],
            [".skills__title", { reveal: "up", delay: "2", duration: "slow" }],
            [".skills__description", { reveal: "left", delay: "3" }],
            [".skills__grid > li:nth-child(1)", { reveal: "up", delay: "1" }],
            [".skills__grid > li:nth-child(2)", { reveal: "up", delay: "2" }],
            [".skills__grid > li:nth-child(3)", { reveal: "up", delay: "3" }],
            [".skills__grid > li:nth-child(4)", { reveal: "up", delay: "4" }],
            [".skills__grid > li:nth-child(5)", { reveal: "up", delay: "5" }],
            [".skills__grid > li:nth-child(6)", { reveal: "up", delay: "6" }],
            [".experience__overline", { reveal: "up", delay: "1" }],
            [".experience__title", { reveal: "up", delay: "2" }],
            [".experience__description", { reveal: "up", delay: "3" }],
            [".experience__intro .btn", { reveal: "up", delay: "4", duration: "fast" }],
            [".experience__card:nth-child(1)", { reveal: "up", delay: "1" }],
            [".experience__card:nth-child(2)", { reveal: "up", delay: "2" }],
            [".experience__card:nth-child(3)", { reveal: "up", delay: "3" }],
        ].forEach(([e, t]) => {
            document.querySelectorAll(e).forEach((e) => {
                (e.dataset.reveal = t.reveal),
                    t.delay &&
                        ((e.dataset.delay = t.delay),
                        e.style.setProperty("--reveal-delay", `${Number(t.delay) * 100}ms`)),
                    t.duration && (e.dataset.duration = t.duration);
            });
        });
        const e = new IntersectionObserver(
            (t) => {
                t.forEach((t) => {
                    if (!t.isIntersecting) return;
                    t.target.classList.add("is-visible");
                    const cardGrid = t.target.closest(".solutions__grid, .skills__grid");
                    if (cardGrid) cardGrid.classList.add("is-border-visible");
                    e.unobserve(t.target);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        document.querySelectorAll("[data-reveal]").forEach((t) => {
            if (!t.closest(".hero, .about-us")) e.observe(t);
        });
    }
    const i = () => {
        const e = document.querySelectorAll(".status-expediente");
        if (0 !== e.length)
            try {
                const t = new Intl.DateTimeFormat("pt-BR", {
                        timeZone: "America/Sao_Paulo",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !1,
                    }).formatToParts(new Date()),
                    a = parseInt(t.find((e) => "hour" === e.type).value),
                    l = t.find((e) => "minute" === e.type).value,
                    i = a >= 9 && a < 18,
                    o = i ? `Disponível agora &middot; ${a}:${l} GMT-3` : "Indisponível &middot; Fora de expediente",
                    r = i ? "online" : "offline";
                e.forEach((e) => {
                    (e.innerHTML = o), (e.dataset.status = r);
                });
            } catch (e) {
                console.error("Erro ao calcular fuso horário:", e);
            }
    };
    i(), setInterval(i, 6e4);
    const o = document.querySelector(".header");
    if (o) {
        const e = () => {
            o.classList.toggle("is-scrolled", window.scrollY > 50);
        };
        window.addEventListener("scroll", () => requestAnimationFrame(e), { passive: !0 });
    }
    document.querySelector(".testimonials__swiper") &&
        new Swiper(".testimonials__swiper", {
            loop: !0,
            speed: l ? 0 : 800,
            grabCursor: !0,
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: { 1200: { slidesPerView: 3, spaceBetween: 32 } },
            pagination: { el: ".testimonials__pagination", clickable: !1 },
            watchSlidesProgress: !0,
            observer: !0,
            observeParents: !0,
        });
    const r = document.querySelector(".header__menu"),
        s = document.querySelector(".sidebar__close"),
        n = document.querySelector(".sidebar"),
        d = document.querySelector(".sidebar__overlay"),
        c = document.body,
        u = () => {
            n &&
                d &&
                (n.classList.remove("is-active"),
                d.classList.remove("is-active"),
                r && r.setAttribute("aria-expanded", "false"),
                document.querySelector(".contact-modal.is-active") || (c.style.overflow = ""));
        };
    r &&
        r.addEventListener("click", () => {
            n &&
                d &&
                (m(),
                n.classList.add("is-active"),
                d.classList.add("is-active"),
                r && r.setAttribute("aria-expanded", "true"),
                (c.style.overflow = "hidden"));
        }),
        s && s.addEventListener("click", u),
        d && d.addEventListener("click", u);
    const v = document.querySelectorAll('[data-modal="contacts"]'),
        _ = document.querySelector(".contacts"),
        p = document.querySelector(".contacts__overlay"),
        y = document.querySelector(".contacts__close"),
        h = (e) => {
            e && e.preventDefault(),
                _ &&
                    p &&
                    (u(), _.classList.add("is-active"), p.classList.add("is-active"), (c.style.overflow = "hidden"));
        },
        m = () => {
            _ &&
                p &&
                (_.classList.remove("is-active"),
                p.classList.remove("is-active"),
                n?.classList.contains("is-active") || (c.style.overflow = ""));
        };
    v && v.forEach((e) => e.addEventListener("click", h)),
        y && y.addEventListener("click", m),
        p && p.addEventListener("click", m);
    document.querySelectorAll('a[href^="#"]').forEach((e) => {
        e.addEventListener("click", function (e) {
            const t = this.getAttribute("href");
            if ("#" === t) return;
            const a = document.querySelector(t);
            a && (e.preventDefault(), u(), m(), a.scrollIntoView({ behavior: "smooth", block: "start" }));
        });
    });
    const f =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;margin-left:4px"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    (window.toggleTestimonials = (e) => {
        const t = e.previousElementSibling,
            a = "true" === t.dataset.toggle;
        (t.dataset.toggle = String(!a)),
            (e.innerHTML = a
                ? `Ler mais ${f}`
                : 'Ler menos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;margin-left:4px"><path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }),
        window.addEventListener("load", () => {
            document.querySelectorAll(".testimonial-card__text").forEach((e) => {
                const t = e.nextElementSibling;
                if (!t || !t.classList.contains("testimonials__card-btn")) return;
                t.innerHTML = `Ler mais ${f}`;
                const a = e.cloneNode(!0);
                (a.style.cssText = `\n                position: absolute;\n                visibility: hidden;\n                height: auto;\n                max-height: none;\n                display: block;\n                overflow: visible;\n                -webkit-line-clamp: unset;\n                -webkit-box-orient: unset;\n                width: ${e.offsetWidth}px;\n            `),
                    document.body.appendChild(a);
                const l = a.offsetHeight;
                document.body.removeChild(a);
                l <= e.offsetHeight && t.classList.add("hidden");
            });
        });
    if (window.matchMedia("(hover: hover)").matches && !l) {
        document.querySelectorAll(".hero__visual, .about-us__visual, .cases__visual").forEach((e) => {
            let t = null;
            e.addEventListener("mousemove", (a) => {
                cancelAnimationFrame(t),
                    (t = requestAnimationFrame(() => {
                        const t = e.getBoundingClientRect(),
                            l = (a.clientX - t.left - t.width / 2) / (t.width / 2),
                            i = (a.clientY - t.top - t.height / 2) / (t.height / 2);
                        e.style.transform = `perspective(900px) rotateX(${-(6 * i).toFixed(2)}deg) rotateY(${(6 * l).toFixed(2)}deg) scale3d(1.02,1.02,1.02)`;
                    }));
            }),
                e.addEventListener("mouseleave", () => {
                    cancelAnimationFrame(t),
                        (e.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
                });
        });
        const e = {
            ".btn--primary": { intensity: 0.25, scale: 1.02 },
            ".btn--secondary": { intensity: 0.25, scale: 1.02 },
            ".btn--large": { intensity: 0.15, scale: 1.01 },
        };
        Object.entries(e).forEach(([e, t]) => {
            document.querySelectorAll(e).forEach((e) => {
                let a = null;
                (e.style.willChange = "transform"),
                    e.addEventListener("mousemove", (l) => {
                        cancelAnimationFrame(a),
                            (a = requestAnimationFrame(() => {
                                const a = e.getBoundingClientRect(),
                                    i = (l.clientX - (a.left + a.width / 2)) * t.intensity,
                                    o = (l.clientY - (a.top + a.height / 2)) * t.intensity;
                                e.style.transform = `translate(${i.toFixed(2)}px, ${o.toFixed(2)}px) scale(${t.scale})`;
                            }));
                    }),
                    e.addEventListener("mouseleave", () => {
                        cancelAnimationFrame(a), (e.style.transform = "translate(0px, 0px) scale(1)");
                    });
            });
        });
    }
});