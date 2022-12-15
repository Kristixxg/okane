import Image from "next/image";
import React from "react";
import CardStoreInfo from "../components/CardStoreInfo";
import { RxDoubleArrowDown } from "react-icons/rx";

function Card() {
  return (
    <div className="fixed flex flex-col w-screen">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
        <Image
          className=""
          src="/okaneHand.jpeg"
          alt="food image with chef on background"
          width={420}
          height={420}
          draggable={false}
        />
        <Image
          className="hidden opacity-20 sm:block"
          src="/okaneHand.jpeg"
          alt="food image with chef on background"
          width={420}
          height={420}
          draggable={false}
        />{" "}
        <Image
          className="hidden opacity-20 lg:block"
          src="/okaneHand.jpeg"
          alt="food image with chef on background"
          width={420}
          height={420}
          draggable={false}
        />
      </div>

      <div className="hidden sm:block">
        <CardStoreInfo />
      </div>

      <div className="mt-6 flex justify-center lg:hidden">
        <button className="w-40 rounded-lg border-2 border-amber-500 p-1 text-amber-500 hover:text-white min-[414px]:hidden">
          VIEW MENU
        </button>
      </div>

      <div className="hidden items-center min-[414px]:flex min-[414px]:flex-col lg:hidden ">
        <button className="mt-4 w-40 rounded-lg border-2 border-amber-500 p-1 text-amber-500 hover:text-white">
          DRINK MENU
        </button>
        <button className="mt-4 w-40 rounded-lg border-2 border-amber-500 p-1 text-amber-500 hover:text-white">
          FOOD MENU
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="flex flex-col justify-center text-red-700">
          <div className="flex justify-center">
            <RxDoubleArrowDown className="h-8 w-8 " />
          </div>
          <h4 className="mt-1 text-xs text-red-700 min-[420px]:hidden">
            Scroll Down
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
