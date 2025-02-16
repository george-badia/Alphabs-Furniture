import React, {useContext} from 'react'
import './ProductList.css'

import { ShopContext } from '../ShopContext/ShopContext'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductList = ({category}) => {
    const {products , addToCart} = useContext(ShopContext);
  return (
    <div>
        <div className="product_list">
            <h2>Our Elegant Collections</h2>
            <div className="product_grid">
                {products.map((product) => {
                    // destructure product
                    const {id, image, name, price} = product;
                    if (category === "All" || category ===product.category){
                        return (
                            <div className='product-card' key={id}>
                                <Link to={`/product/${product.id}`} key={product.id}>
                                <img src={image} alt="" className='product-image'/>
                                <h4>{name} </h4>
                                </Link>
                                <div className="product_price_cart">
                                    <p className="price">${price} </p>
                                    <p onClick={()=> addToCart(product, id)} className='add-to-cart'><FaPlus className='cart_ion' /> </p>
                                </div>

                            </div>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductList