import React from "react";

export enum Scenes {
  Nothing,
  CharacterCutin,
  PresentsLogo,
  Finish,
}

export type OpeningSceneContextValue = {
  scene: Scenes;
  setScene: (scene: Scenes) => void;
};

export const OpeningSceneContext = React.createContext<
  OpeningSceneContextValue
>({
  scene: Scenes.Nothing,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setScene: () => {},
});
