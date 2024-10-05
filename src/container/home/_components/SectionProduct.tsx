import ProductCard from '../_compound/ProductCard';

const SectionProduct = () => {
	return (
		<section className="container py-10 lg:py-20 ">
			<h4 className="text-center text-2xl lg:text-3xl font-bold uppercase text-primary-blue mb-5 lg:mb-10">
				Sản Phẩm Thiết Kế
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-12 px-0 lg:px-20">
				<ProductCard
					image="https://ancuong.com/webadmin-v2/pictures/files/product-solution/lux-effect/thumb.jpg"
					title="Thiết kế phần bếp"
				/>
				<ProductCard
					image="https://ancuong.com/webadmin-v2/pictures/files/product-solution/lux-effect/thumb.jpg"
					title="Thiết kế phần bếp"
				/>
				<ProductCard
					image="https://ancuong.com/webadmin-v2/pictures/files/product-solution/lux-effect/thumb.jpg"
					title="Thiết kế phần bếp"
				/>
				<ProductCard
					image="https://ancuong.com/webadmin-v2/pictures/files/product-solution/lux-effect/thumb.jpg"
					title="Thiết kế phần bếp"
				/>
			</div>
		</section>
	);
};

export default SectionProduct;
