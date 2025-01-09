import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "./navlink.module.scss";

function NavLinks(props) {
  const { options } = props;
  const router = useRouter();

  const handleNavLinkClick = (path) => {
    router.push(path);
  };

  return (
    <Fragment>
      {options.map((link, index) => (
        <div
          key={index}
          className="nav text-black text-[19px] hover:text-color1 border-solid border-color1 hover:border-t-[1px] hover:border-b-[1px] font-inter"
          onClick={() => handleNavLinkClick(link.path)}
        >
          <span
            className={`tracking-wide cursor-pointer text hover:text-primary2 transition-all ${
              styles.underlineBlack
            } ${styles.underline} ${
              link.isSelected ? `text-primary2 ${styles.selectedUnderline}` : ""
            }`}
          >
            {link.text}
          </span>
        </div>
      ))}

    </Fragment>
  );
}

export default NavLinks;
NavLinks.propTypes = {
  options: PropTypes.array,
};

NavLinks.defaultProps = {
  options: [],
};
