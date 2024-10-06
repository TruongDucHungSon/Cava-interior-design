'use client';
import Logo from '@/components/logo/Logo';
import { Menu } from '@/utils/constans/constains';
import { MenuIcon, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="flex flex-col fixed top-0 left-0 right-0 z-[9999]">
			{/* Header top bar */}
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
							<p className="font-medium text-sm text-secondary-grey">Interior Design</p>
						</div>
					</div>
					<p className="text-sm lg:block hidden font-semibold text-secondary-grey">Thiết kế thông minh cho mọi nhà</p>
				</div>
				<div className="pr-2 block lg:hidden">
					<MenuIcon
						size={42}
						className="text-secondary-grey cursor-pointer"
						onClick={toggleMenu}
					/>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end lg:hidden">
					<div className="bg-white w-3/4 h-full p-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold">Menu</h2>
							<X
								size={32}
								className="cursor-pointer"
								onClick={toggleMenu}
							/>
						</div>
						<ul className="space-y-4">
							{Menu.map((item) => (
								<li key={item.label}>
									<Link
										href={item.path}
										className="block text-lg font-bold py-2 px-3 text-secondary-grey hover:bg-yellow-600 hover:text-white transition-all duration-300"
										onClick={toggleMenu}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			{/* Desktop Navigation */}
			<div className="px-0 lg:px-3 bg-black/20 backdrop-blur-10 w-full hidden lg:block">
				<div className="container flex items-center justify-between font-roboto">
					<ul>
						<li>
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
					<ul className="flex items-center justify-center">
						<li>
							<Link
								href={'/'}
								className="text-xs uppercase font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Liên hệ: 0345197586
							</Link>
						</li>
						<li>
							<Link
								href={'https://zalo.me/0345197586'}
								className="text-xs uppercase font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Zalo
							</Link>
						</li>
						<li>
							<Link
								href={'https://www.facebook.com/KofWoTH'}
								className="text-xs uppercase font-bold py-2.5 px-3 hover:bg-yellow-600 text-white inline-block transition-all duration-300"
							>
								Facebook
							</Link>
						</li>
						<li className="hover:bg-yellow-600 py-[9px] ml-3 px-3 text-white transition-all duration-300">
							<Search
								color="#fff"
								className="cursor-pointer"
							/>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
