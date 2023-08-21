import React from "react";
import styled from "styled-components";
import Netflix from "../assets/netflixPage.png";
import ScrollPage from "../assets/scrolPage.png";
import LoginPage from "../assets/loginPage.png";
import NetflixAPP from "../assets/netflixPageo.png";
import PokeApp from "../assets/PokemonApp.png";
import MotyApp from "../assets/rickAndMorty.png";
import TimeApp from "../assets/TimeYou.png";
import { CardRot } from "../components/CardRot";

export const MyWorks = () => {
  return (
    <Container id="Mis Trabajos">
      <h1
        style={{
          fontSize: "35px",
          width: "100%",
          textAlign: "center",
          textDecoration: "underline",
          marginBottom: "20px",
        }}
      >
        Mis trabajos mas recientes
      </h1>
      <div className="content">
        <CardRot
          title={"Netflix Page"}
          overview={
            "Pagina de presentacion de una serie de netflix, realizada con HTML y CSS3"
          }
          image={Netflix}
          git={
            "https://github.com/CVazquezOpalka/proyectos-html-css/tree/main/10%20NetflixPage"
          }
          page={"https://netflixclonpagecv.netlify.app"}
        />
        <CardRot
          title={"Scroll Page"}
          overview={
            "Efecto de Scroll Trigger, realizado con HTML, CSS3 y Javascript"
          }
          image={ScrollPage}
          git={
            "https://github.com/CVazquezOpalka/proyectos-js/tree/main/13%20Page%20dragon%20ball"
          }
          page={"https://scrollpage-cv.netlify.app"}
        />
        <CardRot
          title={"Login Animate Page"}
          overview={
            "Efecto en pagina de Login y register, realizada con HTML,CSS3 y Javascript"
          }
          image={LoginPage}
          git={
            "https://github.com/CVazquezOpalka/proyectos-js/tree/main/14%20Login%20translate"
          }
          page={"https://registerandloginbycv.netlify.app"}
        />
        <CardRot
          title={"Clon de NETFLIX"}
          overview={
            "Tecnologias utilizadas en este Proyecto: Rect, Redux, Styled Components y Material UI"
          }
          image={NetflixAPP}
          git={"https://github.com/CVazquezOpalka/netflix-clon-con-react"}
          page={"https://clon-netflix-cv.netlify.app"}
        />
        <CardRot
          title={"POKEDEX"}
          overview={
            "Tecnologias utilizadas en este proyecto: React, Redux, CSS modules, React-icons, LocalStorage"
          }
          image={PokeApp}
          git={"https://github.com/CVazquezOpalka/pi-pokemon-cristianvazquez"}
          page={"https://pokemonappbycv.netlify.app"}
        />
        <CardRot
          title={"Rick and Morty"}
          overview={"Tecnologias, react-redux, primer proyecto"}
          image={MotyApp}
          git={"https://github.com/CVazquezOpalka/rick-and-morty-redux"}
          page={"https://rickandmortyappcv.netlify.app/"}
        />
        <CardRot
          title={"TimeYou"}
          overview={
            "Tecnologias utilizadas en este proyecto: React, Redux, Styled Components, Argolia, Sweet Alert, Local Storage, Auth de terceros y local"
          }
          image={TimeApp}
          git={"https://github.com/CVazquezOpalka/timeyou-PF"}
          page={"https://timeyou.vercel.app/"}
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
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
  p {
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    height: auto;
    margin-top: 130px;
  }
`;
