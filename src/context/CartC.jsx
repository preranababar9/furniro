import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

//It holds the logic for the cart and makes it available to any part of the app that needs it. It wraps around your app or components so they can access the cart data.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") //If localStorage has cart items, it loads them; otherwise, it starts with an empty cart ([]).
      ? JSON.parse(localStorage.getItem("cartItems")) 
      : []
  );
  //JSON.parse() will convert the text back into this array. The empty array is used to return when there is no items saved in cart.
  //children is a special prop in React

  const addToCart = (item) => {
    if (!item || !item.id) {
      console.error("Item or Item ID is undefined");
      return;
    } else {
      console.log("item added to cart");
    }

    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //checks wheather the item is already in the cart or not

    //if item is already in cart and again we try to add it in cart then it increase the quantity of that item in cart
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); //and if not then it adds item to cart
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //checks wheather the item is already in the cart or not

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); //If the quantity is 1, it uses the .filter() method to create a new array that removes the item from cartItems. filter keeps only the items that do not have the same id as the item being removed.
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const addMultiple = (item, quantity) => {
    try {
      if (!item || !item.id) {
        console.error("Item or Item ID is undefined");
        return;
      } else {
        console.log("item added to cart");
      }

      const isItemInCart = cartItems.find(
        (cartItem) => cartItem.id === item.id
      ); //checks wheather the item is already in the cart or not

      //if item is already in cart and again we try to add it in cart then it increase the quantity of that item in cart
      if (isItemInCart) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        );
      } else {
        setCartItems([...cartItems, { ...item, quantity: quantity }]); //and if not then it adds item to cart
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addMultiple,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
