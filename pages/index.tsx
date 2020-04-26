import React from "react";
import { useRouter } from "next/router";
import Template from "@/components/Template/DefaultTemplate";

const Page: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/top");
  }, []);

  return (
    <Template>
      <></>
    </Template>
  );
};

export default Page;
