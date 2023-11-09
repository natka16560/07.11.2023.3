import { headerData } from "./Header/headerData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">Это текст в левой части</div>
      <div className="right-section">
        {headerData.map((i, index) => (
          <Link key={index} to={i.link}>
            <button>{i.name}</button>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Header;

