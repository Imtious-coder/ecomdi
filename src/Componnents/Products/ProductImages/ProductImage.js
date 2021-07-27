import React from 'react'

import Sidenav from '../../SideNavbar/Sidenav'
import { Space, Input } from 'antd';
const { Search } = Input;


const onSearch = value => console.log(value);

const ProductImage = () => {
    return (
        <div className='flex grid md:grid-cols-5 grid-cols-1 mt-8'>
            <aside className="h-screen md:sticky  top-0 w-full ">
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
                        Product
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Manage Image
                    </a>

                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Manage Product Image
                    </p>
                </div>
                <div className=" p-2  flex flex-col md:flex-row  ">
                    <div className="p-2 md:flex-row flex-col ">

                        <select className='w-full p-1 border'>
                            <option>Export</option>
                            <option>SKU image</option>
                            <option>Image missing</option>
                        </select>

                    </div>
                    <div className=" p-2 md:flex-row flex-col ">

                        <Input className='border' placeholder="Brand" />

                    </div>
                    <div className='w-64 p-2 md:flex-row flex-col '>
                        <Space direction="vertical">
                            <Search placeholder="Product or SKU" onSearch={onSearch} style={{ width: 200 }} />

                        </Space>
                    </div>
                </div>
                <div>
                    <nav className="flex items-center justify-between md:text-left text-center flex-wrap bg-teal-500 p-6">   
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500 md:border-t-2 border-l-2 border-r-2 border-yellow-500 p-1 mr-4">
                                SKU Image
                                </a>
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4">
                                    Item Image
                                </a>
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500">
                                    Image missing
                                </a>
                            </div>
                            
                        </div>
                        
                    </nav>
                    <hr className='' />
                </div>
                <div className="container sm:mt-5">
                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead className="text-black">
                            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="w-1/10 border p-1 ">Product</th>
                                <th className="w-8/10 border p-1">All Images</th>
                            </tr>


                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3"></td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 "></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default ProductImage
