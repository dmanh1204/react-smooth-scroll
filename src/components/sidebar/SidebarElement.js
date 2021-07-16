import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
export const SidebarContainer = styled.div`
  position: fixed;
  display: grid;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
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
  flex-direction: column;
  background: #0d0d0d;
  height: 500px;
  width: 100%;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-auto-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkS)`
  border-radius: 50px;
  white-space: nowrap;
  background: #01bf71;
  padding: 16px 64px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  color: #010606;
  font-size: 16px;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;
