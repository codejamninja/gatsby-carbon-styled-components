import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Link from './Link';

class StyledLink extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <Link {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledLink))``;
