// import Pr8 from '@/assets/images/Products/8.jpg';
// import Pr9 from '@/assets/images/Products/9.jpg';
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';
// import Pr10 from '@/assets/images/Products/10.jpg';
import { IoMdArrowForward } from 'react-icons/io';

const SectionStyle = () => {
	return (
		<section className="py-10 lg:py-20 bg-[#ebebeb]">
			<div className="container flex flex-col gap-6  ">
				<div
					className="flex gap-6 flex-col lg:flex-row
                    justify-items-start items-center justify-center"
				>
					{/* First Section */}
					<div className="w-full h-[300px] lg:h-[500px] lg:w-1/2">
						<OptimizedImage
							src={
								'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
							} // replace with your image path
							alt="Living room"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="w-full lg:w-[400px]">
						<h2 className="text-lg font-semibold text-[#0A0A0B]">Không gian phòng khách</h2>
						<p className="text-xs w-full lg:w-[300px] text-[#777777] mt-1">
							Mang lại những nguồn cảm hứng và nét sinh động cho không gian
						</p>
						<div className="flex text-[#dd9933] mt-3 items-center gap-1">
							<div>
								<Link
									href="#"
									className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
								>
									KHÁM PHÁ
								</Link>
							</div>
							<IoMdArrowForward size={18} />
						</div>
					</div>
				</div>
				{/* second Section */}

				<div
					className="flex gap-6 flex-col lg:flex-row-reverse
                    justify-items-center items-center justify-center"
				>
					<div className="w-full h-[300px] lg:h-[500px] lg:w-1/2">
						<OptimizedImage
							src={
								'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
							} // replace with your image path
							alt="Living room"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="w-full flex items-start lg:items-center flex-col lg:w-[400px]">
						<h2 className="text-lg font-semibold text-[#0A0A0B]">Đồ trang trí</h2>
						<p className="text-xs w-full lg:w-[300px] text-[#777777] mt-1">
							Mang lại những nguồn cảm hứng và nét sinh động cho không gian
						</p>
						<div className="flex text-[#dd9933] mt-3 items-center gap-1">
							<div>
								<Link
									href="#"
									className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
								>
									KHÁM PHÁ
								</Link>
							</div>
							<IoMdArrowForward size={20} />
						</div>
					</div>
				</div>
				<div
					className="flex gap-6 flex-col lg:flex-row
                    justify-items-center items-center justify-center"
				>
					<div className="w-full h-[300px] lg:h-[500px] lg:w-1/2">
						<OptimizedImage
							src={
								'https://images.unsplash.com/photo-1605886693794-3996f12a9da7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
							} // replace with your image path
							alt="Living room"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="w-full flex items-start  flex-col lg:w-[400px]">
						<h2 className="text-lg font-semibold text-[#0A0A0B]">Không gian phòng ngủ</h2>
						<p className="text-xs w-full lg:w-[300px] text-[#777777] mt-1">
							Mang lại những nguồn cảm hứng và nét sinh động cho không gian
						</p>
						<div className="flex text-[#dd9933] mt-3 items-center gap-1">
							<div>
								<Link
									href="#"
									className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
								>
									KHÁM PHÁ
								</Link>
							</div>
							<IoMdArrowForward size={20} />
						</div>
					</div>
				</div>
				<div
					className="flex gap-6 flex-col lg:flex-row-reverse
                     items-center justify-center"
				>
					<div className="w-full h-[300px] lg:h-[500px] lg:w-1/2">
						<OptimizedImage
							src={
								'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D'
							} // replace with your image path
							alt="Living room"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="w-full flex items-start lg:items-center flex-col lg:w-[400px]">
						<h2 className="text-lg font-semibold text-[#0A0A0B]">Không gian phòng ăn</h2>
						<p className="text-xs w-full lg:w-[300px] text-[#777777] mt-1">
							Mang lại những nguồn cảm hứng và nét sinh động cho không gian
						</p>
						<div className="flex text-[#dd9933] mt-3 items-center gap-1">
							<div>
								<Link
									href="#"
									className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
								>
									KHÁM PHÁ
								</Link>
							</div>
							<IoMdArrowForward size={20} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionStyle;
