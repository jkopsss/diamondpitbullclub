import ButtonWrapper from "./Button.style";

import buttonHoverShapeBlack from "assets/images/icon/button-hover-shape.svg";
import buttonHoverShapeWhite from "assets/images/icon/hov_shape_s.svg";
import PitbullImg from "assets/images/banner/pitbull_transparent.png";
const Button = ({ children, ...props }) => {
  if(props.jDiscord == "join_btn"){
    return (
      <ButtonWrapper type="submit" className="bithu-btn" {...props}>
      {children}

      <img
        src={buttonHoverShapeWhite.src}
        className="hover-shape shape-left shape-white"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeWhite.src}
        className="hover-shape shape-right shape-white"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack.src}
        className="hover-shape shape-left shape-black"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack.src}
        className="hover-shape shape-right shape-black"
        alt="bithu nft button hover shape"
      />
    </ButtonWrapper>
     
    );
  }
  else{
    return (
      <ButtonWrapper type="submit" className="bithu-btn" {...props}>
        {children}
  
        <img
          src={PitbullImg.src}
          className="hover-shape shape-left shape-white"
          alt="bithu nft button hover shape"
        />
        <img
          src={PitbullImg.src}
          className="hover-shape shape-right shape-white"
          alt="bithu nft button hover shape"
        />
        <img
          src={PitbullImg.src}
          className="hover-shape shape-left shape-black"
          alt="bithu nft button hover shape"
        />
        <img
          src={PitbullImg.src}
          className="hover-shape shape-right shape-black"
          alt="bithu nft button hover shape"
        />
      </ButtonWrapper>
    );
  }

};

export default Button;
