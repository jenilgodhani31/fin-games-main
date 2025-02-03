import Ads from "@/components/Ads";
import Layout from "@/components/common/Layout";
import React from "react";

function Affiliate() {
  return (
    <Layout>
     
      <div className="flex pt-[50px] justify-center  ">

        <div className="flex flex-col gap-5 text-white pt-[88px]">
        <div className="flex justify-center items-center w-full">
          <div >
            <Ads
              data-ad-slot="2593442543"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
        </div>
          <h1 className="text-white md:w-[534px] text-center text-[36px] bg-primary3 p-[10px] rounded-[10px]">
            {"Affiliates Partner"}
          </h1>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              class="ContactUsInput bgUser"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="text"
              class="ContactUsInput bgUser"
              name="name"
              placeholder="Email Address"
            />
            <input
              type="text"
              class="ContactUsInput bgUser"
              name="name"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              class="ContactUsInput my-3"
              rows="5"
              placeholder="Enter Message"
            ></textarea>
            <button
              type="submit"
              className="cusBtn text-uppercase text-center mt-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"Affiliate Program- Fin Games"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "We welcomes web as well as  mobile apps developers to drive traffic to our website and start earning money through your traffic."
          }
        </div>
      </div>

      <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"We Welcomes"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "We have an extensive range of HTML5 games, optimized for both desktop and mobile devices. You can easily choose a few games or set up your own  gaming portal as you wish. We are working hard to make sure all your demands are met – especially in terms of content and marketing. We strive to make sure our partners get the best possible results."
          }
        </div>
      </div>

      <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"Contact Us and Join Now"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "contact@fingames.com"
          }
        </div>

        
      </div>

      <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"About Fin Games"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "Fin Games has a team of 25 people working on our gaming platform. Our mission is simple - to create a browser-gaming platform that works seamlessly for users around the world, and rewards developers both big and small."
          }
        </div>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "Our games are playable on desktop, tablet and mobile so you can enjoy them at school, at home or on the road. Every month millions of gamers from all over the world play their favorite games on Fin Games. Our goal is to create the ultimate online playground. Free and open to all."
          }
        </div>
        <div className="text-white  pt-5 text-[20px] ">
          {
            "We're a team of makers, techies, adventurers – and some gamers too. We’re kids of all ages, and love what we do."
          }
        </div>
        <div className="text-white  pt-5 text-[20px] ">
          {
            "Just load up your favorite games instantly in your web browser and enjoy the experience."
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  pb-[50px]">
          {
            "You can play our games on desktop mobile devices. That includes everything from desktop PCs, laptops, and Chromebooks, to the latest smartphones and tablets from Apple and Android."
          }
        </div>
      </div>
    </Layout>
  );
}

export default Affiliate;
