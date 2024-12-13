/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import { LIST_CATEGORIES } from '@/utils/constans/constains';
const SectionListCategory = () => {
	return (
		<div className="container mx-auto py-10 lg:py-20">
			<div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
				<div className="relative h-full lg:h-[500px] group overflow-hidden  shadow-md">
					<div className="lg:h-full h-[250px] cursor-pointer">
						<OptimizedImage
							src={
								'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
							}
							alt={'Product 6'}
							className="transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
					<div className="absolute h-full inset-0  flex items-center justify-center  transition-opacity duration-300">
						<span className="text-white font-semibold text-lg">Ghế</span>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:h-[500px] h-full lg:grid-cols-2 gap-6">
					{LIST_CATEGORIES?.map((product: any) => (
						<div
							key={product.id}
							className="relative group overflow-hidden"
						>
							<div className="h-[250px] cursor-pointer">
								<OptimizedImage
									src={product.image}
									alt={product.name}
									className="transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							<div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center  transition-opacity duration-300">
								<span className="text-white font-semibold text-lg">{product.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionListCategory;
