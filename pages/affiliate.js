import React, { Fragment } from "react";
import Head from "next/head";
import Affiliate from "@/containers/Affiliate";
function AffiliatePage() {
  return (
    <Fragment>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
        <title>{"Fin Gameon"}</title>
      </Head>
      <Affiliate />
    </Fragment>
  );
}

export default AffiliatePage;
