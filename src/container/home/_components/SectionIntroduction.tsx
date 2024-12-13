import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

const SectionIntroduction = () => {
	return (
		<section className="py-10 lg:py-20 ">
			<div
				className="container flex gap-6 flex-col lg:flex-row-reverse
                     items-center justify-around"
			>
				<div className="w-full h-[300px] lg:h-[500px] lg:w-1/2">
					<OptimizedImage
						src={
							'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww'
						} // replace with your image path
						alt="Living room"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="w-full flex items-start lg:items-center  flex-col lg:w-[400px]">
					<h2 className="text-lg font-semibold text-[#0A0A0B]">NỘI THẤT TINH TẾ</h2>
					<p className="text-xs lg:text-center w-full text-left lg:w-[400px] text-[#777777] mt-1">
						Với kinh nghiệm hơn 25 năm trong hoàn thiện nội thất, Thuận Hưng mang đến giải pháp toàn diện trong bao gồm
						thiết kế, trang trí và cung cấp nội thất trọn gói. Sở hữu đội ngũ chuyên nghiệp và hệ thống 10 cửa hàng, Nột
						thất Thuận Hưng là lựa chọn cho không gian tinh tế và hiện đại.
					</p>
					<div className="flex text-[#dd9933] mt-3 items-center gap-1">
						<div>
							<Link
								href="#"
								className="text-[#dd9933] text-xs lg:text-sm uppercase font-bold inline-block"
							>
								Xem thêm
							</Link>
						</div>
						<IoMdArrowForward size={20} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionIntroduction;
