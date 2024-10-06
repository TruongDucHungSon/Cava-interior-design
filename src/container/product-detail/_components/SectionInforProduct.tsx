import OptimizedImage from '@/components/CustomImage/OptimizedImage';
const SectionInforProduct = () => {
	return (
		<div>
			{/* Banner lớn */}
			<section className="relative w-full h-[80vh]">
				<OptimizedImage
					width={1500}
					height={700}
					src="https://ancuong.com/pictures/catalog/project/emperia/1-thumb.jpg"
					alt="Nhà Phố Modern Luxury"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
					<h1 className="text-5xl font-bold text-white text-center">
						Nhà Phố Modern Luxury <br /> An Cường Minh Sơn Design
					</h1>
				</div>
			</section>

			<main className="py-10 bg-gray-100">
				<section className="container mx-auto px-4">
					{/* Tiêu đề và Mô tả ngắn */}
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">Nhà Phố Modern Luxury</h2>
						<p className="text-gray-600 text-lg max-w-3xl mx-auto">
							Dự án Nhà Phố với phong cách hiện đại và sang trọng của Minh Sơn Design, được hoàn thiện bởi các vật liệu
							cao cấp của An Cường. Sự kết hợp hoàn hảo giữa kiến trúc và nội thất tạo nên một không gian sống đẳng cấp.
						</p>
					</div>

					{/* Hình ảnh dự án */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<OptimizedImage
								width={1000}
								height={700}
								src="https://ancuong.com/pictures/catalog/project/emperia/1-thumb.jpg"
								alt="Interior Design 1"
								className="w-full h-auto rounded-lg shadow-lg"
							/>
						</div>
						<div>
							<OptimizedImage
								width={1000}
								height={700}
								src="https://ancuong.com/pictures/catalog/project/emperia/1-thumb.jpg"
								alt="Interior Design 2"
								className="w-full h-auto rounded-lg shadow-lg"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
						<div>
							<OptimizedImage
								width={1000}
								height={700}
								src="https://ancuong.com/pictures/catalog/project/emperia/1-thumb.jpg"
								alt="Interior Design 3"
								className="w-full h-auto rounded-lg shadow-lg"
							/>
						</div>
						<div>
							<OptimizedImage
								width={1000}
								height={700}
								src="https://ancuong.com/pictures/catalog/project/emperia/1-thumb.jpg"
								alt="Interior Design 4"
								className="w-full h-auto rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</section>

				{/* Phần Thông tin chi tiết */}
				<section className="mt-16 bg-white py-12">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Thông tin chi tiết dự án</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-gray-700">Kiến trúc</h3>
								<p className="text-gray-600">
									Dự án này được thiết kế theo phong cách hiện đại, kết hợp giữa các đường nét tối giản và sự tinh tế
									trong cách bố trí nội thất. Không gian mở tạo nên sự thông thoáng và liên kết chặt chẽ giữa các phòng
									chức năng.
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-gray-700">Nội thất</h3>
								<p className="text-gray-600">
									Nội thất sử dụng trong dự án bao gồm các vật liệu cao cấp từ An Cường, với màu sắc nhã nhặn, tôn lên
									vẻ đẹp tinh tế và sang trọng. Các sản phẩm gỗ laminate, acrylic và vật liệu composite được phối hợp
									hài hòa trong không gian.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default SectionInforProduct;
