import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 border-b-[1px] border-slate-300 '>
      <Link to='/' className='flex justify-center items-center gap-1'>
        <FiShoppingCart className='text-2xl text-[#f12b2c] ' />
        <h1 className=' text-3xl font-bold  text-[#f12b2c]'>Bro Stores</h1> </Link>

      <div className=' flex gap-2'>
        <input placeholder='Enter Product Name' className='border-[1px] w-[500px] border-slate-300 p-2 rounded-lg' type="text" />
        <button className='p-2 bg-[#f12b2c] text-white rounded-lg hover:bg-[#ff0b0b]'>Search</button>

      </div>


    </nav>
  )
}

export default Navbar