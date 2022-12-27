import "./style.css";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="image skeleton"></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="title skeleton"></div>
          <div className="description skeleton"></div>
        </div>
      </div>
      <div className="content skeleton"></div>
    </div>
  );
};

export default Skeleton;
