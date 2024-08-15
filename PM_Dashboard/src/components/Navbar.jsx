import React from "react";
import styled from "styled-components";
import {BsFillCaretDownFill} from 'react-icons/bs';
import avatar from "../assets/avatarImage.jpeg";

export default function Navbar(){
  return (
    <Nav>
      <div className="title">
        <h2>Dashboard</h2>
        <span>Detailed information about projects</span>
      </div> 
      <div className="container">
        <div className="profile">
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="profile_name">
            <h4>Raween Nuwarapaksha</h4>
            <h5>Project Manager</h5>
          </div>
          <BsFillCaretDownFill />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    .container{
      display: flex;
    }
    .profile{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: 1rem;
      .image{
        img{
          height: 3rem;
          border-radius: 2rem;
        }
      }
    }
  
  
`;