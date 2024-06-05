import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }
        else {
           setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1})) 
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
          let foodItem = food_list.find(product => product._id === itemId);
          if (foodItem) {
            totalAmount += (foodItem.price * cartItems[itemId]);
          }
        }
        return totalAmount;
      };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider

