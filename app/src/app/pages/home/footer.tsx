
'use client'
import Image from "next/image";
import { useEffect } from 'react';

export default function Footer() {

  {/*
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  */}


  return (

    <section className="flex flex-col h-1/2 w-full bg-mk-gray justify-center items-center text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}

      <div className="flex flex-row justify-center items-center text-lt-title-txt">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <div className="flex flex-col ">
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-4 text-gray-500 opacity-90">
            Footer: https://www.youtube.com/watch?v=4UY4BK6NXlI
          </h1>


        </div>
      </div>

    </section>

  );
}
