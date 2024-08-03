import React, {createContext, useContext, useReducer} from 'react'

const CartContextProvider = createContext({});

export const useCartContext = () => useContext(CartContextProvider);

const initialState = {
    cart:[],
    total:0,
    totalItem:0
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            const {_id, price, quantity} = action.payload;
            let isExists = state.cart.findIndex((item)=>item?._id ===_id);
            let newState = [];
            let newTotal = state.total;
            let totalItems = state.totalItem;
            

            if(isExists === -1){
                newState = [...state.cart, {...action.payload}]
                newTotal += (Number(price) * Number(quantity))
                totalItems += 1;
            }else{
                newState = state?.cart?.map((item)=>{
                    if(item?.id === _id){
                        return {
                            ...item,
                            quantity:(item?.quantity + quantity),
                            total:Number(item?.price * quantity)
                        }
                    }
                })
                newTotal += Number(price * quantity);
                
            }
            return{
                ...state,
                cart:newState,
                total:newTotal,
                totalItem:totalItems
            }
    }
}

const CartContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (val) => {
        console.log(val)
        dispatch({
            type:"ADD",
            payload:val
        })
    }

  return (
    <CartContextProvider.Provider value={{state, addToCart}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContext