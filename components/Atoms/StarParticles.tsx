import React from "react";
import styled from "@emotion/styled";
import Particles, { MoveDirection, OutMode } from "react-particles-js";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

const StarParticles: React.FC = () => (
  <Wrapper>
    <Particles
      params={{
        particles: {
          number: {
            value: 24,
            density: {
              enable: true,
              value_area: 800, // eslint-disable-line @typescript-eslint/camelcase
            },
          },
          color: {
            value: "#d8d8e3",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#d8d8e3",
            },
            polygon: {
              nb_sides: 5, // eslint-disable-line @typescript-eslint/camelcase
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1, // eslint-disable-line @typescript-eslint/camelcase
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              size_min: 1, // eslint-disable-line @typescript-eslint/camelcase
              enable: false,
              speed: 20,
              sync: false,
            },
          },
          // eslint-disable-next-line @typescript-eslint/camelcase
          line_linked: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 5,
            direction: MoveDirection.none,
            random: false,
            straight: false,
            out_mode: OutMode.bounce, // eslint-disable-line @typescript-eslint/camelcase
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
      }}
    />
  </Wrapper>
);

export default StarParticles;
