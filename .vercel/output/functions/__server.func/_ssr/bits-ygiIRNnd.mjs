import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as house } from "./chrome-D-qzL3vy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bits-ygiIRNnd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Heat({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-1",
		"aria-label": `Heat ${n} of 3`,
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-1.5 rounded-full ${i < n ? "bg-ember" : "bg-ivory/20"}` }, i))
	});
}
function CountUp({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [n, setN] = (0, import_react.useState)(to);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setN(to);
			return;
		}
		setN(0);
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting || started.current) return;
			started.current = true;
			const t0 = performance.now();
			const tick = (now) => {
				const p = Math.min(1, (now - t0) / 1100);
				const eased = 1 - (1 - p) ** 3;
				setN(Math.round(to * eased));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .45 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function Marquee({ items, reverse = false }) {
	const text = items.join("   ·   ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-ivory/10 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `marquee-track flex w-max ${reverse ? "marquee-rev" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-6 text-kicker text-mute uppercase",
				children: text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-6 text-kicker text-mute uppercase",
				"aria-hidden": true,
				children: text
			})]
		})
	});
}
function ReserveBand({ image = "/kitchen/dining.jpg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-band overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative flex min-h-band flex-col justify-end py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-ember uppercase",
						children: "The table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-3xl font-display text-display text-ivory",
						children: "Reserve the table."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-md text-ivory/80",
						children: [
							house.street,
							", ",
							house.city,
							". ",
							house.place,
							". A request — Bella Point confirms by phone."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reserve",
						className: "tap mt-8 inline-flex w-fit bg-ember px-6 py-3 text-kicker text-ink uppercase",
						children: "Hold a table"
					})
				]
			})
		]
	});
}
//#endregion
export { ReserveBand as i, Heat as n, Marquee as r, CountUp as t };
