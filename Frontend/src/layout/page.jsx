import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Cart from "../components/cart";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/asis";
import { AnimatePresence } from "framer-motion";

const Page = () => {
  const location = useLocation();
  // State to control the visibility of the cart and wishlist
  const [hideCart, setHideCart] = useState(false);

  const cartData = useSelector((state) => state.asis.cart);
  const dispatch = useDispatch();

  const handleGetCartContent = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}carts`,
      );
      // setCartData(response.data.products);
      dispatch(setCart(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    handleGetCartContent();
  }, []);

  return (
    <main className="flex h-full flex-col">
      <Toaster position="top-center" />
      {location.pathname !== "/" && (
        <Header
          setHideCart={setHideCart}
          cartLength={cartData?.products?.length}
        />
      )}

      <AnimatePresence>
        {hideCart && (
          <Cart setHideCart={setHideCart} cartData={cartData.products} />
        )}
      </AnimatePresence>

      <Outlet />
    </main>
  );
};

export default Page;
