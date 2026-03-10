import data from "../data/sitedata";

export default function Promotion() {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <h1 className="fade-in">{data.promotionHeading}</h1>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  );
}
