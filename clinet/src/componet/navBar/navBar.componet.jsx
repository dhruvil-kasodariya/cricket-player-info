import { Fragment } from "react";
import FilterPlayerSelect from "../FilterPlayer/filter-player.componet";
import SearchItem from "../search-item/searchItem.componet";
import {
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navBar.style";

const NavBar = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/"></LogoContainer>
        <h1>CricPlayerSpotlight</h1>
        <NavLinkContainer>
          <NavLink>
            <SearchItem />
          </NavLink>
          <NavLink>
            <FilterPlayerSelect />
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>
    </Fragment>
  );
};

export default NavBar;
