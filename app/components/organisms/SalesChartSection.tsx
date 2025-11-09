"use client";
import {
	BarChart,
	Bar,
	LineChart,
	Line,
	PieChart,
	Pie,
	Cell,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { salesData } from "../../data/salesData";

type Props = {
	year: number;
	chartType: "bar" | "line" | "pie";
	threshold?: number;
};

export default function SalesChartSection({
	year,
	chartType,
	threshold,
}: Props) {
	const filteredData = salesData
		.filter((d) => d.year === year)
		.filter((d) => (threshold ? d.sales >= threshold : true));

	return (
		<div
			style={{
				background: "#fff",
				padding: "16px",
				borderRadius: "8px",
				boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
				marginTop: "16px",
			}}>
			<ResponsiveContainer
				width="100%"
				height={400}>
				{chartType === "bar" && (
					<BarChart data={filteredData}>
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="sales"
							fill="#0070f3"
						/>
					</BarChart>
				)}
				{chartType === "line" && (
					<LineChart data={filteredData}>
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="sales"
							stroke="#0070f3"
						/>
					</LineChart>
				)}
				{chartType === "pie" && (
					<PieChart>
						<Pie
							data={filteredData}
							dataKey="sales"
							nameKey="month"
							cx="50%"
							cy="50%"
							outerRadius={120}
							label>
							{filteredData.map((entry, index) => (
								<Cell
									key={index}
									fill={index % 2 === 0 ? "#0070f3" : "#82ca9d"}
								/>
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				)}
			</ResponsiveContainer>
		</div>
	);
}
