import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function MyProjects() {

  const projects = [
    {
      
      project: "Project Mnagement Tool",
      client: "Afisol Pvt Ltd",
      deadline : "20-05-2022",
      status: "Pending",
       
    },
    {
      project: "Bus Tracking System",
      client: "Afisol Pvt Ltd",
      deadline : "20-05-2022",
      status: "In Progress",
       
    },
    {
      project: "Online Shoping System",
      client: "Afisol Pvt Ltd",
      deadline : "20-05-2022",
      status: "Done",
        
    },
];
  return (
    <Section>
      <h3 className="title">My Projects</h3>
      <table className="projectTable">

        <tr className="tr">
          <th className="th">Project</th>
          <th className="th">Client</th>
          <th className="th">Deadline</th>
          <th className="th">Status</th>
        </tr>

        
        {projects.map((project) => {
            return (
                <tr>
                  <td className="project">{project.project}</td>
                  <td className="client">{project.client}</td>
                  <td className="deadline">{project.deadline}</td>
                  <td className="status">{project.status}</td>
                  <td className="view"> 
                    <Link to='/progress'>View progress <HiArrowNarrowRight /></Link>
                  </td>
                </tr>
            );  
        })}
       


      </table>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
  
  .title {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  
  .projectTable{
    width: 100%;
    border-spacing: 18px;
  }
  
  .th{
    padding: 0.5rem 0.5rem;
    border-bottom: 2px solid #BCB8B8;
    text-align: left;
    color: #4AD395;
  }
  
  .project,.client,.deadline{
    text-align: left;
    font-weight: 450;
  }

  .status{
    text-align: center;
    font-weight: 450;
  }

  a{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: red;
    font-weight: bold;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
      .projectTable {
        flex-direction: column;
        align-items: left;
        gap: 1rem;
      }
  }

  `;