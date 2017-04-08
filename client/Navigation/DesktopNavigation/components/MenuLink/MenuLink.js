// @flow

import React, { PureComponent } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import { labelStyle } from './style';

type MenuLinkProps = {
  link: string,
  label: string
};

type MenuLinkState = {
  active: boolean,
};

// const isSplashLink = (link: string): boolean => link === '/';

class MenuLink extends PureComponent {
  props: MenuLinkProps;
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    // console.log('got window location', Window.location);
  }

  render() {
    const { link, label } = this.props;
    return (
      <Link to={link}>
        <FlatButton
          disabled={this.state.active}
          label={label}
          labelStyle={labelStyle}
        />
      </Link>
    );
  }
}

export default MenuLink;
