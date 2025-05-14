"use client";

import React from "react";
import { HeaderContainer } from "./layout";
import NavLink from "./components/NavLink";
import Logo from "./components/Logo";
import { NAVIGATION_ITEMS } from "./constants";
import UserStatus from "./components/UserStatus";
import { useAuthStore } from "@/store/auth";
import { logout } from "@/apis/auth/logoutAPI";

const Header = () => {
  const { isAuthenticated, username, setAuthOff } = useAuthStore();
  const handleLogout = () => {
    setAuthOff();
    logout();
  };

  return (
    <HeaderContainer>
      <Logo />
      <div className="flex items-center space-x-6">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.id} href={item.path}>
            {item.label}
          </NavLink>
        ))}
        {isAuthenticated ? (
          <UserStatus name={username} onLogout={handleLogout} />
        ) : (
          <>
            <NavLink href="/login">로그인</NavLink>
            <NavLink href="/signup">회원가입</NavLink>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
