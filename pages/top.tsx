import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import StarParticles from "@/components/Atoms/StarParticles";

const Wrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Page: React.FC = () => {
  const [topImageSrc, setTopImageSrc] = React.useState("/assets/img/top.jpg");
  const [twitterScriptSrc, setTwitterScriptSrc] = React.useState("");
  React.useEffect(() => {
    setTwitterScriptSrc("https://platform.twitter.com/widgets.js");
  }, []);

  const TwitterScriptElement = twitterScriptSrc ? (
    <script key="twitterScript" src={twitterScriptSrc} />
  ) : (
    <></>
  );

  const onImageEnter = React.useCallback(() => {
    setTopImageSrc("/assets/img/top2.jpg");
  }, []);

  const onImageLeave = React.useCallback(() => {
    setTopImageSrc("/assets/img/top.jpg");
  }, []);

  return (
    <>
      <Head>{TwitterScriptElement}</Head>
      <Template>
        <Wrapper>
          <Grid container justify="space-around" alignItems="center">
            <Grid item xs={11} lg={8} xl={9}>
              <StyledImage
                src={topImageSrc}
                onPointerEnter={onImageEnter}
                onPointerLeave={onImageLeave}
              />
            </Grid>
            <Grid
              container
              item
              xs={9}
              lg={3}
              xl={2}
              justify="center"
              alignItems="center"
            >
              <Grid container item xs={12} justify="center">
                <a
                  data-size="large"
                  href="https://twitter.com/intent/tweet?text=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E5%90%8C%E4%BA%BA%E8%AA%8C%E5%8D%B3%E5%A3%B2%E4%BC%9A%20%E7%B7%8A%E6%80%A5%E4%BA%A4%E6%B5%81%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88&hashtags=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2,%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC&url=https%3A%2F%2Ffestia.moe%2F&ref_src=twsrc%5Etfw"
                  className="twitter-mention-button"
                  data-show-count="false"
                >
                  Tweet
                </a>
              </Grid>
              <Grid container item xs={10} lg={12} justify="center">
                <a
                  className="twitter-timeline"
                  data-height="500"
                  href="https://twitter.com/seimani_only?ref_src=twsrc%5Etfw"
                >
                  Tweets by seimani_only
                </a>
              </Grid>
            </Grid>
          </Grid>
          <StarParticles />
        </Wrapper>
      </Template>
    </>
  );
};

export default Page;
