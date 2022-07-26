import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader";
import BlogDetails from "section/blog/blogDetails/BlogDetails";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import ShareModal from "common/modal//shareModal/ShareModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Blogs() {
  const { shareModalVisibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      {shareModalVisibility && <ShareModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <BlogDetails />
      <CTA />
      <Footer />
    </Layout>
  );
}
