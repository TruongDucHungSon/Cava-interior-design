import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
const Footer = () => {
	return (
		<footer className="w-full bg-[#303036]">
			<div className="container px-6 lg:px-8">
				<div className="grid grid-cols-1 place-items-start lg:place-items-center lg:grid-cols-4 gap-4 lg:gap-8 py-7 lg:py-14 ">
					<div className=" mb-10 lg:col-span-1  lg:mb-0">
						<div className="w-[300px] mb-4">
							<Link
								href="/"
								className="flex  lg:justify-start"
							>
								<OptimizedImage
									alt="logo"
									width={1000}
									height={1000}
									src={'https://noithatbinhduong.vn/images/footer-logo.png'}
								/>
							</Link>
						</div>
						<p className=" text-xs flex items-center gap-2 text-white lg:max-w-xs  mb-2">
							<IoMdTime size={18} /> Mon - Fri: 07:30am - 07:45pm
						</p>
						<p className=" text-xs flex items-center gap-2 text-white lg:max-w-xs  mb-2">
							<IoMdTime size={18} /> Sat - Sun: 08:30am - 05:00pm
						</p>
						<p className=" text-xs text-white flex items-center gap-2 lg:max-w-xs  mb-2">
							<FiPhoneCall size={18} /> 0827 509 503
						</p>
						<p className=" text-xs text-white flex items-center gap-2 lg:max-w-xs  mb-2">
							<MdOutlineMarkEmailUnread size={18} />
							thuanhungdathang@gmail.com
						</p>
						<p className=" text-xs text-white flex items-center gap-2 lg:max-w-xs  mb-2">
							<TiLocationOutline size={24} />
							11 Phú Lợi, Phường Phú Lợi, TP. Thủ Dầu Một, Bình Dương.
						</p>
					</div>
					<div className=" ">
						<h4 className="text-base text-white font-medium mb-3">Hỗ Trợ</h4>
						<ul className="text-xs  transition-all duration-500">
							<li className="mb-3">
								<Link
									href="/"
									className="text-white text-xs hover:text-white"
								>
									Các câu hỏi thường gặp
								</Link>
							</li>
							<li className="mb-3">
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									Hướng dẫn mua hàng
								</Link>
							</li>
							<li className="mb-3">
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									Phương thức thanh toán
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									Phương thức vận chuyển
								</Link>
							</li>
						</ul>
					</div>
					<div className=" ">
						<h4 className="text-base text-white font-medium mb-3">Về Chúng Tôi</h4>
						<ul className="text-xs  transition-all duration-500">
							<li className="mb-3">
								<Link
									href="/"
									className="text-white  text-xs hover:text-white"
								>
									Tuyển Dụng
								</Link>
							</li>
							<li className="mb-3">
								<a
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									Cam kết chất lượng
								</a>
							</li>
							<li className="mb-3">
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									Giới thiệu
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									noithatbinhduong.vn
								</Link>
							</li>
						</ul>
					</div>
					<div className=" ">
						<h4 className="text-base text-white font-medium mb-3">Liên kết hữa ích</h4>
						<ul className="text-xs  transition-all duration-500">
							<li className="mb-3">
								<Link
									href="/"
									className="text-white text-xs hover:text-white"
								>
									10 Bộ sofa đẹp sang trọng nhất cho phòng khách
								</Link>
							</li>
							<li className="mb-3">
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									10 Mẫu thiết kế đẹp cho phòng ngủ
								</Link>
							</li>
							<li className="mb-3">
								<Link
									href="/"
									className=" text-white text-xs hover:text-white"
								>
									10 mẫu bàn ăn đẹp và sang trọng nhất
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className=" py-7 border-t border-gray-200">
					<div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
						<span className="text-xs text-white ">© Copyright 2020 Bản quyền của noithatbinhduong.vn</span>
						<ul className="flex items-center gap-9 mt-4 lg:mt-0">
							<li>
								<a
									href="/"
									className="  text-xs text-white"
								>
									Trung Tâm Nội Thất Thuận Hưng Tại Bình Dương.
								</a>
							</li>
							<li>
								<a
									href="/"
									className=" text-xs text-white"
								>
									Cửa Hàng Nội Thất Tại Bình Dương Uy Tín Nhất.
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
