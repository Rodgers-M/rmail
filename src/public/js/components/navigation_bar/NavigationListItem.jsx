import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavgationListItem = ({ label, path, isSelected }) => {
  const linkClassName = isSelected
    ? 'navigation-bar__link--selected'
    : 'navigation-bar__link';

  return (
    <li className="navigation-bar__li">
      <Link className={linkClassName} to={path}>
        {label}
      </Link>
    </li>
  );
};

NavgationListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavgationListItem;
