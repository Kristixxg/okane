import React from "react";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import CardStoreInfo from "./CardStoreInfo";

function Footer() {
  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="sm:hidden">
        <CardStoreInfo />
      </div>

      <div className="mt-4 flex justify-center md:mt-8">
        <button className="h-12 w-40 cursor-pointer rounded-lg bg-red-700 text-lg transition hover:text-white">
          Book a Table
        </button>
      </div>

      <div className="my-4 flex justify-center md:my-8">
        <a className="mx-3" href="">
          <MdEmail className="h-6 w-6 cursor-pointer" />
        </a>
        <a
          className="mx-3"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/OKANESF"
        >
          <RiFacebookBoxFill className="h-6 w-6 cursor-pointer" />
        </a>
        <a
          className="mx-3"
          href="https://www.instagram.com/okane_sf/"
          rel="noreferrer"
        >
          <RiInstagramFill className="h-6 w-6 cursor-pointer" />
        </a>
      </div>

      <div className="pb-4 text-center">
        Part of the&nbsp;
        <span className="font-medium underline">
          <a
            href="https://omakaserestaurantgroup.com/"
            target="_blank"
            rel="noreferrer"
          >
            Omakase Restaurant Group
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
