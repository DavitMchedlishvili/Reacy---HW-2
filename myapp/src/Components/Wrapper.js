import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Wrapper({children}) {
    return (
        <>
         <Navbar/>
            {children}
         <Footer/>
        </>
       
       
    )
}
