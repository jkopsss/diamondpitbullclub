import Link from "next/link";
import data from "assets/data/footer/footerLinks";

import footerLogo from "assets/images/icon/logo_diamond_pitbull_scontornato.png";
import backToTopIcon from "assets/images/icon/back_to_top.svg";
import footerShapesLeft from "assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "assets/images/icon/footer_shapes_right.png";
import bannerThumb1 from "assets/images/banner/Item1.png";
import bannerThumb2 from "assets/images/banner/Item2.png";
import bannerThumb3 from "assets/images/banner/Item3.png";
import Particle from "common/particle/v2";
import FooterBottomStyleWrapper from "./FooterBottom.style";
const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="bithu_v2_main_footer">
    
      <div className="v2_main_footer">
        <div className="v2_footer_menu">
          <div className="v2_footer_logo">
            <Link href="# ">
              <img src={footerLogo.src} alt="bithu nft logo" style={{maxWidth: "20%"}} />
            </Link>
          </div>
          <div className="bottom_footer_menulist">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <Link href={item.url}>
                    <a style={{fontSize:"1.2rem"}}>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="v2_footer_copiright_text">
            <p style={{fontSize:"1.2rem"}}>Copyright ©2022 Diamond Pitbull Club, All rights reserved.</p>
          </div>
          <Link href="# " className="bact_to_top_btn">
            <a>
              <img src={backToTopIcon.src} alt="bithu nft back to top" />
            </a>
          </Link>
        </div>
      </div>
      <span className="v2_footer_shapes_left">
        <img src={footerShapesLeft.src} alt="bithu nft footer" />
      </span>
      <span className="v2_footer_shapes_right">
        <img src={footerShapesRight.src} alt="bithu nft footer" />
      </span>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
