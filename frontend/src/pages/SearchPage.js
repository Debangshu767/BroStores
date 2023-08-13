import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function SearchPage() {

  const { ser } = useParams()
  const [sresults, setsResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        const products = response.data;

        const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(ser.toLowerCase())
      );

      setsResults(filteredProducts);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [ser]);

  return (
    <div>
      <div className=' flex justify-left p-4 items-center gap-2'>
        <span className=' text-lg font-thin text-gray-800 ' > Search Results for :</span> <span className=' font-extrabold text-xl text-[#f12b2c] uppercase '> {ser} </span>
      </div>

      <div className='w-[90%] grid grid-cols-2 gap-4 content-start p-5 m-auto md:grid-cols-4 '>


          {sresults.map((product) => ( 
            <ProductCard product={product}/> 


          ))}

        </div>

    </div>
  )
}

export default SearchPage