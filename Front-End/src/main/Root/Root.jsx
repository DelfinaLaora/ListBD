import React from 'react'
import Footer from '../../main/Footer/Footer'
import Header from '../../main/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}

export default Root
