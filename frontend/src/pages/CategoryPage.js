import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { FakeStoreContext } from '../utils/fetchFromApi'
import axios from 'axios'

function CategoryPage() {

  const { cat } = useParams()
  const [cproducts, setcProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${cat}`);
        setcProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className=' flex justify-left p-4 items-center gap-2'>
        <span className=' text-lg font-thin text-gray-800 ' > Category :</span> <span className=' font-extrabold text-xl text-[#f12b2c] uppercase '> {cat} </span>
      </div>

      <div className='w-[90%] grid grid-cols-4 gap-4 content-start p-5 m-auto '>


          {cproducts.map((product) => ( 
            <ProductCard product={product}/> 


          ))}

        </div>

    </div>
  )
}

export default CategoryPage