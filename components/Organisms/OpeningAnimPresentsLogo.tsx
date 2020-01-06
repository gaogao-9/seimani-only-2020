import React, { useState } from "react";
import styled from "@emotion/styled";
import { media } from "@/utils/media";
import { keyframes } from "@emotion/core";
import {
  Scenes,
  OpeningSceneContextValue,
  OpeningSceneContext,
} from "@/contexts/OpeningSceneContext";

const Container = styled.div`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const FadeAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Text = styled.span`
  color: #ffffff;
  font-size: 5vw;
  animation: ${FadeAnimation} 1s ease 1s 1 both reverse,
    ${FadeAnimation} 1s ease 3s 1 forwards, nullAnimation 1s ease 4s 1 forwards;
`;

const AnimCharacterCutin: React.FC = () => {
  const [animationEndCount, setAnimationEndCount] = useState(0);
  const { setScene }: OpeningSceneContextValue = React.useContext(
    OpeningSceneContext,
  );
  const onAnimationEnd: () => ReturnType<
    typeof setScene
  > = React.useCallback(() => {
    setAnimationEndCount(animationEndCount + 1);
  }, [animationEndCount]);

  React.useEffect(() => {
    if (animationEndCount === 2) {
      setTimeout(() => setScene(Scenes.Finish), 500);
    }
  }, [Math.floor(animationEndCount / 2)]);

  return (
    <Container>
      <Text onAnimationEnd={onAnimationEnd}>Presented by 戦挙管理委員会</Text>
    </Container>
  );
};

export default AnimCharacterCutin;
