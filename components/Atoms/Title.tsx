import React from "react";

export type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title, ...props }) => {
  return (
    <title key="title" {...props}>
      {title}
    </title>
  );
};

export default Title;
