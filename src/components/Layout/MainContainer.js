import "../../styles/Layout/containers.scss";
const MainContainer = ({ children, color }) => {
  return <div className={`main_container ${color && "pink"}`}>{children}</div>;
};

export default MainContainer;
