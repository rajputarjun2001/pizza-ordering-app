export const addTOCart = (pizza,quantity) =>(dispatch,getState)=>{
    const cartItem = {
        name: pizza.name,
        _id:pizza.id,
        image: pizza.img_url,
        
        quantity:Number(quantity),
        price:pizza.price,
        prices: pizza.price * quantity

    };
    if (cartItem.quantity > 10) {
      alert("You can only add 10 pizzas");
    } else {
      if(cartItem.quantity<1){
      dispatch({type:'DELETE_FROM_CART', payload:pizza})
    }
    else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItem",
          JSON.stringify(getState().cartReducer.cartItem)
        );
      }
    }
    };
    
         
        
    


export const  deleteFromCart = (pizza) =>(dispatch,getState)=>{
  dispatch({type:'DELETE_FROM_CART', payload:pizza})
  const cartItems = getState().cartReducer.cartItems
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
