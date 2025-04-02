import { GA4Initializer } from "@/components/common/gtag";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
          <GA4Initializer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
