import { headerData } from "./Header/headerData";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="left-section">Это текст в левой части</div>
      <div className="right-section">
        {headerData.map((i) => (
          <div onClick={() => navigate(`${i.link}`)}>{i.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Header;