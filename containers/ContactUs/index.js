import Layout from "@/components/common/Layout";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import AppButton from "@/components/common/AppButton"
import { notify } from "../../components/common/Notify";

import Ads from "@/components/Ads";
function ContactUs() {
  const initialContactData = {
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  };

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState(initialContactData);

  const handleInputChange = (e, isPhoneInput = false) => {
    const { name, value } = e.target;
    const newValue = isPhoneInput ? value.replace(/[^0-9+\s-]/g, "") : value;

    setContactData({
      ...contactData,
      [name]: newValue,
    });
  };

  const isEmail = (email) => {
    // Email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const YOUR_SERVICE_ID = "service_n10d8z1";
  const YOUR_TEMPLATE_ID = "template_mjq33md";
  const YOUR_PUBLIC_KEY = "I_yhItZ_dWkauP0xS";

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = contactData;

    if (name && email && phoneNumber && message) {
      setIsLoading(true);
      if (isEmail(email)) {
        emailjs
          .sendForm(
            YOUR_SERVICE_ID,
            YOUR_TEMPLATE_ID,
            e.target,
            YOUR_PUBLIC_KEY
          )
          .then(
            (result) => {
              setContactData(initialContactData);
              notify.success("Your message has been sent successfully.");
            },
            (error) => {
              console.error("Error sending email:", error);
              notify.error("Something went wrong.");
            }
          )
          .finally(() => {
            setIsLoading(false); // Reset loading state regardless of success or failure
          });
      } else {
        notify.error("Invalid email address.");
        setIsLoading(false); // Reset loading state
      }
    } else {
      notify.error("Please fill in all the fields.");
      setIsLoading(false); // Reset loading state
    }
  }

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
            {"Contact Us"}
          </h1>
          <form ref={form} className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              class="ContactUsInput bgUser"
              name="name"
              id="name"
              value={contactData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              class="ContactUsInput bgUser"
              name="email"
              id="email"
              value={contactData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            <input
              class="ContactUsInput bgUser"
              type="tel"
              pattern="\+?\d{0,4}\d{10}"
              name="phoneNumber"
              value={contactData.phoneNumber}
              onChange={(e) => handleInputChange(e, true)}
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              class="ContactUsInput my-3"
              rows="5"
              id="message"
              value={contactData.message}
              onChange={handleInputChange}
              placeholder="Enter Message"
              required
            ></textarea>
            <AppButton
              isArrow
              isLoading={isLoading}
              buttonText={"Send Message"}
              type="secondary"
              variant="outline"
              className="ml-2 "
            />
          </form>
        </div>
      </div>

      <div className="pt-[88px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"Contact Us"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "contact@fingameon.com"
          }
        </div>
      </div>

      <div className="pt-[48px] mx-[15px] ls:mx-[20px] sm:mx-[20px] md:mx-[32px] lg:mx-[50px]">
        <h1 className="text-white text-[30px] bg-primary3 p-[10px] rounded-[10px] ">
          {"Copy Right Issue"}
        </h1>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "We own the Intellectual Property Rights (IPR) to a large number of the games on Fin Gameon’ sites, and for certain games, we requested and obtained licenses from the copyright holders known to us. For some games, we could not find any copyright information, or, due to general use on the internet, this information can no longer be obtained."
          }
        </div>

        <div className="text-white  pt-5 text-[20px] ">
          {
            "Some games may be used under special conditions, considering a number of prerequisite constraints. These prerequisite constraints are, as far as we could determine, met by Fin Gameon."
          }
        </div>
        <div className="text-white  pt-5 text-[20px] ">
          {
            "We're a team of makers, techies, adventurers – and some gamers too. We’re kids of all ages, and love what we do."
          }
        </div>
        <div className="text-white  pt-5 text-[20px] ">
          {
            "We do not change anything in the source code of the games. For example, credit holders, brand names, or references to websites remain unchanged. If any copyright or other IPR that you may have is possibly being infringed by/on Fin Gameon’ sites, please inform us immediately, thereby providing us with the following:"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "ii) a description of the IP Right that has been infringed, and a description of the infringing activity;"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "i) the electronic or physical signature of the owner of the IPR or the person authorized to act on the owner's behalf;"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "iii) the location where the unauthorized copy of the copyrighted work exists (for example, the URL of the Fin Gameon website where it is posted, or the name of the book in which it has been published, or, in case of a registered brand name, an excerpt of such register evidencing the registry);"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "iv) a copy of a license in which you are granted the right to use and to protect such IPR (if you are not the owner of the IPR);"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "v) the identification of the URL or other specific location on this site where the material that you claim is infringing is located; this information must be specific enough to enable us to locate such material;"
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "vi) your name and full contact details; and vii) a statement by you that you have a sincere and honest belief that the disputed use is not authorized by the copyright owner, its agent, or the law."
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  ">
          {
            "We fully respect the rights of copyright owners. If any issues arise, please don't hesitate to inform us, and we will resolve the matter promptly."
          }
        </div>
        <div className="text-white  pt-5 text-[20px]  pb-20">
          {
            "Send above details at contact@fingameon.com. We will review it and will start taking action on it as soon as possible. We will reply you on any of the query within 7 days."
          }
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
