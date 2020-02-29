import React from "react";
import { useRouter } from "next/router";

const Page: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/top");
  }, []);

  return <></>;
};

export default Page;
