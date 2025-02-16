import React from 'react'
import { product_category_list } from '../../data'
import './Category.css'

const Category = ({category, setCategory}) => {
  return (
    <div>
        <div className="category_menu">
            <h1>Choose From Our Top Quality Products</h1>
            <p>Whetyher you are looking to funish your living roon, bedroom, dinning area or office, we have something that suits every taste and need</p>
            <div className="category_menu_list">
                {product_category_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory((prev) => (prev === item.product_name ? "All" : item.product_name))} key={index} className="category_menu_list_item">
                            <p>{item.product_name} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Category
