import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/Product/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Main />} /> 
      </Routes>
    </BrowserRouter>
  );
}