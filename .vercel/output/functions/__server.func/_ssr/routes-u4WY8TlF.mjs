import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as house, t as Frame } from "./chrome-D-qzL3vy.mjs";
import { i as ReserveBand } from "./bits-ygiIRNnd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-u4WY8TlF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var plates = [
	{
		to: "/menu",
		src: "/kitchen/suqaar.jpg",
		label: "Suqaar"
	},
	{
		to: "/pizza",
		src: "/kitchen/pie-special.jpg",
		label: "Stone"
	},
	{
		to: "/burger",
		src: "/kitchen/burger-double.jpg",
		label: "Smash"
	},
	{
		to: "/story",
		src: "/kitchen/canjeero.jpg",
		label: "Canjeero"
	}
];
var offers = [
	{
		name: "Bella anjera",
		line: "100% teff. On the board now.",
		image: "/kitchen/canjeero.jpg",
		text: "Bella Point — Bella anjera"
	},
	{
		name: "Family stone",
		line: "Two large pizzas from the house board.",
		image: "/kitchen/pie-special.jpg",
		text: "Bella Point — two large pizzas"
	},
	{
		name: "Suqaar for two",
		line: "Goat, canjeero, and shaah at the table.",
		image: "/kitchen/suqaar.jpg",
		text: "Bella Point — suqaar for two"
	},
	{
		name: "Stay and dine",
		line: "A furnished suite, then dinner downstairs.",
		image: "/images/suite-living.jpg",
		text: "Bella Point — suite and dinner"
	}
];
var somali = [
	{
		name: "Suqaar ari",
		line: "Goat, onion, chili. Dry, not a stew.",
		image: "/kitchen/suqaar.jpg",
		to: "/menu"
	},
	{
		name: "Bariis iskukaris",
		line: "One pot. Goat, raisin, fried onion.",
		image: "/kitchen/bariis.jpg",
		to: "/menu"
	},
	{
		name: "Sambusa",
		line: "Spiced beef, blistered pastry.",
		image: "/kitchen/sambusa.jpg",
		to: "/menu"
	},
	{
		name: "Hilib ari",
		line: "Chop, bone in, lime and chili salt.",
		image: "/kitchen/goat.jpg",
		to: "/menu"
	}
];
var rooms = [
	{
		src: "/images/dining-room.jpg",
		name: "The dining room",
		line: "Chandelier, cane, a long table."
	},
	{
		src: "/images/suite-living.jpg",
		name: "The suite",
		line: "Fully furnished. Ensuite."
	},
	{
		src: "/images/suite-bed.jpg",
		name: "The night",
		line: "Linen, warm light, Eastleigh quiet."
	},
	{
		src: "/images/lounge.jpg",
		name: "The lounge",
		line: "A chair before dinner."
	}
];
function LiveHero() {
	const videoRef = (0, import_react.useRef)(null);
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const node = videoRef.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		node.muted = true;
		const kick = () => node.play().catch(() => {});
		kick();
		node.addEventListener("loadeddata", kick);
		return () => node.removeEventListener("loadeddata", kick);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-stage overflow-hidden",
		onPointerMove: (event) => {
			const box = event.currentTarget.getBoundingClientRect();
			setShift({
				x: (event.clientX - box.left) / box.width - .5,
				y: (event.clientY - box.top) / box.height - .5
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dining-room.jpg",
				alt: "",
				className: "ken absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative z-10 flex min-h-stage flex-col justify-end pb-28 pt-nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ivory/90 uppercase",
						children: "Eastleigh · Kiringothi Street"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-4xl font-display text-display italic text-balance",
						children: "Bella Point"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-lg text-ivory/90",
						children: house.line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-md text-sm text-ivory/75",
						children: [
							house.street,
							". ",
							house.place,
							". Suites upstairs. The Somali table, the stone, and the smash downstairs."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "tap bg-ember px-5 py-3 text-kicker text-ink uppercase",
							children: "The Somali table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							className: "tap border border-ivory/50 px-5 py-3 text-kicker text-ivory uppercase",
							children: "Reserve"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-4 gap-3",
						children: plates.map((plate, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: plate.to,
							className: "float-plate tap block text-center",
							style: {
								animationDelay: `${index * -.6}s`,
								transform: `translate3d(${shift.x * (index - 1.5) * 10}px, ${shift.y * 8}px, 0)`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: plate.src,
								alt: "",
								className: "mx-auto size-16 rounded-full object-cover ring-2 ring-ivory/70 shadow-2xl md:size-24"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-kicker text-ivory uppercase",
								children: plate.label
							})]
						}, plate.to))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "absolute top-nav right-4 z-10 mt-4 hidden h-36 w-56 rounded-sm object-cover shadow-2xl ring-1 ring-ivory/30 md:block",
				src: "/films/press.mp4",
				poster: "/kitchen/burger-double.jpg",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-80 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					src: "/films/stretch.mp4",
					poster: "/kitchen/gloves.jpg",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-scrim absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative flex min-h-80 flex-col justify-end py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ivory uppercase",
						children: "The pass · gloves on"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl font-display text-4xl text-balance md:text-6xl",
						children: "The kitchen stays in the light."
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ash py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "On the board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-display text-balance",
						children: "Offers worth leaving the house for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: offers.map((offer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${house.whatsapp}?text=${encodeURIComponent(offer.text)}`,
							className: "card group relative block min-h-72 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: offer.image,
									alt: "",
									className: "zoom absolute inset-0 h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex min-h-72 flex-col justify-end p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-kicker text-ember uppercase",
											children: "Tonight"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-4xl",
											children: offer.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-sm text-ivory/85",
											children: offer.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-4 text-kicker text-ivory uppercase",
											children: "WhatsApp the table"
										})
									]
								})
							]
						}, offer.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ember uppercase",
							children: "Somali diet"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-xl font-display text-display text-balance",
							children: "The food Eastleigh actually comes for."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "hidden text-kicker uppercase hover:text-ember md:inline",
							children: "Full menu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: somali.map((dish) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: dish.to,
							className: "card relative block min-h-80 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dish.image,
									alt: dish.name,
									className: "zoom absolute inset-0 h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-full min-h-72 flex-col justify-end p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-4xl",
										children: dish.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-ivory/85",
										children: dish.line
									})]
								})
							]
						}, dish.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "tap mt-6 inline-flex bg-ember px-5 py-3 text-kicker text-ink uppercase md:hidden",
						children: "Full menu"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ash py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "The house"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl font-display text-display text-balance",
						children: "Suites above. Service below."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-4 overflow-x-auto pb-2",
						children: rooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "w-72 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: room.src,
								alt: room.name,
								className: "h-80 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: room.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-mute",
									children: room.line
								})]
							})]
						}, room.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/kitchen/chef-plate.jpg",
					alt: "Chef in gloves plating suqaar",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-scrim absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap relative grid min-h-band items-end gap-8 py-16 md:grid-cols-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ivory uppercase",
							children: "The chef"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-display text-balance",
							children: "Gloves on. Fire close."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-ivory/85",
							children: "Suqaar hits the pan dry. Canjeero is never flipped. The stone gets ninety seconds. Nothing leaves the pass bare-handed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/story",
							className: "mt-6 inline-flex text-kicker text-ivory uppercase",
							children: "Watch the suqaar"
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pizza",
					className: "card relative block min-h-96 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/kitchen/pie-margherita.jpg",
							alt: "",
							className: "zoom absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex min-h-96 flex-col justify-end p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-5xl",
								children: "Stone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ivory/85",
								children: "Margherita, tikka, peri peri, the Bella special."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/burger",
					className: "card relative block min-h-96 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/kitchen/burger-double.jpg",
							alt: "",
							className: "zoom absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex min-h-96 flex-col justify-end p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-5xl",
								children: "Smash"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ivory/85",
								children: "Lace, cheese, one press. Beef, double, or chicken."
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveBand, {})
	] });
}
var SplitComponent = function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) });
};
//#endregion
export { SplitComponent as component };
