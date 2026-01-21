import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './store/home'
import ProductDetail from "./store/productDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />  
      <Route path="/tienda" element={<Home />} />
      <Route path="/product/:slug" element={<ProductDetail/>} /> 
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
