import "../../styles/Layout/containers.scss";
const MainContainer = ({ children, color, footer }) => {
  return (
    <div className={`main_container ${color && "pink"} ${footer && "footer"}`}>
      {children}
    </div>
  );
};

export default MainContainer;
