import React from 'react'
import Sidenav from '../SideNavbar/Sidenav'



const Assortment = () => {
    return (
        <div className='flex grid md:grid-cols-5 grid-cols-1 mt-8'>
            <aside className="h-screen md:sticky mb-5 top-0 w-full ">
                <Sidenav />
            </aside>
            <main className='w-full col-span-4 bg-gray-100'>
            <div className='w-2/3 h-12 flex  p-3 text-black'>
                    <a href='' className='text-gray-500 mr-1 text-xs uppercase'>
                        home
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Assortment Growth
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Assortment Growth
                    </p>
                </div>
                <div className='bg-white m-5 h-2/3 rounded '> 
                    <div className='p-3 text-xl font-bold '>
                    Existing problems
                    </div>
                    <div className= 'relative md:h-32   text-center md:mb-8'>
                        <img className='md:ml-64' src='https://img.alicdn.com/tfs/TB1sZ4qtj39YK4jSZPcXXXrUFXa-300-300.png' />
                         <div className="text-center text-lg md:mb-8">Your items are all good, have a nice day!</div>
                    
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Assortment
