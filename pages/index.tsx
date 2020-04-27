import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Template from "@/components/Template/DefaultTemplate";
import OpeningAnimBackground from "@/components/Atoms/OpeningAnimBackground";
import OpeningAnimLoading from "@/components/Organisms/OpeningAnimLoading";
import OpeningAnimCharacterCutin from "@/components/Organisms/OpeningAnimCharacterCutin";
import OpeningAnimPresentsLogo from "@/components/Organisms/OpeningAnimPresentsLogo";
import {
  OpeningScenes,
  OpeningSceneContext,
  useOpeningSceneContext,
} from "@/hooks/contexts/OpeningSceneContext";

const Page: React.FC = () => {
  const router = useRouter();
  const openingSceneContextValue = useOpeningSceneContext(
    OpeningScenes.Loading,
  );
  const EmptyElement: JSX.Element = React.useMemo(() => <></>, []);

  const SceneElement = ((): JSX.Element => {
    switch (openingSceneContextValue.scene) {
      case OpeningScenes.Loading:
        return <OpeningAnimLoading />;
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
    <>
      <Head>
        <link rel="preload" href="/assets/img/op/chara01.png" as="image" />
        <link rel="preload" href="/assets/img/op/chara02.png" as="image" />
      </Head>
      <Template>
        <OpeningAnimBackground>
          <OpeningSceneContext.Provider value={openingSceneContextValue}>
            {SceneElement}
          </OpeningSceneContext.Provider>
        </OpeningAnimBackground>
      </Template>
    </>
  );
};

export default Page;
