import styled from "styled-components";

const NavWrapper = styled.nav`
  z-index: 999;
  .titolo{
    font-family: "Bakbak One";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  &.bithu_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;
    border-radius:50px;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 1000;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }
  .postcard__barHome,
  .postcard__barAbout,
  .postcard__barRoadmap,
  .postcard__barTeam,
  .postcard__barFAQ{
          width: 0px;
          height: 5px;
          /* margin: 10px 0; */
          border-radius: 5px;
          background: rgb(2,0,36);
          background: linear-gradient(90deg, rgba(0,0,36,1) 0%, 	rgb(34,139,34) 35%, rgba(0, 255, 163, 1) 100%);
          transition: width 0.4s ease-in-out;
        }
  .bithu_menu_list ul li{
    transition: 0.4s ease-in-out;
    &:hover{
      transform:translateY(-5px);
      .postcard__barHome{
        width:43px; 
      }
      .postcard__barAbout{
        width:50px; 
      }
      .postcard__barRoadmap{
        width:73px; 
      }
      .postcard__barTeam{
        width:40px; 
      }

    .postcard__barFAQ{
      width:30px; 
      }
    }
  }
  .bithu_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bithu_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    .logo {
      a {
        display: inline-block;
      }
    }
  }

  .bithu_menu_right_sect {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .bithu_menu_list {
    margin-left: 65px;
    margin-right: 96px;
    max-width: 514px;
    min-width: 409px;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        cursor: pointer;

        a {
          font-family: "Bakbak One";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          a {
            color: #00ffa3;
          }
        }

        /* submenu */
        &.submenu {
          .sub_menu_sect {
            background: transparent;
            border-top: 50px solid transparent;
            position: absolute;
            top: -50px;
            left: -20px;
            width: 190px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;

            .sub_menu_list {
              padding: 15px 20px;
              background: #171f25;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              align-items: start;
              li {
                a {
                  font-family: "Bakbak One";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
                }

                &:hover {
                  a {
                    color: #00ffa3;
                  }
                }
              }
            }
          }

          &:hover {
            .sub_menu_sect {
              top: 7px;
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }
  .button_style_menu{
    transition:0.5s;
    width:60% !important;
    .hover-shape{
      display: none !important;
      opacity:0;
      
   
    }
    &:hover{
      border-radius:10px;
      transform:scale(1.05) translateY(-7px);
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     
      .hover-shape{
     
      opacity:0;
     
    }
   
    }
  }
  .bithu_menu_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    min-width: 284px;
    button {
      color: #ffffff;
      text-transform: uppercase;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
    }

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 20px;
      background: rgba(255, 255, 255, 0.2);

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    .bithu_menu_list {
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .bithu_menu_right_sect {
      justify-content: end;
    }
    .bithu_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .bithu_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .bithu_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .bithu_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }
  @media (min-width:599px) and (max-width: 768px) {
    .logo_img {
        max-width: 70% !important;
       
      }
  }
  @media only screen and (max-width: 575px) {
    .join_discord_btn {
        width: 46%;
        font-size: 14px;
      }
  }
  @media (max-width: 540px) {
    .bithu_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .bithu_menu_right_sect {
      width: 50%;
      .bithu_menu_right_sect {
        width: 50%;
      }
    }
  }
  @media (max-width: 425px) {
    .join_discord_btn {
        width: 180px;
        font-size: 14px;
      }
  }
`;

export default NavWrapper;
