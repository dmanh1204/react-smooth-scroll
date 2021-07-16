import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;
