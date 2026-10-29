import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse } from "./router-wC-ZHVBq.mjs";
import { o as ksh, t as Frame } from "./chrome-eG014fjQ.mjs";
import { i as ReserveBand } from "./bits-BkYKSVfu.mjs";
import { r as LoopFilm } from "./films-BExw81Ie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/story-aTTZCFIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BEAT = 4200;
var steps = [
	{
		id: "salt",
		n: "01",
		title: "Salt the goat",
		time: "20 minutes",
		image: "/kitchen/goat.jpg",
		line: "700 g leg, cut 1.5 cm, fat left on. 12 g fine salt. It should look wet, not swimming.",
		measure: "700 g"
	},
	{
		id: "oil",
		n: "02",
		title: "Wake the oil",
		time: "90 seconds",
		image: "/kitchen/pour.jpg",
		line: "40 ml neutral oil, wide pan, medium-high. A single cumin seed should sizzle in one second. Fish it out.",
		measure: "40 ml"
	},
	{
		id: "tin",
		n: "03",
		title: "The tin",
		time: "20 seconds",
		image: "/kitchen/xawaash.jpg",
		line: "18 g xawaash into the oil. Wait until the kitchen smells sweet. If it smokes, the pan was too hot. Start again. Bitter spice cannot be saved.",
		measure: "18 g"
	},
	{
		id: "face",
		n: "04",
		title: "One brown face",
		time: "90 seconds, untouched",
		image: "/kitchen/grill.jpg",
		line: "Goat in a single layer. Do not stir. You want a brown face, not a grey stew.",
		measure: "90 s"
	},
	{
		id: "aroma",
		n: "05",
		title: "Onion, chili, tomato",
		time: "4 minutes",
		image: "/kitchen/hands.jpg",
		line: "Onion sliced with the grain, two split green chilies, three minutes. One tomato, crushed by hand, ninety seconds. The pan must finish dry.",
		measure: "4 min"
	},
	{
		id: "plate",
		n: "06",
		title: "Off the flame",
		time: "At the table",
		image: "/kitchen/suqaar.jpg",
		line: "Lime. Cilantro leaves. Canjeero beside the plate, never under it. Subag only if the table asks.",
		measure: "Dry"
	}
];
var mise = [
	["Goat leg, 1.5 cm", "700 g"],
	["Fine salt", "12 g"],
	["Neutral oil", "40 ml"],
	["Xawaash, the tin", "18 g"],
	["Onion, with the grain", "1 large"],
	["Green chili, split", "2"],
	["Tomato, crushed", "1"],
	["Lime", "1"],
	["Cilantro, leaves", "a handful"]
];
var tin = [
	["Cumin", "6 g"],
	["Coriander", "4 g"],
	["Black pepper", "3 g"],
	["Turmeric", "2 g"],
	["Chili", "2 g"],
	["Cardamom, clove, cinnamon", "1 g"]
];
function StoryPage() {
	const { add } = useHouse();
	const [i, setI] = (0, import_react.useState)(0);
	const step = steps[i] ?? steps[0];
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setTimeout(() => setI((n) => (n + 1) % steps.length), BEAT);
		return () => window.clearTimeout(id);
	}, [i]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (event.key === "ArrowRight") setI((n) => (n + 1) % steps.length);
			if (event.key === "ArrowLeft") setI((n) => (n - 1 + steps.length) % steps.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-stage overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopFilm, {
					src: "/films/chef.mp4",
					poster: "/kitchen/suqaar.jpg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0 z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative z-10 flex min-h-stage flex-col justify-end pb-24 pt-nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ember uppercase",
							children: "The house recipe · serves four · 35 minutes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-display",
								children: "Suqaar ari."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ember-num arrive font-display text-stat",
								children: step.measure
							}, step.measure)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "arrive mt-4 max-w-xl text-lg text-ivory",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-ember",
									children: [
										step.n,
										" ",
										step.title,
										"."
									]
								}),
								" ",
								step.line
							]
						}, step.id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "tap size-11 border border-ivory/30",
									"aria-label": "Previous step",
									onClick: () => setI((n) => (n - 1 + steps.length) % steps.length),
									children: "‹"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "tap size-11 border border-ivory/30",
									"aria-label": "Next step",
									onClick: () => setI((n) => (n + 1) % steps.length),
									children: "›"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-kicker text-ivory/70 uppercase",
									children: step.time
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-5 z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap flex gap-2",
						children: steps.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "tap min-h-11 flex-1 text-left",
							"aria-current": idx === i,
							onClick: () => setI(idx),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-0.5 overflow-hidden bg-ivory/25",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `block h-full bg-ember ${idx < i ? "w-full" : idx === i ? "film-fill run w-full" : "w-0"}`,
									style: idx === i ? { animationDuration: "4.2s" } : void 0
								}, idx === i ? `${item.id}-${i}` : `${item.id}-idle`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-2 hidden text-kicker uppercase md:block ${idx === i ? "text-ember" : "text-ivory/70"}`,
								children: item.n
							})]
						}, item.id))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ash py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "Mise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Weighed. Not guessed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-mute",
						children: "One wide pan. If the sauce pools at the end, the heat was low. Pouring it off is not a fix."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8",
						children: mise.map(([name, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-ember",
								children: amount
							})]
						}, name))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "The tin · 18 g for this pan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Xawaash, this morning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8",
						children: tin.map(([name, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: amount
							})]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-mute",
						children: "Turmeric goes in last when you grind a jar. In the pan it rides with the rest, twenty seconds, then the meat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-8 h-80 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/kitchen/xawaash.jpg",
								alt: "Ground xawaash",
								className: "ken absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute bottom-4 left-4 text-kicker text-ivory uppercase",
								children: "18 g in the oil"
							})
						]
					})
				] })]
			})
		}),
		steps.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-band overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					className: "ken absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative flex min-h-band flex-wrap items-end justify-between gap-6 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-kicker text-ember uppercase",
								children: [
									item.n,
									" · ",
									item.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-display",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-ivory/90",
								children: item.line
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ember-num font-display text-stat",
						children: item.measure
					})]
				})
			]
		}, item.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-wrap items-center justify-between gap-4 border border-ivory/10 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "Suqaar ari, as plated"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-mute",
					children: [ksh(980), " at the table. Canjeero beside it."]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap bg-ember px-6 py-3 text-kicker text-ink uppercase",
					onClick: () => add({
						name: "Suqaar ari",
						detail: "The house recipe",
						price: 980,
						image: "/kitchen/suqaar.jpg"
					}),
					children: "Order the plate"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveBand, { image: "/kitchen/suqaar.jpg" })
	] });
}
var SplitComponent = function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryPage, {}) });
};
//#endregion
export { SplitComponent as component };
