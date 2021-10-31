import "../../styles/Layout/containers.scss";
const Wrapper = ({ children, full }) => {
  return <div className={`wrapper ${full && "full"}`}>{children}</div>;
};

export default Wrapper;
