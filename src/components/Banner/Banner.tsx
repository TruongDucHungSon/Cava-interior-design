'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import { IMAGE_SLIDE } from '@/utils/constans/constains';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
	return (
		<section>
			<Swiper
				loop={true}
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000, // Delay between transitions (in milliseconds)
				}}
				modules={[EffectFade, Navigation, Pagination, Autoplay]}
				className="h-[400px] lg:h-[800px]"
			>
				{IMAGE_SLIDE.map((slide) => (
					<SwiperSlide
						key={slide.id}
						className="h-full"
					>
						<OptimizedImage
							width={1000}
							height={1000}
							className="h-full"
							src={slide.SlideSrc.src}
							alt="banner"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Banner;
