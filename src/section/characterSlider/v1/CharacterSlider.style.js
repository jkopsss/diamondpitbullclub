import styled from "styled-components";

const CharacterSliderWrapper = styled.section`
  padding: 20px 40px;
  position: relative;
  z-index: 1;

  .slick-slider {
    .slick-list {
      margin: 0 -15px;
    }

    .slick-slide {
      height: auto; // ← that must not be ignored
    }
    .slick-track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
    }
  }
  .slick__slider__item {
    padding: 15px 15px;
  }

  .character-thumb .immagine{
    transition:1s;
  }
// .linea_height_top img{
//   min-width:100% !important;
// }
  .character-thumb {
    position:relative;
    height: 280px;
    display: flex;
    justify-content: center;
    cursor:pointer;
    align-items: center;
    border:1px solid black;
    // background: rgba(255, 255, 255, 0.05);
    transition:0.5s;

    &::before{
      content:'';
      display:block;
      position:absolute;
      width:40px;
      bottom:-2px;
      right:0px;
      border:0.5px solid white;
      transition:0.5s;
    
    }
    &::after{
      content:'';
      display:block;
      position:absolute;
      width:40px;
      top:-2px;
      left:0px;
      border:0.5px solid white;
      transition:0.5s;
  
    }
    &:hover{
        box-shadow: rgba(0, 255, 163, 0.4) -2px 2px, rgba(0, 255, 163, 0.3) -4px 4px, rgba(0, 255, 163,  0.2) -8px 8px, rgba(0, 255, 163,  0.1) -10px 10px, rgba(0, 255, 163, 0.05) -12px 12px;
        &::before{
        content:'';
        display:block;
        position:absolute;
        width:100%;
        border:0.5px solid white;
      }
      &::after{
        content:'';
        display:block;
        position:absolute;
        width:100%;
        border:0.5px solid white;
      }
      .linea_height_top{
      
        height:282px;
   
      }
      .linea_height_bottom{
     
        height:282px;
   
      }
      .immagine{
        transform:scale(1.08)
      }
    }
 
  }
  .linea_height_top{
        position:absolute;
        height:40px;
        background:#fff;
        top:-2px;
        left:0px;
        border:1px solid white;
        transition:0.5s;
      }
  .linea_height_bottom{
        position:absolute;
        height:40px;
        background:#fff;
        bottom:-2px;
        right:0px;
        border:1px solid white;
        transition:0.5s;
      }
      .immagine{
        width:70%;
   
      }

`;

export default CharacterSliderWrapper;
