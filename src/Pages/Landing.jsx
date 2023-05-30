import HeroSection from "../components/Content/HeroSection";
import OurProducts from "../components/Content/OurProducts";
import Jd from "../assets/JD.png";
import Blacklabel from "/src/assets/BlackLabel.png";
import Jimbean from "/src/assets/Jimbean.png";
import Blenders from "/src/assets/Blenders.png";
import Glenmorangie from "/src/assets/GLENMORANGINE.png";

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
    {
      name: "GLENMORANGIE",
      img: Glenmorangie,
      category: "Whiskey",
    },

    {
      name: "Jack Daniel’s",
      img: Jd,
      category: "Wine",
    },
    {
      name: "Black Label",
      img: Blacklabel,
      category: "Wine",
    },
    {
      name: "JIM BEAM",
      img: Jimbean,
      category: "Wine",
    },
    {
      name: "BLENDERS PRIDE",
      img: Blenders,
      category: "Wine",
    },
    {
      name: "GLENMORANGIE",
      img: Glenmorangie,
      category: "Wine",
    },

    {
      name: "Jack Daniel’s",
      img: Jd,
      category: "Beer",
    },
    {
      name: "Black Label",
      img: Blacklabel,
      category: "Beer",
    },
    {
      name: "JIM BEAM",
      img: Jimbean,
      category: "Beer",
    },
    {
      name: "BLENDERS PRIDE",
      img: Blenders,
      category: "Beer",
    },
    {
      name: "GLENMORANGIE",
      img: Glenmorangie,
      category: "Beer",
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
