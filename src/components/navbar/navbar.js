import "../../styles/NavBar/navbar.scss";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
import DropdownDefault from "./dropdownDefault";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_aligner">
        <h1 className="navbar_logo">Lopper</h1>
        <DropdownDefault />
        <Hamburger />
      </div>
      <Dropdown />
    </nav>
  );
};

export default Navbar;
