import React from "react";

export enum OpeningScenes {
  Nothing,
  CharacterCutin,
  PresentsLogo,
  Finish,
}

export type OpeningSceneContextValue = {
  scene: OpeningScenes;
  setScene: (scene: OpeningScenes) => void;
};

export const OpeningSceneContext = React.createContext<
  OpeningSceneContextValue
>({
  scene: OpeningScenes.Nothing,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setScene: () => {},
});

export const useOpeningSceneContext = (
  initialValue = OpeningScenes.Nothing,
): OpeningSceneContextValue => {
  const [scene, setScene] = React.useState(initialValue);
  const openingSceneContextValue: OpeningSceneContextValue = {
    scene,
    setScene,
  };

  return openingSceneContextValue;
};
