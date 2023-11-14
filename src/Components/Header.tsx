//import { headerData } from "./Header/headerData";
//import { useNavigate } from "react-router-dom";

interface headerProps {
  oneScroll: ()=>void
  twoScroll: ()=>void
}

const Header = (props:headerProps) => {
  //const navigate = useNavigate()

  return (
    <div className="header">
      <div className="left-section">Это текст в левой части</div>
      <div className="right-section">
        <div onClick={props.oneScroll}>
          Кнопка1
        </div>
        <div onClick={props.twoScroll}>
          Кнопка2
        </div>
        {/* {headerData.map((i) => (
          <div onClick={() => navigate(`${i.link}`)}>{i.name}</div>
        ))} */}
      </div>
    </div>
  )
}

export default Header;