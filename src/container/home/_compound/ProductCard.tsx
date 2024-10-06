import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';

interface ProductCardProps {
	image: string;
	title: string;
}

const ProductCard = ({ image, title }: ProductCardProps) => {
	return (
		<div className="max-h-[330px] relative group">
			<Link href={'/sanpham/1'}>
				<OptimizedImage
					width={2000}
					height={1000}
					className="border-0 hover:border-[10px] transition-all duration-500 border-yellow-600"
					alt="product"
					src={image}
				/>
			</Link>
			<div className="absolute bottom-2 left-2">
				<h4 className="text-white text-xs uppercase font-medium py-[10px] px-5 bg-yellow-600 w-full">{title}</h4>
			</div>
		</div>
	);
};

export default ProductCard;
