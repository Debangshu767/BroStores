import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <Link  className=" border-b-4 border-[#f12b2c]  group block overflow-hidden  drop-shadow-lg ">
  <div className="relative h-[200px] sm:h-[300px] ">
    <img
      src= {product.image }
      alt=""
      className="absolute inset-0 h-full w-full object-cover "
    />
  </div>

  <div className="relative bg-white p-3 pt-3  ">
    <h3
      className="text-lg font-bold text-[#f12b2c] group-hover:underline group-hover:underline-offset-4"
    >
      {product.title.slice(0,25)+"..."}
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">${product.price}</p>
  </div>
</Link>

  )
}

export default ProductCard