import Image from "next/image"
import { useModal } from "utils/ModalContext";
import Counter from "common/counter";
import Button from "common/button";
import BannerV1Wrapper from "./Banner.style";
import Link from 'next/link';
import characterThumb from "assets/images/banner/budda5.png";
import homeImageBG from "assets/images/nft/home_img_bg.png";
import PitbullImg from "assets/images/banner/pitbull_transparent.png";


const Banner = () => {
  const { mintModalHandle } = useModal();
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>Diamond<br/>pitbullclub 🎯 NFT collections</h2>
              <h3>
                <span className="count">
                  <Counter end={5555} duration={5555} />
                </span>{" "}
                / 5555 Minted
              </h3>
              <div className="banner_buttons">
                {/* <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button> */}
              
                <Link  href="https://opensea.io/collection/gutterdogs" passHref>
                  <a target="_blank" rel="noopener noreferrer">      
                  <Button lg variant="mint" className="button_opensea">
                    Wishlist now
                  </Button></a>
                </Link>
              </div>
              <div className="coin-info">
                <span>Max 2 NFTs per wallet . Price 0.09 ETH + gas</span>
                <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 APR 04:00H</span>
                </span>
                <span>Presale : SOLDOUT</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
              
              <div id="circle-orbit-container">

           
              <div id="inner-orbit">
             
              </div>

            
              <div id="middle-orbit">
                <div className="middle-orbit-cirlces">
                <Image src={PitbullImg}  className="pit_orbit" alt="bithu banner"  />
                </div>
              </div>

        
              <div id="outer-orbit">
                <div className="outer-orbit-cirlces">
                <Image src={PitbullImg}  className="pit_outer" alt="bithu banner"  />
                </div>
              </div>

              </div>
                
                {/* <div className="mint_live_circle_sect">
                 
                  <div className="mint_live_circle">
                    <span>
                      <Image src={DiamondImg} alt="bithu nft banner" class="diamond"/>
                    </span>
                    <span className="mint_live_text rotated-style">
                      <Image src={mintLiveText} alt="bithu banner"  class="text-img" />
                    </span>
                  </div>
                </div>
              */}
                <div className="bithu_v1_baner_right_img_bg">
                  <Image src={homeImageBG} alt="bithu nft banner" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <Image src={characterThumb} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
