import React from "react";
import { MdLocationOn, MdStore, MdWineBar } from "react-icons/md";

function CardStoreInfo() {
  return (
    <div className="grid grid-cols-1 py-4 place-items-center bg-black lg:py-0 ">
      <div className="flex flex-col rounded-lg border px-14 sm:flex-row sm:mt-10 sm:px-6 md:px-14 md:py-6 lg:py-2 ">
      
        <div className="py-2 sm:pr-6 lg:pr-14">
          <div className="flex-start flex">
            <MdLocationOn className="mr-2 h-6 w-6 text-red-700" />
            <h4 className="mb-2 text-lg ">Location</h4>
          </div>
          <h4>669 Townsend Street</h4>
          <h4>San Francisco, CA 94103</h4>
          <h4>415-865-9788</h4>
        </div>

        <div className="py-2 sm:pr-6 lg:pr-14">
          <div className="flex-start flex">
            <MdStore className="mr-2 h-6 w-6 text-red-700" />
            <h4 className="mb-2 text-lg ">Open Hours</h4>
          </div>
          <h4>Monday - Sunday</h4>
          <h4>Lunch: 11:30AM - 2:00PM</h4>
          <h4>Dinner: 4:30PM - 9:00PM</h4>
        </div>

        <div className="py-2">
          <div className="flex-start flex">
            <MdWineBar className="mr-2 h-6 w-6 text-red-700" />
            <h4 className="mb-2 text-lg ">Happy Hours</h4>
          </div>
          <h4>Monday - Sunday</h4>
          <h4>4:30PM - 6:00PM</h4>
        </div>

      </div>
    </div>
  );
}

export default CardStoreInfo;
