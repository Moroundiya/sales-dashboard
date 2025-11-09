"use client";
import { Button } from "../atoms/Button";

type Props = {
	type: "bar" | "line" | "pie";
	onChange: (type: "bar" | "line" | "pie") => void;
};

export default function ChartTypeSwitcher({ type, onChange }: Props) {
	return (
		<div style={{ display: "flex", gap: "8px" }}>
			<Button
				active={type === "bar"}
				onClick={() => onChange("bar")}>
				Bar
			</Button>
			<Button
				active={type === "line"}
				onClick={() => onChange("line")}>
				Line
			</Button>
			<Button
				active={type === "pie"}
				onClick={() => onChange("pie")}>
				Pie
			</Button>
		</div>
	);
}
