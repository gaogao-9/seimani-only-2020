import React from "react";
import Head from "next/head";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import StarParticles from "@/components/Atoms/StarParticles";

const Wrapper = styled(Grid)`
  position: relative;
  z-index: 100;
`;

const BlurFadeinAnimation = keyframes`
  0% {
    opacity: 0;
    filter: blur(15px);
  }
  85% {
    opacity: 1;
    filter: blur(3px);
  }
  90% {
    opacity: 0;
    filter: blur(3px);
  }
  91% {
    opacity: 0;
    filter: blur(3px);
  }
  95% {
    opacity: 1;
    filter: blur(3px);
  }
  99% {
    opacity: 0;
    filter: blur(3px);
  }
  100% {
    opacity: 0;
    filter: blur(0px);
  }
`;

const FlayerFadeinAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const StyledBlurTopImage = styled.img`
  width: 100%;
  user-select: none;
  opacity: 1;
  animation: ${BlurFadeinAnimation} 2s linear 0.5s 1 both;
`;

const StyledTopImage = styled.img`
  width: 100%;
  user-select: none;
  opacity: 1;
  animation: ${FlayerFadeinAnimation} 0.3s linear 0s 1 both;
`;

const Page: React.FC = () => {
  const [
    blurTopImageAnimationEnded,
    setBlurTopImageAnimationEnded,
  ] = React.useState(false);
  const [imageAnimationEnded, setImageAnimationEnded] = React.useState(false);

  const TwitterButtonElement = imageAnimationEnded ? (
    <a
      data-size="large"
      href="https://twitter.com/intent/tweet?text=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E5%90%8C%E4%BA%BA%E8%AA%8C%E5%8D%B3%E5%A3%B2%E4%BC%9A&hashtags=%E6%94%BF%E5%89%A3%E3%83%9E%E3%83%8B%E3%83%95%E3%82%A7%E3%82%B9%E3%83%86%E3%82%A3%E3%82%A2,%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC&url=https%3A%2F%2Ffestia.moe%2F&ref_src=twsrc%5Etfw"
      className="twitter-mention-button"
      data-show-count="false"
    >
      Tweet
    </a>
  ) : (
    <></>
  );
  const TwitterListElement = imageAnimationEnded ? (
    <a
      className="twitter-timeline"
      data-height="500"
      href="https://twitter.com/seimani_only?ref_src=twsrc%5Etfw"
    >
      Tweets by seimani_only
    </a>
  ) : (
    <></>
  );
  const TwitterScriptElement = imageAnimationEnded ? (
    <script key="twitterScript" src="https://platform.twitter.com/widgets.js" />
  ) : (
    <></>
  );

  const StarParticleElement = imageAnimationEnded ? <StarParticles /> : <></>;

  const onBlurTopImageAnimationEnd = React.useCallback(() => {
    setBlurTopImageAnimationEnded(true);
  }, []);

  const onTopImageAnimationEnd = React.useCallback(() => {
    setImageAnimationEnded(true);
  }, []);

  return (
    <>
      <Head>
        {TwitterScriptElement}
        <link rel="preload" href="/assets/img/top.jpg" as="image" />
        <link rel="preload" href="/assets/img/top2.jpg" as="image" />
        <link rel="preload" href="/assets/img/top_sp.jpg" as="image" />
        <link rel="preload" href="/assets/img/top2_sp.jpg" as="image" />
      </Head>
      <Template>
        <Wrapper container justify="space-around" alignItems="center">
          <Grid item xs={11} lg={8} xl={9}>
            {!blurTopImageAnimationEnded ? (
              <picture>
                <source
                  media="(max-width:960px)"
                  srcSet="/assets/img/top_sp.jpg"
                />
                <StyledBlurTopImage
                  src="/assets/img/top.jpg"
                  onAnimationEnd={onBlurTopImageAnimationEnd}
                />
              </picture>
            ) : (
              <picture>
                <source
                  media="(max-width:960px)"
                  srcSet="/assets/img/top2_sp.jpg"
                />
                <StyledTopImage
                  src="/assets/img/top2.jpg"
                  onAnimationEnd={onTopImageAnimationEnd}
                />
              </picture>
            )}
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
              {TwitterButtonElement}
            </Grid>
            <Grid container item xs={10} lg={12} justify="center">
              {TwitterListElement}
            </Grid>
          </Grid>
        </Wrapper>
        {StarParticleElement}
      </Template>
    </>
  );
};

export default Page;
