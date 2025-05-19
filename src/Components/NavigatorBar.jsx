import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css"
function NavigationBar() {
  return (
  <nav>
      <Link to="/">Home</Link>
      <Link to="/list">Events</Link>
    </nav>
  );
}

export default NavigationBar;