import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';import NightlightIcon from '@mui/icons-material/Nightlight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SendIcon from '@mui/icons-material/Send';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
    const{dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..."/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <NightlightIcon className="icon" 
                    onClick={()=>dispatch({type:"TOGGLE"})} />
                </div>
                <div className="item">
                    <NotificationsNoneIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <SendIcon className="icon"/>
                </div>
                <div className="item">
                    <img src="https://media.istockphoto.com/id/1399561967/photo/young-cheerful-african-american-businesswoman-working-on-a-digital-tablet-alone-at-work-happy.jpg?s=1024x1024&w=is&k=20&c=eOlrghkE7zmtwB0WEHoMCTGeFaqwptLRJCyxjt7fd98="
                    alt=""
                    className="avatar"/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Navbar
