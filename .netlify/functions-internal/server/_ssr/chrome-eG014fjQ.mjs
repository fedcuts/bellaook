import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as useHouse } from "./router-wC-ZHVBq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-eG014fjQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var house = {
	name: "Bella Point",
	word: "Bella Point",
	line: "Where luxury meets comfort.",
	street: "Kiringothi Street",
	place: "Opposite Jam Street, near Alhidaya Mosque",
	city: "Eastleigh, Nairobi",
	hours: "Call or WhatsApp to book",
	phone: "+254 715 558 888",
	tel: "+254715558888",
	email: "Bellapoint2024@gmail.com",
	whatsapp: "https://wa.me/254715558888"
};
var nav = [
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/pizza",
		label: "Stone"
	},
	{
		to: "/burger",
		label: "Smash"
	},
	{
		to: "/story",
		label: "Recipe"
	},
	{
		to: "/reserve",
		label: "Reserve"
	}
];
function ksh(n) {
	return `KSh ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(n)}`;
}
var pieSizes = [
	{
		id: "26",
		cm: 26,
		name: "Neighborhood",
		price: 1200
	},
	{
		id: "32",
		cm: 32,
		name: "Table",
		price: 1650
	},
	{
		id: "36",
		cm: 36,
		name: "Feast",
		price: 2150
	}
];
var pieToppings = [
	{
		id: "sujuq",
		name: "Sujuq",
		price: 280,
		note: "Beef sausage, house chili",
		image: "/kitchen/pizza-sujuq.jpg"
	},
	{
		id: "goat",
		name: "Goat suqaar",
		price: 420,
		note: "Dry-fried, xawaash",
		image: "/kitchen/pizza-goat.jpg"
	},
	{
		id: "burrata",
		name: "Burrata",
		price: 350,
		note: "Torn on the pass",
		image: "/food/margherita.jpg"
	},
	{
		id: "oil",
		name: "Basbaas oil",
		price: 120,
		note: "Chili, not sugar",
		image: "/kitchen/basbaas.jpg"
	},
	{
		id: "onion",
		name: "Pickled onion",
		price: 90,
		note: "Lime and salt",
		image: "/food/tomatoes.jpg"
	},
	{
		id: "honey",
		name: "Chili honey",
		price: 140,
		note: "Heat, then sweet",
		image: "/kitchen/xalwo.jpg"
	}
];
var boardPies = [
	{
		id: "margherita",
		name: "Margherita",
		detail: "Tomato, mozzarella, basil. Small, medium or large.",
		image: "/kitchen/pie-margherita.jpg"
	},
	{
		id: "hawaiian",
		name: "Hawaiian",
		detail: "Ham, pineapple, mushroom.",
		image: "/kitchen/pie-hawaiian.jpg"
	},
	{
		id: "tikka",
		name: "Chicken tikka",
		detail: "Spiced chicken, onion, pepper.",
		image: "/kitchen/pie-tikka.jpg"
	},
	{
		id: "bbq",
		name: "BBQ chicken",
		detail: "Smoky chicken, onion, sweetcorn.",
		image: "/kitchen/pie-bbq.jpg"
	},
	{
		id: "pepperoni",
		name: "Pepperoni",
		detail: "Pepperoni and cheese.",
		image: "/kitchen/pie-pepperoni.jpg"
	},
	{
		id: "meat",
		name: "Meat feast",
		detail: "Pepperoni, beef, chicken, ham.",
		image: "/kitchen/pie-meat.jpg"
	},
	{
		id: "veg",
		name: "Vegetarian",
		detail: "Mushroom, pepper, onion, tomato, olive.",
		image: "/kitchen/pie-veg.jpg"
	},
	{
		id: "special",
		name: "Bella special",
		detail: "The loaded house pie from the board.",
		image: "/kitchen/pie-special.jpg",
		offer: "House pie"
	},
	{
		id: "peri",
		name: "Peri peri chicken",
		detail: "Hot chicken, pepper, onion.",
		image: "/kitchen/pie-peri.jpg"
	},
	{
		id: "beef",
		name: "Beef",
		detail: "Seasoned beef and onion.",
		image: "/kitchen/pie-beef.jpg"
	}
];
var liveOffers = [{
	id: "anjera",
	active: true,
	kicker: "On now",
	title: "Bella anjera",
	line: "100% teff. Soft, on the board. WhatsApp to order."
}];
var smashLineup = [
	{
		id: "beef",
		name: "Beef burger",
		detail: "One smash, American cheese, pickles, potato bun. From the house board.",
		price: 980,
		image: "/kitchen/burger-single.jpg"
	},
	{
		id: "double",
		name: "Double burger",
		detail: "Two lacy patties, cheese sheeted at the flip.",
		price: 1350,
		image: "/kitchen/burger-double.jpg"
	},
	{
		id: "chicken",
		name: "Chicken burger",
		detail: "Crisp fillet, cheese, a ribbon of sauce.",
		price: 1650,
		image: "/kitchen/burger-chicken.jpg"
	}
];
var smashSizes = [
	{
		id: "S",
		letter: "S",
		name: "Single",
		grams: 102,
		price: 980
	},
	{
		id: "M",
		letter: "M",
		name: "Double",
		grams: 204,
		price: 1350
	},
	{
		id: "L",
		letter: "C",
		name: "Chicken",
		grams: 0,
		price: 1650
	}
];
var smashToppings = [
	{
		id: "beef",
		name: "Smoked beef",
		price: 220,
		note: "Extra slice, not a second press",
		image: "/kitchen/burger-smash.jpg"
	},
	{
		id: "sujuq",
		name: "Sujuq",
		price: 180,
		note: "On the crown, after the steel",
		image: "/kitchen/pizza-sujuq.jpg"
	},
	{
		id: "cheese",
		name: "Extra American",
		price: 150,
		note: "At the flip",
		image: "/kitchen/burger-cheese.jpg"
	},
	{
		id: "pickles",
		name: "House pickles",
		price: 80,
		note: "Dill, not sweet",
		image: "/kitchen/burger-fly.jpg"
	},
	{
		id: "jam",
		name: "Onion jam",
		price: 120,
		note: "Slow, dark",
		image: "/kitchen/suqaar.jpg"
	},
	{
		id: "basbaas",
		name: "Basbaas",
		price: 60,
		note: "On the side",
		image: "/kitchen/basbaas.jpg"
	},
	{
		id: "egg",
		name: "Fried egg",
		price: 140,
		note: "Crisp edge",
		image: "/kitchen/burger-qorax.jpg"
	}
];
var menu = [
	{
		id: "small",
		name: "Small fire",
		note: "To start. Fried until the skin talks.",
		dishes: [
			{
				id: "sambusa-hilib",
				name: "Sambusa hilib",
				detail: "Spiced beef, onion, green chili. Sealed and fried to a blister.",
				price: 280,
				image: "/kitchen/sambusa.jpg",
				heat: 2
			},
			{
				id: "sambusa-kale",
				name: "Sambusa kale",
				detail: "Lentil, cilantro, a little basbaas. The quieter triangle.",
				price: 240,
				image: "/kitchen/sambusa.jpg",
				heat: 1
			},
			{
				id: "kaluun-bites",
				name: "Kalluun bites",
				detail: "Coast fish, lemon, chili salt. Hot from the pan, not the fryer basket.",
				price: 640,
				image: "/kitchen/fish.jpg",
				heat: 2
			}
		]
	},
	{
		id: "canjeero",
		name: "Canjeero",
		note: "Fermented overnight. Never flipped.",
		dishes: [
			{
				id: "canjeero-subag",
				name: "Canjeero & subag",
				detail: "Sorghum batter, open eyes, ghee poured at the table.",
				price: 380,
				image: "/kitchen/canjeero.jpg",
				heat: 0
			},
			{
				id: "laxoox-suqaar",
				name: "Laxoox & suqaar",
				detail: "The same bread, goat suqaar on the side, lime.",
				price: 780,
				image: "/kitchen/suqaar.jpg",
				heat: 2
			},
			{
				id: "malawax",
				name: "Malawax",
				detail: "Cardamom flatbread, a little sugar, ghee. After noon, not before.",
				price: 340,
				image: "/kitchen/malawax.jpg",
				heat: 0
			}
		]
	},
	{
		id: "pot",
		name: "The pot",
		note: "Xawaash in the oil before the meat.",
		dishes: [
			{
				id: "suqaar-ari",
				name: "Suqaar ari",
				detail: "Goat, pepper, onion, the tin. Dry, not a stew.",
				price: 980,
				image: "/kitchen/suqaar.jpg",
				heat: 2
			},
			{
				id: "suqaar-digaag",
				name: "Suqaar digaag",
				detail: "Chicken, same pan, more lemon. Finished with cilantro.",
				price: 890,
				image: "/kitchen/grill.jpg",
				heat: 2
			},
			{
				id: "maraq",
				name: "Maraq",
				detail: "Goat broth, potato, a heavy hand of xawaash. Bread for the bowl.",
				price: 1150,
				image: "/kitchen/pour.jpg",
				heat: 1
			},
			{
				id: "oodkac",
				name: "Oodkac",
				detail: "Liver, kidney, chili, ghee. Fast. Order it if you know it.",
				price: 1250,
				image: "/kitchen/goat.jpg",
				heat: 3
			}
		]
	},
	{
		id: "rice",
		name: "Rice",
		note: "The pot is the point. The rice is the plate.",
		dishes: [{
			id: "iskukaris",
			name: "Bariis iskukaris",
			detail: "Goat, raisin, potato, fried onion. Spiced in one pot, not assembled.",
			price: 1350,
			image: "/kitchen/bariis.jpg",
			heat: 2
		}, {
			id: "bariis-basbaas",
			name: "Bariis basbaas",
			detail: "The same rice, extra chili oil, a lime you actually need.",
			price: 1480,
			image: "/kitchen/bariis.jpg",
			heat: 3
		}]
	},
	{
		id: "grill",
		name: "The grill",
		note: "Charcoal. Salt first. Spice at the end.",
		dishes: [
			{
				id: "hilib-ari",
				name: "Hilib ari",
				detail: "Goat chop, bone in, charred fat, lime and chili salt.",
				price: 1850,
				image: "/kitchen/goat.jpg",
				heat: 2
			},
			{
				id: "digaag",
				name: "Digaag duban",
				detail: "Half chicken, yogurt and xawaash, over the coals until the skin lacquers.",
				price: 1480,
				image: "/kitchen/grill.jpg",
				heat: 2
			},
			{
				id: "kalluun",
				name: "Kalluun",
				detail: "Whole fish, garlic, tamarind, a slit of green chili.",
				price: 1650,
				image: "/kitchen/fish.jpg",
				heat: 2
			},
			{
				id: "geel",
				name: "Hilib geel",
				detail: "Camel steak, medium, pepper crust, herb oil. Lean, so it rests.",
				price: 2200,
				image: "/kitchen/camel.jpg",
				heat: 1
			},
			{
				id: "skewers",
				name: "Goat skewers",
				detail: "Three sticks, suqaar spice, flatbread underneath for the drip.",
				price: 1280,
				image: "/kitchen/goat.jpg",
				heat: 2
			}
		]
	},
	{
		id: "after",
		name: "After",
		note: "Heat, tea, or something sweet and dense.",
		dishes: [
			{
				id: "basbaas",
				name: "Basbaas",
				detail: "Green chili, garlic, lime, a spoon of the tin. The table sauce.",
				price: 90,
				image: "/kitchen/basbaas.jpg",
				heat: 3
			},
			{
				id: "shaah",
				name: "Shaah cadeeys",
				detail: "Black tea, cardamom, a little milk if you want it quiet.",
				price: 180,
				image: "/kitchen/shaah.jpg",
				heat: 0
			},
			{
				id: "xalwo",
				name: "Xalwo",
				detail: "Cardamom sweet, cut in squares. One piece is the serving.",
				price: 320,
				image: "/kitchen/xalwo.jpg",
				heat: 0
			}
		]
	}
];
var kiln = [
	{
		n: 485,
		suffix: "°",
		label: "Stone",
		note: "Deck heat. The rim blisters. The center stays soft."
	},
	{
		n: 90,
		suffix: "s",
		label: "Bake",
		note: "Turn once. Out before the cheese breaks."
	},
	{
		n: 72,
		suffix: "h",
		label: "Dough",
		note: "Cold ferment. No rolling pin on the pass."
	},
	{
		n: 12,
		suffix: "",
		label: "Spices",
		note: "The xawaash tin. Turmeric goes in last."
	}
];
var searStats = [
	{
		n: 102,
		suffix: "g",
		label: "Patty",
		note: "Twenty percent fat. One ball, loosely packed."
	},
	{
		n: 75,
		suffix: "s",
		label: "On steel",
		note: "From the drop to the plate."
	},
	{
		n: 196,
		suffix: "°",
		label: "Steel",
		note: "Hot enough to lace. Not hot enough to grey."
	},
	{
		n: 1,
		suffix: "",
		label: "Press",
		note: "Once. Ten seconds. Then leave it."
	}
];
function dishFocus(id) {
	if (id === "sambusa-kale") return "14% 86%";
	if (id === "bariis-basbaas") return "76% 32%";
	if (id === "skewers") return "32% 70%";
	if (id === "laxoox-suqaar") return "62% 40%";
	return "50% 48%";
}
function piePreview(toppings) {
	if (toppings.includes("goat")) return "/kitchen/pizza-goat.jpg";
	if (toppings.includes("sujuq")) return "/kitchen/pizza-sujuq.jpg";
	return "/food/margherita.jpg";
}
function smashPreview(sizeId, toppings) {
	if (toppings.includes("sujuq") || toppings.includes("basbaas")) return "/kitchen/burger-qorax.jpg";
	if (sizeId !== "S" || toppings.includes("beef")) return "/kitchen/burger-double.jpg";
	return "/kitchen/burger-single.jpg";
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setP(max > 0 ? window.scrollY / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-ivory/15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-ember",
			style: { width: `${p * 100}%` }
		})
	});
}
function Frame({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const { open, setOpen, lines } = useHouse();
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMenu(false);
	}, [path]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu || open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu, open]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") {
				setMenu(false);
				setOpen(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [setOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip text-kicker uppercase",
				href: "#main",
				children: "Skip"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-40 border-b border-ivory/10 bg-ink/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap flex h-nav items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/favicon.svg",
								alt: "",
								className: "size-6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl italic",
								children: house.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 md:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-kicker text-ivory uppercase transition-colors hover:text-ember",
								activeOptions: { exact: true },
								activeProps: { "data-status": "active" },
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tap border border-ivory/20 px-3 py-2 text-kicker text-ivory uppercase",
								onClick: () => setOpen(true),
								children: ["Ticket", lines.length ? ` ${lines.length}` : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tap grid size-11 place-items-center border border-ivory/20 md:hidden",
								"aria-label": menu ? "Close menu" : "Open menu",
								"aria-expanded": menu,
								onClick: () => setMenu((v) => !v),
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `sheet fixed inset-0 z-40 bg-ink ${menu ? "on" : ""}`,
				inert: !menu,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap flex min-h-stage flex-col justify-center gap-4 pt-nav",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "font-display text-display text-ivory",
						activeProps: { "data-status": "active" },
						children: item.label
					}, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketDrawer, {})
		]
	});
}
function OfferBar() {
	const offer = liveOffers.find((item) => item.active);
	if (!offer) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `${house.whatsapp}?text=${encodeURIComponent(`Bella Point — ${offer.title}`)}`,
		className: "fixed inset-x-3 bottom-3 z-30 flex items-center justify-between gap-3 border border-ember/40 bg-ink/90 px-4 py-3 shadow-2xl backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-kicker text-ember uppercase",
				children: offer.kicker
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block font-display text-2xl leading-none",
				children: offer.title
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden max-w-xs text-sm text-ivory/80 sm:block",
				children: offer.line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 bg-ember px-3 py-2 text-kicker text-ink uppercase",
				children: "Order"
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ivory/10 bg-ash",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-10 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl italic",
					children: house.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-xs text-mute",
					children: ["Suites & Restaurant. ", house.line]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							house.street,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							house.place,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							house.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-mute",
						children: house.hours
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker text-ember uppercase",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-ember",
							href: `tel:${house.tel}`,
							children: house.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-ember",
							href: `mailto:${house.email}`,
							children: house.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-ember",
							href: house.whatsapp,
							children: "WhatsApp"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex flex-wrap gap-4 border-t border-ivory/10 py-4 pb-24 text-sm text-mute",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Bella Point Suites & Restaurant"
			] }), nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				className: "hover:text-ivory",
				children: item.label
			}, item.to))]
		})]
	});
}
function TicketDrawer() {
	const { open, setOpen, lines, remove, clear, total, place } = useHouse();
	const [held, setHeld] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`,
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `sheet absolute inset-0 bg-ink/70 ${open ? "on" : ""}`,
			"aria-label": "Close ticket",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: `drawer absolute top-0 right-0 flex h-full w-full max-w-drawer flex-col bg-ash ${open ? "on" : ""}`,
			role: "dialog",
			"aria-label": "Ticket",
			inert: !open,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-ivory/10 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase",
						children: "Your ticket"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tap grid size-11 place-items-center",
						"aria-label": "Close",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto px-5 py-4",
					children: [
						held ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-ivory",
							children: [
								"Held on this phone. The kitchen does not see it until you call ",
								house.phone,
								"."
							]
						}) : null,
						!lines.length && !held ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-mute",
							children: "Nothing fired yet. Build a pie, a smash, or a plate from the menu."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-4",
							children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 border-b border-ivory/10 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: line.image,
										alt: "",
										className: "size-16 object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: line.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-mute",
												children: line.detail
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1",
												children: ksh(line.price)
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap text-sm text-mute hover:text-ivory",
										onClick: () => remove(line.id),
										children: "Remove"
									})
								]
							}, line.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-ivory/10 px-5 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-kicker text-mute uppercase",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl",
								children: ksh(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: "Saved on this device only. Not a live order."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tap mt-4 w-full bg-ember py-3 text-kicker text-ink uppercase disabled:opacity-40",
							disabled: !lines.length,
							onClick: () => {
								if (place()) setHeld(true);
							},
							children: "Hold the ticket"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tap flex-1 border border-ivory/20 py-3 text-kicker uppercase",
								onClick: () => {
									clear();
									setHeld(false);
								},
								children: "Clear"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reserve",
								className: "tap flex-1 border border-ivory/20 py-3 text-center text-kicker uppercase",
								onClick: () => setOpen(false),
								children: "Reserve"
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { kiln as a, piePreview as c, searStats as d, smashLineup as f, smashToppings as h, house as i, pieSizes as l, smashSizes as m, boardPies as n, ksh as o, smashPreview as p, dishFocus as r, menu as s, Frame as t, pieToppings as u };
