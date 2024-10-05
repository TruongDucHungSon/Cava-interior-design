import Banner from '@/components/Banner/Banner';
import SectionForYou from './_components/SectionForYou';
import SectionProduct from './_components/SectionProduct';
import SectionProductTrend from './_components/SectionProductTrend';

const HomePage = () => {
	return (
		<main>
			<Banner />
			<SectionProduct />
			<SectionForYou
				image="https://ancuong.com/webadmin-v2/pictures/files/product-solution/compact/VN/1.jpg"
				title="Tối ưu không gian sống của bạn"
			/>
			<SectionForYou
				image="https://ancuong.com/webadmin-v2/pictures/files/new-product/giay-dan-tuong/giay-dan-tuong.jpg"
				title="Thiết kế không gian thông minh"
			/>

			<SectionProductTrend />
		</main>
	);
};

export default HomePage;
