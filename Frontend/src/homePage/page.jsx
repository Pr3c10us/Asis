import React, { useRef } from "react";
import SelectedOne from "./pages/selectedOne";
import SelectedOneCS from "./pages/selectedOneCS";
import SelectedThree from "./pages/selectedThree";
import SelectedTwo from "./pages/selectedTwo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Displayed from "./pages/displayed";
import Displayed2 from "./pages/displayed2";
import Header from "./components/header";
import Loading from "../components/loading";
import { AnimatePresence, motion } from "framer-motion";

const page2 = () => {
  const navigate = useNavigate();

  const bodyRef = useRef(null);

  const [displayProduct, setDisplayProduct] = React.useState(null);
  const [fallbackProducts, setFallbackProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [navType, setNavType] = React.useState(1);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}home`,
      );
      const displayProduct = data.product;
      setDisplayProduct(displayProduct);
      if (!data.product.name || data.product == {}) {
        navigate("/store");
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      if (error.response.status === 404) {
        try {
          navigate("/store");

          const { data } = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}products?limit=5`,
          );
          setFallbackProducts(data.products);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        } catch (error) {
          console.log(error);
          navigate("/store");
        }
      } else {
        console.log(error);
        navigate("/store");
      }
    }
  };

  React.useEffect(() => {
    handleFetchData();
  }, []);

  // if (loading) {
  //   return ;
  // }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loading">
          <Loading />
        </motion.div>
      ) : (
        <main className="flex h-screen flex-col overflow-hidden" ref={bodyRef}>
          <Header type={navType} />
          {/* {displayProduct != null ? (
        <Displayed
          bodyRef={bodyRef}
          product={displayProduct}
          setNavType={setNavType}
        />
      ) : (
        <></>
      )} */}
          {displayProduct != null ? (
            <Displayed2
              bodyRef={bodyRef}
              product={displayProduct}
              setNavType={setNavType}
            />
          ) : (
            <></>
          )}
        </main>
      )}
    </AnimatePresence>
  );
};

export default page2;
