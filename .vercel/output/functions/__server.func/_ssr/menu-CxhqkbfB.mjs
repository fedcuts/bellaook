import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse } from "./router-eWoWNtjw.mjs";
import { o as ksh, r as dishFocus, s as menu, t as Frame } from "./chrome-D-qzL3vy.mjs";
import { i as ReserveBand, n as Heat, r as Marquee } from "./bits-ygiIRNnd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-CxhqkbfB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BEAT = 3200;
function MenuPage() {
	const { add } = useHouse();
	const flat = (0, import_react.useMemo)(() => menu.flatMap((group) => group.dishes.map((dish) => ({
		...dish,
		group: group.name,
		groupId: group.id
	}))), []);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const dish = flat[index] ?? flat[0];
	const groupDishes = flat.filter((item) => item.groupId === dish?.groupId);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setTimeout(() => setIndex((n) => (n + 1) % flat.length), BEAT);
		return () => window.clearTimeout(id);
	}, [
		index,
		paused,
		flat.length
	]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const el = event.target;
			if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable)) return;
			if (event.key === "ArrowRight") setIndex((n) => (n + 1) % flat.length);
			if (event.key === "ArrowLeft") setIndex((n) => (n - 1 + flat.length) % flat.length);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [flat.length]);
	const drag = (0, import_react.useRef)(0);
	function go(dir) {
		setIndex((n) => (n + dir + flat.length) % flat.length);
	}
	function jumpGroup(id) {
		const next = flat.findIndex((item) => item.groupId === id);
		if (next >= 0) setIndex(next);
	}
	if (!dish) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "stage-glow relative overflow-hidden",
			onMouseEnter: () => setPaused(true),
			onMouseLeave: () => setPaused(false),
			onFocus: () => setPaused(true),
			onBlur: () => setPaused(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap menu-stage py-8 pt-nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex gap-2 overflow-x-auto md:flex-col md:overflow-visible",
						"aria-label": "Menu sections",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-kicker text-mute uppercase md:block",
							children: "The fire"
						}), menu.map((group) => {
							const on = group.id === dish.groupId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `tap shrink-0 py-2 text-left text-sm md:border-b md:border-ivory/10 ${on ? "text-ember" : "text-ivory/75"}`,
								"aria-current": on,
								onClick: () => jumpGroup(group.id),
								children: group.name
							}, group.id);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker text-ember uppercase",
								children: dish.group
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "arrive mt-2 font-display text-4xl md:text-6xl",
								children: dish.name
							}, dish.id),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl text-ivory",
								children: ksh(dish.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "float-dish relative mx-auto mt-1 h-80 w-full max-w-xl touch-pan-y md:h-[30rem]",
								onPointerDown: (event) => {
									drag.current = event.clientX;
								},
								onPointerUp: (event) => {
									const dx = event.clientX - drag.current;
									if (dx > 48) go(-1);
									if (dx < -48) go(1);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dish.image,
									alt: dish.name,
									className: "float-frame arrive absolute inset-0 h-full w-full object-cover",
									style: { objectPosition: dishFocus(dish.id) }
								}, dish.id)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto mt-6 block h-0.5 w-28 overflow-hidden bg-ivory/15",
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `block h-full bg-ember ${paused ? "w-full" : "film-fill run w-full"}`,
									style: paused ? void 0 : { animationDuration: "3.2s" }
								}, paused ? `${dish.id}-hold` : dish.id)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-4 flex max-w-md items-center justify-center gap-3 text-sm text-mute",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heat, { n: dish.heat }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dish.detail })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap size-11 border border-ivory/25 text-xl",
										"aria-label": "Previous dish",
										onClick: () => go(-1),
										children: "‹"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap bg-ember px-6 py-3 text-kicker text-ink uppercase",
										onClick: () => add({
											name: dish.name,
											detail: dish.group,
											price: dish.price,
											image: dish.image
										}),
										children: "Add to the table"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap size-11 border border-ivory/25 text-xl",
										"aria-label": "Next dish",
										onClick: () => go(1),
										children: "›"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-3 overflow-x-auto md:flex-col md:items-center md:overflow-visible",
						children: groupDishes.map((item) => {
							const on = item.id === dish.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tap shrink-0 text-center",
								"aria-current": on,
								"aria-label": item.name,
								onClick: () => setIndex(flat.findIndex((row) => row.id === item.id)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `orb mx-auto block ${on ? "on" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										className: "h-full w-full object-cover",
										style: { objectPosition: dishFocus(item.id) }
									})
								})
							}, item.id);
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: [
			"Sambusa",
			"Suqaar",
			"Bariis iskukaris",
			"Basbaas",
			"Hilib ari",
			"Canjeero",
			"Oodkac",
			"Kalluun",
			"Xalwo",
			"Shaah"
		] }),
		[
			{
				src: "/kitchen/bariis.jpg",
				kicker: "One pot",
				title: "Bariis. Not assembled.",
				line: "Goat, raisin, potato, fried onion. The spice goes in with the rice, not after."
			},
			{
				src: "/kitchen/suqaar.jpg",
				kicker: "Dry fire",
				title: "Suqaar. Not a stew.",
				line: "Pepper, onion, the tin. The pan finishes dry. If it pools, the heat was low."
			},
			{
				src: "/kitchen/canjeero.jpg",
				kicker: "Overnight",
				title: "Eyes open. Never flipped.",
				line: "Sorghum batter, a spoon of yesterday. Subag poured at the table, not in the pan."
			},
			{
				src: "/kitchen/goat.jpg",
				kicker: "The grill",
				title: "Char first. Spice last.",
				line: "Bone-in goat, lime, chili salt. The fat should talk before the plate leaves the pass."
			},
			{
				src: "/kitchen/fish.jpg",
				kicker: "The coast",
				title: "Whole. One slit of chili.",
				line: "Garlic, tamarind, green chili. The fish leaves the grill in one piece."
			},
			{
				src: "/kitchen/camel.jpg",
				kicker: "Lean fire",
				title: "Camel rests. Goat does not.",
				line: "Pepper crust, herb oil. Medium, then the board, then the knife."
			}
		].map((plate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-band overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: plate.src,
					alt: "",
					className: "ken absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative flex min-h-band flex-col justify-end py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ember uppercase",
							children: plate.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl font-display text-display",
							children: plate.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-ivory/85",
							children: plate.line
						})
					]
				})
			]
		}, plate.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap py-16",
			children: menu.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: group.id,
				className: "anchor mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-ivory/15 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: group.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-mute",
						children: group.note
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: group.dishes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-b border-ivory/10 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "size-16 shrink-0 rounded-full object-cover sm:size-24",
							style: { objectPosition: dishFocus(item.id) }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heat, { n: item.heat })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-mute",
								children: item.detail
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 flex-col items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ksh(item.price) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tap border border-ivory/25 px-4 py-2 text-kicker uppercase hover:border-ember hover:text-ember",
								onClick: () => {
									setIndex(flat.findIndex((row) => row.id === item.id));
									add({
										name: item.name,
										detail: group.name,
										price: item.price,
										image: item.image
									});
								},
								children: "Add"
							})]
						})
					]
				}, item.id)) })]
			}, group.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveBand, { image: "/kitchen/bariis.jpg" })
	] });
}
var SplitComponent = function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPage, {}) });
};
//#endregion
export { SplitComponent as component };
