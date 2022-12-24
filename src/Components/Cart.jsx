import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import NavBar from "./NavBar";
function Cart()
{
    let [cart , setCart] = useState([]);
   let [totalPrice , setTotalPrice] = useState(null);


    useEffect(()=>{
      let cartArray =   localStorage.getItem("cart");
      cartArray = JSON.parse(cartArray);
      setCart(cartArray);
      let t = cartArray.reduce((total ,v)=>{ return Number(v.discountPrice)+total} , 0)
       setTotalPrice(t+" Rupees");
    } , [])


    return(
        <div>
     <NavBar/>
        <h1> cart page </h1>

        {totalPrice && <h1>{totalPrice}</h1>}

        <DisplayProducts products={cart}/>

        </div>
    )
}
export default Cart