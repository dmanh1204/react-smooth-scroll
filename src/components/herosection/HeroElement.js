import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 800px;
  background: #0c0c0c;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  display: flex;
  z-index: 3;
  padding: 8px 24px;
  flex-direction: column;
  max-width: 1200px;
  height: auto;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
`;

export const HeroHeader = styled.h1`
  font-size: 48px;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroParagraph = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
`;
