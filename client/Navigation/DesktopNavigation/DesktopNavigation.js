import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuLink from './components/MenuLink';
import { navBarStyles, titleStyle1, titleStyle2, titleStyle3 } from './style';

const links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
]
const DesktopNavigation = () => (
  <Toolbar style={navBarStyles}>
    <ToolbarGroup>
      <ToolbarTitle text='Vjeverica Productions' style={titleStyle1} />
      <ToolbarTitle text='Shirley Johnson' style={titleStyle2} />
      <ToolbarTitle text='Accordion and Vocals' style={titleStyle3} />
    </ToolbarGroup>
    <ToolbarGroup>
      {links.map(({ link, label }) => (
        <MenuLink
          link={link}
          label={label}
        />
      ))}
    </ToolbarGroup>
  </Toolbar>
);

export default DesktopNavigation;
