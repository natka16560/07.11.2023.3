import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    document.title = "Продукт";
  }, []);

  return (
    <div>
      <h1>Продукт</h1>
    </div>
  );
};

export default Product;