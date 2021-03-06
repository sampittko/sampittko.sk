import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../assets/img/icons/chevron.svg";

const Chevron = ({ back }) => (
  <Icon
    className={`fill-gray-700 dark:fill-gray-300 w-4 h-auto ${
      back ? "transform rotate-180 mr-3" : "ml-3"
    }`}
  />
);

Chevron.defaultProps = {
  back: false,
};

Chevron.propTypes = {
  back: PropTypes.bool,
};

export default Chevron;
