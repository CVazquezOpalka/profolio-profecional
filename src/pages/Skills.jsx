import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import CSSl from "../assets/logoCss.png";
import HTMLl from "../assets/logoHtml.png";
import JSl from "../assets/logoJava.png";
import REACTl from "../assets/logoReact.png";
import REDUXl from "../assets/logoRedux.png";
import SASSl from "../assets/logoSass.png";
import NODEl from "../assets/nodeJs.png";
import EXPRESSl from "../assets/logoExpress.png";
import POSTGRESl from "../assets/logoPostgress.png";
import MATERIALl from "../assets/logoMaterial.png";
import BOOTSl from "../assets/logoBootstrap.png";
import FIREl from "../assets/logoFirebase.png";

export const Skills = () => {
  return (
    <Container id="Skills">
      <h1 style={{ textDecoration: "underline" }}>
        Mis habilidades en la programacion
      </h1>
      <div className="content">
        <Card title={"HTML"} image={HTMLl} score={5} />
        <Card title={"CSS"} image={CSSl} score={5} />
        <Card title={"JAVASCRIPT"} image={JSl} score={4} />
        <Card title={"SASS"} image={SASSl} score={4} />
        <Card title={"EXPRESS"} image={EXPRESSl} score={4} />
        <Card title={"REACT"} image={REACTl} score={5} />
        <Card title={"REDUX"} image={REDUXl} score={5} />
        <Card title={"NODE JS"} image={NODEl} score={4} />
        <Card title={"POSTGRESS"} image={POSTGRESl} score={4} />
        <Card title={"MATERIAL UI"} image={MATERIALl} score={4} />
        <Card title={"BOOTSTRAP"} image={BOOTSl} score={4} />
        <Card title={"FIREBASE"} image={FIREl} score={4} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 35px;
    font-family: "Rubik Dirt";
  }
  .content {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;
