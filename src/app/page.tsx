// src/pages/index.tsx
'use client'
// import Nav from '@/app/pages/nav'
import Header from '@/app/pages/Header'

import { Link as ScrollLink, Element } from 'react-scroll';


export default function Home() {
  return (
    <div className="flex bg-white-bg dark:bg-dark-bg ">

      {/* NAV BAR
      <Nav />
       */}

      <main className='flex flex-col w-screen justify-center'>
      {/* HEADER SECTION */}
      <Element name="header">
        <div>
          
          <Header />
        </div>
      </Element>




      </main>

    </div>
  )
}
