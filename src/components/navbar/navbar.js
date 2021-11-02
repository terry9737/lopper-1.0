import "../../styles/NavBar/navbar.scss";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
import DropdownDefault from "./dropdownDefault";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_aligner">
        <motion.h1
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="navbar_logo"
        >
          Lopper
        </motion.h1>
        <DropdownDefault />
        <Hamburger />
      </div>
      <Dropdown />
    </nav>
  );
};

export default Navbar;
