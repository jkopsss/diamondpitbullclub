import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useModal } from "utils/ModalContext";
import MobileMenuStyleWrapper from "./MobileMenu.style";
import Button from "common/button";
import logo from "assets/images/icon/logo_diamond_pitbull_scontornato.png";
import openseaIcon from "assets/images/icon/opensea.svg";
import data from "assets/data/menu/menuData";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { menus, subMenus } = data;
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
        <img src={logo.src} alt="bithu nft logo" style={{maxWidth: "52%"}}/>
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            {menus?.map((menu, i) => (
              <li key={i} className="mobile_menu_hide">
                <Link href={menu.url}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            ))}
            {/* <li className="submenu mobile_submenu" onClick={handleSubmenu}>
              <Link href="# ">
                <a>Pages +</a>
              </Link>
              <ul
                className={`sub_menu_list mobile_sub_menu_list ${
                  isSubmenu === true && "submenu_hovered"
                }`}
              >
                {subMenus?.map((menu, i) => (
                  <li key={i} className="mobile_menu_hide">
                    <Link href={menu.url}>
                      <a>{menu.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <Link href="# ">
            <a>
              <Image src={openseaIcon} alt="bithu social icon" />
            </a>
          </Link>
          <Link href="# ">
            <a>
              <FaTwitter />
            </a>
          </Link>
          <Link href="# ">
            <a>
              <FaDiscord />
            </a>
          </Link>
        </div>
        {/* <Button
          sm
          variant="hovered"
          className="connect_btn"
          onClick={() => walletModalHandle()}
        >
          <FaWallet /> Connect
        </Button> */}
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
