import React from "react";
import styled from "@emotion/styled";
import { media } from "@/utils/media";
import { useRouter } from "next/router";
import Template from "@/components/Template/DefaultTemplate";
import OpeningAnimCharacterCutin from "@/components/Organisms/OpeningAnimCharacterCutin";
import OpeningAnimPresentsLogo from "@/components/Organisms/OpeningAnimPresentsLogo";
import {
  Scenes,
  OpeningSceneContext,
  OpeningSceneContextValue,
} from "@/contexts/OpeningSceneContext";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000000;

  ${media({ orientation: "portrait" })} {
    flex-direction: column;
  }
`;

const Page: React.FC = () => {
  const router = useRouter();
  const [scene, setScene] = React.useState(Scenes.CharacterCutin);
  const openingSceneContextValue: OpeningSceneContextValue = {
    scene,
    setScene,
  };
  const EmptyElement: JSX.Element = React.useMemo(() => <></>, []);

  const SceneElement = ((): JSX.Element => {
    switch (scene) {
      case Scenes.CharacterCutin:
        return <OpeningAnimCharacterCutin />;
      case Scenes.PresentsLogo:
        return <OpeningAnimPresentsLogo />;
      default:
        return EmptyElement;
    }
  })();

  if (scene === Scenes.Finish) {
    router.push("/top");
  }

  return (
    <Template>
      <Background>
        <OpeningSceneContext.Provider value={openingSceneContextValue}>
          {SceneElement}
        </OpeningSceneContext.Provider>
      </Background>
    </Template>
  );
};

export default Page;
