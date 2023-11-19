export const initialstate = {
  user:'',
  seller:'mupenziabdul@.gmail.com',
  cart: [
    
      
   





  ],
};

const reducer = (state, action) => {
 
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_SELLER":
      return {
        ...state,
        seller: action.seller
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };
    case "REMOVE_FROM_BASKET":
      let newbasket = [...state.cart];
      const index = state.cart.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newbasket.splice(index, 1);
      }
     


      return { ...state, cart: newbasket };

    case "UPDATE_CART_ITEM":
      let basket=[...state.cart];
      const indexi=basket.findIndex(
        (item) => item.id === action.id
        );
  
        if(indexi!==-1){
          var newItem=basket[indexi]
          var qua=newItem.quantity;
          if(action.name==="increment"){
            newItem={...newItem,quantity:qua+1}
            basket[indexi]=newItem

          }else if(action.name==="decrement"){
            newItem={...newItem,quantity:qua-1}
            basket[indexi]=newItem
          }
         
          
          
         console.log(newItem)
          
        }
        

        return {...state,cart:basket}

    case "RESET":
      return initialstate


    default:
      return state;
  }
};

export default reducer;
