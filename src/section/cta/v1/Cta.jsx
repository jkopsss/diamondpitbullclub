import { FaDiscord } from "react-icons/fa";
import SectionTitle from "common/sectionTitle";
import Button from "common/button";
import data from "assets/data/socialProfile";

import hoverShape from "assets/images/icon/hov_shape_s.svg";
import particleShape1 from "assets/images/icon/star_1.svg";
import particleShape2 from "assets/images/icon/star_2.svg";
import particleShape3 from "assets/images/icon/star_3.svg";
import particleShape4 from "assets/images/icon/star_4.svg";
import particleShape5 from "assets/images/icon/star_5.svg";
import particleShape6 from "assets/images/icon/star_6.svg";
import particleShape7 from "assets/images/icon/star_7.svg";
import DiamondImg from "assets/images/banner/diamond_transparent.png";
import PitbullImg from "assets/images/banner/pitbull_transparent.png";
import CTAStyleWrapper from "./Cta.style";

const CTA = () => {
  const particleShapes = [
    particleShape6,
    particleShape3,
    particleShape1,
    particleShape7,
    particleShape4,
    particleShape2,
    particleShape5,
  ];
  return (
    <CTAStyleWrapper>
      <div className="container">
        <SectionTitle
          className="bithu_title_section text-center"
          title="Join Our community &amp; get Early access"
        ></SectionTitle>
        <div className="title-emo">&#128071;</div>
        <div className="bithu_v1_cta_content">
          <div className="join_comunity_btns">
            <Button lg variant="mint" className="wishlist_btn button_opensea">
              Whitelist Now
            </Button>
            <Button lg variant="blue" className="join_discord_btn button_opensea">
              {" "}
              <FaDiscord /> Join Discord
            </Button>
          </div>
          <div className="cta_social_links">
            <ul>
              {data?.map((item, i) => (
                <li key={i} className={"item_icon_social"+i}>
                  <a href={item.url}>
                    {item.thumb ? (
                      <img src={item.thumb.src} alt="bithu nft profiles" />
                    ) : (
                      item.icon
                    )}
                  </a>
                  <img
                    className={"social_hover_shape social_hover_shape"+i}
                    src={hoverShape.src}
                    alt="bithu nft hover"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_stras_sect">
            <div className="footer_stars">
              {particleShapes?.map((shape, i) => (
                <span key={i} className={`star_${i + 1}`}>
                  <img src={i%2==0 ? DiamondImg.src :  PitbullImg.src } alt="bithu nft background particle" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
