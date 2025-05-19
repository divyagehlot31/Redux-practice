import React from 'react'
// import ProductList from '../components/ProductList'
import FilterClass from '../components/FilterClass'
import ProductClass from '../components/ProductClass'

function Home() {
  return (
    <div>
      {/* <h1>home page</h1> */}
      <FilterClass/>
      {/* <ProductList/> */}
      <ProductClass/>
    </div>
  )
}

export default Home;
