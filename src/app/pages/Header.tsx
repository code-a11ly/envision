
'use client'
import Image from "next/image";
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);


  return (

    <section className="flex flex-col h-screen w-full bg-white justify-center items-center text-gray-400 text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}
      <p className="text-black font-black md:text-xl 2xl:text-3xl max-w-xl mb-8 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]">
        ENVISION
      </p>
      <div className="flex flex-row justify-center items-center text-lt-title-txt">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <div className="flex flex-col ">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold mb-4 dark:text-dk-title-txt">
            building your dreams
          </h1>


        </div>
      </div>

      <p className="text-black md:text-xl 2xl:text-3xl max-w-xl mb-8">
        🏢  together we make the future!  🏡
      </p>

    </section>

  );
}
