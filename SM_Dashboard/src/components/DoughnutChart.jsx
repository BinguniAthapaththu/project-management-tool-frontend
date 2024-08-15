import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'bottom'


export default function DoughnutChart(){
  return (
    <Section>
      <div className='title'>
        <h2>Progress</h2>
      </div>
      <div>
      <Doughnut
        data={{
          labels: ['Todo', 'Doing', 'Done'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 206, 80, 0.5)',
                'rgba(75, 199, 199, 0.5)',
        
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 80, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
      </div>      
    </Section>
  )
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
`;


