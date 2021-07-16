import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="service">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
