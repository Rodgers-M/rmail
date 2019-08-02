import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class InboxRowIcons extends Component {
  constructor() {
    super();
  }

  onClick() {
    // implementation should mark an email as important on the server
    alert(`set ${this.email.id} as important`);
  }

  render() {
    const { isImportant } = this.props;
    return (
      <div>
        <IconButton onClick={this.onClick}>
          {isImportant ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </div>
    );
  }
}

InboxRowIcons.defaultProps = {
  isImportant: false,
};

InboxRowIcons.propTypes = {
  isImportant: PropTypes.string,
};

export default InboxRowIcons;
