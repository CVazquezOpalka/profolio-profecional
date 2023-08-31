import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/heroN.png";
import CV from "../assets/CV-CristianVazquez.pdf";

export const AboutMe = () => {
  return (
    <Container id="Sobre mi">
      <div className="content">
        <picture>
          <img src={HeroImage} alt="Logo de la imagen" />
        </picture>
        <div className="contentBottom">
          <h1>
            Cristian Miguel Vazquez Opalka
          </h1>
          <h3>Full Stack Developer</h3>
          <p>
            Conocimientos en desarrollo de Front-End y Back-End, arquitectura de
            datos con React, React-Redux, express, Sequelize, PostgreSQL,
            frameworks de CSS como Bootstrap, Material UI, Material Desing,
            Tailwind CSS y Styled Components.
          </p>
          <Enlace href={CV} download="CV_Cristian_Vazquez.pdf">
            Descargar CV
          </Enlace>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  height: 75vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    overflow: hidden;
    .contentBottom {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      h1{
        width: 100%;
        font-size: 30px;
      }
      h3{
        width: 100%;
        font-size: 22px;
        font-weight: 500;
      }
    }
    picture {
      position: relative;
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
     width: 100%;
     height: 80%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
      picture{
        width: 280px;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
    
      }
      .contentBottom{
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
          width: 95%;
          text-align: center;
        }
        h3{
          width: 95%;
          text-align: center;
        }
        p{
         display: none;
        }
      }
    }
  }
`;

const Enlace = styled.a`
  padding: 10px 40px;
  background-color: rgb(22, 81, 230);
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: rgb(10, 36, 102);
  }
`;
