import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Category from '../../Components/Category/Category'
import ProductList from '../../Components/ProductList/ProductList'

const Homepage = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Hero />
      <Category category={category} setCategory={setCategory}/>
      <ProductList category={category} />
    </div>
  )
}

export default Homepage