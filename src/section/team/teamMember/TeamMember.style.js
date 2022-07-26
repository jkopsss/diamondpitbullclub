import styled from "styled-components";

const TeamMemberStyleWrapper = styled.article`
  .bithu_team_card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    max-width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity:0.9;
    transition: transform 0.5s, box-shadow 0.5s, opacity 0.5s;
    h3 {
      color: #ffffff;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-top: 28px;
      margin-bottom: 4px;
      transition: transform 0.5s, font-size 0.5s;
    }

    h4 {
      font-family: "Inter";
      font-style: normal;
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      transition: transform 0.5s;
    }
    .team_member_img{
      text-align:center;
    }
    .team_member_img img{
      max-width: 55% !important;
      transition: transform 0.5s;
    }
    .hov_shape1 img, 
    .hov_shape2 img{
      transition: transform 0.5s;
    }
    &:hover {
      transform:scale(0.95) translateY(-10px);
      opacity:1;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      .team_member_img img{
        transform:scale(1.08);
      }
      h4,
      h3 {
        transform:perspective(30px) translateY(-7px);
   
      }
      .hov_shape1 img{
        transform:rotateZ(360deg);
      }
      .hov_shape2 img{
        transform:rotateZ(360deg);
      }
    }
  }

  .team_social_icon {
    width: 100%;
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 197px;
      width: 100%;
      margin: 0;
      padding: 0;

      li {
        height: 25px;
        width: 37px;
        background: #0f181d;
        opacity: 0;
        transition: 0.4s;
        a {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          width: 100%;
          color: #ffffff;
        }
      }
    }
  }

  .hover_shape {
    position: absolute;
    top: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;

    &.hov_shape1 {
      left: 10px;
    }

    &.hov_shape2 {
      right: 10px;
      transform: rotate(90deg);
    }
  }

  &:hover {
    .hover_shape {
      opacity: 1;
      visibility: visible;
    }

    &:hover {
      .team_social_icon {
        ul {
          li {
            opacity: 1;
          }
        }
      }
    }
  }



  @media only screen and (max-width: 991px) {
    .bithu_team_card {
      h3 {
        font-size: 18px;
        line-height: 28px;
      }
      .team_member_img{
      text-align:center;
    }
    .team_member_img img{
      max-width: 32% !important;
    }
    }
  }
`;

export default TeamMemberStyleWrapper;
