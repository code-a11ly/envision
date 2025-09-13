// src/pages/index.tsx
'use client'
import Nav from '@/app/pages/nav'
import Header from '@/app/pages/home/header'
import Why from '@/app/pages/home/why'
import How from '@/app/pages/home/how'
import FeedBack from '@/app/pages/home/feedback'
import Architect from '@/app/pages/home/Architect'
import Search from '@/app/pages/home/Search'
import Footer from '@/app/pages/home/footer'

// import Login from '@/app/pages/login/login'

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

        {/* HOW SECTION */}
        <Element name="how">
          <div>
            <How />
          </div>
        </Element>

        {/* FEEDBACK SECTION */}
        <Element name="feedback">
          <div>
            <FeedBack />
          </div>
        </Element>

        {/* ARCHITECT SECTION */}
        <Element name="architect">
          <div>
            <Architect />
          </div>
        </Element>

        {/* SEARCH SECTION */}
        <Element name="search">
          <div>
            <Search />
          </div>
        </Element>

        {/* LOGIN SECTION */}
        {/*
        <Element name="login">
          <div>
            <Login />
          </div>
        </Element>
         */}

         {/* FOOTER SECTION */}
         <Element name="footer">
           <div>
             <Footer />
           </div>
         </Element>





      </main>

    </div>
  )
}
