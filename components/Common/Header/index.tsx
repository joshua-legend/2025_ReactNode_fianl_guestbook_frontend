"use client";

import React from "react";
import { HeaderContainer } from "./layout";
import NavLink from "./components/NavLink";
import Logo from "./components/Logo";
import { NAVIGATION_ITEMS } from "./constants";
import { useAuthStore } from "@/store/authStore";
import UserStatus from "./components/UserStatus";

const Header = () => {
  const { isAuthenticated, username, logout } = useAuthStore();
  return (
    <HeaderContainer>
      <Logo />
      <div className="flex items-center space-x-6">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.id} href={item.path}>
            {item.label}
          </NavLink>
        ))}
        {isAuthenticated ? <UserStatus name={username} onLogout={logout} /> : <NavLink href="/login">로그인</NavLink>}
      </div>
    </HeaderContainer>
  );
};

export default Header;
