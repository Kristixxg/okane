import Link from "next/link";
import React from "react";

function Navigation() {
  const navigation = [
    { link: "/", text: "HOME" },
    { link: "/", text: "MENU" },
    {
      link: "https://www.opentable.com/okane?corrid=181be247-a4fa-4bb4-9d1c-0772fa6a790f&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-12-05T19%3A00%3A00",
      text: "RESERVATION",
    },
    { link: "/", text: "ORDER ONLINE" },
    { link: "/", text: "GIFT CARDS" },
    {
      link: "https://www.paycomonline.net/v4/ats/web.php/jobs?clientkey=C2EC06F02B4269F43F6CF2F77F251A26",
      text: "CAREER",
    },
    { link: "/", text: "CONTACT" },
  ];

  return (
    <nav className="absolute right-0 z-50 w-[50vw] bg-white lg:bg-black ">
      <ul className="flex h-[70vh] flex-col justify-around  lg:h-auto lg:flex-row ">
        {navigation.map((navItem) => {
          return (
            <Link href={navItem.link} key={navItem.text}>
              <li className="navItem text-center" key={navItem.text}>
                {navItem.text}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
