import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [galleryModal, setModalvisibilityGallery] = useState(false);

  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };
  const MintNowModalGallery = () => {
    setModalvisibilityGallery(!galleryModal);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        walletModalHandle,
        MintNowModalGallery,
        walletModalvisibility,
        shareModalVisibility,
        galleryModal,
        shareModalHandle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
