(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1540: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 7003)),
        Promise.resolve().then(r.bind(r, 4153)),
        Promise.resolve().then(r.bind(r, 8349)),
        Promise.resolve().then(r.bind(r, 4863)),
        Promise.resolve().then(r.bind(r, 6505)),
        Promise.resolve().then(r.bind(r, 16)),
        Promise.resolve().then(r.bind(r, 4467)),
        Promise.resolve().then(r.bind(r, 3478)),
        Promise.resolve().then(r.bind(r, 1716)),
        Promise.resolve().then(r.bind(r, 2611)),
        Promise.resolve().then(r.bind(r, 8544)),
        Promise.resolve().then(r.bind(r, 903));
    },
    7003: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(6036),
        s = r.n(i);
      function l() {
        let [e, t] = (0, o.useState)(!1),
          r = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && t(!0);
                });
              },
              { threshold: 0.1 }
            );
            return (
              r.current && e.observe(r.current),
              () => {
                r.current && e.unobserve(r.current);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            id: "about",
            className: "story",
            ref: r,
            children: (0, n.jsx)("div", {
              className: "story__container [class*='__container']",
              children: (0, n.jsx)("div", {
                className: "story__rows",
                children: (0, n.jsxs)("div", {
                  className: "story__row",
                  children: [
                    (0, n.jsx)("div", {
                      className: "story__image "
                        .concat(s().imageWrapper, " ")
                        .concat(e ? "_watcher-view" : ""),
                      children: (0, n.jsx)("div", {
                        className: s().imageContainer,
                        children: (0, n.jsx)(a.default, {
                          src: "/images/2.png",
                          alt: "About SHISA",
                          width: 500,
                          height: 375,
                          priority: !0,
                          style: {
                            width: "100%",
                            height: "auto",
                            display: "block",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "story__content ".concat(
                        e ? "_watcher-view" : ""
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: "story__content-title",
                          children: (0, n.jsx)("h2", {
                            className: "neon-text",
                            style: {
                              color: "#fffaec",
                              fontFamily: '"Gochi Hand", cursive',
                              fontSize: "clamp(2.5rem, 5vw, 5rem)",
                              fontWeight: 400,
                              marginBottom: "1.5rem",
                            },
                            children: "About",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "story__content-text",
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            backdropFilter: "blur(10px)",
                            padding: "1.5rem",
                            borderRadius: "1rem",
                            border: "0.125rem solid rgba(58, 23, 18, 0.2)",
                          },
                          children: [
                            (0, n.jsx)("p", {
                              style: {
                                fontFamily:
                                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                                lineHeight: "1.6",
                                color: "#2d0606",
                                marginBottom: "1rem",
                              },
                              children:
                                "Enter SHISA, the Master of All from Japan. Born from the legacy of and Imaginary Ones on japan, SHISA is more than a meme token—it’s a guiding force, a fighter, and a leader. Shisa protects you from certain evils. ",
                            }),
                            (0, n.jsx)("p", {
                              style: {
                                fontFamily:
                                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                                lineHeight: "1.6",
                                color: "#2d0606",
                              },
                              children:
                                "The traditional Japanese shisa has been revived and ward off evil spirits and bring good fortune.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    4153: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return c;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(7820),
        s = r.n(i);
      let l = ["/background.png", "/background2.png", "/background3.png"];
      function c() {
        let [e, t] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % l.length);
            }, 6e4);
            return () => clearInterval(e);
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: s().container,
                children: l.map((t, r) => {
                  let o;
                  return (
                    (o = r === e ? 0 : r === (e + 1) % l.length ? 1 : 2),
                    (0, n.jsx)(
                      "div",
                      {
                        className: ""
                          .concat(s().slide, " ")
                          .concat(
                            0 === o ? s().active : 1 === o ? s().next : s().prev
                          ),
                        children: (0, n.jsx)(a.default, {
                          src: t,
                          alt: "Background ".concat(r + 1),
                          fill: !0,
                          priority: 0 === r,
                          className: s().image,
                          style: { objectFit: "cover", objectPosition: "top" },
                        }),
                      },
                      t
                    )
                  );
                }),
              }),
              (0, n.jsx)("button", {
                onClick: () => {
                  t((e) => (e - 1 + l.length) % l.length);
                },
                className: ""
                  .concat(s().changeButton, " ")
                  .concat(s().changeButtonLeft),
                "aria-label": "Previous background",
                title: "Previous background",
                children: (0, n.jsx)("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, n.jsx)("path", {
                    d: "M15 18L9 12L15 6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
              (0, n.jsx)("button", {
                onClick: () => {
                  t((e) => (e + 1) % l.length);
                },
                className: ""
                  .concat(s().changeButton, " ")
                  .concat(s().changeButtonRight),
                "aria-label": "Next background",
                title: "Next background",
                children: (0, n.jsx)("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, n.jsx)("path", {
                    d: "M9 18L15 12L9 6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    8349: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a;
        },
      });
      var n = r(7437),
        o = r(7648);
      function a() {
        return (0, n.jsxs)("footer", {
          className: "footer",
          children: [
            (0, n.jsx)("div", {
              className: "footer__top",
              children: (0, n.jsx)("div", {
                className: "footer__top-body [class*='__container']",
                children: (0, n.jsxs)("div", {
                  className: "footer__top-menu",
                  children: [
                    (0, n.jsx)("div", {
                      className: "footer__top-menu-column",
                      children: [{ label: "About", href: "#about" }].map((e) =>
                        (0, n.jsx)(
                          o.default,
                          {
                            href: e.href,
                            className: "footer__top-menu-item",
                            children: (0, n.jsx)("span", {
                              style: {
                                color: "#3a1712",
                                fontFamily: '"Gochi Hand", cursive',
                                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                                fontWeight: 400,
                                textDecoration: "none",
                                borderBottom: "0.125rem solid #3a1712",
                                display: "inline-block",
                                paddingBottom: "0.125rem",
                              },
                              children: e.label,
                            }),
                          },
                          e.href
                        )
                      ),
                    }),
                    (0, n.jsx)("div", {
                      className: "footer__top-menu-column",
                      style: {
                        borderLeft: "0.125rem solid #3a1712",
                        paddingLeft: "2rem",
                        marginLeft: "2rem",
                      },
                      children: [
                        { label: "How to buy", href: "#how-to-buy" },
                        { label: "Tokenomics", href: "#tokenomics" },
                      ].map((e) =>
                        (0, n.jsx)(
                          o.default,
                          {
                            href: e.href,
                            className: "footer__top-menu-item",
                            children: (0, n.jsx)("span", {
                              style: {
                                color: "#3a1712",
                                fontFamily: '"Gochi Hand", cursive',
                                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                                fontWeight: 400,
                                textDecoration: "none",
                                borderBottom: "0.125rem solid #3a1712",
                                display: "inline-block",
                                paddingBottom: "0.125rem",
                              },
                              children: e.label,
                            }),
                          },
                          e.href
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: "footer__bottom",
              children: (0, n.jsx)("div", {
                className: "footer__body [class*='__container']",
                children: (0, n.jsx)("span", {
                  children: "2026 \xa9 ALL RIGHTS RESERVED",
                }),
              }),
            }),
          ],
        });
      }
    },
    4863: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(6036),
        s = r.n(i);
      function l() {
        let [e, t] = (0, o.useState)(!1),
          r = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && t(!0);
                });
              },
              { threshold: 0.1 }
            );
            return (
              r.current && e.observe(r.current),
              () => {
                r.current && e.unobserve(r.current);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            id: "future",
            className: "story",
            ref: r,
            children: (0, n.jsx)("div", {
              className: "story__container [class*='__container']",
              children: (0, n.jsx)("div", {
                className: "story__rows",
                children: (0, n.jsxs)("div", {
                  className: "story__row",
                  children: [
                    (0, n.jsx)("div", {
                      className: "story__image "
                        .concat(s().imageWrapper, " ")
                        .concat(e ? "_watcher-view" : ""),
                      children: (0, n.jsx)("div", {
                        className: s().imageContainer,
                        children: (0, n.jsx)(a.default, {
                          src: "/images/5.jpg",
                          alt: "Future",
                          width: 500,
                          height: 375,
                          style: {
                            width: "100%",
                            height: "auto",
                            display: "block",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "story__content ".concat(
                        e ? "_watcher-view" : ""
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: "story__content-title",
                          children: (0, n.jsx)("h2", {
                            className: "neon-text",
                            style: {
                              color: "#fffaec",
                              fontFamily: '"Gochi Hand", cursive',
                              fontSize: "clamp(2.5rem, 5vw, 5rem)",
                              fontWeight: 400,
                              marginBottom: "1.5rem",
                            },
                            children: "The Future",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "story__content-text",
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            backdropFilter: "blur(10px)",
                            padding: "1.5rem",
                            borderRadius: "1rem",
                            border: "0.125rem solid rgba(58, 23, 18, 0.2)",
                          },
                          children: (0, n.jsx)("p", {
                            style: {
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                              fontSize: "clamp(1rem, 2vw, 1.25rem)",
                              lineHeight: "1.6",
                              color: "#2d0606",
                            },
                            children:
                              "SHISA smiled brightly. \"That's because you're trying alone! I may not be as strong as you, but together, we can create something amazing!\"",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    6505: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(7311),
        s = r.n(i);
      function l() {
        let [e, t] = (0, o.useState)(!1),
          [r, i] = (0, o.useState)(new Set()),
          [l, c] = (0, o.useState)(0),
          d = (0, o.useRef)(null),
          m = Array.from({ length: 15 }, (e, t) =>
            "/memes/".concat(t + 9, ".jpg")
          );
        (0, o.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                e.isIntersecting && t(!0);
              });
            },
            { threshold: 0.1 }
          );
          return (
            d.current && e.observe(d.current),
            () => {
              d.current && e.unobserve(d.current);
            }
          );
        }, []),
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = 0,
              r = window.innerWidth <= 768 ? 200 : 150,
              n = () => {
                !(t >= m.length) && (c(t), ++t < m.length && setTimeout(n, r));
              };
            n();
          }, [e, m.length]);
        let h = (e, t) => {
            let r = e.currentTarget,
              n = r.getBoundingClientRect(),
              o = e.clientX - n.left,
              a = e.clientY - n.top,
              i = n.width / 2,
              l = n.height / 2,
              c = r.querySelector(".".concat(s().galleryImage));
            c &&
              (c.style.transform = "scale(1.03) translate("
                .concat(((o - i) / i) * 4, "px, ")
                .concat(((a - l) / l) * 4, "px)"));
          },
          u = (e) => {
            let t = e.currentTarget.querySelector(".".concat(s().galleryImage));
            t && (t.style.transform = "scale(1.03)");
          };
        return (0, n.jsx)("section", {
          id: "gallery",
          className: s().gallery,
          ref: d,
          children: (0, n.jsxs)("div", {
            className: "".concat(
              s().galleryContainer,
              " [class*='__container']"
            ),
            children: [
              (0, n.jsx)("div", {
                className: ""
                  .concat(s().galleryTitle, " ")
                  .concat(e ? "_watcher-view" : ""),
                children: (0, n.jsx)("h2", {
                  className: "neon-text",
                  style: {
                    color: "#fffaec",
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 400,
                    textAlign: "center",
                    marginBottom: "3rem",
                  },
                  children: "Gallery",
                }),
              }),
              (0, n.jsx)("div", {
                className: ""
                  .concat(s().galleryGrid, " ")
                  .concat(e ? s().visible : ""),
                children: m.map((e, t) => {
                  let o = r.has(t);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: ""
                        .concat(s().galleryItem, " ")
                        .concat(o ? s().loaded : ""),
                      style: { animationDelay: "".concat(0.08 * t, "s") },
                      onMouseMove: (e) => h(e, t),
                      onMouseLeave: u,
                      children: (0, n.jsxs)("div", {
                        className: s().imageWrapper,
                        children: [
                          (0, n.jsx)("div", { className: s().glassBackground }),
                          t <= l &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(a.default, {
                                  src: e,
                                  alt: "Gallery image ".concat(t + 9),
                                  width: 400,
                                  height: 300,
                                  className: s().galleryImage,
                                  loading: 0 === t ? "eager" : "lazy",
                                  onLoad: () => {
                                    i((e) => {
                                      let r = new Set(e);
                                      return r.add(t), r;
                                    });
                                  },
                                  style: {
                                    transition: "opacity 0.4s ease",
                                    opacity: o ? 1 : 0,
                                  },
                                }),
                                !o &&
                                  (0, n.jsx)("div", {
                                    className: s().imagePlaceholder,
                                    children: (0, n.jsx)("div", {
                                      className: s().loadingSpinner,
                                    }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                    },
                    e
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    16: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a;
        },
      });
      var n = r(7437),
        o = r(2265);
      function a() {
        let [e, t] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            t(!0);
          }, []),
          (0, n.jsx)("section", {
            className: "hero",
            children: (0, n.jsx)("div", {
              className: "hero__container [class*='__container']",
              children: (0, n.jsx)("div", {
                className: "hero__label ".concat(e ? "loaded" : ""),
                children: (0, n.jsxs)("div", {
                  style: {
                    color: "#fffdda",
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 400,
                    lineHeight: "1.2",
                    textShadow:
                      "2px 2px 4px rgba(58, 23, 18, 0.5), 0 0 5px rgba(144, 238, 144, 0.5), 0 0 10px rgba(144, 238, 144, 0.4), 0 0 15px rgba(144, 238, 144, 0.3)",
                    whiteSpace: "nowrap",
                  },
                  children: [
                    "Come home. ",
                    (0, n.jsx)("span", {
                      style: { fontSize: "1.3em", fontWeight: "bold" },
                      children: "Mom",
                    }),
                    " is here.",
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    4467: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return c;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(7648),
        s = r(7299),
        l = r.n(s);
      function c() {
        let [e, t] = (0, o.useState)(!1),
          [r, s] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            t(!0);
            let e = () => {
              window.scrollY > 300 ? s(!0) : s(!1);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, n.jsxs)("div", {
            className: ""
              .concat(l().container, " ")
              .concat(e ? l().loaded : "", " ")
              .concat(r ? l().hidden : ""),
            children: [
              (0, n.jsx)("div", {
                className: l().logoContainer,
                children: (0, n.jsx)(a.default, {
                  src: "/logo2.png",
                  alt: "SHISA Logo",
                  width: 500,
                  height: 500,
                  priority: !0,
                  className: l().logoImage,
                }),
              }),
              (0, n.jsx)(i.default, {
                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                target: "_blank",
                rel: "noopener noreferrer",
                className: l().button,
                children: (0, n.jsx)("span", {
                  style: {
                    textShadow:
                      "0 0 3px rgba(144, 238, 144, 0.5), 0 0 6px rgba(144, 238, 144, 0.4), 0 0 9px rgba(144, 238, 144, 0.3)",
                  },
                  children: "Buy now!",
                }),
              }),
              (0, n.jsxs)("div", {
                className: l().socialContainer,
                children: [
                  (0, n.jsx)(i.default, {
                    href: "https://t.me/ShisatheShiba",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: ""
                      .concat(l().socialItem, " ")
                      .concat(l().rotateOnHover),
                    children: (0, n.jsx)(a.default, {
                      src: "/telegram.png",
                      alt: "Telegram",
                      width: 91,
                      height: 91,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      },
                    }),
                  }),
                  (0, n.jsx)(i.default, {
                    href: "https://x.com/ShisatheShiba",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: ""
                      .concat(l().socialItem, " ")
                      .concat(l().rotateOnHover),
                    children: (0, n.jsx)(a.default, {
                      src: "/twitter.png",
                      alt: "Twitter",
                      width: 74,
                      height: 74,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      },
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    3478: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(6036),
        s = r.n(i);
      function l() {
        let [e, t] = (0, o.useState)(!1),
          r = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && t(!0);
                });
              },
              { threshold: 0.1 }
            );
            return (
              r.current && e.observe(r.current),
              () => {
                r.current && e.unobserve(r.current);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            id: "how-to-buy",
            className: "how",
            ref: r,
            style: {
              marginTop: "2rem",
              paddingTop: "3rem",
              paddingBottom: "2rem",
            },
            children: (0, n.jsxs)("div", {
              className: "how__container [class*='__container']",
              children: [
                (0, n.jsx)("div", {
                  className: "how__title ".concat(e ? "_watcher-view" : ""),
                  children: (0, n.jsx)("h2", {
                    style: {
                      color: "#fffaec",
                      fontFamily: '"Gochi Hand", cursive',
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 400,
                      textAlign: "center",
                      marginBottom: "2rem",
                      textShadow:
                        "0 0 5px rgba(144, 238, 144, 0.5), 0 0 10px rgba(144, 238, 144, 0.4), 0 0 15px rgba(144, 238, 144, 0.3), 0 0 20px rgba(144, 238, 144, 0.2)",
                    },
                    children: "How to buy",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "how__content",
                  children: (0, n.jsx)("div", {
                    className: "how__items",
                    children: [
                      {
                        number: "1",
                        title: "CREATE A WALLET",
                        description:
                          "Download the MetaMask or Trust wallet extension from the official website and install it in your browser. Fund it by transferring ETH from an exchange or another wallet.",
                      },
                      {
                        number: "2",
                        title: "CONNECT TO DEX",
                        description:
                          'Connect to a decentralized exchange (DEX) like Uniswap. Open the DEX website and click on "Connect wallet". Then select your ETH wallet.',
                      },
                      {
                        number: "3",
                        title: "SWAP ETH FOR $SHISA",
                        description:
                          'To swap ETH for SHISA, select ETH in the "from" field and choose SHISA in the "to" field using our contract address. Enter the amount of tokens you want & press swap.',
                      },
                      {
                        number: "4",
                        title: "VERIFY & MANAGE TOKENS",
                        description:
                          'Verify your transaction status in your wallet under the "Activity" tab or on Etherscan using your Ethereum address. You import the token to your wallet by pasting in the contract address.',
                      },
                    ].map((t, r) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className: "how__item ".concat(
                            e ? "_watcher-view" : ""
                          ),
                          children: [
                            (0, n.jsx)("div", {
                              className: "how__item-number",
                              children: (0, n.jsx)("span", {
                                style: {
                                  color: "#fffaec",
                                  fontFamily: '"Gochi Hand", cursive',
                                  fontSize: "clamp(2rem, 3vw, 3rem)",
                                  fontWeight: 400,
                                },
                                children: t.number,
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "how__item-content",
                              children: [
                                (0, n.jsx)("h4", { children: t.title }),
                                (0, n.jsx)("p", { children: t.description }),
                              ],
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "how__image ".concat(e ? "_watcher-view" : ""),
                  children: (0, n.jsx)("div", {
                    className: s().imageContainer,
                    style: { maxWidth: "600px", margin: "0 auto" },
                    children: (0, n.jsx)(a.default, {
                      src: "/images/7.jpg",
                      alt: "How to Buy SHISA",
                      width: 600,
                      height: 450,
                      style: {
                        width: "100%",
                        height: "auto",
                        display: "block",
                      },
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    1716: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return c;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(7648),
        s = r(8698),
        l = r.n(s);
      function c() {
        let [e, t] = (0, o.useState)(!1),
          [r, s] = (0, o.useState)(!1),
          c = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = () => {
              s(window.innerWidth <= 768);
            };
            e(), window.addEventListener("resize", e);
            let r = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && t(!0);
                });
              },
              { threshold: 0.1 }
            );
            return (
              c.current && r.observe(c.current),
              () => {
                window.removeEventListener("resize", e),
                  c.current && r.unobserve(c.current);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            id: "join",
            className: "join",
            ref: c,
            style: { paddingTop: "4rem" },
            children: (0, n.jsxs)("div", {
              className: "join__container [class*='__container']",
              children: [
                (0, n.jsx)("div", {
                  className: "".concat(l().arcText, " join__title"),
                  style: { marginBottom: "3rem" },
                  children: (0, n.jsx)("h2", {
                    style: {
                      color: "#fffaec",
                      fontFamily: '"Gochi Hand", cursive',
                      fontSize: "clamp(2rem, 6vw, 8rem)",
                      fontWeight: 400,
                      textAlign: "center",
                      textShadow:
                        "2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 5px rgba(144, 238, 144, 0.5), 0 0 10px rgba(144, 238, 144, 0.4), 0 0 15px rgba(144, 238, 144, 0.3), 0 0 20px rgba(144, 238, 144, 0.2)",
                      letterSpacing: "0.05em",
                      lineHeight: "1.4",
                      padding: "1rem",
                      wordBreak: "break-word",
                    },
                    children: "Join SHISA".split("").map((e, t) => {
                      if (" " === e)
                        return (0, n.jsx)(
                          "span",
                          { style: { width: "0.2em" }, children: " " },
                          t
                        );
                      let o = Math.sin((t / 8) * Math.PI) * (r ? 8 : 20),
                        a = (t / 8 - 0.5) * (r ? 4 : 10);
                      return (0, n.jsx)(
                        "span",
                        {
                          className: l().arcLetter,
                          style: {
                            display: "inline-block",
                            transform: "translateY("
                              .concat(-o, "px) rotateZ(")
                              .concat(a, "deg)"),
                            transformOrigin: "center bottom",
                          },
                          children: e,
                        },
                        t
                      );
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "join__actions",
                  children: [
                    (0, n.jsx)(i.default, {
                      href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "join__button",
                      style: { opacity: 0.7, transform: "scale(0.95)" },
                      children: (0, n.jsx)("div", {
                        style: {
                          color: "#3a1712",
                          fontFamily: '"Gochi Hand", cursive',
                          fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                          fontWeight: 400,
                          padding: "0.875rem 1.75rem",
                          backgroundColor: "#ffffff",
                          borderRadius: "1.5rem",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textAlign: "center",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          border: "0.125rem solid rgba(58, 23, 18, 0.3)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        },
                        children: "Buy now",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "join__social",
                      children: [
                        {
                          name: "Telegram",
                          href: "https://t.me/ShisatheShiba",
                          icon: "/telegram.png",
                          size: "5.6875rem",
                        },
                        {
                          name: "Twitter",
                          href: "https://x.com/ShisatheShiba",
                          icon: "/twitter.png",
                          size: "4.625rem",
                        },
                        {
                          name: "DexScreener",
                          href: "https://dexscreener.com/ethereum/0xcomingsoon",
                          icon: "/dexscreener.png",
                          size: "5rem",
                        },
                        {
                          name: "DexTools",
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                          icon: "/dextools.png",
                          size: "5rem",
                        },
                      ].map((e, t) =>
                        (0, n.jsx)(
                          i.default,
                          {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "join__social-item",
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#ffffff",
                              borderRadius: "50%",
                              padding: "0.5rem",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                              border: "2px solid #3a1712",
                              transition: "all 0.3s ease",
                              textDecoration: "none",
                              width: e.size,
                              height: e.size,
                            },
                            children: (0, n.jsx)(a.default, {
                              src: e.icon,
                              alt: e.name,
                              width: 100,
                              height: 100,
                              style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              },
                            }),
                          },
                          e.name
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    2611: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(7648);
      function s() {
        let [e, t] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(
            () => (
              e
                ? document.body.classList.add("menu-open")
                : document.body.classList.remove("menu-open"),
              () => {
                document.body.classList.remove("menu-open");
              }
            ),
            [e]
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("header", {
                className: "header",
                children: (0, n.jsxs)("div", {
                  className: "header__container [class*='__container']",
                  children: [
                    (0, n.jsx)(i.default, {
                      href: "/",
                      className: "header__logo",
                      children: (0, n.jsx)(a.default, {
                        src: "/logo.png",
                        alt: "SHISA Logo",
                        width: 191,
                        height: 80,
                        priority: !0,
                        style: { width: "auto", height: "auto" },
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "header__right",
                      children: [
                        (0, n.jsx)("nav", {
                          className: "menu__body",
                          children: (0, n.jsx)("ul", {
                            className: "menu__list",
                            children: [
                              { label: "About", href: "#about" },
                              { label: "How to buy?", href: "#how-to-buy" },
                              { label: "Tokenomics", href: "#tokenomics" },
                            ].map((e) =>
                              (0, n.jsx)(
                                "li",
                                {
                                  className: "menu__item",
                                  children: (0, n.jsx)(i.default, {
                                    href: e.href,
                                    className: "menu__link",
                                    onClick: () => t(!1),
                                    children: (0, n.jsx)("span", {
                                      children: e.label,
                                    }),
                                  }),
                                },
                                e.href
                              )
                            ),
                          }),
                        }),
                        (0, n.jsx)(i.default, {
                          href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "header__button",
                          children: (0, n.jsx)("span", {
                            children: "Buy now!",
                          }),
                        }),
                        (0, n.jsx)("button", {
                          className: "icon-menu",
                          onClick: () => t(!e),
                          "aria-label": "Toggle menu",
                          children: (0, n.jsx)("span", {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className: "menu-open-bg",
                onClick: () => t(!1),
              }),
            ],
          })
        );
      }
    },
    8544: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        o = r(2265),
        a = r(3145),
        i = r(6036),
        s = r.n(i);
      function l() {
        let [e, t] = (0, o.useState)(!1),
          r = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && t(!0);
                });
              },
              { threshold: 0.1 }
            );
            return (
              r.current && e.observe(r.current),
              () => {
                r.current && e.unobserve(r.current);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            id: "origin",
            className: "story",
            ref: r,
            children: (0, n.jsx)("div", {
              className: "story__container [class*='__container']",
              children: (0, n.jsx)("div", {
                className: "story__rows",
                children: (0, n.jsxs)("div", {
                  className: "story__row reverse",
                  children: [
                    (0, n.jsx)("div", {
                      className: "story__image "
                        .concat(s().imageWrapper, " ")
                        .concat(e ? "_watcher-view" : ""),
                      children: (0, n.jsx)("div", {
                        className: s().imageContainer,
                        children: (0, n.jsx)(a.default, {
                          src: "/images/4.jpg",
                          alt: "Origin",
                          width: 500,
                          height: 375,
                          style: {
                            width: "100%",
                            height: "auto",
                            display: "block",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "story__content ".concat(
                        e ? "_watcher-view" : ""
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: "story__content-title",
                          children: (0, n.jsx)("h2", {
                            className: "neon-text",
                            style: {
                              color: "#fffaec",
                              fontFamily: '"Gochi Hand", cursive',
                              fontSize: "clamp(2.5rem, 5vw, 5rem)",
                              fontWeight: 400,
                              marginBottom: "1.5rem",
                            },
                            children: "Origin",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "story__content-text",
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            backdropFilter: "blur(10px)",
                            padding: "1.5rem",
                            borderRadius: "1rem",
                            border: "0.125rem solid rgba(58, 23, 18, 0.2)",
                          },
                          children: (0, n.jsx)("p", {
                            style: {
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                              fontSize: "clamp(1rem, 2vw, 1.25rem)",
                              lineHeight: "1.6",
                              color: "#2d0606",
                            },
                            children:
                              "Protector of japan has been reborn to protect you from Evil.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    903: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a;
        },
      });
      var n = r(7437),
        o = r(2265);
      function a() {
        let [e, t] = (0, o.useState)(!1),
          r = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                e.isIntersecting && t(!0);
              });
            },
            { threshold: 0.1 }
          );
          return (
            r.current && e.observe(r.current),
            () => {
              r.current && e.unobserve(r.current);
            }
          );
        }, []);
        let a = "0xcomingsoon";
        return (0, n.jsx)("section", {
          id: "tokenomics",
          className: "tokenomics",
          ref: r,
          children: (0, n.jsxs)("div", {
            className: "tokenomics__container [class*='__container']",
            children: [
              (0, n.jsx)("div", {
                className: "tokenomics__title",
                children: (0, n.jsx)("h2", {
                  style: {
                    color: "#fffaec",
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: "clamp(2rem, 4vw, 4rem)",
                    fontWeight: 400,
                    textAlign: "center",
                    textShadow:
                      "0 0 5px rgba(144, 238, 144, 0.5), 0 0 10px rgba(144, 238, 144, 0.4), 0 0 15px rgba(144, 238, 144, 0.3), 0 0 20px rgba(144, 238, 144, 0.2)",
                  },
                  children: "Tokenomics",
                }),
              }),
              (0, n.jsxs)("div", {
                className: "tokenomics__body",
                children: [
                  (0, n.jsx)("div", {
                    className: "tokenomics__items ".concat(
                      e ? "_watcher-view" : ""
                    ),
                    children: [
                      { label: "Initial Supply", value: "1B" },
                      { label: "Liquidity", value: "Locked" },
                      { label: "Ownership", value: "Renounced" },
                    ].map((e, t) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: "tokenomics__item",
                          children: (0, n.jsxs)("div", {
                            style: {
                              width: "fit-content",
                              backgroundColor: "#fffaec",
                              padding: "1.5rem",
                              borderRadius: "1rem",
                              border: "0.25rem solid #3a1712",
                              textAlign: "center",
                            },
                            children: [
                              (0, n.jsx)("div", {
                                style: {
                                  color: "#3a1712",
                                  fontFamily: '"Gochi Hand", cursive',
                                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                  fontWeight: 400,
                                  marginBottom: "0.5rem",
                                },
                                children: e.value,
                              }),
                              (0, n.jsx)("div", {
                                style: {
                                  color: "#3a1712",
                                  fontFamily: '"Gochi Hand", cursive',
                                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                                  fontWeight: 400,
                                },
                                children: e.label,
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: "tokenomics__ca",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        style: {
                          width: "4rem",
                          height: "4rem",
                          backgroundColor: "#3a1712",
                          border: "0.25rem solid #5a2d1a",
                          borderRadius: "0.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        },
                        children: (0, n.jsx)("span", {
                          style: {
                            color: "#fffaec",
                            fontFamily: '"Gochi Hand", cursive',
                            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                            fontWeight: 400,
                          },
                          children: "CA:",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        onClick: () => {
                          navigator.clipboard.writeText(a);
                        },
                        style: {
                          flex: 1,
                          maxWidth: "500px",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#fffbc6",
                          border: "0.25rem solid #3a1712",
                          borderRadius: "0.5rem",
                          color: "#3a1712",
                          fontFamily: "monospace",
                          fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.2s ease",
                          wordBreak: "break-all",
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.backgroundColor = "#fff9b0";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.backgroundColor = "#fffbc6";
                        },
                        children: a,
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => {
                          navigator.clipboard.writeText(a);
                        },
                        style: {
                          width: "4rem",
                          height: "4rem",
                          padding: "0.5rem",
                          backgroundColor: "#fffaec",
                          border: "0.25rem solid #3a1712",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.backgroundColor = "#fff9b0";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.backgroundColor = "#fffaec";
                        },
                        "aria-label": "Copy contract address",
                        children: (0, n.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, n.jsx)("path", {
                            d: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z",
                            fill: "#3a1712",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    6036: function (e) {
      e.exports = {
        imageWrapper: "About_imageWrapper__TXoMW",
        imageContainer: "About_imageContainer__KkEZQ",
      };
    },
    7820: function (e) {
      e.exports = {
        container: "Background3D_container__fO4iR",
        slide: "Background3D_slide__CdlXc",
        active: "Background3D_active____5pq",
        next: "Background3D_next__pzwMe",
        prev: "Background3D_prev__fsmpg",
        image: "Background3D_image__YAPxl",
        changeButton: "Background3D_changeButton__JSYIS",
        changeButtonLeft: "Background3D_changeButtonLeft__xC_TL",
        changeButtonRight: "Background3D_changeButtonRight__UAsMG",
        slideIn: "Background3D_slideIn__q3gJS",
        slideOut: "Background3D_slideOut__Qv4YE",
      };
    },
    7311: function (e) {
      e.exports = {
        gallery: "Gallery_gallery__HejGD",
        galleryContainer: "Gallery_galleryContainer__8e5gV",
        galleryTitle: "Gallery_galleryTitle__64943",
        "_watcher-view": "Gallery__watcher-view__ZPmUK",
        galleryGrid: "Gallery_galleryGrid__xz0iU",
        visible: "Gallery_visible__qvS5L",
        galleryItem: "Gallery_galleryItem__9URvP",
        fadeInUp: "Gallery_fadeInUp__Us1EY",
        loaded: "Gallery_loaded__GLACv",
        imageWrapper: "Gallery_imageWrapper__jOR1I",
        glassBackground: "Gallery_glassBackground__kVWBM",
        galleryImage: "Gallery_galleryImage__EDlly",
        imagePlaceholder: "Gallery_imagePlaceholder__KgZ9F",
        loadingSpinner: "Gallery_loadingSpinner__RwEI3",
        spin: "Gallery_spin__jOviy",
      };
    },
    7299: function (e) {
      e.exports = {
        container: "HeroActions_container__0_G0_",
        loaded: "HeroActions_loaded__caQRr",
        hidden: "HeroActions_hidden__lK2Ke",
        logoContainer: "HeroActions_logoContainer__h_u18",
        logoImage: "HeroActions_logoImage__0Z1Mn",
        button: "HeroActions_button__BBlN4",
        socialContainer: "HeroActions_socialContainer__Mosko",
        socialItem: "HeroActions_socialItem__5SCYi",
        rotateOnHover: "HeroActions_rotateOnHover__pU1xp",
        rotateTelegram: "HeroActions_rotateTelegram__Z4BEa",
        rotateTwitter: "HeroActions_rotateTwitter__rHD3M",
      };
    },
    8698: function (e) {
      e.exports = {
        arcText: "Join_arcText__baZey",
        arcLetter: "Join_arcLetter__100eO",
        arc: "Join_arc__EHaVN",
      };
    },
  },
  function (e) {
    e.O(0, [837, 726, 971, 117, 744], function () {
      return e((e.s = 1540));
    }),
      (_N_E = e.O());
  },
]);
