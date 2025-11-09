"use client";
import React from "react";

type InputProps = {
	value: string | number;
	onChange: (value: string) => void;
	placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
	value,
	onChange,
	placeholder,
}) => (
	<input
		type="number"
		value={value}
		placeholder={placeholder}
		onChange={(e) => onChange(e.target.value)}
		className="px-4 py-1.5 rounded-lg border outline-0 border-[#ccc] no-arrows text-base"
	/>
);
