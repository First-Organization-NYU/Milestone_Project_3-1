import {useReducer} from 'react'
import CartContextTemp from './CartContextTemp'
import CartReducer  from './CartReducer'
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from '../Types'

const CartState = ({children}) => {
    const initialState = {
        showCart: false,
        cartItem: []
    }
    
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const showHideCart = () => {
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem = id => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    return(
        <CartContextTemp.provider
            value={{
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                showHideCart,
                removeItem
            }}
        >
            {children}
        </CartContextTemp.provider>
    )
}

export default CartState;
