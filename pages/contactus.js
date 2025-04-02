import React, { Fragment } from 'react'
import Head from "next/head";
import ContactUs from '@/containers/ContactUs';
function ContactUsPage() {
  return (
    <Fragment>
    <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
      <title>{"Fin Gameon"}</title>
    </Head>
    <div
    >
      <ContactUs/>
    </div>
  </Fragment>
  )
}

export default ContactUsPage
