import React, {createContext, useState, useEffect} from "react";

// create shop context
export const ShopContext = createContext();

import { product_list } from "../../data";

const ShopContextProvider = ({children}) => {

    const [products, setProducts] = useState(product_list);

     // cart state
  const [cart, setCart] = useState([]);

  // item amount
  const [itemAmount, setItemAmount] = useState(0); 
  // total price state
  const [total, setTotal] = useState(0);
  
  // get total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    console.log('Total:', total);
    setTotal(total);
  }, [cart]);
  
    // update item amount
    useEffect(() => {
      if (cart) {
        const amount = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount);
      }
    }, [cart]);

  // add to cart
  const addToCart = (product, id)=> {
    const newItem = {...product,amount: 1 };
    // console.log(newItem)
    // console.log(`item ${product.title} added to cart`)
    
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(cartItem);
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount : cartItem.amount +1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }

  }
  console.log(cart)

  // remove from cart
  const removeFromCart =(id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    setCart([]);
    };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id ===id);
    addToCart(cartItem, id)
  }

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if(cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount : cartItem.amount - 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem.amount < 2){
        removeFromCart(id);
      }
    }
  }

  return <ShopContext.Provider value={{
    products, cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total
  }
  }>{children}</ShopContext.Provider>;

}

export default ShopContextProvider;