import Banner from '@/components/Banner/Banner';
import SectionForYou from './_components/SectionForYou';
import SectionProduct from './_components/SectionProduct';
import SectionProductTrend from './_components/SectionProductTrend';

const HomePage = () => {
	return (
		<main>
			<Banner />
			<SectionProduct />
			<SectionForYou />
			<SectionForYou />
			<SectionProductTrend />
		</main>
	);
};

export default HomePage;
