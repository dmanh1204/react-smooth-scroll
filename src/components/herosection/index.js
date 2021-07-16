import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeader,
  HeroParagraph,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";
const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(!isHover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroHeader>Virtual Banking Made Easy</HeroHeader>
          <HeroParagraph>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroParagraph>
          <HeroBtnWrapper>
            <Button
              primary={true}
              big={true}
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get started {isHover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
