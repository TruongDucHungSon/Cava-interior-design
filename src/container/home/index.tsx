import Banner from '@/components/Banner/Banner';
import SectionForYou from '@/container/_components/SectionForYou';
import SectionProduct from '@/container/_components/SectionProduct';
import SectionProductTrend from '@/container/_components/SectionProductTrend';

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
