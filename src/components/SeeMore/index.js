import "./index.css";

function SeeMore({ title }) {
  return (
    <div className="see-more">
      <div className="see-more__title">{title}</div>
      <img
        src={require("../../assets/icons/arrow-right.png")}
        alt=""
        width="29.81"
        height="17.89"
      />
    </div>
  );
}

export default SeeMore;
