import React from 'react';

import PropTypes from 'prop-types';
import Image from './Image';
import Links from './links/Links';

const Header = ({ className }) => (
  <header className={className}>
    <Links className="flex items-center sm:flex-row flex-col" />
    <Image className="md:visible h-24 w-full bg-no-repeat bg-cover bg-center mt-5" />
  </header>
);

Header.defaultProps = {
  className: "",
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;