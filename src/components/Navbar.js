export default function Navbar() {
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span style={{ color: "black" }}>oo</span>diesDev
      </a>
      <div className="nav-links">
        <a href="#!" className="active">
          Home
        </a>
        <a href="#!">Recipes</a>
        <a href="#!">Setting</a>
      </div>
    </div>
  );
}
