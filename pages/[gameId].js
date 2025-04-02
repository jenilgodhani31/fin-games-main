// pages/[gameId].js
import fs from "fs";
import path from "path";
import Head from "next/head";
import Game from "../containers/Game";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "data.json"); // Reading from public folder
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const paths = data.map((item) => ({
    params: { gameId: item.pathName }, // Assuming pathName is your identifier
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const item = data.find((item) => item.pathName === params.gameId);
  const otherGames = data.filter((game) => game.pathName !== params.gameId);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item,
      otherGames,
    },
  };
}

function GamePage({ item, otherGames }) {
  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
        <title>{item.name || "Fin Gameon"}</title>
      </Head>
      <Game item={item} otherGames={otherGames} />
    </>
  );
}

export default GamePage;
