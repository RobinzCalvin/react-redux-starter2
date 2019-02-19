import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { provideStyles, StylesProps } from './Header.style';

interface IProps {
  children?: React.ReactNode;
}

class Header extends React.PureComponent<IProps & StylesProps> {
  public render() {
    const { children, classes } = this.props;

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    );
  }
}

export { IProps };
export default provideStyles(Header);
