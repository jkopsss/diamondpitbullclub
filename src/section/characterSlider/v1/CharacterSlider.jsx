import { Slider, SliderItem } from "common/slider/Slider";
import data from "assets/data/characterSlider/characterSlider";
import { useModal } from "utils/ModalContext";
import CharacterSliderWrapper from "./CharacterSlider.style";

// import characterThumb from "assets/images/nft/Character1.png";
// import mintLiveDownArrow from "assets/images/nft/mint_live_down_arrow.svg";
// import mintLiveText from "assets/images/nft/mint_live_text.png";
// import homeImageBG from "assets/images/nft/home_img_bg.png";

const CharacterSlider = () => {
  const { MintNowModalGallery } = useModal();
  
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CharacterSliderWrapper>
      <Slider {...settings}>
        {data?.map((item, i) => (
        
          <SliderItem key={i}  onClick={() => MintNowModalGallery()}>
         
            <div className="character-thumb"
            style={{
            background: "url("+item.thumb.src+")", 
            backgroundPosition:"center",
             backgroundRepeat:"no-repeat" ,
              backgroundSize:"cover"
            }}
            >
              <span className="linea_height_top"></span>
              {/* <img src={item.thumb.src} className="immagine" alt="bithu nft character" /> */}
              <span className="linea_height_bottom"></span>
            </div>
            
          </SliderItem>
          
        ))}
      </Slider>
    </CharacterSliderWrapper>
  );
};

export default CharacterSlider;
