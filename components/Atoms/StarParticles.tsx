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
            value: ["#ffefaa", "#afaaff", "#aaffc3", "#f9aaff", "#ffc3aa"],
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#72594b",
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
            value: 15,
            random: true,
            anim: {
              size_min: 3, // eslint-disable-line @typescript-eslint/camelcase
              enable: false,
              speed: 20,
              sync: false,
            },
          },
          // eslint-disable-next-line @typescript-eslint/camelcase
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3,
            direction: MoveDirection.bottom,
            random: false,
            straight: false,
            out_mode: OutMode.out, // eslint-disable-line @typescript-eslint/camelcase
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
