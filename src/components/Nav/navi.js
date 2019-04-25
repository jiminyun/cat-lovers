import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { routes } from "store/app/utils";
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
  Route,
  ExternalLink
} from "./styles";

library.add(faMoon, faSun, faList);

const Nav = ({ layout, theme, setLayout, setTheme, currentRoute }) => (
  <div>
    <Header>
      <Content>
        <NavSection>
          <Menus>
            <Route current={currentRoute === routes.home}>
              <Link to="/">
                <Menu>SEARCH</Menu>
              </Link>
            </Route>
            <Route current={currentRoute === routes.favorite}>
              <Link to="/fav">
                <Menu>FAVOURITES</Menu>
              </Link>
            </Route>
          </Menus>
        </NavSection>
        <NavSection>
          {layout === layouts.grid ? (
            <Icon>
              {/* <Icon onClick={() => setLayout(layouts.slide)}> */}
              {/* <FontAwesomeIcon icon="list" /> */}
              {/* </Icon> */}
            </Icon>
          ) : (
            <Icon onClick={() => setLayout(layouts.grid)}>slide</Icon>
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

export default withRouter(Nav);
