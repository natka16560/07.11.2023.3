import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/Product/Product";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/main" element={Main} />
        <Route exact path="/catalog" element={Catalog} />
        <Route exact path="/product" element={Product} />
      </Routes>
    </Router>
  );
}