import Ads from "@/components/Ads";
import Layout from "@/components/common/Layout";
import React from "react";

function AboutUs() {
  return (
    <Layout>
     
      <div className=" pt-[50px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
      <div className="flex justify-center items-center w-full">
          <div>
          <Ads
              data-ad-slot="2593442543"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
        </div>
        <div className="pt-[48px]">
          <div className="text-white text-[36px] text bg-primary3 p-[10px] rounded-[10px] ">
            {"Free Online Games - Play Now On Fin Gameon"}
          </div>

          <div className="text-white  pt-5 text-[20px] ">
            {
              "Fin Gameon features the latest and best free online games. We offer instant play to all our games without downloads, login, popups or other distractions. You can enjoy playing fun games without interruptions from downloads or pop-ups."
            }
          </div>
          <div className="text-white  pt-5 text-[20px] ">
            {
              "Fin Gameon has the best free online games selection and offers the most fun experience to play alone or with friends."
            }
          </div>
        </div>

        <div className="pt-[48px] pb-[48px]">
          <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
            {"About Fin Gameon"}
          </h1>

          <div className="text-white  pt-[35px] text-[20px] ">
            {"Fin Gameon has a team of 25 people working on our gaming platform. Our mission is simple - to create a browser-gaming platform that works seamlessly for users around the world, and rewards developers both big and small."}
          </div>
          <div className="text-white  pt-[35px] text-[20px] ">
            {"Our games are playable on desktop, tablet and mobile so you can enjoy them at school, at home or on the road. Every month millions of gamers from all over the world play their favorite games on Fin Gameon. Our goal is to create the ultimate online playground. Free and open to all."}
          </div>
          <div className="text-white  pt-[35px] text-[20px] ">
            {"We're a team of makers, techies, adventurers – and some gamers too. We’re kids of all ages, and love what we do."}
          </div>
          <div className="text-white  pt-[35px] text-[20px] ">
            {"Just load up your favorite games instantly in your web browser and enjoy the experience."}
          </div>
          <div className="text-white  pt-[35px] text-[20px]  pb-20">
            {"You can play our games on desktop mobile devices. That includes everything from desktop PCs, laptops, and Chromebooks, to the latest smartphones and tablets from Apple and Android."}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
