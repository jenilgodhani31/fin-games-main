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
  // // Set the interval for 10 minutes (600,000ms)
  // const TEN_MINUTES = 1000;

  // useEffect(() => {
  //   setIsClient(true); // This ensures modal logic runs only on the client

  //   // Check localStorage for the last time the modal was opened
  //   const lastOpened = localStorage.getItem('modalLastOpened');
  //   const currentTime = Date.now();

  //   if (!lastOpened || currentTime - lastOpened >= TEN_MINUTES) {
  //     // If no time is stored, or it's been 10 minutes since the last modal open, show the modal
  //     setIsOpen(true);
  //     localStorage.setItem('modalLastOpened', currentTime); // Update last opened time
  //   }

  //   // Automatically open the modal every 10 minutes (600,000 ms)
  //   const interval = setInterval(() => {
  //     setIsOpen(true);
  //     localStorage.setItem('modalLastOpened', Date.now()); // Update last opened time
  //   }, TEN_MINUTES);

  //   // Cleanup interval on unmount
  //   return () => clearInterval(interval);
  // }, []);

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
          <Ads display={true} data-ad-slot="3246857708" />
        </Modal>
      )}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
