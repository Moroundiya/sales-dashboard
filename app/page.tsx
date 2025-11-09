"use client";
import { useState } from "react";
import DashboardTemplate from "@/app/components/templates/DashboardTemplate";
import SalesChartSection from "@/app/components/organisms/SalesChartSection";
import FilterInput from "@/app/components/molecules/FilterInput";
import ChartTypeSwitcher from "@/app/components/molecules/ChartTypeSwitcher";

export default function Page() {
	const [year, setYear] = useState(2024);
	const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
	const [threshold, setThreshold] = useState<number | undefined>(undefined);

	return (
		<DashboardTemplate>
			<div className="space-y-5 lg:flex lg:space-y-0 justify-between items-center mb-16">
				<div>
					<label>Year: </label>
					<select
						value={year}
						onChange={(e) => setYear(Number(e.target.value))}
						style={{
							padding: "8px",
							borderRadius: "4px",
							border: "1px solid #ccc",
							marginLeft: "8px",
						}}>
						<option value={2024}>2024</option>
						<option value={2023}>2023</option>
						<option value={2022}>2022</option>
					</select>
				</div>

				<FilterInput
					label="Min Sales"
					value={threshold ?? ""}
					onChange={(val) => setThreshold(val ? Number(val) : undefined)}
				/>

				<ChartTypeSwitcher
					type={chartType}
					onChange={setChartType}
				/>
			</div>

			<SalesChartSection
				year={year}
				chartType={chartType}
				threshold={threshold}
			/>
		</DashboardTemplate>
	);
}
