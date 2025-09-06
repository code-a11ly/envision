// src/pages/index.tsx
'use client'
import Nav from '@/app/pages/nav'
import Header from '@/app/pages/header'
import Why from '@/app/pages/why'
import How from '@/app/pages/how'
import FeedBack from '@/app/pages/feedback'
import Architect from '@/app/pages/Architect'
import Search from '@/app/pages/Search'

import { Link as ScrollLink, Element } from 'react-scroll';


export default function Home() {
  return (
    <div className="flex bg-white-bg dark:bg-dark-bg ">

      {/* NAV BAR */}
      <Nav />


      <main className='flex flex-col w-screen justify-center'>

        {/* HEADER SECTION */}
        <Element name="header">
          <div>
            <Header />
          </div>
        </Element>

        {/* WHY US SECTION */}
        <Element name="why">
          <div>
            <Why />
          </div>
        </Element>

        {/* HEADER HOW */}
        <Element name="how">
          <div>
            <How />
          </div>
        </Element>

        {/* HEADER FEEDBACK */}
        <Element name="feedback">
          <div>
            <FeedBack />
          </div>
        </Element>

        {/* HEADER SECTION */}
        <Element name="architect">
          <div>
            <Architect />
          </div>
        </Element>

        {/* HEADER SECTION */}
        <Element name="search">
          <div>
            <Search />
          </div>
        </Element>






      </main>

    </div>
  )
}
