import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <main className="navbar-up">
        <Link to="/">MAIN LINKS</Link>
        <Link to="/prg-links">PRG</Link>
        <Link to="/weather-links">WEATHER</Link>
        <Link to="/other-info">OTHER INFO</Link>
      </main>
    </>
  );
};
