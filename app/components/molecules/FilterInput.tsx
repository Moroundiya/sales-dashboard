"use client";
import { Input } from "../atoms/Input";

type Props = {
	label: string;
	value: string | number;
	onChange: (value: string) => void;
};

export default function FilterInput({ label, value, onChange }: Props) {
	return (
		<div className="flex items-center space-x-3">
			<label>{label}</label>
			<Input
				value={value}
				onChange={onChange}
				placeholder="Enter threshold"
			/>
		</div>
	);
}
