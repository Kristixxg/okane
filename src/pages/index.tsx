import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Card from "../components/Card";
import Link from "next/link";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const toggle = (e: any) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const hide = () => setOpen(false);

  useEffect(() => {
    window.onclick = () => setOpen(false);
  }, []);

  const photos = [
    { link: "/sushi.jpeg", text: "sushi 1" },
    { link: "/sushi2.jpeg", text: "sushi 2" },
    { link: "/sushi.jpeg", text: "sushi 3" },
    { link: "/sushi2.jpeg", text: "sushi 4" },
    { link: "/sushi.jpeg", text: "sushi 5" },
    { link: "/sushi2.jpeg", text: "sushi 6" },
    { link: "/sushi.jpeg", text: "sushi 7" },
    { link: "/sushi2.jpeg", text: "sushi 8" },
  ];

  return (
    <>
      <Head>
        <title>Okane SF</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-[300vh] min-[414px]:h-[140vh] md:h-[120vh] lg:h-[120vh] ">
        <div className="fixed z-40 flex w-screen bg-black pl-4 pt-2">
          <Link href="/">
            <Image
              src="/okaneWhite.png"
              height={100}
              width={200}
              alt="Okane Logo"
              draggable={false}
            />
          </Link>
          <Image
            src="/michelinGuide.svg"
            alt="Michelin Guide Logo"
            height={35}
            width={35}
            draggable={false}
          />
        </div>

        <div className="fixed top-32 ">
          <Card />
        </div>
      </main>

      <div className="fixed top-6 right-10 z-50 mr-10 hidden lg:block ">
        <Navigation />
      </div>

      <div className="fixed top-6 right-4 z-50 lg:hidden ">
        {open ? (
          <MdOutlineClose
            onClick={hide}
            className="
              h-10
              w-10
              cursor-pointer
              text-white"
          />
        ) : (
          <MdMenu
            onClick={toggle}
            className="h-10 w-10 cursor-pointer text-white"
          />
        )}
        {open && <Navigation />}
      </div>

      <section className="relative bg-black min-[414px]:-mt-[40vh] md:-mt-[20vh] md:min-h-[20vh] lg:-mt-[20vh]">
        <div>
          <h1 className="bg-white py-6 text-center text-2xl text-black">
            ABOUT US
          </h1>
          <div className="grid grid-cols-1 place-items-center bg-white md:grid-cols-2 ">
            <Image
              className="opacity-100"
              src="/chef.jpeg"
              alt="chef photo"
              width={500}
              height={500}
            />
            <div className="px-4 sm:px-10">
              <h1 className="px-8 py-4 text-xs text-black sm:text-base">
                Our menu features an array of traditional and refined Japanese
                comfort food, with sharable vegetable, fish and meat courses,
                rice and noodles, nigiri sushi and sushi rolls, and assorted
                specialties. As the sister restaurant and neighbor to the
                Michelin-starred Omakase, Okane offers fish sourced directly
                from Tokyo’s world-renowned Toyosu Fish Market.
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="bg-white py-6 text-center text-2xl text-black">
            GALLERIES
          </h1>
          <div className="grid grid-cols-2 bg-white sm:grid-cols-3">
            {photos.map((photo) => (
              <Image
                className="border-2 opacity-100"
                key={photo.text}
                src={photo.link}
                alt={photo.text}
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
