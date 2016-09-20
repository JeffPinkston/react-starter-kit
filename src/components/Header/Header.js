/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Link from '../Link';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo-small.png';
import s from './Header.css';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

function Header() {
  return (
<<<<<<< HEAD
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img src={logoUrl} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>
            <FormattedMessage {...messages.brand} />
          </span>
        </Link>
        <LanguageSwitcher />
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>
            <FormattedMessage {...messages.bannerTitle} />
          </h1>
          <FormattedMessage tagName="p" {...messages.bannerDesc} />
        </div>
      </div>
    </div>
=======
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className={s.brand} to="/">Your Company</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
>>>>>>> feature/bootstrap3
  );
}

export default injectIntl(withStyles(s)(Header));
