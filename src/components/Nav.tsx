
import { NavLink } from "react-router-dom";
function Nav() {
    return (
      <nav>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Projects">Portfolio</NavLink>
        <NavLink to="/Resume">Resume</NavLink>


       
      </nav>
    )
  }
  export default Nav;