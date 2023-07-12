import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const FakeStoreContext = createContext();

// Define the context provider
const FakeStoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  //fetch categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories : ', error);
      }
    };
    fetchCategories()
  },[])

  // Fetch the products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

 

  return (
    <FakeStoreContext.Provider value={{products,categories}}>
      {children}
    </FakeStoreContext.Provider>
  );
};

export { FakeStoreContext, FakeStoreProvider };
