import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET() {
	try {
		const filePath = path.join(process.cwd(), "data", "sales_data_sample.csv");
		const fileContent = fs.readFileSync(filePath, "utf8");

		const records = parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
			trim: true,
		});

		const data = records.map((r: any) => ({
			year: Number(r.year),
			month: Number(r.MONTH_ID),
			sales: Number(r.sales),
		}));

		return NextResponse.json(data);
	} catch (error) {
		console.error("Failed to read/parse CSV:", error);
		return NextResponse.json({ data: [], error: true });
	}
}
