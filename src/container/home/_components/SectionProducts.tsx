import ProductCard from '../../../components/product/index';
const SectionProducts = () => {
	return (
		<div>
			<section className="py-10 lg:py-20 container">
				<h6 className="uppercase mb-3 lg:mb-6  text-base lg:text-lg font-semibold ">sản phẩm mới</h6>
				<div className="grid grid-cols-1 pt-8 lg:pt-12  border-t md:grid-cols-2 lg:grid-cols-4 gap-6">
					<ProductCard
						id={1}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={2}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={3}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={4}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
				</div>
			</section>
			<section className="container">
				<h6 className="uppercase mb-3 lg:mb-6  text-base lg:text-lg font-semibold ">Sản phẩm nổi bật</h6>
				<div className="grid grid-cols-1 pt-8 lg:pt-12  border-t md:grid-cols-2 lg:grid-cols-4 gap-6">
					<ProductCard
						id={1}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={2}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={3}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
					<ProductCard
						id={4}
						name="Sofa 3 chên Orientale da beige R5"
						price={'1,357,000đ'}
						image={'https://noithatbinhduong.vn/images/product/small/tu-trang-tri-010.jpg'}
					/>
				</div>
			</section>
		</div>
	);
};

export default SectionProducts;
