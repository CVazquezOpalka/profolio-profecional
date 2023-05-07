import React from "react";
import styled from "styled-components";
import Netflix from "../assets/netflixPage.png";
import { CardRot } from "./CardRot";

export const MyWorks = () => {
  return (
    <Container id="MyWorks">
      <h1
        style={{
          fontSize: "35px",
          width: "100%",
          textAlign: "center",
          fontFamily: "Rubik dirt",
          textDecoration: "underline",
          marginBottom: "20px",
        }}
      >
        Mis trabajos mas recientes
      </h1>
      <div className="content">
        <CardRot
          title={"Netflix Page"}
          overview={"Pagina de detalle de una serie de netflix"}
          image={Netflix}
          git={
            "https://github.com/CVazquezOpalka/proyectos-html-css/tree/main/10%20NetflixPage"
          }
          page={"https://netflixclonpagecv.netlify.app"}
        />
        <CardRot />
        <CardRot />
        <CardRot />
        <CardRot />
        <CardRot />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: auto;
  margin: 20px auto;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
