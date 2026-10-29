import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse } from "./router-wC-ZHVBq.mjs";
import { a as kiln, c as piePreview, i as house, l as pieSizes, n as boardPies, o as ksh, t as Frame, u as pieToppings } from "./chrome-eG014fjQ.mjs";
import { i as ReserveBand, r as Marquee, t as CountUp } from "./bits-BkYKSVfu.mjs";
import { i as PieCook, n as CookFilm, o as stoneCuts } from "./films-BExw81Ie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pizza-D5yKVe-4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var layers = [
	"San Marzano",
	"Fior di latte",
	"Tipo 00, 72 hours",
	"Sujuq",
	"Goat suqaar",
	"Xawaash, morning tin",
	"Basbaas oil",
	"Chili honey",
	"Pickled onion",
	"Basil, torn",
	"Salt, not sugar",
	"Stone at 485°C"
];
function StonePage() {
	const { add } = useHouse();
	const [sizeId, setSizeId] = (0, import_react.useState)("32");
	const [tops, setTops] = (0, import_react.useState)([]);
	const size = pieSizes.find((item) => item.id === sizeId) ?? pieSizes[1];
	const chosen = pieToppings.filter((item) => tops.includes(item.id));
	const total = size.price + chosen.reduce((sum, item) => sum + item.price, 0);
	const preview = (0, import_react.useMemo)(() => piePreview(tops), [tops]);
	function toggle(id) {
		setTops((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookFilm, {
			cuts: stoneCuts,
			heading: "h1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieCook, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ash py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "The house board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Pizzas, as Bella Point serves them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-mute",
						children: "Small, medium and large. The price is on the board — order the name on WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: boardPies.map((pie) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card overflow-hidden border border-ivory/10 bg-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pie.image,
									alt: pie.name,
									className: "zoom h-64 w-full object-cover"
								}), pie.offer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 bg-ember px-2 py-1 text-kicker text-ink uppercase",
									children: pie.offer
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl",
										children: pie.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 min-h-12 text-sm text-mute",
										children: pie.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "tap mt-5 inline-flex bg-ember px-4 py-3 text-kicker text-ink uppercase",
										href: `${house.whatsapp}?text=${encodeURIComponent(`Bella Point — ${pie.name}. Small, medium or large?`)}`,
										children: "Order"
									})
								]
							})]
						}, pie.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: layers }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "Interactive // custom build"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Build your stone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker text-mute uppercase",
								children: "01 · Choose size"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-4",
								children: pieSizes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": sizeId === item.id,
									onClick: () => setSizeId(item.id),
									className: `ring-size tap ${sizeId === item.id ? "on" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-3xl leading-none",
											children: item.cm
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-kicker",
											children: "CM"
										})]
									})
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-mute",
								children: [
									size.name,
									" · ",
									ksh(size.price)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-kicker text-mute uppercase",
								children: "02 · Add to the fire"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2 sm:grid-cols-2",
								children: pieToppings.map((item) => {
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
												className: "size-14 shrink-0 object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm text-mute",
													children: on ? "On the pie" : item.note
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
								className: "spot relative h-80 overflow-hidden md:h-96",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: preview,
									alt: "",
									className: "arrive h-full w-full object-cover"
								}, preview), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "letter-in letter-glow absolute bottom-3 left-5 font-display text-display",
									children: [size.cm, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-kicker text-ivory not-italic",
										children: "CM"
									})]
								}, size.cm)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 p-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [size.name, " base"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ksh(size.price) })]
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
											name: `Stone · ${size.cm} cm`,
											detail: chosen.length ? chosen.map((item) => item.name).join(", ") : "Plain fire",
											price: total,
											image: preview
										}),
										children: "Order this stone"
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
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "Every layer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-4xl font-display text-display",
						children: "Uncompromised."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-mute",
						children: "The founding pie is tomato, cheese, basil. Everything else is a decision made after the peel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3",
						children: layers.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-ivory/10 py-4 font-display text-2xl",
							children: name
						}, name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid md:grid-cols-3",
			children: [
				{
					src: "/food/tomatoes.jpg",
					title: "Sourced.",
					line: "San Marzano, crushed by hand. Salt. Never sugar."
				},
				{
					src: "/food/dough.jpg",
					title: "Crafted.",
					line: "Tipo 00. Seventy-two hours cold. The rim is stretched, not rolled."
				},
				{
					src: "/kitchen/basbaas.jpg",
					title: "Fired.",
					line: "Basbaas after the peel. Chili in the oven turns bitter."
				}
			].map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "relative h-80 overflow-hidden md:h-auto md:min-h-band",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: panel.src,
						alt: "",
						className: "ken absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-80 flex-col justify-end p-6 md:min-h-band",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl",
							children: panel.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm text-ivory/85",
							children: panel.line
						})]
					})
				]
			}, panel.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/food/oven.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap relative grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-4",
					children: kiln.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
							className: "mt-2 text-sm text-ivory/80",
							children: stat.note
						})
					] }, stat.label))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveBand, { image: "/food/oven.jpg" })
	] });
}
var SplitComponent = function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StonePage, {}) });
};
//#endregion
export { SplitComponent as component };
