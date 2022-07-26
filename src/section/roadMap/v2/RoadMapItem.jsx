import DiamondImg from "assets/images/banner/diamond_transparent.png";

const RoadMapItem = ({ id, icon, title, text }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `v2_roadmap_card_item v2_roadmap_card_item_odd`
          : `v2_roadmap_card_item v2_roadmap_card_item_even`
      }
    >
      <div className="v2_roadmap_card_box">
          <span>
            <img src={DiamondImg.src} alt="bithu nft road map" />
          </span></div>
      <div className="v2_roadmap_card_content">
        <h3>
          {title}{" "}
        
          <span>
            <img src={icon.src} alt="bithu nft road map" />
          </span>
        </h3>
        <div className="postcard__bar" style={{marginBottom:"15px"}}></div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
