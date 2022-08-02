import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavWrapper from "./Header.style";
import { useModal } from "utils/ModalContext";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "common/button";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "assets/images/icon/logo_diamond_pitbull_scontornato.png";
import data from "assets/data/menu/menuData";
const Header = () => {
  const { menus, subMenus } = data;
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);
  return (
    <NavWrapper className="bithu_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="bithu_menu_sect">
          <div className="bithu_menu_left_sect">
            <div className="logo">
              <Link href="/">
                <a style={{display:"flex",verticalAlign:"center"}}>
                  <img src={logo.src} alt="bithu nft logo" className="logo_img" style={{maxWidth: "52%"}}/>
                  <p className="titolo">Diamond<br />Pitbull Club</p>
                </a>
              </Link>
             
            </div>
          </div>
          <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
            <div className="bithu_menu_list">
              <ul>
                {menus?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.url}>
                      <a>{menu.title}</a>
                     </Link>
                    <div className={'postcard__bar'+menu.title}></div>
                  </li>
                ))}
                {/* <li className="submenu">
                  <Link href="# ">
                    <a>Pages +</a>
                  </Link>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      {subMenus?.map((menu, i) => (
                        <li key={i}>
                          <Link href={menu.url}>
                            <a>{menu.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="bithu_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <Button sm variant="blue" className="join_btn join_discord_btn button_style_menu" jDiscord={"join_btn"}>
                <FaDiscord /> Join
              </Button>
              {/* <Button sm variant="blue" className="join_discord_btn button_style_menu">
              {" "}
              <FaDiscord /> Join Discord
            </Button> */}
              {/* <Button
                sm
                variant="hovered"
                className="connect_btn"
                onClick={() => walletModalHandle()}
              >
                <FaWallet /> Connect
              </Button> */}
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
