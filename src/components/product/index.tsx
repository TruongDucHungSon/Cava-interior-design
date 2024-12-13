import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';

type IProductProps = {
	image: string;
	name?: string;
	price?: string;
	id?: number;
};

const ProductCard = ({ image, name, price, id }: IProductProps) => {
	return (
		<div
			key={id}
			className="group border transition-all duration-300 border-transparent p-3 hover:border-gray-200"
		>
			<div className="h-[175px] mb-2">
				<OptimizedImage
					height={500}
					width={500}
					src={image}
					alt="pr12"
				/>
			</div>
			<div>
				<Link
					href={'/'}
					className="text-xs mt-1 font-medium"
				>
					{name}
				</Link>
				<div className="flex mt-2 flex-col items-end justify-end">
					<CiHeart
						size={22}
						className="cursor-pointer"
					/>
					<p className="text-xs font-semibold">{price}</p>
				</div>
				<div className="grid transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100 grid-cols-2 gap-5 mt-3">
					<Button className="rounded-none bg-transparent text-[#0A0A0B] border border-[#0A0A0B] hover:bg-[#0A0A0B] hover:text-white  py-[10px] px-4 text-xs">
						Thêm vào giỏ
					</Button>
					<Button className="rounded-none py-[10px] px-4 text-xs">Xem Thêm</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
