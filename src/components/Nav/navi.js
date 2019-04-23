import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { layouts, themes } from "store/app/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faList } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Header,
  Spacer,
  NavSection,
  Content,
  Icon,
  Menus,
  Menu,
  ExternalLink
} from "./styles";

library.add(faMoon, faSun, faList);

const Nav = ({ layout, theme, setLayout, setTheme }) => (
  <div>
    <Header>
      <Content>
        <NavSection>
          <ExternalLink href="/" target="_blank">
            <span>❤️ cat Lover</span>
          </ExternalLink>
        </NavSection>
        <NavSection>
          <Menus>
            <Link to="/">
              <Menu>SEARCH</Menu>
            </Link>
            <Link to="/fav">
              <Menu>FAVOURITES</Menu>
            </Link>
          </Menus>
        </NavSection>
        <NavSection>
          {layout === layouts.list ? (
            <Icon onClick={() => setLayout(layouts.grid)}>
              <FontAwesomeIcon icon="list" />
            </Icon>
          ) : (
            <Icon onClick={() => setLayout(layouts.gallery)}>
              <FontAwesomeIcon icon="list" />
            </Icon>
          )}
          {theme === themes.light ? (
            <Icon onClick={() => setTheme(themes.dark)}>
              <FontAwesomeIcon icon="moon" />
            </Icon>
          ) : (
            <Icon onClick={() => setTheme(themes.light)}>
              <FontAwesomeIcon icon="sun" />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </div>
);

Nav.propTypes = {
  layout: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  setLayout: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
};

export default Nav;
