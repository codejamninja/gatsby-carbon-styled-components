import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import DropDown from './DropDown';

class StyledDropDown extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <DropDown {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledDropDown))``;
