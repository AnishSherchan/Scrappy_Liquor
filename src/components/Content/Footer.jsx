import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="py-4 px-10 flex flex-col justify-center items-center flex-wrap gap-8">
      <hr className="w-full h-[2px] border-t bg-[#DFDED9] "></hr>
      <img
        src={
          "https://cdn.shopify.com/s/files/1/0025/8555/9110/t/46/assets/logo-black_440x.png?v=82187768844039924211675878975"
        }
        alt="Logo"
        className="h-8 lg:h-10 cursor-pointer"
      />
      <div className="flex items-center gap-5">
        <Icon
          icon="mdi:instagram"
          className={`text-black h-5 w-5 cursor-pointer`}
        />
        <Icon
          icon="ri:facebook-fill"
          className={`text-black h-5 w-5 cursor-pointer`}
        />
        <Icon
          icon="mdi:twitter"
          className={`${"text-black"} h-5 w-5 cursor-pointer`}
        />
      </div>
      <p className=" text-[18px] font-medium">
        All Rights Reserved C 2021{" "}
        <span className=" text-primary">Scrappy</span>
      </p>
    </div>
  );
};
export default Footer;
