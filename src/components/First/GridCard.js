const GridCard = ({ data }) => {
  console.log(data);
  return (
    <div className="first_grid-card">
      <div className="icon">
        <img src={data.icon} alt="icon" />
      </div>
      <p className="title">{data.name}</p>
      <p className="text">{data.content}</p>
    </div>
  );
};

export default GridCard;
