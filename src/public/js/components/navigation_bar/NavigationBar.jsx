import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import NavigationList from './NavigationList';

class NavigationBar extends Component {
  constructor() {
    super();
  }
  onCompose = event => {
    event.preventDefault();
    alert('You are composing');
  };

  render() {
    return (
      <aside className="navigation-bar">
        <Button
          className="navigation-bar__compose-button"
          variant="contained"
          color="secondary"
          onClick={this.onCompose}
        >
          Compose
        </Button>
        <NavigationList />
      </aside>
    );
  }
}

export default NavigationBar;
