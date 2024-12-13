/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import { useState } from 'react';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [file, setFile] = useState(null);

	const handleFileChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log({ name, phone, email, message, file });
	};

	return (
		<section className="container p-10 lg:p-20">
			<div className="flex items-start gap-6 p-5 lg:p-10  bg-[#f6f7f8] justify-between">
				<div className="w-full lg:w-1/2 ">
					<h2 className="text-lg font-bold  ">Bạn cần hỗ trợ?</h2>
					<p className="text-sm font-medium  mb-8">Xin vui lòng để lại yêu cầu hỗ trợ của bạn.</p>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col lg:gap-6 gap-3"
					>
						<div className="flex w-full flex-col">
							<label
								htmlFor="name"
								className="font-medium mb-2 text-xs lg:text-sm "
							>
								Họ tên
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Họ tên"
								className="border  w-full border-gray-300 rounded-md outline-none p-2 placeholder:text-xs lg:placeholder:text-sm"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="flex w-full flex-col gap-6 sm:flex-row ">
							<div className="w-full">
								<label
									htmlFor="phone"
									className="font-medium mb-2 text-xs lg:text-sm"
								>
									Số điện thoại
								</label>
								<input
									type="number"
									id="phone"
									name="phone"
									placeholder="Số điện thoại"
									className="border w-full border-gray-300 rounded-md outline-none p-2 placeholder:text-xs lg:placeholder:text-sm"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="email"
									className="font-medium mb-2 text-xs lg:text-sm"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									className="border  w-full border-gray-300 rounded-md outline-none p-2 placeholder:text-xs lg:placeholder:text-sm"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="flex w-full flex-col">
							<label
								htmlFor="message"
								className="font-medium mb-2 text-xs lg:text-sm"
							>
								Nội dung liên hệ
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="Nội dung liên hệ"
								className="border border-gray-300 placeholder:text-xs lg:placeholder:text-sm rounded-md outline-none p-3 h-32"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="file"
								className="font-medium mb-2 text-xs lg:text-sm"
							>
								Chọn tệp
							</label>
							<input
								type="file"
								id="file"
								name="file"
								onChange={handleFileChange}
								className="border border-gray-300 placeholder:text-xs lg:placeholder:text-sm rounded-md outline-none p-3"
							/>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="bg-black text-xs lg:text-sm text-white font-semibold py-2 px-8 rounded-full"
							>
								Gửi yêu cầu
							</button>
						</div>
					</form>
				</div>
				<div className="hidden lg:block  h-auto lg:w-1/2">
					<OptimizedImage
						src="https://images.unsplash.com/photo-1567016507665-356928ac6679?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" // Replace with the image URL you want to use
						alt="Contact Form"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
