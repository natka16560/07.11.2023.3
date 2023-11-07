import { headerData } from "./Header/headerData";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">Это текст в левой части</div>
      <div className="right-section">
        {headerData.map((i, index) => (
          <button key={index}>{i.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
