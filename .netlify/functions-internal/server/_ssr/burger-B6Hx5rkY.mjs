import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse } from "./router-wC-ZHVBq.mjs";
import { d as searStats, f as smashLineup, h as smashToppings, m as smashSizes, o as ksh, p as smashPreview, t as Frame } from "./chrome-eG014fjQ.mjs";
import { t as CountUp } from "./bits-BkYKSVfu.mjs";
import { a as smashCuts, n as CookFilm, r as LoopFilm, t as Anatomy } from "./films-BExw81Ie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/burger-B6Hx5rkY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmashPage() {
	const { add } = useHouse();
	const [sizeId, setSizeId] = (0, import_react.useState)("M");
	const [tops, setTops] = (0, import_react.useState)([]);
	const [temp, setTemp] = (0, import_react.useState)(90);
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const el = document.getElementById("sear");
		if (!el) return;
		let frame = 0;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			if (reduced) {
				setTemp(222);
				return;
			}
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min(1, (now - start) / 2800);
				setTemp(Math.round(90 + 132 * (1 - (1 - p) ** 3)));
				if (p < 1) frame = requestAnimationFrame(tick);
			};
			frame = requestAnimationFrame(tick);
		}, { threshold: .35 });
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(frame);
		};
	}, []);
	const size = smashSizes.find((item) => item.id === sizeId) ?? smashSizes[1];
	const chosen = smashToppings.filter((item) => tops.includes(item.id));
	const total = size.price + chosen.reduce((sum, item) => sum + item.price, 0);
	const preview = (0, import_react.useMemo)(() => smashPreview(sizeId, tops), [sizeId, tops]);
	function toggle(id) {
		setTops((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookFilm, {
			cuts: smashCuts,
			heading: "h1",
			stack: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ash py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "// 01 The line-up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Three builds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: smashLineup.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card overflow-hidden border border-ivory/10 bg-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.name,
									className: "zoom h-64 w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-mute",
										children: item.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl",
											children: ksh(item.price)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "tap bg-ember px-4 py-3 text-kicker text-ink uppercase",
											onClick: () => add({
												name: item.name,
												detail: "Smash line",
												price: item.price,
												image: item.image
											}),
											children: "Add"
										})]
									})
								]
							})]
						}, item.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "// 02 Build your smash"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Choose the press."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker text-mute uppercase",
								children: "01 · Weight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-3 gap-3",
								children: smashSizes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": sizeId === item.id,
									onClick: () => setSizeId(item.id),
									className: `tap border p-2 text-left ${sizeId === item.id ? "border-ember" : "border-ivory/15"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.id === "S" ? "/kitchen/burger-single.jpg" : item.id === "M" ? "/kitchen/burger-double.jpg" : "/kitchen/burger-chicken.jpg",
											alt: "",
											className: "h-24 w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block font-display text-3xl",
											children: item.letter
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-sm text-mute",
											children: [item.name, item.grams ? ` · ${item.grams}g` : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm",
											children: ksh(item.price)
										})
									]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-kicker text-mute uppercase",
								children: "02 · On the crown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2 sm:grid-cols-2",
								children: smashToppings.map((item) => {
									const on = tops.includes(item.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": on,
										onClick: () => toggle(item.id),
										className: `tap flex w-full items-center gap-3 border p-2 text-left ${on ? "border-ember bg-ivory/5" : "border-ivory/15"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.image,
												alt: "",
												className: "size-12 shrink-0 object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm text-mute",
													children: on ? "On the smash" : item.note
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 text-sm text-ember",
												children: on ? "On" : `+${ksh(item.price)}`
											})
										]
									}) }, item.id);
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-ivory/10 bg-ash",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-96 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: preview,
										alt: "",
										className: "arrive h-full w-full object-cover"
									}, preview),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "letter-in letter-glow pointer-events-none absolute inset-0 flex items-center justify-center font-display text-mega",
										children: size.letter
									}, size.letter)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 p-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											size.name,
											" · ",
											size.grams,
											"g"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ksh(size.price) })]
									}),
									chosen.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-mute",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ksh(item.price) })]
									}, item.id)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between border-t border-ivory/10 pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-kicker uppercase",
											children: "Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ember-num font-display text-4xl",
											children: ksh(total)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap mt-2 w-full bg-ember py-4 text-kicker text-ink uppercase",
										onClick: () => add({
											name: `Smash · ${size.name}`,
											detail: chosen.length ? chosen.map((item) => item.name).join(", ") : "Plain lace",
											price: total,
											image: preview
										}),
										children: "Order this smash"
									})
								]
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ivory/10 bg-ash",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4",
				children: searStats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ember-num font-display text-stat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: stat.n,
							suffix: stat.suffix
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-kicker uppercase",
						children: stat.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: stat.note
					})
				] }, stat.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "sear",
			className: "relative min-h-stage overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopFilm, {
					src: "/films/smoke.mp4",
					poster: "/kitchen/grill.jpg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0 z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative z-10 grid min-h-stage items-end gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker uppercase",
								children: "// 04 The sear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-display",
								children: "The beef waits."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-ivory/80",
								children: "Steel climbs. One press when it gets there. A second press is how you lose the juice."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "ember-num font-display text-mega leading-none",
							children: [temp, "°"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "thermo",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { height: `${Math.min(100, Math.max(8, (temp - 90) / 132 * 100))}%` } })
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "The close"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-mega",
						children: "Reserve the smash."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-mute",
						children: "The steel is lit from noon. Tell the house the hour and how many are coming."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reserve",
						className: "tap mt-8 inline-block bg-ember px-8 py-4 text-kicker text-ink uppercase",
						children: "Book the steel"
					})
				]
			})
		})
	] });
}
var SplitComponent = function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmashPage, {}) });
};
//#endregion
export { SplitComponent as component };
