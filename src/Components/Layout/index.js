import {NavLink, Outlet} from "react-router-dom";
import StyledLayout from "./style";

const Layout = () => {
  return (
    <>
      <StyledLayout/>
        <header>
          <NavLink to='/weather'>Погода</NavLink>
          <NavLink to='/table'>Таблица</NavLink>
          <NavLink to='/chart'>График</NavLink>
        </header>
        <main>


          <Outlet/>


        </main>
    </>
  );
};

export default Layout;