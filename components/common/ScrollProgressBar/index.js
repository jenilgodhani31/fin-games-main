/* eslint-disable react/forbid-dom-props */
import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames";

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    const calculateScrollPercentage = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(percentage);
    };
    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      <div
        className={classNames(
          "fixed bottom-5 right-1 cursor-pointer pb-4 flex items-center justify-center transition-all duration-500 ease-in-out z-40",
          {
            "opacity-100 scale-100": isVisible,
            "opacity-0 scale-0": !isVisible,
          }
        )}
        onClick={scrollToTop}
      >
        <div
          className="relative w-[3rem] h-[3rem] m-2 rounded-[50%] overflow-hidden"
          style={{
            backgroundImage: `conic-gradient(#1e3b69 ${scrollPercentage}%, #e6e8ec 0)`,
          }}
        >
          <div className="flex p-[11px] justify-center items-center absolute top-1/2 left-1/2 transform text-primary2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ScrollProgressBar;
