import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import avatarImage from "../assets/avatarImage.jpeg";

export default function Overduetasks() {
  

  const Overduetasks = [
    {
      image: avatarImage,
      employee:"Kushan Dahanayeke",
      task: "Requirement gathering",
      date:"2 Jun 2021",
     
  },
  {
      image: avatarImage,
      employee:"Samadhi Dilhara",
      task: "Requirement analysing",
      date:"2 Jun 2021",
     
  },
  {
      image: avatarImage,
      employee:"Sachini Buddhika",
      task: "Designing",
      date:"2 Jun 2021",
      
  },
];
  return (
    <Section>
      <h3 className="title">Overdue Tasks</h3>
      <table className="taskTable">

        <tr className="tr">
          <th className="th">Employee</th>
          <th className="th">Task</th>
          <th className="th">Deadline</th>
        </tr>

        
        {Overduetasks.map((task) => {
            return (
                <tr className="tr">
                     <td className="employee">
                    <img
                    src= {task.image}
                    alt=""
                    className="employeeImage"
                    />
                    <span>{task.employee}</span>
                    </td>
                    <td className="task">{task.task}</td>
                    <td className="date">{task.date}</td>
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
  
  .taskTable{
    width: 100%;
    border-spacing: 18px;
  }
  
  .th{
    background-color: #F0F0F0;
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    text-align: center;
    transition: 0.3s ease-in-out;
    &:hover {
    background-color: black;
    color: white; 
    }
  }
  
  .employee{
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  
  .employeeImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  
  .date,task{
    font-weight: 300;
    text-align: center;
  }
  
  .date{
    color: red;
    font-weight: 500;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
      .taskTable {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
  }

  `;