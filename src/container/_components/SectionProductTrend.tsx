import ProductTrending from '../_compound/ProductTrending';
const SectionProductTrend = () => {
	return (
		<section className="container pb-20">
			<h4 className="text-center text-2xl lg:text-3xl font-bold uppercase text-primary-blue mb-5 lg:mb-10 w-full max-w-[1000px] mx-auto">
				thiết kế xu hướng mới cho căn hộ văn phòng nơi kinh doanh của bạn
			</h4>
			<div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-12 px-0 lg:px-20">
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
				<ProductTrending />
			</div>
		</section>
	);
};

export default SectionProductTrend;
