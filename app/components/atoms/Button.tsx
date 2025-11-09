"use client";
import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	active?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	active,
}) => (
	<button
		onClick={onClick}
		className={`${
			active ? "bg-black text-white" : "bg-[#e2e8f0] text-[#333]"
		} border-0 rounded-lg px-4 py-2 cursor-pointer`}>
		{children}
	</button>
);
