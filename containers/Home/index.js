// containers/Home.js
import React from "react";
import Layout from "@/components/common/Layout";
import { useRouter } from "next/router";

function Home({ data }) { // Accept data as a prop
  const route = useRouter();

  function goToGame(item) {
    route.push({
      pathname: `/${item}`, // Navigate to the game page
    });
  }

  return (
    <Layout>
      <div className="pb-14 pt-[50px]">
        <div className="grid grid-cols-2 ls:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mx-[22px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[65px] pt-10">
          {data?.map((item) => ( // Use the passed data prop
            <div
              key={item.id}
              className="MainHVR rounded-[32px] flex justify-center items-center group cursor-pointer"
              onClick={() => goToGame(item.pathName)}
            >
              <div className="DataName text-[16px] text-white">
                {item.name}
              </div>
              <div className="databg rounded-b-[33px]"></div>
              <img src={item.icon} alt={`Icon for ${item.name}`} /> {/* Adding alt text for accessibility */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
