import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavBar from "@/components/Navbar";
import ScrollProgressBar from "../ScrollProgressBar";
import Modal from "@/components/modal";
import { FaPlayCircle } from "react-icons/fa";
import Ads from "../../Ads";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <Fragment>
      <NavBar />
      {children}
      <ScrollProgressBar />
      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className=" md:mt-[18px] mt-[20px]">

          <Ads display={true} data-ad-slot="3246857708" />
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
