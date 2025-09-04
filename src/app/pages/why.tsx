

import { useState, useEffect } from 'react'
import { ShieldCheck, Clock } from "lucide-react";


export default function Why() {


  return (
    <div className="flex flex-col h-screen w-full bg-md-gray justify-center items-center text-gray-400 text-center gap-16font-[family-name:var(--font-geist-sans)]">

    <div className="flex flex-wrap w-1/2">
      {/* SHIELD */}
      <div className="bg-lt-gray m-6 rounded-xl p-6 flex flex-col items-start space-y-4 shadow-lg w-64 hover:bg-dk-green">
        <div className="bg-white p-3 rounded-xl shadow-md">
          <ShieldCheck className="text-md-green w-6 h-6" />
        </div>

        <h2 className="text-white text-xl font-semibold">Secure</h2>

        <p className="text-left text-gray-300 text-bold leading-relaxed">
          Para quem quer a garantia de ter seus dados seguros
        </p>
      </div>

      {/* SHIELD */}
      <div className="bg-lt-gray m-6 rounded-xl p-6 flex flex-col items-start space-y-4 shadow-lg w-64 hover:bg-dk-green">
        <div className="bg-white p-3 rounded-xl shadow-md">
          <Clock className="text-md-green w-6 h-6" />
        </div>

        <h2 className="text-white text-xl font-semibold">Fast</h2>

        <p className="text-left text-gray-300 text-bold leading-relaxed">
          So that you can spend time in what matters
        </p>
      </div>

      {/* SHIELD */}
      <div className="bg-lt-gray m-6 rounded-xl p-6 flex flex-col items-start space-y-4 shadow-lg w-64 hover:bg-dk-green">
        <div className="bg-white p-3 rounded-xl shadow-md">
          <ShieldCheck className="text-md-green w-6 h-6" />
        </div>

        <h2 className="text-white text-xl font-semibold">Secure</h2>

        <p className="text-left text-gray-300 text-bold leading-relaxed">
          Para quem quer a garantia de ter seus dados seguros
        </p>
      </div>

      {/* SHIELD */}
      <div className="bg-lt-gray m-6 rounded-xl p-6 flex flex-col items-start space-y-4 shadow-lg w-64 hover:bg-dk-green">
        <div className="bg-white p-3 rounded-xl shadow-md">
          <ShieldCheck className="text-md-green w-6 h-6" />
        </div>

        <h2 className="text-white text-xl font-semibold">Secure</h2>

        <p className="text-left text-gray-300 text-bold leading-relaxed">
          Para quem quer a garantia de ter seus dados seguros
        </p>
      </div>
    </div>


    </div>
  )
};
