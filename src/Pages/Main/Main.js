import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    document.title = "Главная";
  }, []);

  return (
    <div>
      <h1>Главная</h1>
    </div>
  );
};

export default Main;