import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useAuth } from '../context/GlobalState';
import { getBasketTotal } from './AppReducer';
import { useNavigate } from "react-router-dom";
import './SubTotal.css'



const SubTotal = () => {
    const {basket} = useAuth();
    const navigate = useNavigate();

    
  return (
    <div className="subtotal">

    <CurrencyFormat renderText={(value)=>(
        <>
            <p>
                subtotaal({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
        </>
    )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />
    <button  onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
