import { GA4Initializer } from "@/components/common/gtag";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GA4Initializer/>
      <Component {...pageProps} />
    </Fragment>
  );
}
