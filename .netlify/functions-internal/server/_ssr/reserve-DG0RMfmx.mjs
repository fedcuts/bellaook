import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as house, t as Frame } from "./chrome-eG014fjQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reserve-DG0RMfmx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIMES = [
	"12:00",
	"12:30",
	"13:00",
	"13:30",
	"14:00",
	"14:30",
	"15:00",
	"17:00",
	"17:30",
	"18:00",
	"18:30",
	"19:00",
	"19:30",
	"20:00",
	"20:30",
	"21:00",
	"21:30",
	"22:00",
	"22:30"
];
var BOOKINGS = "bella-bookings";
function today() {
	const now = /* @__PURE__ */ new Date();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${now.getFullYear()}-${month}-${day}`;
}
function ReservePage() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("19:00");
	const [seats, setSeats] = (0, import_react.useState)(2);
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function submit(event) {
		event.preventDefault();
		const cleanName = name.trim();
		const cleanPhone = phone.trim();
		if (cleanName.length < 2) {
			setError("Write the name the table should be under.");
			return;
		}
		if (cleanPhone.replace(/\D/g, "").length < 9) {
			setError("Add a phone the house can call.");
			return;
		}
		if (!date) {
			setError("Pick a date.");
			return;
		}
		const booking = {
			id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}`,
			name: cleanName,
			phone: cleanPhone,
			date,
			time,
			seats,
			note: note.trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const raw = localStorage.getItem(BOOKINGS);
			const parsed = raw ? JSON.parse(raw) : [];
			const list = Array.isArray(parsed) ? parsed : [];
			list.push(booking);
			localStorage.setItem(BOOKINGS, JSON.stringify(list));
		} catch {
			setError("This phone could not store the request. Call the house instead.");
			return;
		}
		setError("");
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-h-stage md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-80",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/kitchen/dining.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-end p-8 pt-nav md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-ember uppercase",
							children: house.street
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-display",
							children: "Hold a table."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-ivory/85",
							children: [
								house.place,
								". ",
								house.city,
								". Call or WhatsApp ",
								house.phone,
								". A request stays on this phone until Bella Point replies."
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-ash px-gutter py-12 md:px-12 md:py-24",
			children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-md font-display text-3xl leading-snug",
				role: "status",
				"aria-live": "polite",
				children: [
					"Request held. This is not a confirmed booking until Bella Point replies at ",
					house.phone,
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mx-auto grid max-w-lg gap-4",
				onSubmit: submit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-mute uppercase",
						children: "Request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									name: "name",
									autoComplete: "name",
									value: name,
									onChange: (event) => setName(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									name: "phone",
									type: "tel",
									autoComplete: "tel",
									inputMode: "tel",
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									name: "date",
									type: "date",
									min: today(),
									value: date,
									onChange: (event) => setDate(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: ["Time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "field",
									name: "time",
									value: time,
									onChange: (event) => setTime(event.target.value),
									children: TIMES.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: slot,
										children: slot
									}, slot))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: ["Seats", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "field",
									name: "seats",
									value: seats,
									onChange: (event) => setSeats(Number(event.target.value)),
									children: [
										1,
										2,
										3,
										4,
										5,
										6,
										7,
										8
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: n,
										children: n
									}, n))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-28",
							name: "note",
							value: note,
							onChange: (event) => setNote(event.target.value),
							placeholder: "Allergies, a quiet corner, a late smash."
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ember",
						role: "alert",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "tap mt-2 bg-ember py-3 text-kicker text-ink uppercase",
						children: "Send the request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mute",
						children: ["Saved on this device. Not a live booking. ", house.email]
					})
				]
			})
		})]
	});
}
var SplitComponent = function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservePage, {}) });
};
//#endregion
export { SplitComponent as component };
