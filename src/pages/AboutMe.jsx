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
            <h1 style={{ width: "100%", textAlign: "center" }}>
              Cristian Miguel Vazquez Opalka
            </h1>
            <h3>Full Stack Developer</h3>
            <p>
              Mi nombre es Cristian Miguel Vazquez Opalka, actualmente recibo
              del programa Buenos Aires codo a codo, m dedico a la maquetacion
              web, y a crear aplicaciones con el stack "PERN", espero que
              disfrutes mi contenido, en la seccion de{" "}
              <a href="#MyWorks">My Work</a> prodras ver alguno de los proyectos
              que eh desarrollado, sin embargo, sigo creando nuevos proyectos,
              para aumentar mi conocimiento.
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
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      h1 {
        font-family: "Rubik Dirt";
        font-size: 40px;
      }
      h3 {
        font-family: "Rubik Dirt";
        font-size: 20px;
      }
      p {
        width: 70%;
        margin: 0 auto;
        letter-spacing: 1px;
        font-size: 16px;
        a {
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 412px) {
    height: auto;
  }
`;
