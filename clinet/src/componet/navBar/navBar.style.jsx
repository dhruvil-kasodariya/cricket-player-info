import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const LogoContainer = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.div`
  margin-right: 10px;
`;

export const SearchItem = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
`;

export const FilterPlayerSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
`;

// export export const NavigationContainer = styled.div`
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   h1 {
//     justify-content: center;
//     align-items: center;
//     font-family: "Sedgwick Ave Display";
//   }
// `;

// export export const LogoContainer = styled(Link)`
//   height: 100%;
//   width: 70px;
//   padding: 25px;
// `;

// export export const NavLinkContainer = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export export const NavLink = styled(Link)`
//   padding: 10px 15px;
//   cursor: pointer;
// `;
