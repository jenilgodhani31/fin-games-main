/* eslint-disable react/forbid-elements */
import React, { Fragment } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import PropTypes from "prop-types";
import classNames from "classnames";

function AppButton(props) {
  const {
    onClick,
    buttonText,
    className,
    isArrow,
    type,
    variant,
    formSubmit,
    isLoading,
  } = props;
  return (
    <button
      className={classNames(
        "flex items-center justify-center gap-1 border-2 border-solid rounded-full font-bold cursor-pointer",
        "transition-all hover:duration-500 duration-500 ease-in-out",
        {
          "text-primary1 border-primary1 hover:bg-primary1 hover:border-primary1 hover:text-primary4":
            type === "primary" && variant === "outline",
          "bg-primary1 border-primary1 text-primary4 hover:border-primary1 hover:text-primary1 hover:bg-transparent":
            type === "primary" && variant !== "outline",
          "text-primary2 border-primary2 hover:bg-primary3  hover:border-primary2 hover:text-primary4":
            type === "secondary" && variant === "outline",
          "bg-primary3 border-primary2 text-primary4 hover:border-primary2 rounded-xl hover:text-primary2 hover:bg-transparent":
            type === "secondary" && variant !== "outline",
          "text-primary4 border-primary4 hover:border-primary2 hover:text-primary2":
            type === "linear",
          "text-primary4 border-primary4 hover:bg-primary4 hover:text-primary1":
            type === "contained",
          "pr-2 pl-4 py-0.4": isArrow,
          "py-2 px-4": !isArrow,
        },
        className
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="py-1.5">
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              {"Loading..."}
            </span>
          </div>
        </div>
      ) : (
        <Fragment>
          {formSubmit === "submit" ? (
            <input type="submit" value={buttonText} />
          ) : (
            <span className="font-semibold">{buttonText}</span>
          )}
          {isArrow && <BsArrowRightShort size={40} />}
        </Fragment>
      )}
    </button>
  );
}
export default AppButton;
AppButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  isArrow: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
  formSubmit: PropTypes.string,
  isLoading: PropTypes.bool,
};
AppButton.defaultProps = {
  onClick: () => {},
  className: "",
  isArrow: false,
  type: "",
  variant: "",
  formSubmit: "",
  isLoading: false,
};
