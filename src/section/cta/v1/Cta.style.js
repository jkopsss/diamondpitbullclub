import styled, { keyframes } from "styled-components";

const star1 = keyframes`
        0%,
        100% {
            top: 0%;
        }

        50% {
            top: 3%;
    }
`;
const star2 = keyframes`
        0%,
    100% {
        top: 20%;
    }

    50% {
        top: 23%;
    }
`;
const star3 = keyframes`
        0%,
    100% {
        top: 20%;
    }

    50% {
        top: 23%;
    }
`;
const star4 = keyframes`
        0%,
    100% {
        top: 20%;
    }

    50% {
        top: 23%;
    }
`;
const star5 = keyframes`
        0%,
    100% {
        top: 20%;
    }

    50% {
        top: 23%;
    }
`;
const star6 = keyframes`
      0%,
    100% {
        bottom: 15%;
    }

    50% {
        bottom: 18%;
    }
`;
const star7 = keyframes`
      0%,
    100% {
        bottom: 0%;
    }

    50% {
        bottom: 3%;
    }
`;

const CTAStyleWrapper = styled.section`
  .bithu_title_section {
    width: 45%;
    margin: 0 auto;
    img {
      display: none;
    }

    h2,
    h3 {
      margin: 0;
    }
  }
  .title-emo {
    text-align: center;
    font-size: 50px;
  }

  .bithu_v1_cta_content {
    position: relative;
    z-index: 1;

    /* particles */
    /* particles */
    .footer_stras_sect {
      height: 356px;
      width: 100%;
      position: absolute;
      top: -150px;
      z-index: 0;
      .footer_stars {
        position: relative;
        height: 100%;
        /* width: 100%; */
        span {
          position: absolute;
        }
        .star_1 {
          top: 0%;
          right: 5%;
          width:5%;
          animation: ${star1} 4s infinite;
          img{
            filter: invert(88%) sepia(24%) saturate(7276%) hue-rotate(101deg) brightness(101%) contrast(106%);
          }
        }
        .star_2 {
          top: 20%;
          left: 0%;
          width:5%;
          animation: ${star2} 5s infinite;
          img{
            filter: invert(51%) sepia(98%) saturate(1168%) hue-rotate(348deg) brightness(98%) contrast(103%);
          }
        }
        .star_3 {
          top: 34%;
          left: 20%;
          width:5%;
          animation:${star3} 4s infinite; 
          img{
            filter: invert(26%) sepia(93%) saturate(1297%) hue-rotate(299deg) brightness(99%) contrast(95%);
          }
        }
        .star_4 {
          top: 50%;
          left: 44%;
          width:5%;
          animation: ${star4} 4s infinite; 
          img{
            filter: invert(30%) sepia(31%) saturate(2321%) hue-rotate(317deg) brightness(107%) contrast(111%);
          }
        }
        .star_5 {
          bottom: 26%;
          right: 27%;
          width:5%;
           animation:${star5} 4s infinite; 
          img{
            filter: invert(59%) sepia(67%) saturate(1631%) hue-rotate(147deg) brightness(104%) contrast(90%);
          }
        }
        .star_6 {
          bottom: 15%;
          right: 10%;
          width:5%;
          animation: ${star6} 3.5s infinite;
          img{
            filter: invert(65%) sepia(98%) saturate(456%) hue-rotate(353deg) brightness(104%) contrast(102%);
          }
        }
        .star_7 {
          bottom: 0px;
          left: 10%;
          width:5%;
          animation: ${star7} 3.5s infinite;
          img{
            filter: invert(35%) sepia(57%) saturate(1935%) hue-rotate(219deg) brightness(96%) contrast(97%);
          }
        }
      }
    }
  }
  .item_icon_social0{
  
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(0, 255, 163, 0.4) 0px -2px, rgba(0, 255, 163, 0.3) 0px -4px, rgba(0, 255, 163, 0.2) 0px -8px, rgba(0, 255, 163, 0.1) 0px -10px, rgba(0, 255, 163, 0.05) 0px -12px;
        .social_hover_shape0{
          filter: invert(77%) sepia(14%) saturate(2830%) hue-rotate(100deg) brightness(99%) contrast(107%);
        }
        }
  }
  .item_icon_social1{
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(220, 53, 69, 0.4) 0px -2px, rgba(220, 53, 69, 0.3) 0px -4px, rgba(220, 53, 69, 0.2) 0px -8px, rgba(220, 53, 69, 0.1) 0px -10px, rgba(220, 53, 69, 0.05) 0px -12px;
        .social_hover_shape1{
          filter: invert(30%) sepia(31%) saturate(2321%) hue-rotate(317deg) brightness(107%) contrast(111%);
        }
        }
  }
  .item_icon_social2{
 
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(255, 193, 7, 0.4) 0px -2px, rgba(255, 193, 7, 0.3) 0px -4px, rgba(255, 193, 7, 0.2) 0px -8px, rgba(255, 193, 7, 0.1) 0px -10px, rgba(255, 193, 7, 0.05) 0px -12px;
        .social_hover_shape2{
          filter: invert(65%) sepia(98%) saturate(456%) hue-rotate(353deg) brightness(104%) contrast(102%);
        }
        }
  }
  .item_icon_social3{
   
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(214, 51, 132, 0.4) 0px -2px, rgba(214, 51, 132, 0.3) 0px -4px, rgba(214, 51, 132, 0.2) 0px -8px, rgba(214, 51, 132, 0.1) 0px -10px, rgba(214, 51, 132, 0.05) 0px -12px;
        .social_hover_shape3{
          filter: invert(26%) sepia(93%) saturate(1297%) hue-rotate(299deg) brightness(99%) contrast(95%);
        }
        }
  }
  .item_icon_social4{
   
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(13, 202, 240, 0.4) 0px -2px, rgba(13, 202, 240, 0.3) 0px -4px, rgba(13, 202, 240, 0.2) 0px -8px, rgba(13, 202, 240, 0.1) 0px -10px, rgba(13, 202, 240, 0.05) 0px -12px;
          .social_hover_shape4{
            filter: invert(71%) sepia(51%) saturate(4952%) hue-rotate(148deg) brightness(106%) contrast(91%);
          }
        }
  }
  .item_icon_social5{
    
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(253, 126, 20, 0.4) 0px -2px, rgba(253, 126, 20, 0.3) 0px -4px, rgba(253, 126, 20, 0.2) 0px -8px, rgba(253, 126, 20, 0.1) 0px -10px, rgba(253, 126, 20, 0.05) 0px -12px;
          .social_hover_shape5{
          filter:invert(51%) sepia(98%) saturate(1168%) hue-rotate(348deg) brightness(98%) contrast(103%);
          }
        }
  }
  .item_icon_social6{

        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(88, 101, 242, 0.4) 0px -2px, rgba(88, 101, 242, 0.3) 0px -4px, rgba(88, 101, 242, 0.2) 0px -8px, rgba(88, 101, 242, 0.1) 0px -10px, rgba(88, 101, 242, 0.05) 0px -12px;
          .social_hover_shape6{
            filter: invert(66%) sepia(85%) saturate(6101%) hue-rotate(221deg) brightness(94%) contrast(102%);
          }
        }
  }
  .button_opensea{
    transition:0.5s;
   
    .hover-shape{
      width:40px;
      transition:0.5;
      opacity:0;
   
    }
    &:hover{
      border-radius:10px;
      transform:scale(1.05) translateY(-7px);
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     
      .hover-shape{
      width:35px;
      opacity:0;
     
    }
   
    }
  }
  .join_comunity_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 430px;
    margin: auto;
    margin-top: 47px;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  .cta_social_links {
    max-width: 540px;
    margin: auto;
    margin-bottom: 70px;
    position: relative;
    z-index: 1;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      li {
        width: 11%;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: #ffffff;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 20px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
        .social_hover_shape {
          position: absolute;
          top: 7px;
          left: 7px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s;
        }

        &:hover {
          .social_hover_shape {
            opacity: 1;
            visibility: visible;
          }
        }

      }
      li + li {
        margin-left: 15px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .bithu_title_section {
      width: 60%;
    }
    .title-emo {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 575px) {
    .join_comunity_btns {
      max-width: 400px;
      .wishlist_btn {
        width: 46%;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 46%;
        font-size: 14px;
      }
    }

    .cta_social_links {
      max-width: 425px;

      ul {
        li {
          height: 48px;
          width: 12%;
          a {
            img {
              height: 14px;
            }
            svg {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .bithu_title_section {
      width: 85%;
    }
    .title-emo {
      font-size: 30px;
    }
    .join_comunity_btns {
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      row-gap: 25px;

      .wishlist_btn {
        width: 180px;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 180px;
        font-size: 14px;
      }
    }

    .footer_social_links {
      ul {
        li {
          height: 40px;
          width: 12%;
          a {
            svg {
              font-size: 12px;
            }
            img {
              height: 12px;
            }
          }
        }
      }
    }
  }
`;

export default CTAStyleWrapper;
