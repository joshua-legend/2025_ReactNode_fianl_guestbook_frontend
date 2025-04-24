import React from "react";
import { HeaderContainer } from "./layout";
import NavLink from "./components/NavLink";
import Logo from "./components/Logo";
import { NAVIGATION_ITEMS } from "./constants";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div className="flex items-center space-x-6">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.id} href={item.path}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </HeaderContainer>
  );
};

export default Header;
