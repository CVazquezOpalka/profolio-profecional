import React from "react";
import styled from "styled-components";
import {
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

export const Footer = () => {
  const phoneNumber = "+5493888314283";
  const emailAddress = "cristianvazquez.dev@gmail.com";
  const openWhatsApp = () => {
    window.open(`https://wa.me/5493888314283`);
  };

  return (
    <Container>
      <div className="content_box">
        <div className="datos">
          <h3>Contacto:</h3>
          <ul>
            <li onClick={() => openWhatsApp()}>
              <AiOutlineWhatsApp className="whatsap" />
              {phoneNumber}
            </li>
            <li className="email">
              <a href={`mailto:${emailAddress}`}>
                <MdAlternateEmail className="email" />
                {emailAddress}
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/CVazquezOpalka" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cristian-vazquez-48b30346/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 150px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
  .content_box {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .datos {
      width: 50%;
      height: auto;
      ul {
        width: 100%;
        height: auto;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        li {
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 1px;
          gap: 10px;
          a {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 1px;
            gap: 10px;
            text-decoration: none;
            color: #fff;
          }
          cursor: pointer;
          .whatsap {
            font-size: 25px;
            color: lightgreen;
          }
          .email {
            font-size: 25px;
            color: lightblue;
          }
        }
      }
    }
    .social {
      width: 50%;
      height: auto;

      display: flex;
      ul {
        width: 80%;
        height: auto;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 100px;
        list-style: none;
        font-size: 50px;
        li {
          svg {
            color: #fff;
          }
        }
      }
    }
  }
  .copyrigth {
    text-transform: uppercase;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
    width: 100%;
    height: 260px;
    .content_box {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .datos {
        width: 100%;
        display: flex;
        flex-direction: column;
        ul {
          width: 90%;
          height: 150px;
          display: flex;
          flex-direction: column;
        }
      }
      .social {
        width: 100%;
        ul {
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
