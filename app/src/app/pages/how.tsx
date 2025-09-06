
'use client'
import Image from "next/image";
import { useEffect } from 'react';

export default function How() {


  return (

    <section className="flex flex-col h-screen w-full bg-white justify-center items-center text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}

      <div className="flex flex-row justify-center items-center text-lt-title-txt">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <div className="flex flex-col ">
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-4 text-md-gray">
            How you can get a new place <br/> with Envision
          </h1>


        </div>
      </div>

    </section>

  );
}
