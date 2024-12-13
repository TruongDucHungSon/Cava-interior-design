// Install required packages: npm install swiper react react-slick slick-carousel
'use client';
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import { slides } from '@/utils/constans/constains';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SectionCarousel() {
	return (
		<section className="container py-10 lg:py-20">
			<div className="px-0 lg:px-10">
				<h2 className="text-xl lg:text-2xl font-bold mb-8 lg:mb-12 text-center">Góc cảm hứng</h2>
				<Swiper
					modules={[Pagination]}
					spaceBetween={30}
					slidesPerView={2}
					slidesPerGroup={2}
					pagination={{ clickable: true, type: 'bullets', horizontalClass: 'swiper-pagination-horizontal' }}
					className="relative"
					breakpoints={{
						320: { slidesPerView: 1 }, // For mobile
						600: { slidesPerView: 2 }, // For tablets
					}}
				>
					{slides.map((slide) => (
						<SwiperSlide
							key={slide.id}
							className="flex group flex-col lg:mb-16 mb-8 md:flex-row"
						>
							<div className="w-full bg-cover bg-center h-[300px] lg:h-[500px] ">
								<OptimizedImage
									src={slide.imageUrl}
									alt={slide.title}
									width={1000}
									height={1000}
								/>
							</div>
							<div className="flex flex-col mt-6 text-center group-hover:mt-4 transition-all duration-300">
								<h3 className="text-base font-semibold capitalize">{slide.title}</h3>
								<p className="text-gray-600 text-xs line-clamp-1">{slide.description}</p>
							</div>
						</SwiperSlide>
					))}
					<div className="swiper-pagination swiper-pagination-bullet-slide swiper-pagination-horizontal !bg-yellow-400" />
				</Swiper>
			</div>
		</section>
	);
}
