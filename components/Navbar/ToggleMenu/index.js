import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";


function ToggleMenu(props) {
  const { options, setIsOpen } = props;
  const router = useRouter();

  const handleNavLinkClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 px-6 py-8 ml-[30px]   bg-white">
      <div className="flex flex-col gap-3 px-2 py-6 h-[92vh]  cursor-pointer text-xl font-bold tracking-wider text-primary1">
        {options.map((link, index) => (
          <div
            className={classNames({ "text-primary2 ": link.isSelected })}
            key={index}
            onClick={() => handleNavLinkClick(link.path)}
          >
            {link.text}
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default ToggleMenu;

ToggleMenu.propTypes = {
  setIsOpen: PropTypes.func,
  options: PropTypes.array,
};

ToggleMenu.defaultProps = {
  setIsOpen: () => {},
  options: [],
};
