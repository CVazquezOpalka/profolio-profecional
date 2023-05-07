import React from "react";
import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

export const CardRot = ({ image, title, overview, git, page }) => {
  return (
    <Container>
      <div class="card">
        <div class="box">
          <div class="imgBx">
            <img src={image} alt="imagen de muestra de la pagina" />
          </div>
          <div class="contentBx">
            <div>
              <h2 style={{ width: "100%", textAlign: "center" }}>{title}</h2>
              <p>{overview}</p>
              <span>
                <a href={page} target="_blank">
                  <CgWebsite />
                </a>
              </span>
              <span>
                <a href={git} target="_blank">
                  <AiFillGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 20px;
    border-radius: 15px;
    overflow: hidden;
    .box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: 1s ease;
    }
    &:hover {
      .box {
        transform: rotateY(180deg);
      }
    }
    .imgBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .contentBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
      transform: rotateY(180deg);
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      div {
        transform: translateZ(100px);
        background: linear-gradient(45deg, #fe0861, #ffeb3b);
        padding: 20px;
        margin: 0 30px;
        border-radius: 15px;
        h2 {
          font-size: 20px;
          color: #fff;
          letter-spacing: 1px;
          backface-visibility: hidden;
        }
        p {
          font-size: 16px;
          color: #fff;
          backface-visibility: hidden;
        }
          span {
            display: inline-block;
            margin-left: 20px;
            a {
              width: 100%;
              text-align: center;
              svg {
                font-size: 30px;
                color: #fff;
              
            }
          }
        }
      }
    }
  }
`;
