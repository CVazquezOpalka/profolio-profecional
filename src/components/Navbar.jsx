import React from "react";
import styled from "styled-components";
import logo from "../assets/LogoEmpresa.png";
import { IoPersonOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "AboutMe",
      icon: <IoPersonOutline />,
    },
    { id: 2, name: "Skills", icon: <GiSkills /> },
    { id: 3, name: "MyWorks", icon: <MdWorkOutline /> },
    { id: 4, name: "Touch", icon: <RiContactsLine /> },
  ];
  return (
    <Container>
      <picture>
        <img src={logo} alt="logo del desarrollador" />
      </picture>
      <nav className="navigation">
        <ul>
          {links.map(({ id, name }) => (
            <li key={id}>
              <a href={`#${name}`}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  picture {
    margin-left: 20px;
    img {
      width: 180px;
    }
  }
  .navigation {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      li {
        list-style: none;
        margin-right: 20px;
        a {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #111;
          text-transform: uppercase;
          padding: 5px 10px;
          transition: 0.5s;
          font-size: 16px;
          transition: all 0.3s ease;
          &:hover {
            border: 1px solid black;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;
