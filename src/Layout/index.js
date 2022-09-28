import {NavLink, Outlet} from "react-router-dom";
import StyledLayout from "./style";

const Layout = () => {
  return (
    <>
      <StyledLayout/>
        <header>
          <NavLink to='/weather'>Weather</NavLink>
          <NavLink to='/table'>Table</NavLink>
          <NavLink to='/chart'>Chart</NavLink>
        </header>
        <main>


          <Outlet/>


        </main>
    </>
  );
};

export default Layout;