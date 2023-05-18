export default function toLocale (date: Date) {
	const year = date.toLocaleString("default", { year: "numeric" });
	const month = date.toLocaleDateString("default", { month: "2-digit" });
	const day = date.toLocaleDateString("default", { day: "2-digit" });
	return year + "-" + month + "-" + day;
}
