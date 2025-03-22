import React from 'react'
import ProductHero from './ProductHero'
import ProductDesc from './ProductDesc'
import Tools from './Tools'
import ProductsAll from './ProductsAll'

const Products = () => {
  return (
    <div>
        <ProductHero />
        <ProductDesc />
        {/* <Tools /> */}
        <ProductsAll />
    </div>
  )
}

export default Products