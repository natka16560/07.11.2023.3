import { useEffect } from "react";

const Catalog = () => {
  useEffect(() => {
    document.title = "Каталог";
  }, []);

  return (
    <div>
      <h1>Каталог</h1>
    </div>
  );
};

export default Catalog;