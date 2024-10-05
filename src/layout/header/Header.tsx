import Logo from '@/components/logo/Logo';
import { Menu } from '@/utils/constans/constains';
import { MenuIcon, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="flex flex-col fixed top-0 left-0 right-0 z-[9999]">
			<div className="py-2 px-0 lg:px-6 bg-white/85 backdrop-blur-10 w-full flex items-center justify-between shadow-lg">
				<div className="container flex items-end gap-10">
					<div className="flex items-center gap-2 ">
						<div className="max-w-[55px] max-h-[55px] lg:max-w-[70px] lg:max-h-[70px] bg-slate-500 p-1">
							<Logo />
						</div>
						<div>
							<h1>
								<Link
									href="/"
									className="text-xl lg:text-2xl font-semibold text-secondary-grey"
								>
									Cava Designer
								</Link>
							</h1>
							<p className=" font-medium text-sm text-secondary-grey">Interior Design</p>
						</div>
					</div>
					<p className="text-sm lg:block hidden font-semibold text-secondary-grey">Thiết kế thông minh cho mọi nhà</p>
				</div>
				<div className="pr-2 block lg:hidden">
					<MenuIcon
						size={42}
						className="text-secondary-grey cursor-pointer "
					/>
				</div>
			</div>
			<div className=" px-0 lg:px-3 bg-black/20 backdrop-blur-10 w-full hidden lg:block">
				<div className="container flex items-center justify-between font-roboto">
					<ul>
						<li className="">
							{Menu.map((item) => (
								<Link
									key={item.label}
									href={item.path}
									className="text-xs uppercase font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
								>
									{item.label}
								</Link>
							))}
						</li>
					</ul>
					<ul className="nt-roboto flex items-center justify-center ">
						<li className="">
							<Link
								href={'/'}
								className="text-xs uppercase  font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Liên hệ: 0345197586
							</Link>
						</li>
						<li className="">
							<Link
								href={'https://zalo.me/0345197586'}
								className="text-xs uppercase  font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Zalo
							</Link>
						</li>
						<li className="">
							<Link
								href={'https://www.facebook.com/KofWoTH'}
								className="text-xs uppercase  font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Facebook
							</Link>
						</li>
						<li className=" hover:bg-yellow-600 py-[9px] ml-3 px-3 text-white transition-all duration-300">
							<Search
								color="#fff"
								className="cursor-pointer "
							/>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
