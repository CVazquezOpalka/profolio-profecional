import React from "react";
import styled from "styled-components";
import {
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <Container>
      <div className="content_box">
        <div className="datos">
          <ul>
            <li>Cristian Miguel Vazquez Opalka</li>
            <li>
              <AiOutlineWhatsApp className="whatsap" />
              +54 3888-31-4283
            </li>
            <li className="email">
              <MdAlternateEmail className="email" />
              cristianvazquez80@gmail.com
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
      <div className="copyrigth">
        <p><i>Web de Portfolio creada por Cristian Vazquez, derechos reservados</i></p>
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
  .copyrigth{
    text-transform: uppercase;
    
  }
`;
