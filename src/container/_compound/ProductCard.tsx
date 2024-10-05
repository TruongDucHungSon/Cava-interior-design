import OptimizedImage from '../../components/CustomImage/OptimizedImage';

import Link from 'next/link';
import slide1 from '../../assets/images/banner/slide1.jpg';

const ProductCard = () => {
	return (
		<div className="max-h-[330px] relative group">
			<Link href={'/'}>
				<OptimizedImage
					width={500}
					height={500}
					className="border-0 hover:border-[10px] transition-all duration-500 border-yellow-600"
					alt="product"
					src={slide1.src}
				/>
			</Link>
			<div className="absolute bottom-2 left-2">
				<h4 className="text-white text-xs uppercase font-medium py-[10px] px-5 bg-yellow-600 w-full">
					Trang trí phòng khách của bạn
				</h4>
			</div>
		</div>
	);
};

export default ProductCard;
