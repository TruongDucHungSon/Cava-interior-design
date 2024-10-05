import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';
interface ProductTrendingProps {
	image: string;
	title: string;
}

const ProductTrending = ({ image, title }: ProductTrendingProps) => {
	return (
		<div>
			<div className="h-[340px] relative overflow-hidden group">
				<Link href={'/'}>
					<OptimizedImage
						width={1000}
						height={700}
						src={image}
						alt="product"
						className="border-0 group-hover:border-[7px] transition-all duration-500 border-yellow-600"
					/>
				</Link>
				<div className="absolute bottom-5 left-5 ">
					<h4 className="text-white text-xs uppercase z-10 font-bold relative ">
						{title}
						<span className="absolute bottom-0 left-[-20px] w-[610px] h-14 bg-yellow-600 -z-[1] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:bottom-[-20px] transition-all duration-500 "></span>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default ProductTrending;
