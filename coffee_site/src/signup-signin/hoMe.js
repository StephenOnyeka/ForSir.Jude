import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
// import Signin_signup from "./signup-signin";

import Home from "../Components/Home";
import About from "../Components/Routed components/About";
import ContactUs from "../Components/Routed components/ContactUs";
import Everything from "../Components/Routed components/everything";
import FindMore from "../Components/Routed components/FindMore";
import Accessories from "../Components/Routed components/accessories";
import Men from "../Components/Routed components/men";
import Women from "../Components/Routed components/women";
import Cart from "../Components/Routed components/cart";
// import ProductDescription from "../Components/Routed components/productDescription";
import DEScription from "../Components/Routed components/DEScription";
import REViews from "../Components/Routed components/REViews";
import User from "../Components/Routed components/user";

// import FeaturedProducts from "../Components/featuredProducts";
import ProDes from "../Components/proDes";
function HoMe({data, setData}) {
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  // const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };


/**Defining the total and loading for cart.js */
    const [subtotal, setSubtotal] = useState(0);
    const [loading, setLoading] = useState(true);
 useEffect(() => {
   let calculatedSubtotal = 0;
   cartItems.forEach((item) => {
     calculatedSubtotal += item.price * item.quantity;
   });
   setSubtotal(calculatedSubtotal);
 }, [cartItems]);

 useEffect(() => {
   setTimeout(() => {
     setLoading(false);
   }, 1000);
 });
 
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<FeaturedProducts />} /> */}
        <Route
          exact
          path="/"
          element={<Home cartItems={cartItems} subtotal={subtotal} data={data} />}
        />
        <Route path="/product/:id" element={<ProDes addToCart={addToCart} />}>
          <Route index element={<DEScription />} />
          <Route path="description" element={<DEScription />} />
          <Route path="reviews" element={<REViews />} />
        </Route>

        <Route
          path="/about"
          element={<About cartItems={cartItems} subtotal={subtotal} />}
        />
        <Route
          path="/contactUs"
          element={
            <ContactUs cartItems={cartItems} subtotal={subtotal} />
          }
        />
        <Route path="everything" element={<Everything />} />
        <Route path="findMore" element={<FindMore />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
              subtotal={subtotal}
              loading={loading}
            />
          }
        />
        <Route path="/women" element={<Women />} />
        <Route
          path="/user"
          element={
            <User
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default HoMe;
