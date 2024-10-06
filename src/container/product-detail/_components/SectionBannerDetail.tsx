import React from 'react';
import OptimizedImage from '../../../components/CustomImage/OptimizedImage';
const SectionBannerDetail = () => {
	return (
		<section className="h-[400px] lg:h-[700px]">
			<OptimizedImage
				width={2000}
				height={1000}
				src="https://ancuong.com/pictures/catalog/banner-website/trang-chu/van-san/AC-444-PL.jpg"
				alt="banner-product"
			/>
		</section>
	);
};

export default SectionBannerDetail;
