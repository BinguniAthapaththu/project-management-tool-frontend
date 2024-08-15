import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

export default function ProgressBars(){
    const data =[
        {project: "Project Management Tool" ,value: 30},
        {project: "Bus Tracking System" ,value: 70},
        {project: "Online Shoping System" ,value: 60},
    ];
    return(
        <Section>
        <div className="protectProgress">
        <div><h3 className="title">Progress</h3></div>
       
        <div className="progress_bars">
            {
                data.map((x) =>{
                    return(
                        <div className="progress_bar">
                            <div className="data">
                                <h5>{x.project}</h5>
                                <h5>{x.value}</h5>
                            </div>
                            <progress value={x.value} max="100"/>
                        </div>
                    );
                })
            }
        </div>
    </div>
    </Section>
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  color: black;
  .title{
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  }
  .protectProgress{
      height: 100%;
      border-radius: 1rem;
      padding: 1.4rem 2rem;
      .progress_bars{
          margin-top: 2rem;
          .progress_bar{
              margin-bottom: 1rem;
              .data{
                  display: flex;
                  justify-content: space-between;
              }
              progress{
                  width: 100%;
                  height: 0.5rem;
                  -webkit-appearance: none;
                  &::-webkit-progress-bar{
                      border-radius: 1rem;
                      background-color: #ACF1D1;
                  }
                  ::-webkit-progress-value{
                      border-radius: 1rem;
                      background-color: #4AD395;
                  }
              }  
          }
      }
  }

  
`;