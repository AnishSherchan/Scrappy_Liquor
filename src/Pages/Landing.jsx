import HeroSection from "../components/Content/HeroSection";
import OurProducts from "../components/Content/OurProducts";
import Jd from "../assets/JD.png";
import Blacklabel from "/src/assets/BlackLabel.png";
import Jimbean from "/src/assets/Jimbean.png";
import Blenders from "/src/assets/Blenders.png";

const LandingPage = () => {
  const productData = [
    {
      name: "Jack Daniel’s",
      img: Jd,
      category: "Whiskey",
    },
    {
      name: "Black Label",
      img: Blacklabel,
      category: "Whiskey",
    },
    {
      name: "JIM BEAM",
      img: Jimbean,
      category: "Whiskey",
    },
    {
      name: "BLENDERS PRIDE",
      img: Blenders,
      category: "Whiskey",
    },
  ];
  return (
    <>
      <HeroSection />
      <OurProducts productData={productData} />
    </>
  );
};

export default LandingPage;
