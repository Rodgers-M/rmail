import React from 'react';
import { Link } from 'react-router-dom';

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

export default NavgationListItem;
