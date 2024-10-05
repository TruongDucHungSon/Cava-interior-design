import OptimizedImage from '@/components/CustomImage/OptimizedImage';

interface SectionForYouProps {
	image: string;
	title: string;
}

const SectionForYou = ({ image, title }: SectionForYouProps) => {
	return (
		<section className="container pb-20">
			<div className="px-0 lg:px-20">
				<h4 className="text-center text-2xl lg:text-3xl font-bold uppercase text-primary-blue mb-5 lg:mb-10">
					{title}
				</h4>
				<div className="relative h-[400px] lg:h-[685px] group bg-center">
					<OptimizedImage
						width={2000}
						height={500}
						className="border-0 hover:border-[12px] transition-all duration-500 bg-center border-yellow-600"
						alt="product"
						// src="https://ancuong.com/pictures/catalog/products/decorative-panel/acoustic/spmoi.jpg"
						src={image}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionForYou;
