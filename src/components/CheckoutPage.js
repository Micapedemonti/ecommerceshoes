
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import CheckoutCard from "./CheckoutCard";
import './checkoutPage.css'
import accounting from "accounting";

const CheckoutPage = () => {
 
  const [cart] =useContext(CartContext)



  const quantity = cart.reduce((acc, curr)=>{
      return acc + curr.quantity;
  },0)

const totalPrice = cart.reduce((acc,curr)=>{
    return acc + curr.quantity * curr.price;
},0)
  return (
    <>
    <div>

        <div className="container_checkoutPage">
        
          {cart.length > 0 ? (
            cart.map((product) => (
               <CheckoutCard key={product.id} item={product} quantity ={quantity} /> 
               )  )  
           ) : (
            <h1> No hay productos en el carrito</h1>
          )}  
          <div>
          <h1> Productos en el carrito:{quantity}</h1>
          <h1> Total: {accounting.formatMoney(totalPrice, "CL")} </h1>
          </div>
         </div>
          {/* <div>
         
      {quantity <  0 ? (
       <h1> Total:{totalPrice} </h1>
    
      ):( <h1>{totalPrice}</h1> ) } 


  

            <button onClick={()=>console.log(cart)}>Checkout</button> 
      </div> */}
  
  
 </div>
 </>
  );
};

export default CheckoutPage;