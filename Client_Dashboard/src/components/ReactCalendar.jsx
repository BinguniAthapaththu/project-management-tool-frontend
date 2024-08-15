import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

export default function ReactCalendar(){
    const [date, setDate] = useState(new Date());
    const onChange = date => {
    setDate(date);
    };

    return(
        <Section>
            <div className='title'>
                <h2>Projected Launch Dacte</h2>
            </div>
            <div className="analytic ">
                <div className="content">
                <h2>100 days</h2>
                <h5>2022-08-10</h5>
                </div>
            </div>
            <div>
                <Calendar  onChange={onChange} value={date} />
            </div>
        </Section>
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .title{
    color: black;
  }

  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    background-color:#4AD395;
    gap: 1rem;
    text-align:center;
    h5{
        margin-top: 5px;
    }
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
    }
  
`;

