import styled from "styled-components";

const AboutCardStyleWrapper = styled.article`
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  min-height: 100% !important;
  padding: 35px;
  transition: transform .4s, box-shadow .4s, border-radius .4s;
  &:hover{
    transform: translateY(-20px);
    border-radius:15px !important;
    box-shadow: rgba(0, 255, 163, 0.4) 0px 2px, rgba(0, 255, 163, 0.3) 0px 4px, rgba(0, 255, 163, 0.2) 0px 8px, rgba(0, 255, 163, 0.1) 0px 10px, rgba(0, 255, 163, 0.05) 0px 12px;
    &::before {
      width: 100%;
      height: 100%;
      border-radius:15px !important;
      background-color: rgba(255, 255, 255, 0.10);
    }
    h3{
    color:#00ffa3 !important;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    content: "";
    transition: all 0.4s;
    z-index: -1;
  }
  h3 {
    font-family: "Bakbak One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;

    img {
      padding-right: 10px;
    }

    span {
      margin-right: 13px;
    }
  }

  p {
    max-width: 289px;
    padding-top: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 28px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    h3 {
      font-size: 20px;
      line-height: 40px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        max-width: 40px;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 27px;
    h3 {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    p {
      max-width: 100%;
    }
  }

  @media (max-width: 375px) {
    h3 {
      font-size: 20px;
      line-height: 40px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        max-width: 40px;
      }
    }
  }
`;

export default AboutCardStyleWrapper;
