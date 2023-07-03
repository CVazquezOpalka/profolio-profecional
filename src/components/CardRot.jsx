import React from "react";
import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

export const CardRot = ({ image, title, overview, git, page }) => {
  return (
    <Container>
      <div className="card">
        <div className="box">
          <div className="imgBx">
            <img src={image} alt="imagen de muestra de la pagina" />
          </div>
          <div className="contentBx">
            <div>
              <h2 style={{ width: "100%", textAlign: "center" }}>{title}</h2>
              <p>{overview}</p>
              <div className="span_content">
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
        .span_content {
          width: 100px;
          height: auto;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          span {
            display: inline-block;
            padding: 3px 5px;
            transition: 0.3s ease;
            &:hover {
              transform: scale(1.1);
            }
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
  }
`;
