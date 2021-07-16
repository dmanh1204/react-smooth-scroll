import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  display: grid;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")}; */
  top: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  height: 500px;
  width: 100%;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled.li`
  color: #fff;
`;
