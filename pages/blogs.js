import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header"; 
import PageHeader from "common/pageHeader";
import BlogList from "section/blog/blogList/BlogList";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3"; 
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Blogs() {
  const { visibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader /> 
      <BlogList />
      <CTA />
      <Footer />
    </Layout>
  );
}
