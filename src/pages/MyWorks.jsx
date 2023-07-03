import React from "react";
import styled from "styled-components";
import Netflix from "../assets/netflixPage.png";
import ScrollPage from "../assets/scrolPage.png";
import LoginPage from "../assets/loginPage.png";
import NetflixAPP from "../assets/netflixPageo.png";
import PokeApp from "../assets/PokemonApp.png";
import MotyApp from "../assets/rickAndMorty.png";
import { CardRot } from "../components/CardRot";

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
        <CardRot
          title={"Scroll Page"}
          overview={"Simulando efectos de Scroll"}
          image={ScrollPage}
          git={
            "https://github.com/CVazquezOpalka/proyectos-js/tree/main/13%20Page%20dragon%20ball"
          }
          page={"https://scrollpage-cv.netlify.app"}
        />
        <CardRot
          title={"Login Animate Page"}
          overview={"Efectos de Login y Register"}
          image={LoginPage}
          git={
            "https://github.com/CVazquezOpalka/proyectos-js/tree/main/14%20Login%20translate"
          }
          page={"https://registerandloginbycv.netlify.app"}
        />
        <CardRot
          title={"Clon de NETFLIX"}
          overview={"Tecnologias, react-redux, en proceso"}
          image={NetflixAPP}
          git={"none"}
          page={"none"}
        />
        <CardRot
          title={"POKEDEX"}
          overview={"Tecnologias, react-redux, en proceso de deploy"}
          image={PokeApp}
          git={"https://github.com/CVazquezOpalka/pi-pokemon-cristianvazquez"}
          page={"https://pokedexapp-cv.netlify.app/"}
        />
        <CardRot
          title={"Rick and Morty"}
          overview={"Tecnologias, react-redux, primer proyecto"}
          image={MotyApp}
          git={"https://github.com/CVazquezOpalka/rick-and-morty-redux"}
          page={"https://rickandmortyappcv.netlify.app/"}
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: auto;
  margin: 10px auto;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
