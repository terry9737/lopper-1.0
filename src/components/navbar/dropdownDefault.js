import { FiSmartphone } from "react-icons/fi";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const DropdownDefault = () => {
  const { NavData } = useContext(DataContext);
  return (
    <div className="navbar_dropdown-default ">
      <ul className="navbar_links">
        {NavData.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>{item.name}</a>
            </li>
          );
        })}
        <div className="navbar_phone">
          <i>
            <a href="tel:666 - 693 - 456">
              <FiSmartphone />
            </a>
          </i>
          <p>
            <a href="tel:666 - 693 - 456">(01) 666 - 693 - 456</a>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default DropdownDefault;
