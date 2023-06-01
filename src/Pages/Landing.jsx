import HeroSection from "../components/Content/HeroSection";
import OurProducts from "../components/Content/OurProducts";
import { productData } from "../ProductData";
import Banner from "/src/assets/Banner.png";
import Contact from "../components/Content/Contact";

const LandingPage = () => {
  const banner = {
    img: Banner,
    title:
      "Raise Your Glass to Exceptional Taste! Explore our Premium Selection Today.",
  };
  return (
    <>
      <HeroSection />
      <OurProducts productData={productData} banner={banner} />
      <Contact />
    </>
  );
};

export default LandingPage;
