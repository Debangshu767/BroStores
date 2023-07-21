import React, { useContext } from 'react'
import { FakeStoreContext } from '../utils/fetchFromApi'
import { Link} from 'react-router-dom';
import Icons from '../components/Icons';
import ProductCard from '../components/ProductCard';

function Home() {

  const { categories,products } = useContext(FakeStoreContext);
  console.log(categories)
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
  return (
    <div>

      <div className=' flex justify-center p-[5px]  items-center m-auto gap-7 '>
        {categories.map((category) => (
          <Link to = {`/categoryPage/${category}`} className=' flex items-center gap-1  p-2  text-[#f12b2c] rounded-lg hover:bg-[#ff0b0b] hover:text-white capitalize text-lg ' ><Icons category={category} />{category}</Link>
        ))}
      </div>
      
      <div className='w-[90%] items-center m-auto rounded-2xl bg-[#f12b2c] p-5 drop-shadow-md' >

          <h1 className=' flex justify-center text-white uppercase text-xl font-black text-center '  >Welcome to Bro Stores</h1>
          <h1 className=' flex justify-center text-white uppercase text-6xl font-extralight text-center '  >Style & Tech at Your Fingertips</h1>
          
      </div>

      <div className='w-[90%] grid grid-cols-4 gap-4 content-start p-5 m-auto  '>
        
            
            {shuffledProducts.map((product) => (
              <ProductCard product={product} />

            ))}

          </div>




    </div>
    
  )
}

export default Home