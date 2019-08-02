import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InboxRowIcons from './InboxRowIcons';
import paths from '../../config/paths';

const InboxRow = ({ email }) => {
  const className = email.viewedAt
    ? 'inbox__table-row--viewed'
    : 'inbox__table-row';

  return (
    <TableRow className={className}>
      <TableCell className="inbox__table--cell">
        <InboxRowIcons isImportant={email.isImportant} emailId={email.id} />
      </TableCell>
      <TableCell className="inbox__table--cell">
        <Link className="link inbox__link" to={paths.email(email.id)}>
          {email.subject}
        </Link>
      </TableCell>
      <TableCell className="inbox__table--cell">
        <Link className="link inbox__link" to={paths.email(email.id)}>
          {email.body}
        </Link>
      </TableCell>
      <TableCell className="inbox__table--cell--bold">
        <Link className="link inbox__link" to={paths.email(email.id)}>
          {email.timestamp}
        </Link>
      </TableCell>
    </TableRow>
  );
};

InboxRow.propTypes = {
  email: PropTypes.shape({
    viewedAt: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isImportant: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default InboxRow;
