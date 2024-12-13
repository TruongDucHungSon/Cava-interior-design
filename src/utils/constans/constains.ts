export const Menu = [
	{
		label: 'Trang chủ',
		path: '/',
		subMenu: [],
	},
	{
		label: 'Sản phẩm',
		path: '/',
		subMenu: [
			{ label: 'Sản phẩm 1', path: '/' },
			{ label: 'Sản phẩm 2', path: '/' },
			{ label: 'Sản phẩm 3', path: '/' },
		],
	},

	{
		label: 'Bộ sưu tập',
		path: '/',
		subMenu: [
			{
				label: 'Bộ sưu tập 1',
				path: '/',
			},
			{
				label: 'Bộ sưu tập 2',
				path: '/',
			},
			{
				label: 'Bộ sưu tập 3',
				path: '/',
			},
			{
				label: 'Bộ sưu tập 4',
				path: '/',
			},
			{
				label: 'Bộ sưu tập 5',
				path: '/',
			},
		],
	},
	{
		label: 'Dự án',
		path: '/',
		subMenu: [
			{ label: 'Dự án 1', path: '/' },
			{ label: 'Dự án 2', path: '/' },
			{ label: 'Dự án 3', path: '/' },
		],
	},
	{
		label: 'Về chúng tôi',
		path: '/',
		subMenu: [],
	},
	{
		label: 'Góc cảm hứng',
		path: '/',
		subMenu: [
			{ label: 'Góc cảm hứng 1', path: '/' },
			{ label: 'Góc cảm hứng 2', path: '/' },
			{ label: 'Góc cảm hứng 3', path: '/' },
		],
	},
] as const;

export const IMAGE_SLIDE = [
	{
		id: 0,
		img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxpZXJ8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vYmlsaWVyfGVufDB8fDB8fHww',
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1vYmlsaWVyfGVufDB8fDB8fHww',
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vYmlsaWVyfGVufDB8fDB8fHww',
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1vYmlsaWVyfGVufDB8fDB8fHww',
	},
] as const;

export const DATA_PRODUCT = [
	{
		id: 1,
		title: 'LAurora Resort - Clubhouse',
		backLink: {
			href: '/san-pham',
			label: 'Back',
		},
		information: [
			{ label: 'ADDRESS', value: 'Tuy Hoa, Phu Yen' },
			{ label: 'DEVELOPER', value: 'Cloud Gate Group' },
			{ label: 'YEAR', value: '2023' },
			{ label: 'STATUS', value: 'Ongoing' },
			{ label: 'MEMBER', value: 'Le Nguyen Thuy Vi - Dang Luu Diem Phuong - Ha Nguyen Bao Kha' },
		],
		description: [
			'Drawing inspiration from the soulful “Xu Nau” lifestyle, our restaurant offers a modern interpretation of Vietnamese traditions. Step into a realm where rustic elegance meets the soul mix of Vietnam’s rice culture and touch of Cham. This concept exhales rustic and lively at the same time.',
			'The interior design blends in the local culture through every single detail without forgetting the ultimate comfort. Interiors are dotted with handcrafted materials from bamboo, rattan, and wood. Refined interior design, local earthenware, handwoven bamboo baskets. The dining experience at Phu Yen is a heartfelt ode to the traditions and cultural heritage that have shaped the land.',
		],
		images: [
			{ src: 'https://kaze.com.vn/newsmultidata/1-96.jpg', alt: 'Gallery Image 1' },
			{ src: 'https://kaze.com.vn/newsmultidata/1-96.jpg', alt: 'Gallery Image 2' },
			{ src: 'https://kaze.com.vn/newsmultidata/1-96.jpg', alt: 'Gallery Image 3' },
			{ src: 'https://kaze.com.vn/newsmultidata/1-96.jpg', alt: 'Gallery Image 4' },
		],
	},
] as const;

export const LIST_CATEGORIES = [
	{
		id: 1,
		name: 'SOFA',
		image:
			'https://images.unsplash.com/photo-1527005980469-e172416c200b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
	},
	{
		id: 2,
		name: 'BÀN ĂN',
		image:
			'https://images.unsplash.com/photo-1507904953637-96429a46671a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
	},
	{
		id: 3,
		name: 'GIƯỜNG',
		image:
			'https://images.unsplash.com/photo-1584882569735-fb802a4c6c78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
	},
	{
		id: 4,
		name: 'ARMCHAIR',
		image:
			'https://images.unsplash.com/photo-1521782462922-9318be1cfd04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
	},
] as const;

export const slides = [
	{
		id: 1,
		title: 'Khám Phá Không Gian ',
		description: 'Nội thất Thuận Hưng mang đến một không gian sống hiện đại, tinh tế và đầy cảm hứng.',
		imageUrl:
			'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D', // Replace with your actual image
	},
	{
		id: 2,
		title: 'Ghế sofa cho không gian nhỏ',
		description: 'Ghế sofa là thực sự cần thiết cho không gian phòng khách nhỏ gọn.',
		imageUrl:
			'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', // Replace with your actual image
	},
	{
		id: 3,
		title: 'Phong cách tối giản',
		description: 'Khám phá vẻ đẹp đơn giản nhưng đầy cuốn hút cho không gian của bạn.',
		imageUrl:
			'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', // Replace with your actual image
	},
	{
		id: 4,
		title: 'Không gian sống xanh',
		description: 'Mang thiên nhiên vào nhà với những ý tưởng độc đáo và thân thiện.',
		imageUrl:
			'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', // Replace with your actual image
	},
	{
		id: 5,
		title: 'Thiết kế sang trọng',
		description: 'Nét đẹp sang trọng, đẳng cấp cho không gian sống hoàn hảo.',
		imageUrl:
			'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', // Replace with your actual image
	},
	{
		id: 6,
		title: 'Phong cách Bắc Âu',
		description: 'Sự kết hợp hài hòa giữa màu sắc và chất liệu trong thiết kế Bắc Âu.',
		imageUrl:
			'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', // Replace with your actual image
	},
] as const;
