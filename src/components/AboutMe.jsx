import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero.png";

export const AboutMe = () => {
  return (
    <Container id="AboutMe">
      <div className="section">
        <div className="content">
          <picture>
            <img src={HeroImage} alt="Logo de la imagen" />
          </picture>
          <div className="contentBottom">
            <h1>Cristian Miguel Vazquez Opalka</h1>
            <h3>Full Stack Developer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ab
              debitis ad voluptas, deserunt et? Pariatur accusantium quos vero
              at. Suscipit non minus debitis in eum quo enim eveniet
              consequatur.Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Fugit ab debitis ad voluptas, deserunt et? Pariatur
              accusantium quos vero at. Suscipit non minus debitis in eum quo
              enim eveniet consequatur.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fugit ab debitis ad voluptas, deserunt et?
              Pariatur accusantium quos vero at. Suscipit non minus debitis in
              eum quo enim eveniet consequatur.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  transition: 0.5s ease;
  .section {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      picture {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid black;
        margin-top: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .contentBottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      h1 {
        font-family: "Rubik Dirt";
        font-size: 40px;
      }
      h3 {
        font-family: "Rubik Dirt";
        font-size: 20px;
      }
      p {
        margin: 0 30px;
      }
    }
  }
`;
