import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
const Navbar = () => {
  const { ToggleTheme, isDark } = useContext(ThemeContext);
  return (
    <header>
      <nav>
        <div className="logo">
          <span className="nav-item">Where in the world?</span>
        </div>
        <div className="theme-btn">
          <button onClick={ToggleTheme} className="nav-item">
            {isDark ? (
              <span>
                <NightsStayOutlinedIcon /> Dark Mode
              </span>
            ) : (
              <span>
                {" "}
                <WbSunnyOutlinedIcon /> Ligth Mode
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
