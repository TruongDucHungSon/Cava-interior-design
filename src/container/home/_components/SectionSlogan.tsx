import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

const SectionSlogan = () => {
	return (
		<section className="container bg-[#ebebeb] py-4 lg:py-0  ">
			<div
				className=" flex gap-6 flex-col lg:flex-row-reverse
                     items-center justify-around"
			>
				<div className="w-full lg:w-1/2">
					<OptimizedImage
						src={
							'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
						} // replace with your image path
						alt="Living room"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="w-full flex items-start lg:items-center  flex-col lg:w-[400px]">
					<h2 className="text-lg font-semibold text-[#0A0A0B]">Tổ ấm của người tinh tế</h2>
					<p className="text-xs lg:text-center w-full text-left lg:w-[400px] text-[#777777] mt-1">
						Trong suốt hơn 25 năm qua, cảm hứng từ gu thẩm mỹ tinh tế và tinh thần “Việt” đã giúp Nội thất Thuận Hưng
						tạo ra những thiết kế độc đáo, hợp thời và chất lượng.
					</p>
					<div className="flex text-[#dd9933] mt-3 items-center gap-1">
						<div>
							<Link
								href="#"
								className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
							>
								Về Nội thất Thuận Hưng
							</Link>
						</div>
						<IoMdArrowForward size={20} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionSlogan;
