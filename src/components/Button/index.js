import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Button from './Button';

class StyledButton extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <Button {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledButton))``;
