import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, Fragment } from "react"
import ContextProvider from "../utils/ContextProvider";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <ContextProvider> 
      <Component {...pageProps} />
    </ContextProvider>
  );
}