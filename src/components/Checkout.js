import React from 'react'
import checkoutImg from "../images/checkoutAd.jpg"
import { useAuth } from '../context/GlobalState'
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css'
import SubTotal from './SubTotal';
const Checkout = () => {
    const {user,basket}=useAuth();
  return (
    
    <div className='checkout'>
    <div className='checkout-left'>
        <img className='checkout-ads' src={checkoutImg}/>
   
   <div>
   <h3>Hello,{user?`${user.email}`:"guest"}</h3>
    <h2 className='checkout-title'>Your shopping Basket</h2>
    {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
   </div>
    </div>
    <div className='checkout-right'>
      <SubTotal/>
      </div>
    </div>
  )
}

export default Checkout
