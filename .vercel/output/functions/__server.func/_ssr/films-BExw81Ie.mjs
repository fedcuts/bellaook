import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/films-BExw81Ie.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stoneCuts = [
	{
		id: "stretch",
		src: "/films/stretch.mp4",
		poster: "/kitchen/gloves.jpg",
		kicker: "Slow · the stretch",
		title: "Hands.",
		line: "Gloves on. Tipo 00, opened by the knuckles. Flour stays on the glove, not the crust."
	},
	{
		id: "fire",
		src: "/films/dough.mp4",
		poster: "/food/oven.jpg",
		kicker: "Slow · the fire",
		title: "Ninety seconds.",
		line: "One turn on the stone. Flames lick the rim. Cheese starts to move.",
		stat: "485°",
		fire: true
	},
	{
		id: "pull",
		src: "/films/pull.mp4",
		poster: "/kitchen/pizza-pull.jpg",
		kicker: "Slow · the pull",
		title: "Still moving.",
		line: "If the cheese does not stretch when it leaves the peel, it is not done."
	}
];
var smashCuts = [{
	id: "press",
	src: "/films/press.mp4",
	poster: "/kitchen/burger-double.jpg",
	kicker: "Slow · the press",
	title: "One smash.",
	line: "102 grams hits the steel. One hard press. Smoke is the timer.",
	heat: {
		from: 93,
		to: 210
	}
}, {
	id: "plate",
	src: "/films/smash.mp4",
	poster: "/kitchen/burger-done.jpg",
	kicker: "Slow · the plate",
	title: "Lace.",
	line: "The edge should snap. Basbaas stays beside the plate, not on the steel.",
	stat: "68°"
}];
stoneCuts[0], stoneCuts[1], smashCuts[0];
function useReduced() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(media.matches);
		apply();
		media.addEventListener("change", apply);
		return () => media.removeEventListener("change", apply);
	}, []);
	return reduced;
}
function Sparks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-[3] overflow-hidden",
		"aria-hidden": true,
		children: [
			"12%",
			"22%",
			"38%",
			"51%",
			"63%",
			"74%",
			"86%",
			"31%"
		].map((left, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "spark absolute bottom-0 h-4 w-0.5 rounded-full bg-ember",
			style: {
				left,
				animationDelay: `${-i * .42}s`,
				animationDuration: `${2.4 + i % 3 * .55}s`
			}
		}, left))
	});
}
function Smoke() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "smoke-field",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "puff" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "puff" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "puff" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "puff" })
		]
	});
}
function LoopFilm({ src, poster }) {
	if (useReduced()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: poster,
		alt: "",
		className: "absolute inset-0 h-full w-full object-cover"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		className: "absolute inset-0 h-full w-full object-cover",
		src,
		poster,
		autoPlay: true,
		muted: true,
		loop: true,
		playsInline: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smoke, {})] });
}
function CookFilm({ cuts, heading = "h2", stack = false }) {
	const reduced = useReduced();
	const videoRef = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const cut = cuts[index] ?? cuts[0];
	const Title = heading;
	(0, import_react.useEffect)(() => {
		if (!reduced) return;
		const id = window.setTimeout(() => setIndex((n) => (n + 1) % cuts.length), 4200);
		return () => window.clearTimeout(id);
	}, [
		reduced,
		index,
		cuts.length
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (event.key === "ArrowRight") setIndex((n) => (n + 1) % cuts.length);
			if (event.key === "ArrowLeft") setIndex((n) => (n - 1 + cuts.length) % cuts.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [cuts.length]);
	(0, import_react.useEffect)(() => {
		const node = videoRef.current;
		if (!node || reduced) return;
		node.muted = true;
		const kick = () => {
			node.play().catch(() => {});
		};
		kick();
		node.addEventListener("loadeddata", kick);
		return () => node.removeEventListener("loadeddata", kick);
	}, [cut.src, reduced]);
	const heat = cut.heat ? Math.round(cut.heat.from + (cut.heat.to - cut.heat.from) * progress) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-stage overflow-hidden bg-ink",
		"aria-roledescription": "film",
		children: [
			reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cut.poster,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "absolute inset-0 h-full w-full object-cover",
				src: cut.src,
				poster: cut.poster,
				autoPlay: true,
				muted: true,
				playsInline: true,
				onTimeUpdate: (event) => {
					const node = event.currentTarget;
					if (!node.duration) return;
					setProgress(node.currentTime / node.duration);
				},
				onEnded: () => {
					setProgress(0);
					setIndex((n) => (n + 1) % cuts.length);
				}
			}, cut.src),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smoke, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparks, {}),
			cut.fire ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flames-band",
				"aria-hidden": true
			}) : null,
			stack ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[4.75rem] z-[4] flex justify-center gap-2 md:hidden",
				"aria-hidden": true,
				children: [
					"/anatomy/bun.jpg",
					"/anatomy/cheese.jpg",
					"/anatomy/patty.jpg",
					"/anatomy/pickle.jpg",
					"/anatomy/heel.jpg"
				].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "float-plate size-12 rounded-full object-cover",
					style: { animationDelay: `${-i * .35}s` }
				}, src))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-28 right-6 z-[4] hidden h-72 w-36 md:block",
				"aria-hidden": true,
				children: [
					"/anatomy/bun.jpg",
					"/anatomy/cheese.jpg",
					"/anatomy/patty.jpg",
					"/anatomy/pickle.jpg",
					"/anatomy/heel.jpg"
				].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "split-layer absolute top-1/2 left-1/2 size-24 object-cover",
					style: {
						["--slot"]: i - 2,
						zIndex: 6 - i,
						borderRadius: i === 1 ? "18%" : "999px"
					}
				}, src))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0 z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "film-corner top-nav left-4 z-20 hidden border-t border-l md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "film-corner top-nav right-4 z-20 hidden border-t border-r md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "film-corner bottom-20 left-4 z-20 hidden border-b border-l md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "film-corner bottom-20 right-4 z-20 hidden border-b border-r md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative z-10 flex min-h-stage flex-col pb-28 pt-nav",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end pt-4",
					children: heat !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "ember-num font-display text-5xl md:text-stat",
						children: [heat, "°"]
					}) : cut.stat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ember-num font-display text-5xl md:text-stat",
						children: cut.stat
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ivory/70 uppercase",
						children: "Slow motion"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ember uppercase",
							children: cut.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
							className: "arrive mt-2 font-display text-display",
							children: cut.title
						}, cut.id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-ivory/85",
							children: cut.line
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-5 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap flex gap-3",
					children: cuts.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "tap min-h-11 flex-1 text-left",
						"aria-current": idx === index,
						onClick: () => {
							setProgress(0);
							setIndex(idx);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-0.5 overflow-hidden bg-ivory/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-full origin-left bg-ember",
								style: { transform: `scaleX(${idx < index ? 1 : idx === index ? progress : 0})` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-2 hidden text-kicker uppercase sm:block ${idx === index ? "text-ember" : "text-ivory/70"}`,
							children: item.kicker.split("·")[1]?.trim() ?? item.title
						})]
					}, item.id))
				})
			})
		]
	});
}
var piePhases = [
	{
		id: "dough",
		title: "Stretch",
		line: "The rim is opened by the knuckles, not a pin.",
		image: "/food/dough.jpg"
	},
	{
		id: "sauce",
		title: "Sauce",
		line: "San Marzano, crushed by hand, stopped short of the rim.",
		image: "/food/dough.jpg"
	},
	{
		id: "cheese",
		title: "Cheese",
		line: "Fior di latte, torn. It should still be moving in the oven.",
		image: "/food/margherita.jpg"
	},
	{
		id: "fire",
		title: "Fire",
		line: "485 degrees. One turn. Count the smoke, not the clock.",
		image: "/food/oven.jpg"
	},
	{
		id: "pull",
		title: "Pull",
		line: "Off the peel. The strand should reach the plate.",
		image: "/kitchen/pizza-pull.jpg"
	}
];
var bits = [
	{
		src: "/kitchen/pizza-pull.jpg",
		left: "22%",
		top: "28%",
		delay: "0s"
	},
	{
		src: "/food/margherita.jpg",
		left: "52%",
		top: "18%",
		delay: "0.1s"
	},
	{
		src: "/kitchen/basbaas.jpg",
		left: "64%",
		top: "46%",
		delay: "0.18s"
	},
	{
		src: "/food/tomatoes.jpg",
		left: "30%",
		top: "56%",
		delay: "0.28s"
	}
];
function PieCook() {
	const reduced = useReduced();
	const [phase, setPhase] = (0, import_react.useState)(0);
	const step = piePhases[phase] ?? piePhases[0];
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		const id = window.setTimeout(() => setPhase((n) => (n + 1) % piePhases.length), 2600);
		return () => window.clearTimeout(id);
	}, [phase, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden bg-ink py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker text-ember uppercase",
					children: "Pizza, cooking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-display",
					children: "Watch the ninety seconds."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-2",
					children: piePhases.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `tap flex w-full items-baseline gap-4 border px-4 py-3 text-left ${idx === phase ? "border-ember" : "border-ivory/10"}`,
						onClick: () => setPhase(idx),
						"aria-current": idx === phase,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-kicker text-ember",
							children: ["0", idx + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: item.title
						})]
					}) }, item.id))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "arrive text-kicker text-ember uppercase",
					children: step.title
				}, step.id),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-ivory/80",
					children: step.line
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-8 h-cook w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pie-disc absolute top-6 left-1/2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: step.image,
								alt: "",
								className: `h-full w-full object-cover ${step.id === "dough" ? "spin-slow" : ""}`
							}, step.image + step.id),
							step.id === "sauce" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 100",
								className: "absolute inset-[14%] h-auto w-auto",
								"aria-hidden": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									className: "sauce-draw",
									cx: "50",
									cy: "50",
									r: "30",
									fill: "none",
									stroke: "#ff5a1f",
									strokeWidth: "5",
									strokeDasharray: "188"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									className: "sauce-draw sauce-late",
									cx: "50",
									cy: "50",
									r: "16",
									fill: "none",
									stroke: "#c4321a",
									strokeWidth: "7",
									strokeDasharray: "100"
								})]
							}) : null,
							step.id === "fire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flames" }) : null,
							(step.id === "fire" || step.id === "pull") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smoke, {})
						]
					}), step.id === "cheese" ? bits.map((bit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bit.src,
						alt: "",
						className: "topping-drop absolute size-16 rounded-full object-cover shadow-xl",
						style: {
							left: bit.left,
							top: bit.top,
							animationDelay: bit.delay
						}
					}, bit.src + bit.left)) : null]
				})
			] })]
		})
	});
}
var stack = [
	{
		id: "crown",
		name: "Crown",
		note: "Potato bun, sesame",
		src: "/anatomy/bun.jpg",
		slot: -2,
		round: true
	},
	{
		id: "cheese",
		name: "American",
		note: "Sheeted at the flip",
		src: "/anatomy/cheese.jpg",
		slot: -1,
		round: false
	},
	{
		id: "patty",
		name: "The smash",
		note: "102 g · one press",
		src: "/anatomy/patty.jpg",
		slot: 0,
		round: true
	},
	{
		id: "pickle",
		name: "Pickle & onion",
		note: "Dill, not sweet",
		src: "/anatomy/pickle.jpg",
		slot: 1,
		round: true
	},
	{
		id: "heel",
		name: "The heel",
		note: "Sauce on the crumb",
		src: "/anatomy/heel.jpg",
		slot: 2,
		round: true
	}
];
function Anatomy() {
	const reduced = useReduced();
	const [spread, setSpread] = (0, import_react.useState)(reduced ? .85 : .35);
	const [held, setHeld] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (held || reduced) return;
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const t = (now - start) / 1e3;
			setSpread(.5 + .48 * Math.sin(t * .85));
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [held, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden bg-ink py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-center gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "Burger anatomy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display",
						children: "Five layers. One press."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-mute",
						children: "Drag the spread. Crown, cheese, the lace, pickle, heel. Nothing else belongs in the stack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-kicker text-mute uppercase",
							children: "Spread the burger"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-3 w-full accent-ember",
							type: "range",
							min: 0,
							max: 100,
							value: Math.round(spread * 100),
							"aria-valuetext": `${Math.round(spread * 100)} percent exploded`,
							onPointerDown: () => setHeld(true),
							onPointerUp: () => setHeld(false),
							onPointerCancel: () => setHeld(false),
							onBlur: () => setHeld(false),
							onChange: (event) => setSpread(Number(event.target.value) / 100)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 lg:hidden",
						children: stack.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3 border-b border-ivory/10 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: layer.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-mute",
								children: layer.note
							})]
						}, layer.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative order-1 mx-auto h-stack w-full max-w-xl lg:order-2",
				children: stack.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-1/2 left-1/2 will-change-transform",
					style: {
						width: layer.slot === 0 ? "9.5rem" : "8.25rem",
						zIndex: 8 - layer.slot,
						transform: `translate(-50%, calc(-50% + ${layer.slot * spread * 152}px))`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: layer.src,
						alt: layer.name,
						className: `aspect-square w-full object-cover ${layer.round ? "rounded-full" : "rounded-xl"}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none absolute top-1/2 hidden w-40 -translate-y-1/2 text-right lg:block",
						style: {
							opacity: spread > .62 ? 1 : 0,
							right: "calc(100% + 1.25rem)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl leading-none",
							children: layer.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-mute",
							children: layer.note
						})]
					})]
				}, layer.id))
			})]
		})
	});
}
//#endregion
export { smashCuts as a, PieCook as i, CookFilm as n, stoneCuts as o, LoopFilm as r, Anatomy as t };
