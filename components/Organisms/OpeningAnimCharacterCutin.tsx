import React from "react";
import styled from "@emotion/styled";
import { media } from "@/utils/media";
import { keyframes } from "@emotion/core";
import {
  Scenes,
  OpeningSceneContextValue,
  OpeningSceneContext,
} from "@/contexts/OpeningSceneContext";

const BrandishAnimation = (
  orientation: "landscape" | "portrait",
): ReturnType<typeof keyframes> =>
  orientation === "portrait"
    ? keyframes`
      from {
        width: 1px;
        height: 0px;
      }
      to {
        width: 1px;
        height: 100vh;
      }
    `
    : keyframes`
      from {
        width: 0px;
        height: 1px;
      }
      to {
        width: 100vw;
        height: 1px;
      }
    `;

const WaveAnimation = keyframes`
  from {
    transform-origin: left;
    transform: scaleX(0);
  }
  15% {
    transform-origin: left;
    transform: scaleX(1);
  }
  85% {
    transform-origin: right;
    transform: scaleX(1);
  }
  to {
    transform-origin: right;
    transform: scaleX(0);
  }
`;

const Line = styled.div`
  flex: none;
  width: 0px;
  height: 0px;
  background-color: #ffffff;
  transform-origin: center;
`;

const VerticalLine = styled(Line)`
  animation: ${BrandishAnimation("landscape")} 0.8s ease 1s 1 forwards,
    ${BrandishAnimation("landscape")} 0.8s ease 6.2s 1 forwards reverse;

  ${media({ orientation: "landscape" })} {
    position: absolute;
    visibility: hidden;
  }
`;

const HorizontalLine = styled(Line)`
  animation: ${BrandishAnimation("portrait")} 0.8s ease 1s 1 forwards,
    ${BrandishAnimation("portrait")} 0.8s ease 6.2s 1 forwards reverse;

  ${media({ orientation: "portrait" })} {
    position: absolute;
    visibility: hidden;
  }
`;

const Container = styled.div`
  flex: auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const WhiteBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const LeftWhiteBg = styled(WhiteBg)`
  animation: ${WaveAnimation} 3s ease 1s 1 both;
`;

const RightWhiteBg = styled(WhiteBg)`
  animation: ${WaveAnimation} 3s ease 4s 1 both reverse;
`;

const CharacterOpacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  70% {
    opacity: 0.8
  }
  80% {
    opacity: 0.4
  }
  to {
    opacity: 1;
  }
`;

const CharacterPositionAnimation = keyframes`
  from {
    background-position: center 100%;
  }
  to {
    background-position: center 50%;
  }
`;

const CharacterBlurAnimation = keyframes`
  from, to {
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }
  20% {
    transform: translate3d(-2px, -2px, 0);
    filter: blur(3px);
  }
  40% {
    transform: translate3d(2px, 2px, 0);
    filter: blur(3px);
  }
  60% {
    transform: translate3d(0px, 2px, 0);
    filter: blur(5px);
  }
  80% {
    transform: translate3d(-2px, 0px, 0);
    filter: blur(3px);
  }
`;

const FadeAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Character: React.FC = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset black 0px 0px 20px 20px;
  opacity: 0;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CharacterA = styled(Character)`
  background-image: url(/chara01.png);
  animation: ${CharacterOpacityAnimation} 2s ease 1s 1 both,
    ${CharacterBlurAnimation} 3s linear 1s 1 both,
    ${CharacterPositionAnimation} 3s ease 1s 1 both,
    ${FadeAnimation} 0.4s ease 3.6s 1 forwards;
`;

const CharacterB = styled(Character)`
  background-image: url(/chara02.png);
  animation: ${CharacterOpacityAnimation} 2s ease 4s 1 both,
    ${CharacterBlurAnimation} 3s linear 4s 1 both reverse,
    ${CharacterPositionAnimation} 3s ease-in 4s 1 both reverse,
    ${FadeAnimation} 0.4s ease 6.6s 1 forwards;
`;

const Text: React.FC = styled.span`
  font-family: "Noto Serif JP", serif;
  font-size: 5vw;
`;

const AnimCharacterCutin: React.FC = () => {
  const { setScene }: OpeningSceneContextValue = React.useContext(
    OpeningSceneContext,
  );
  const onAnimationEnd: () => ReturnType<typeof setScene> = () =>
    setScene(Scenes.PresentsLogo);

  return (
    <>
      <Container>
        <CharacterB />
        <LeftWhiteBg>
          <Text>ここに素敵な</Text>
        </LeftWhiteBg>
      </Container>
      <VerticalLine />
      <HorizontalLine />
      <Container>
        <CharacterA />
        <RightWhiteBg onAnimationEnd={onAnimationEnd}>
          <Text>言葉が入る</Text>
        </RightWhiteBg>
      </Container>
    </>
  );
};

export default AnimCharacterCutin;
