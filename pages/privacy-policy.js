import React, { Fragment } from "react";
import Head from "next/head";
import PrivacyPolicy from "@/containers/PrivacyPolicy";
function PrivacyPolicyPage() {
  return (
    <Fragment>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
        <title>{"Fin Gameon"}</title>
      </Head>

      <PrivacyPolicy />
    </Fragment>
  );
}

export default PrivacyPolicyPage;
