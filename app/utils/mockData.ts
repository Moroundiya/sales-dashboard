export type SalesData = {
	year: number;
	month: string;
	sales: number;
};

export const salesData: SalesData[] = [
	{ year: 2022, month: "Jan", sales: 1200 },
	{ year: 2022, month: "Feb", sales: 1500 },
	{ year: 2023, month: "Jan", sales: 1800 },
	{ year: 2024, month: "Jan", sales: 2000 },
];
