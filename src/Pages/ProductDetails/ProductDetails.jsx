import React, {useContext, useState} from 'react'
import './ProductDetails.css'
import Navbar from '../../Components/Navbar/Navbar'

import {ShopContext} from '../../Components/ShopContext/ShopContext'

import { product_list } from '../../data';

import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {itemAmount, addToCart} = useContext(ShopContext);

  const {id} = useParams();

  const product = product_list.find(product => {
    return product.id === parseInt(id);
  })

  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <Navbar />
      <div className="product_details">
        <div className="detail_left">
          <img src={product.image} alt="" />
        </div>
        <div className="detail_right">
          <h3>{product.name} </h3>
          <p className="product-price"> $ {product.price}</p>
          <p className="desc">{product.productDetail.description} </p>
          <div className="product_qty_cart">
            <div className="p_qty">
              <p className="qty">Quantity</p>
              <p className="qty_amt">{itemAmount} </p>
            </div>
            <button onClick={()=> addToCart(product, id)}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="tab_container">
        <div className="tab_header">
          <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={()=> setActiveTab('description')}>DESCRIPTION</button>

          <button className={activeTab === 'reviews' ? 'active' : ''}
          onClick={()=> setActiveTab('reviews')}>REVIEWS</button>
        </div>
        <div className="tab_content">
          {activeTab === 'description' && (
            <div className="tab__pane">
            <p>{product.productDetail.description} </p>
            <p>{product.productDetail.description} </p>
            <p>{product.productDetail.description} </p>
            <p>{product.productDetail.description} </p>
            <p>{product.productDetail.description} </p>
            <p>{product.productDetail.description} </p>
          </div>
          )}
          {activeTab === 'reviews' && (
            <div className="tab__pane">
            <p>No reviews yet</p>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails