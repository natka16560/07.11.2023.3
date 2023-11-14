import "./styles.css";
import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/Product/Product";


export default function App() {
  const oneRef = useRef (null)
  const twoRef = useRef (null)
  //@ts-ignore
  const oneScroll= () => oneRef.current.scrollIntoView({block:"start"})
  //@ts-ignore
  const twoScroll= () => twoRef.current.scrollIntoView({block:"start"})

  return (
    <BrowserRouter>
      <Header oneScroll={oneScroll} twoScroll={twoScroll} />
      <Section refProp={oneRef}/>
      <Section refProp={twoRef}/>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Main />} /> 
      </Routes>
    </BrowserRouter>
  );
}