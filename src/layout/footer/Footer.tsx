import FacebookIcon from '@/assets/svgs/facebook/facebook.svg';
import ZaloIcon from '@/assets/svgs/zalo/zalo.svg';
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Logo from '@/components/logo/Logo';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className="w-full bg-[#eeeeee] py-5">
			<div className="container flex items-center">
				<div className="px-0 lg:px-20 flex items-center gap-3">
					<div className="max-w-[55px] max-h-[55px] lg:max-w-[70px] lg:max-h-[70px] bg-slate-500 p-1 ">
						<Logo />
					</div>
					<div>
						<p className="text-lg lg:text-xl font-semibold text-secondary-grey">Cava Design</p>
						<p className="text-xs lg:text-sm">Interior</p>
					</div>
				</div>
				<div className="flex items-center gap-8">
					<div className="w-12 h-12">
						<Link href={'https://zalo.me/0345197586'}>
							<OptimizedImage
								src={ZaloIcon}
								alt="logo-zalo"
							/>
						</Link>
					</div>
					<div className="w-12 h-12">
						<Link href={'https://www.facebook.com/KofWoTH'}>
							<OptimizedImage
								src={FacebookIcon}
								alt="logo-facebook"
							/>
						</Link>
					</div>
					<div className="text-[#767373] text-xs">
						<p className="text-[#767373] text-xs">
							© 2024 <strong className="text-secondary-grey uppercase">Canva interior design.</strong>
						</p>
						<p> All Rights Reserved. Developed by 3graphic</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
