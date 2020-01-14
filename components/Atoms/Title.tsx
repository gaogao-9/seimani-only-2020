import React from "react";

export type TitleProps = {
  subTitle?: string;
};

const Title: React.FC<TitleProps> = ({ subTitle }) => {
  const title = "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント";
  const fullTitle = subTitle ? `${title} - ${subTitle}` : title;

  return <title>{fullTitle}</title>;
};

export default Title;
