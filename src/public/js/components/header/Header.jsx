import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {
  constructor() {
    super();
  }
  onSubmit = event => {
    event.preventDefault();
    alert('submit');
  };

  render() {
    return (
      <header className="header">
        <span className="header__logo">Rmail</span>
        <form className="header__search-form" onSubmit={this.onSubmit}>
          <Input fullWidth className="header__search-field" />
          <Button type="submit" variant="contained" color="primary">
            <SearchIcon />
          </Button>
        </form>
      </header>
    );
  }
}

export default Header;
