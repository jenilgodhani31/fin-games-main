// containers/Game.js
import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/common/Layout";
import Ads from "../../components/Ads";
function Game({ item, otherGames }) {
  // Accepting item and otherGames as props
  const router = useRouter();
  return (
    <Layout>
      <div className="flex justify-center text-white pt-[100px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[65px]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center w-full">
            <div className="">
              <Ads display={true} data-ad-slot="3246857708" />
            </div>
          </div>

          <div className="text-center text-[36px]">
            Play online - {item.name}
          </div>
          <div className="relative gameArea border-dashed border-[2px] border-color3 ">
            <img
              src={item.banner}
              className="bg-color4 opacity-50 w-full h-[400px] md:h-full"
              alt={`Banner for ${item.name}`} // Adding alt text for accessibility
            />
            <button
              onClick={() => router.push(item.playUrl)} // Redirect to play URL
              type="button"
              className="PlayBtn"
            >
              Play Game
            </button>
          </div>
          <div className="text-[20px] flex flex-col gap-5">
            {item.description?.map((desc, index) => (
              <div key={index}>{desc}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 ">
            {item.features?.map((feature, index) => (
              <div key={index}>{feature}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 ">
            {item.game_features?.map((gameFeature, index) => (
              <div key={index}>{gameFeature}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 ">
            {item.reasons_to_enjoy?.map((reason, index) => (
              <div key={index}>{reason}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 ls:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
            {item.tag?.map((tag, index) => (
              <div
                key={index}
                className="border-solid md:w-full border-borderColor1 border-[1.5px] text-[15px] rounded-[15px] px-[10px] py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other games section */}
      <div className="pb-14 pt-[20px]">
      <div className="flex justify-center items-center w-full">
            <div className="">
              <Ads display={true} data-ad-slot="3246857708" />
            </div>
          </div>
        <div className="grid grid-cols-2 ls:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[65px] pt-10">
          {otherGames?.map((game) => (
            <div
              key={game.id}
              className="MainHVR rounded-[32px] flex justify-center items-center group cursor-pointer"
              onClick={() => router.push(`/${game.pathName}`)} // Navigate to the selected game
            >
              <div className="DataName text-[16px] text-white">{game.name}</div>
              <div className="databg rounded-b-[33px]"></div>
              <img src={game.icon} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Game;
