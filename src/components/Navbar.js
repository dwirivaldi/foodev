import { useState } from "react";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span style={{ color: "black" }}>oo</span>diesDev
      </a>
      <div className="nav-links">
        <a href="#!" className="">
          Home
        </a>
        <a href="#!">Recipes</a>
        <a href="#!">Setting</a>
      </div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
