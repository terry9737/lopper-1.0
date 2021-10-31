import "../../styles/NavBar/hamburger.scss";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const Hamburger = () => {
  const { open, setOpen } = useContext(DataContext);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`hamburger ${open && "open"}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
