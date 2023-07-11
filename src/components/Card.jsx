import React from "react";
import styled from "styled-components";

import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

export const Card = ({ title, image, score }) => {
  return (
    <Container>
      <picture>
        <img src={image} alt="logo" />
      </picture>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="rating">
          {[...new Array(5)].map((star, index) => {
            return index < score ? (
              <MdOutlineStar key={index} />
            ) : (
              <MdOutlineStarOutline key={index} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px #111;
  overflow: hidden;
  box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    transform: translateY(-5px);
    opacity: 1;
    box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.8);
  }
  picture {
    width: 110px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
      object-fit: cover;
    }
  }
  .content {
    margin: auto 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h3 {
      width: 100%;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
    .rating {
      display: flex;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 5px 10px;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 18px;
        color: red;
        letter-spacing: 1px;
        z-index: 1000;
      }
    }
  }
`;
