import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1";
import Banner from "section/banner/v1";
import Counter from "section/counter";
import CharacterSlider from "section/characterSlider/v1";
import HowToMint from "section/howToMint/v1";
import About from "section/about/v1";
// import RoadMap from "section/roadMap/v1";
import RoadMap from "section/roadMap/v2";
import Team from "section/team/v2";
import FAQ from "section/faq/v2";
import Footer from "section/footer/v2";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";
import MintNowModalGallery from "common/modal/mintNowModalGallery";
export default function Home() {
  const { visibility, walletModalvisibility, galleryModal } = useModal();
  return (
    <Layout>
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      {galleryModal && <MintNowModalGallery />}
      <Header />
      <Banner />
      <Counter />
      <CharacterSlider />
      {/* <HowToMint /> */}
      <About />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </Layout>
  );
}
