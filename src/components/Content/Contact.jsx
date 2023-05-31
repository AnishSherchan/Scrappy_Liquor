/* eslint-disable */

import { Icon } from "@iconify/react";
import GoogleMap from "/src/assets/Google_Maps-Logo.wine.svg";

const Contact = () => {
  return (
    <div className="mx-8 lg:mx-16 my-8 flex flex-col gap-12">
      <h5 className="text-center text-[20px] font-extrabold tracking-normal lg:text-[22px] decoration-2 underline decoration-primary underline-offset-4">
        CONTACT US
      </h5>
      <div className="flex justify-evenly flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Icon
            icon="ic:baseline-phone"
            color="#b38d46"
            width="26"
            height="26"
          />
          <a href="tel:+19408080530">+1 940-808-0530</a>
        </div>
        <div className="flex items-center gap-3">
          <Icon icon="mdi:location" color="#b38d46" width="26" height="26" />
          <a
            href="https://www.google.com/maps/place/Scrappy+Eagle+Liquor/@33.214387,-97.1374233,21z/data=!4m6!3m5!1s0x864dcb3db9f505f9:0x569b66680a2f6a0d!8m2!3d33.2144335!4d-97.1375211!16s%2Fg%2F11sszqdq1v?entry=ttu"
            target="_blank"
          >
            W Hickory St, Denton, TX 76201
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-[30px]">
          <img src={GoogleMap} className=" h-[39px] w-[213px]" />
        </div>
        <iframe
          className=" rounded-2xl shadow-lg"
          src="https://maps.google.com/maps?width=100%25&amp;height=440&amp;hl=en&amp;q=Scrappy+Eagle+Liquor,+West+Hickory+Street,+Denton,+TX,+USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
