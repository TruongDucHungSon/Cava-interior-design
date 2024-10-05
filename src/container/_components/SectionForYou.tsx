import OptimizedImage from '@/components/CustomImage/OptimizedImage';

const SectionForYou = () => {
	return (
		<section className="container pb-20">
			<div className="px-0 lg:px-20">
				<h4 className="text-center text-2xl lg:text-3xl font-bold uppercase text-primary-blue mb-5 lg:mb-10">
					tái tạo không gian của bạn
				</h4>
				<div className="relative h-[400px] lg:h-[685px] group bg-center">
					<OptimizedImage
						width={1000}
						height={500}
						className="border-0 hover:border-[12px] transition-all duration-500 bg-center border-yellow-600"
						alt="product"
						src="https://ancuong.com/pictures/catalog/products/decorative-panel/acoustic/spmoi.jpg"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionForYou;
