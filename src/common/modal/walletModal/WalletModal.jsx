import Link from "next/link";
import { useModal } from "utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "assets/images/icon/MetaMask.svg";
import formatic from "assets/images/icon/Formatic.svg";
import trustWalletIcon from "assets/images/icon/Trust_Wallet.svg";
import walletConnect from "assets/images/icon/WalletConnect.svg";
const WalletModal = () => {
  const { walletModalHandle } = useModal();
  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <p>
                Please select a wallet to connect for start Minting your NFTs
              </p>
              <div className="wallet_list">
                <Link href="# ">
                  <a>
                    <img src={metamaskIcon.src} alt="Meta-mask-Image" />
                    MetaMask
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </Link>
                <Link href="# ">
                  <a>
                    <img src={formatic.src} alt="Coinbase-Image" />
                    Coinbase
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </Link>
                <Link href="# ">
                  <a>
                    <img src={trustWalletIcon.src} alt="Trust-Image" />
                    Trust Wallet
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </Link>
                <Link href="# ">
                  <a>
                    <img src={walletConnect.src} alt="Wallet-Image" />
                    WalletConnect
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <Link href="# ">
                  <a>Terms of Service</a>
                </Link>
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape.src} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape.src} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
