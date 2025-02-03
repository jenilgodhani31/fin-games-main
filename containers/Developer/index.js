import Ads from "@/components/Ads";
import Layout from "@/components/common/Layout";
import React from "react";

function Developer() {
  return (
    <Layout>

      <div className=" pt-[50px] ">
        <div className="flex justify-center items-center w-full ">
          <div >
            <Ads
              data-ad-slot="2593442543"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
        </div>
        <div className="mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px] pt-[48px]">
          <img src="/gameImage/backgroundImage.png" />
        </div>

        <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
          <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
            {"Developers - Fin Games"}
          </h1>

          <div className="text-white  pt-5 text-[20px] ">
            {
              "Fin Games is a professional  game development studio focusing on games. We also offer services for games  applications, as well as responsive games. The Fin Games platform allows developers to upload their content directly within the website, publish it, track it, and even monetize it just like a normal website but with a huge difference. There is a good traffic on Fin Games.com where developer can get traffic easily and can monetize games."
            }
          </div>
        </div>

        <div className="pt-[48px] pb-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
          <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
            {"Contact Us and Join Now"}
          </h1>

          <div className="text-white  pt-[35px] text-[20px]  ">
            {
              "contact@fingames.com"
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Developer;
