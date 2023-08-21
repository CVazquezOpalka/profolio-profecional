import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/LogoEmpresa.png";
import { IoPersonOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const links = [
    {
      id: 1,
      name: "Sobre mi",
      icon: <IoPersonOutline />,
    },
    { id: 2, name: "Habilidades", icon: <GiSkills /> },
    { id: 3, name: "Mis Trabajos", icon: <MdWorkOutline /> },
  ];
  return (
    <Container>
      <div className="content">
        <picture>
          <img src={logo} alt="logo del desarrollador" />
        </picture>
        <ul className={show ? "active" : ""}>
          {links.map(({ id, name }) => (
            <li key={id}>
              <a href={`#${name}`} onClick={() => setShow(false)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="btn">
          <button onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 80px;
      height: 100%;
      color: #111;
      display: none;
      align-items: center;
      justify-content: center;
      button {
        padding: 10px;
        font-size: 16px;
        border: none;
        outline: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(22, 81, 230);
        color: #fff;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: rgb(10, 36, 102);
        }
      }
    }
    picture {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 180px;
      }
    }
    ul {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      li {
        list-style: none;
        display: inline-block;
        margin-left: 30px;
        a {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #111;
          text-transform: uppercase;
          font-size: 16px;
          transition: 0.3s ease-in-out;
          &:hover {
            border-bottom: 1px solid #111;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .content {
      position: relative;
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .active {
        top: 100px;
        opacity: 1;
        visibility: visible;
      }
      ul {
        top: -1000px;
        background-color: bisque;
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        z-index: 100;
        transition: 0.5s ease-in-out;
        opacity: 0;
        visibility: hidden;
      }
      .btn {
        display: flex;
      }
    }
  }
`;
