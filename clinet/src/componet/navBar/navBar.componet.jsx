import { Fragment } from "react";
import FilterPlayerSelect from "../FilterPlayer/filter-player.componet";
import SearchItem from "../search-item/searchItem.componet";
import styled from "styled-components";

// import {
//   NavigationContainer,
//   NavLinkContainer,
//   NavLink,
//   LogoContainer,
// } from "./navBar.style";
const NavigationContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.div`
  margin-left: 10px;
`;

// const SearchItem = styled.input`
//   padding: 5px;
//   border: 1px solid #ccc;
// `;

// const FilterPlayerSelect = styled.select`
//   padding: 5px;
//   border: 1px solid #ccc;
// `;

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
