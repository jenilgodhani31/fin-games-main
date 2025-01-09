import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavLinks from "../Navbar/NavLinks";
import ToggleMenu from "./ToggleMenu";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import classNames from "classnames";

function NavBar() {
  const router = useRouter();
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const navLinksData = [
    {
      text: "HOME",
      path: "/",
      isSelected: router.pathname.includes("/home"),
    },
    {
      text: "DEVELOPERS",
      path: "/developer",
      isSelected: router.pathname.includes("/developer"),
    },
    {
      text: "AFFILIATES",
      path: "/affiliate",
      isSelected: router.pathname.includes("/affiliate"),
    },
    {
      text: "CONTACT US",
      path: "/contactus",
      isSelected: router.pathname.includes("/contactus"),
    },
    {
      text: "ABOUT US",
      path: "/aboutus",
      isSelected: router.pathname.includes("/aboutus"),
    },
    {
      text: "PRIVACY-POLICY",
      path: "/privacy-policy",
      isSelected: router.pathname.includes("/privacy-policy"),
    },
  ];

  return (
    <Fragment>
      {/* Blue background */}
      
      <nav>
      <div className="absolute  w-full h-[80px] bg-color6 z-10"></div>

        <div
          className={classNames(
            "relative top-[40px] bg-white border-4 shadow-custom-purple border-color7 rounded-3xl py-4 max-w-[90%] mx-auto transition duration-300 ease-in-out z-30 px-4 md:px-12"
          )}
        >
          <div className="container relative z-50 px-2 py-[12px] mx-auto flex justify-between items-center">
            <div
              className="flex items-center font-semibold text-center cursor-pointer"
              onClick={() => {
                router.push("/");
                setIsOpen(false);
              }}
            >
              <img
                alt="logo"
                className="w-36 duration-1000 cursor-pointer"
                src="/gameImage/logo.png"
              />
            </div>
            <div className="flex items-center">
              {/* Mobile View - Toggle Button */}
              <div
                className="p-1 text-blue-900 rounded-lg lg:hidden"
                onClick={handleClick}
              >
                {isOpen ? (
                  <AiOutlineClose size={30} className="text-primary5" />
                ) : (
                  <CgMenuRightAlt size={30} className="text-primary5" />
                )}
              </div>

              {/* Desktop View Links */}
              <div className="hidden lg:flex items-center space-x-6">
                <NavLinks options={navLinksData} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[135px] right-0 w-full rounded-lg lg:hidden z-50 transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`${isOpen ? "h-[100vh]" : "h-0"} bg-transparent`}>
          <div className="overflow-auto shadow-xl">
            <ToggleMenu options={navLinksData} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;
