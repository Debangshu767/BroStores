import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ProductPage() {

  const { pro } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${pro}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [pro]);

  console.log(product)
  return (

    <div className='flex justify-center p-4 gap-20 mx-[10%] mt-4' >

      <div className=' flex p-4 border-x-slate-400 gap-4 min-w-[45%] max-h-[60vh] items-center justify-center ' >
        <img src={product.image} alt="" className= 'max-h-full object-contain shadow-lg p-6' />
      </div>

      <div className='space-y-4'>
        <h1 className=' text-4xl   font-bold' > {product.title}</h1>
        <Link to={`/categoryPage/${product.category}`} className=' text-xs font-normal   text-[#f12b2c] uppercase ' > {product.category}</Link>
        <p className=' text-xs font-normal' > {product.description}</p>
        <h3 className=' text-lg font-semibold' > &#36; {product.price} </h3>

        <div className='flex flex-col justify-center gap-4' >
          <button className='p-2 bg-[#f12b2c] text-white rounded-lg hover:bg-[#b81212]' >Buy Now</button>
          <button className='p-2 bg-[#f1b62b] text-white rounded-lg hover:bg-[#db8618]' >Add to Cart</button>
        </div>

        



      </div>


    </div>
  )
}

export default ProductPage