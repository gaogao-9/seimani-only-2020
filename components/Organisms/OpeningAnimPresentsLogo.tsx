import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import {
  OpeningScenes,
  OpeningSceneContextValue,
  OpeningSceneContext,
} from "@/hooks/contexts/OpeningSceneContext";

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
  font-family: "Noto Serif JP", serif;
  font-size: 5vw;
  animation: ${FadeAnimation} 1s ease 1s 1 both reverse,
    ${FadeAnimation} 1s ease 3s 1 forwards;
`;

const AnimPresentsLogo: React.FC = () => {
  const [animationEndCount, setAnimationEndCount] = useState(0);
  const { setScene }: OpeningSceneContextValue = React.useContext(
    OpeningSceneContext,
  );
  const onAnimationEnd = React.useCallback(() => {
    setAnimationEndCount(animationEndCount + 1);
  }, [animationEndCount]);

  React.useEffect(() => {
    let timerId: number | null = null;

    if (animationEndCount === 2) {
      timerId = window.setTimeout(() => setScene(OpeningScenes.Finish), 500);
    }

    return (): void => {
      if (typeof timerId !== "number") return;

      clearTimeout(timerId);
    };
  }, [Math.floor(animationEndCount / 2)]);

  return (
    <Container>
      <Text onAnimationEnd={onAnimationEnd}>Presented by 戦挙管理委員会</Text>
    </Container>
  );
};

export default AnimPresentsLogo;
