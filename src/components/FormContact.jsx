import React, { useState } from "react";
import styled from "styled-components";

export const FormContact = () => {
  const formInitialDetail = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    message: "",
  };

  const [formDetail, setFormDetail] = useState(formInitialDetail);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  return (
    <Container>
      <div className="inputs_name">
        <div className="name_title">
          <label htmlFor="text">Apellido y Nombre:</label>
        </div>
        <div className="input_name">
          <input type="text" placeholder="ingrese su nombre completo..." />
        </div>
      </div>
      <div className="inputs_email">
        <div className="email_title">
          <label htmlFor="text">Correo electronico:</label>
        </div>
        <div className="input_email">
          <input type="email" placeholder="ingrese su correo electronico..." />
        </div>
      </div>
      <div className="inputs_text">
        <div className="text_start">
          <h4>Deje su mensaje:</h4>
        </div>
        <div className="text_area">
          <textarea
            name="comentario"
            id=""
            cols="50"
            rows="7"
            placeholder="ingrese su mensaje..."
          ></textarea>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 70%;
  height: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 30px;
  border: 1px solid #333;
  overflow: hidden;
  .inputs_email,
  .inputs_name {
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .email_title,
    .name_title {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      label {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        font-family: "Rubik dirt";
        text-decoration: underline;
      }
    }
    .input_name,
    .input_email {
      width: 65%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #333;
        text-align: center;
      }
    }
  }
  .inputs_text {
    width: 70%;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .text_start {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: underline;
      h4 {
        font-size: 18px;
        font-weight: 600;
        font-family: "Rubik dirt";
      }
    }
    .text_area {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      text-align: center;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      textarea{
        border: none;
        outline: none;
      }
    }
  }
`;
