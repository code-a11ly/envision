
'use client'
import Image from "next/image";
import { useEffect } from 'react';
import { ArrowRight } from "lucide-react";


type How = {
  title: string;
  context: string;
  catch: string;
  path: string;
}

const hows: how[] = [
  {
    title: 'Create your Envision account',
    context: 'Fill your data once and have access aways',
    catch: 'Create Account',
    path: '',
  },
  {
    title: 'Tell us what you are looking for',
    context: 'We will start looking for your new place right away',
    catch: 'Take a forms',
    path: '',
  },
  {
    title: 'We will get back to you ASAP',
    context: 'As soon as we find what you want we will let you know',
    catch: 'See new updates',
    path: '',
  },
];


export default function How() {


  return (

    <section className="flex flex-col w-full bg-white justify-center items-center text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}

      <div className="flex flex-col justify-center items-center text-lt-title-txt my-24">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-4 text-md-gray">
          How you can get a new place <br/> with Envision
        </h1>

        <div className="flex flex-col ">

          <div className="">
            <div className="bg-gray-400 m-6 rounded-xl p-6 flex flex-wrap items-start space-y-4 shadow-lg w-fit bg-blur-sm">
              <div className="m-6 flex flex-col items-start space-y-4 w-64">
                <div className="bg-lt-gray py-3 px-3.5 rounded-xl shadow-md">
                  <p className="font-black">0{key + 1}</p>
                </div>

                <h2 className="text-lt-gray text-left text-2xl font-bold">{h.title}</h2>

                <p className="text-left text-sm text-gray-500 font-bold leading-relaxed">
                  {h.context}
                </p>

                <div className="flex gap-2 bg-md-green p-3 rounded-lg text-white font-black cursor-pointer hover:bg-dk-green">
                  {h.catch}
                  <ArrowRight/>
                </div>
              </div>
            </div>
          </div>


          <div className="">
            <div className="bg-gray-400 m-6 rounded-xl p-6 flex flex-wrap items-start space-y-4 shadow-lg w-fit bg-blur-sm">
              <div className="m-6 flex flex-col items-start space-y-4 w-64">
                <div className="bg-lt-gray py-3 px-3.5 rounded-xl shadow-md">
                  <p className="font-black">0{key + 1}</p>
                </div>

                <h2 className="text-lt-gray text-left text-2xl font-bold">{h.title}</h2>

                <p className="text-left text-sm text-gray-500 font-bold leading-relaxed">
                  {h.context}
                </p>

                <div className="flex gap-2 bg-md-green p-3 rounded-lg text-white font-black cursor-pointer hover:bg-dk-green">
                  {h.catch}
                  <ArrowRight/>
                </div>
              </div>
            </div>
          </div>



          <div className="">
            <div className="bg-gray-400 m-6 rounded-xl p-6 flex flex-wrap items-start space-y-4 shadow-lg w-fit bg-blur-sm">
              <div className="m-6 flex flex-col items-start space-y-4 w-64">
                <div className="bg-lt-gray py-3 px-3.5 rounded-xl shadow-md">
                  <p className="font-black">0{key + 1}</p>
                </div>

                <h2 className="text-lt-gray text-left text-2xl font-bold">{h.title}</h2>

                <p className="text-left text-sm text-gray-500 font-bold leading-relaxed">
                  {h.context}
                </p>

                <div className="flex gap-2 bg-md-green p-3 rounded-lg text-white font-black cursor-pointer hover:bg-dk-green">
                  {h.catch}
                  <ArrowRight/>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

    </section>

  );
}
