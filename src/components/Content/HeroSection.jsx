/* eslint-disable */

import Primary from "../Button/Primary";
import { Icon } from "@iconify/react";

const Content = () => {
  return (
    <>
      {/* bg-[url('https://cdn.shopify.com/s/files/1/0025/8555/9110/files/Header-Image_1_1080x.png?v=1675715280')]  */}
      <div className=" relative h-screen w-full bg-[url('/src/assets/Mobile_Main.png')]   lg:bg-[url('/src/assets/Main.png')] bg-no-repeat bg-center lg:bg-fixed bg-cover">
        <div className=" bg-opacity-40 lg:bg-opacity-20 h-full bg-black">
          <div className="absolute top-[34%] lg:top-[27%] left-[12%]">
            <h1 className="hero text-white text-[30px] lg:text-[40px] tracking-wider">
              Welcome to Scrappy
            </h1>
            <h2 className="hero text-white mt-3 mb-9 text-[22px] lg:text-[28px] tracking-wider">
              Get your Whiskey today.
            </h2>
            <Primary title="Get your Premium Liquors." />
          </div>
          <div className="absolute top-[85%] right-[10%] bg-black bg-opacity-10 rounded-full">
            <h6 className="hero flex items-center gap-2 font-medium text-xl lg:text-[21px] text-[#cecece]">
              Scroll for more
              <Icon icon="teenyicons:down-outline" />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
