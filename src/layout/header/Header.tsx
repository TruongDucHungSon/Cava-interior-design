/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Logo from '@/components/logo/Logo';
import { Input } from '@/components/ui/input';
import { Menu } from '@/utils/constans/constains';
import Link from 'next/link';
import { useState } from 'react';
import { CiHeart, CiLocationOn, CiUser } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoBagHandleOutline, IoClose } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';
const Header = () => {
	const [hoveredMenu, setHoveredMenu] = useState(null);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState(null);

	const handleMouseEnter = (index: any) => {
		setHoveredMenu(index);
	};

	const handleMouseLeave = () => {
		setHoveredMenu(null);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleSubMenu = (index: any) => {
		setOpenSubMenu(openSubMenu === index ? null : index);
	};

	return (
		<header className="flex flex-col fixed shadow-md top-0 left-0 right-0 z-[9999]">
			{/* Header top bar */}
			<div className="lg:py-[10px] py-[6px] px-0 bg-white dark:bg-gray-800 text-[#0A0A0B] dark:text-gray-100 w-full border-b dark:border-gray-700">
				<div className="container flex items-center justify-center lg:justify-between">
					<div className="flex items-center gap-6 h-[30px] lg:h-10">
						<div className="flex items-center gap-2">
							<MdPhoneInTalk />
							<Link
								className="text-xs font-semibold"
								href="tel:0827509503"
							>
								0827 509 503
							</Link>
						</div>
						<div className="lg:flex hidden items-center gap-4">
							<Link
								className="text-xs text-[#777] dark:text-gray-400 hover:text-[#0A0A0B] dark:hover:text-gray-100 transition-all duration-300 font-medium"
								href={'/'}
							>
								Giới thiệu
							</Link>
							<Link
								className="text-xs text-[#777] dark:text-gray-400 hover:text-[#0A0A0B] dark:hover:text-gray-100 transition-all duration-300 font-medium"
								href={'/'}
							>
								Khuyến mãi
							</Link>
							<Link
								className="text-[#fe0808] text-xs font-medium"
								href={'/'}
							>
								Giảm giá đặc biệt
							</Link>
						</div>
					</div>
					<div className="hidden lg:flex items-center gap-3">
						<CiLocationOn
							className="cursor-pointer"
							size={20}
							color="gray"
						/>
						<CiHeart
							className="cursor-pointer"
							size={22}
							color="gray"
						/>
						<IoBagHandleOutline
							className="cursor-pointer"
							size={20}
							color="gray"
						/>
						<div className="flex cursor-pointer font-medium text-xs ml-2 items-center text-[#777] dark:text-gray-400 hover:text-[#0A0A0B] dark:hover:text-gray-100 transition-all duration-300 gap-2">
							Đăng nhập{' '}
							<CiUser
								size={16}
								color="gray"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Header Navigation mobile */}
			<div className="flex px-4 py-2 items-center justify-between w-full lg:hidden h-14 bg-white shadow-md">
				<div className="mr-8">
					<HiMenuAlt2
						size={26}
						className="cursor-pointer text-[#777]"
						onClick={toggleMobileMenu}
					/>
				</div>
				<Logo />

				<div className="lg:hidden flex items-center gap-3">
					<CiLocationOn
						className="cursor-pointer"
						size={20}
						color="gray"
					/>
					<CiHeart
						className="cursor-pointer"
						size={22}
						color="gray"
					/>
					<IoBagHandleOutline
						className="cursor-pointer"
						size={20}
						color="gray"
					/>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={() => setMobileMenuOpen(false)}
			></div>
			<div
				className={`fixed top-0 bottom-0 left-0 w-[80%] bg-white dark:bg-gray-800 shadow-md z-50 transition-transform duration-300 transform ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div
					onClick={() => setMobileMenuOpen(false)}
					className="text-2xl block lg:hidden cursor-pointer absolute right-2 top-4"
				>
					<IoClose size={24} />
				</div>
				<ul className="flex flex-col p-4">
					{Menu.map((item, index) => (
						<li
							key={item.label}
							className="py-2"
						>
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => toggleSubMenu(index)}
							>
								<Link
									href={item.path}
									className="text-sm font-medium text-[#0A0A0B] dark:text-gray-100 hover:text-[#dd9933] transition-all"
								>
									{item.label}
								</Link>
								{item.subMenu?.length > 0 && (
									<span className="text-[#777] text-xl dark:text-gray-400">{openSubMenu === index ? '-' : '+'}</span>
								)}
							</div>
							{item.subMenu?.length > 0 && openSubMenu === index && (
								<ul className="ml-4 mt-2">
									{item.subMenu.map((subItem: any) => (
										<li
											key={subItem.label}
											className="py-1"
										>
											<Link
												href={subItem.path}
												className="text-sm text-[#0A0A0B] dark:text-gray-100 hover:text-[#dd9933] transition-all"
											>
												{subItem.label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
			{/* Desktop Navigation */}
			<div className="bg-white dark:bg-gray-800 w-full hidden lg:block">
				<div className="container py-5 flex items-center justify-between">
					<div className="flex items-center gap-6">
						<Logo />
						<ul className="relative flex items-center">
							{Menu.map((item, index) => (
								<li
									key={item.label}
									className="relative inline-block"
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
								>
									<Link
										href={item.path}
										className="text-xs font-medium py-2.5 px-3 text-[#0A0A0B] dark:text-gray-100 inline-block hover:text-[#dd9933]  transition-all duration-300"
									>
										{item.label}
									</Link>
									{item.subMenu?.length > 0 && hoveredMenu === index && (
										<ul className="absolute top-full left-0 bg-white w-[250px] dark:bg-gray-800 border dark:border-gray-700 shadow-md rounded-md p-2 z-50">
											{item.subMenu.map((subItem: any) => (
												<li key={subItem.label}>
													<Link
														href={subItem.path}
														className="block px-4 py-2 text-xs lg:text-sm hover:bg-[#dd9933] text-gray-700 dark:text-gray-300 rounded-md hover:text-white dark:hover:bg-gray-700 transition"
													>
														{subItem.label}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center gap-6 mr-10">
						<div className="flex px-3 py-[2px] relative justify-between items-center border rounded-2xl dark:border-gray-700">
							<Input
								className="text-sm p-0 dark:text-gray-100"
								type="text"
								placeholder="Tìm kiếm sản phẩm"
							/>
							<GoSearch size={20} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
