import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  border-radius: 50px;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
