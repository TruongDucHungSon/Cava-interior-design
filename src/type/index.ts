export type ProductProps = {
	id: number;
	title?: string;
	backLink?: {
		href: string;
		label: string;
	};
	information?: { label: string; value: string }[];
	description?: string[];
	images?: { src: string; alt: string }[];
};
