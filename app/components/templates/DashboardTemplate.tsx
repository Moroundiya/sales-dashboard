export default function DashboardTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-7xl mx-auto p-4 text-black">
			<h1 className="text-3xl font-extrabold text-black text-center mb-10 uppercase pt-5">Sales Dashboard</h1>
			{children}
		</div>
	);
}
