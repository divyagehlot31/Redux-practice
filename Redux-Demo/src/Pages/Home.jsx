import React from 'react'
import ProductList from '../components/ProductList'
import Filter from '../components/Filter';
// import FilterClass from '../components/FilterClass'
// import ProductClass from '../components/ProductClass'

function Home() {
  return (
    <div>
      {/* <h1>home page</h1> */}
      <Filter/>
      {/* <FilterClass/> */}
      <ProductList/>
      {/* <ProductClass /> */}
    </div>
  )
}

export default Home;
