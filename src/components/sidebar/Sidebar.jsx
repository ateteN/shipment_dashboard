import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true); 
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <div className="menu-btn" onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      )}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top">
          <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <Link to="/" className="sidebar-link">
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </Link>
            </li>
            <p className="title">OTHER</p>
            <li>
              <Link to="/shipments" className="sidebar-link">
                <LocalShippingIcon className="icon" />
                <span>Shipments</span>
              </Link>
            </li>
          </ul>
          <p className="title">COLOR THEME</p>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
          <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
