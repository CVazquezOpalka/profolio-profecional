import React from "react";
import styled from "styled-components";
import { FormContact } from "../components/FormContact";

export const Touch = () => {
  return (
    <Container id="Touch">
      <h1
        style={{
          fontSize: "35px",
          width: "100%",
          textAlign: "center",
          fontFamily: "Rubik dirt",
          textDecoration: "underline",
          marginBottom: "30px",
        }}
      >
        Hablemos
      </h1>
      <FormContact />
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
