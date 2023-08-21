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
    <Container id="Habilidades">
      <h1 style={{ textDecoration: "underline" }}>
        Mis habilidades en la programación
      </h1>
      <div className="content">
        <Card title={"HTML"} image={HTMLl} />
        <Card title={"CSS"} image={CSSl} />
        <Card title={"JAVASCRIPT"} image={JSl} />
        <Card title={"SASS"} image={SASSl} />
        <Card title={"EXPRESS"} image={EXPRESSl} />
        <Card title={"REACT"} image={REACTl} />
        <Card title={"REDUX"} image={REDUXl} />
        <Card title={"NODE JS"} image={NODEl} />
        <Card title={"POSTGRESS"} image={POSTGRESl} />
        <Card title={"MATERIAL UI"} image={MATERIALl} />
        <Card title={"BOOTSTRAP"} image={BOOTSl} />
        <Card title={"FIREBASE"} image={FIREl} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3 ease-in-out;
  h1 {
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
    font-size: 30px;
  }
  .content {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 875px) {
    width: 100%;
    height: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 384px) {
    height: 1800px;
  }
`;
