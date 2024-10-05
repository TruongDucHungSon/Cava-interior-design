import slide1 from '../../assets/images/banner/slide1.jpg';
import slide2 from '../../assets/images/banner/slide2.jpg';
import slide3 from '../../assets/images/banner/slide3.jpg';
import slide4 from '../../assets/images/banner/slide4.jpg';
import slide5 from '../../assets/images/banner/slide5.jpg';

export const Menu = [
	{
		label: 'Trang chủ',
		path: '/',
	},
	{
		label: 'Sản phẩm',
		path: '/sanpham',
	},
	{
		label: 'Giải pháp',
		path: '/giaiphat',
	},
	{
		label: 'Dự án',
		path: '/duan',
	},
] as const;

export const IMAGE_SLIDE = [
	{
		id: 0,
		SlideSrc: slide1,
	},
	{
		id: 1,
		SlideSrc: slide2,
	},
	{
		id: 2,
		SlideSrc: slide3,
	},
	{
		id: 3,
		SlideSrc: slide4,
	},
	{
		id: 4,
		SlideSrc: slide5,
	},
] as const;

export const DATA_PRODUCTA = [{}] as const;
