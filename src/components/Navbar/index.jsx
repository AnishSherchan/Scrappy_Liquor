import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import DarkLogo from "../../assets/DarkLogo.svg";
import { Icon } from "@iconify/react";

const TOP_OFFSET = 115;
const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full fixed z-40 py-4 px-10 flex justify-between items-center transition duration-500 ${
        showBackground ? "bg-back-ground drop-shadow-xl " : ""
      }`}
    >
      <div className="flex items-center flex-wrap">
        <img
          src={showBackground ? DarkLogo : Logo}
          alt="Logo"
          className="h-9 cursor-pointer"
        />{" "}
      </div>
      <div className="flex items-center gap-5">
        <Icon
          icon="mdi:instagram"
          className={`${
            showBackground ? "text-black" : "text-white"
          } h-5 w-5 cursor-pointer`}
        />
        <Icon
          icon="ri:facebook-fill"
          className={`${
            showBackground ? "text-black" : "text-white"
          } h-5 w-5 cursor-pointer`}
        />
        <Icon
          icon="mdi:twitter"
          className={`${
            showBackground ? "text-black" : "text-white"
          } h-5 w-5 cursor-pointer`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
