import Banner from '@/components/Banner/Banner';
import SectionCarousel from './_components/SectionCarousel';
import SectionContact from './_components/SectionContact';
import SectionIntroduction from './_components/SectionIntroduction';
import SectionListCategory from './_components/SectionListCategory';
import SectionProducts from './_components/SectionProducts';
import SectionSlogan from './_components/SectionSlogan';
import SectionStyle from './_components/SectionStyle';
const HomePage = () => {
	return (
		<main>
			<Banner />
			<SectionListCategory />
			<SectionStyle />
			<SectionIntroduction />
			<SectionProducts />
			<SectionCarousel />
			<SectionSlogan />
			<SectionContact />
		</main>
	);
};

export default HomePage;
