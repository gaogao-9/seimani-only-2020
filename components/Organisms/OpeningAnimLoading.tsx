import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import {
  OpeningScenes,
  OpeningSceneContextValue,
  OpeningSceneContext,
} from "@/hooks/contexts/OpeningSceneContext";
import axios from "axios";

const Container = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const LoadingAnimation = keyframes`
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "...";
  }
`;

const Text = styled.span`
  line-height: 2.5;
  color: #ffffff;
  font-family: "Noto Serif JP", serif;
  font-size: 5vw;
  &:after {
    content: "";
    animation: ${LoadingAnimation} 2s steps(5) 0s infinite both;
  }
`;

const paths = [
  "/assets/img/op/chara01.png",
  "/assets/img/op/chara02.png",
  "/assets/img/top.jpg",
  "/assets/img/top2.jpg",
  "/assets/img/top_sp.jpg",
  "/assets/img/top2_sp.jpg",
  "/assets/img/bg.jpg",
  "/assets/img/gear.png",
];

const AnimLoading: React.FC = () => {
  const [loadedCount, setLoadedCount] = React.useState(0);
  const { setScene }: OpeningSceneContextValue = React.useContext(
    OpeningSceneContext,
  );
  React.useEffect(() => {
    for (const path of paths) {
      axios
        .get(path)
        .then(() => setLoadedCount(cnt => cnt + 1))
        .catch(err => console.error(err));
    }

    new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => setLoadedCount(cnt => cnt + 1));
  }, []);

  React.useEffect(() => {
    if (!loadedCount) return;

    setScene(OpeningScenes.CharacterCutin);
  }, [loadedCount === paths.length + 1]);

  return (
    <Container>
      <Text>Loading</Text>
    </Container>
  );
};

export default AnimLoading;
