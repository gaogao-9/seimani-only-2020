import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { media } from "@/utils/media";
import { useRouter } from "next/router";
import Template from "@/components/Template/DefaultTemplate";
import Title from "@/components/Atoms/Title";
import OpeningAnimCharacterCutin from "@/components/Organisms/OpeningAnimCharacterCutin";
import OpeningAnimPresentsLogo from "@/components/Organisms/OpeningAnimPresentsLogo";
import {
  OpeningScenes,
  OpeningSceneContext,
  useOpeningSceneContext,
} from "@/hooks/contexts/OpeningSceneContext";

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
  const openingSceneContextValue = useOpeningSceneContext(
    OpeningScenes.CharacterCutin,
  );
  const EmptyElement: JSX.Element = React.useMemo(() => <></>, []);

  const SceneElement = ((): JSX.Element => {
    switch (openingSceneContextValue.scene) {
      case OpeningScenes.CharacterCutin:
        return <OpeningAnimCharacterCutin />;
      case OpeningScenes.PresentsLogo:
        return <OpeningAnimPresentsLogo />;
      default:
        return EmptyElement;
    }
  })();

  React.useEffect(() => {
    if (openingSceneContextValue.scene === OpeningScenes.Finish) {
      router.push("/top");
    }
  }, [openingSceneContextValue.scene]);

  return (
    <Template>
      <Head>
        <Title />
      </Head>
      <Background>
        <OpeningSceneContext.Provider value={openingSceneContextValue}>
          {SceneElement}
        </OpeningSceneContext.Provider>
      </Background>
    </Template>
  );
};

export default Page;
