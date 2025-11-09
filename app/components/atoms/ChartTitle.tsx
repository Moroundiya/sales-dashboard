interface ChartTitleProps {
	title: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ title }) => (
	<h2 className="text-xl font-bold mb-4">{title}</h2>
);

export default ChartTitle;
