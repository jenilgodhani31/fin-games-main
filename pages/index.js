// pages/index.js
import fs from "fs";
import path from "path";
import Home from "../containers/Home";
import Head from "next/head";

// Fetch data at build time with getStaticProps using fs
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "data.json"); // Point to data.json in the public directory
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  // Return the fetched data as props
  return {
    props: {
      data, // Pass data to the Home component as props
    },
  };
}

export default function Homepage({ data }) {
  return (
    <>
      <Head>
        <title>{"Fin Gameon"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
      </Head>
      <div>
        <Home data={data} /> {/* Pass the fetched data to Home component */}
      </div>
    </>
  );
}
