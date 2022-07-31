import Head from "next/head";
import GlobalStyles from "assets/styles/GlobalStyles";
import favIcon from "assets/images/fav_icon.ico";
import logo from "assets/images/icon/logo_pitbull.jpeg";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* meta tag*/}
        <meta charSet="utf-8" />
        <title>
          {" "}
          DiamondPitbullClub
        </title>
        <meta name="description" content="" />
        <link rel="shortcut icon" type="image/x-icon" href={logo.src} />
        {/* responsive tag */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>

      {/* global styles */}
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

export default Layout;
