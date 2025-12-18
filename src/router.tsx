import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './store/home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />      {/* Landing */}
      <Route path="/tienda" element={<Home />} />
      {/* <Route path="/product/:id" element={<Product />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
