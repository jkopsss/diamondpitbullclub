import styled from "styled-components";

const RoadMapStyleWrapper = styled.section`
  padding-top: 132px;
  padding-bottom: 146px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .v2_roadmap_divider {
    position: absolute;
    top: 0px;
    height: 100%;
    img {
      height: 100%;
    }
  }

  .v2_roadmap_card_list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 52px;

    /* devider */
    .v2_roadmap_divider {
      position: absolute;
      top: 0px;
    }

    .v2_roadmap_card_item {
      position: relative;
      width: 95%;

      &.v2_roadmap_card_item_even {
        padding: 30px 0px 0px 30px;
        margin-top: 80px;
        margin-left: auto;

        /* corner square shape */
        .v2_roadmap_card_box {
          left: 0px;
          top: 0px;
          z-index:9999;
        }
      }
      &.v2_roadmap_card_item_odd {
        padding: 30px 30px 0px 0px;
        margin: 0 auto 80px 0;

        /* corner square shape */
        .v2_roadmap_card_box {
          right: 0px;
          top: 0px;
          z-index:9999;
        }
      }
      /* corner square shape */
      .v2_roadmap_card_box {
        ${'' /* background: rgba(255, 255, 255, 0.05); */}
        height: 50px;
        width: 50px;
        position: absolute;
      
      }
      .v2_roadmap_card_box span img{
        max-width:150% !important;
        filter: invert(76%) sepia(80%) saturate(2438%) hue-rotate(103deg) brightness(102%) contrast(110%);
        animation: myOrbit 4s linear infinite; 
      }
      @keyframes myOrbit {
          from { transform: rotate(0deg) translateX(25px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(25px)  rotate(-360deg); }
      }
      .v2_roadmap_card_content {
        background-image: url("assets/images/icon/diamond.png");
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 30px 40px;
        border:1px solid #000;
        transition: border-radius .4s,  box-shadow .4s,  transform .4s;

        &:hover{
          border-radius:15px !important;
          transform: translateY(5px) !important;
          box-shadow: rgba(0, 255, 163, 0.4) 0px -2px, rgba(0, 255, 163, 0.3) 0px -4px, rgba(0, 255, 163, 0.2) 0px -8px, rgba(0, 255, 163, 0.1) 0px -10px, rgba(0, 255, 163, 0.05) 0px -12px;
        }
        h3 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 24px;
          line-height: 34px;
          color: #00ffa3;
          text-transform: uppercase;
          margin-bottom: 0px !important;
        }
        &:hover p{
          border-radius:20px !important;
          color: rgba(255, 255, 255, 1);
        }
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        &:hover p{
          border-radius:20px !important;
          color: rgba(255, 255, 255, 1);
        }
        .postcard__bar {
          width: 50px;
          height: 5px;
          /* margin: 10px 0; */
          border-radius: 5px;
          background: rgb(2,0,36);
          background: linear-gradient(90deg, rgba(0,0,36,1) 0%, 	rgb(34,139,34) 35%, rgba(0, 255, 163, 1) 100%);
          transition: width 0.4s ease-in-out;
        }

        &:hover  .postcard__bar{
            width:100px; 
        }
      }
    }

    .row {
      &:nth-child(2) {
        .col-md-6 {
          .v2_roadmap_card_item_even {
            margin-top: 100px;
          }
        }
      }
    }
  }
  /* bg image  */
  .bithu_v2_roadmap_mass_gard {
    position: absolute;
    bottom: -400px;
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        display: none;
      }
      .v2_roadmap_card_item {
        margin: 0px;
        width: 100%;
        margin-bottom: 80px;
        &.v2_roadmap_card_item_even {
          margin-top: 0px;
        }
      }

      .row {
        &:nth-child(2) {
          .col-md-6 {
            .v2_roadmap_card_item_even {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
`;

export default RoadMapStyleWrapper;
