
'use client'
import Image from "next/image";
import { useEffect } from 'react';


type Feed = {
  name: string;
  function: string;
  review: string;
}

const feedBack: feed[] = [
  {
    name: 'Create your Envision account',
    function: 'Fill your data once and have access aways',
    review: 'Create Account',
  },
  {
    name: 'Tell us what you are looking for',
    function: 'We will start looking for your new place right away',
    review: 'Take a forms',
  },
  {
    name: 'We will get back to you ASAP',
    function: 'As soon as we find what you want we will let you know',
    review: 'See new updates',
  },
];


export default function Header() {

  {/*
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  */}


  return (

    <div className="flex flex-col h-screen w-full bg-lt-gray justify-center items-center text-gray-400 text-center gap-16font-[family-name:var(--font-geist-sans)]">
    {/*<section className="flex flex-col h-screen w-full bg-[url('/assets/building.jpg')] bg-cover bg-center justify-center items-center text-white text-center gap-16font-[family-name:var(--font-geist-sans)]">*/}


      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* HEADERS */}

      <div className="flex flex-row justify-center items-center">


        {/* <div className="h-full w-px bg-gray-300" /> Divider */}

        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-4 text-md-gray">
          What do people say <br/>about us?
        </h1>

        <div className="flex flex-col ">


        </div>
      </div>

    </div>

  );
}
