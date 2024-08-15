import React from 'react'
import { Bar } from 'react-chartjs-2'
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

export default function BarChart(){
  return (
    <Section>
      <div className='title'>
        <h2>Workload</h2>
      </div>
      <div>
      <Bar
        data={{
          labels: ['Samadhi', 'Binguni', 'Kushan', 'Avishka', 'Sachini', 'Piyumi'],
          datasets: [
            {
              label: 'workers',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }} 
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: false,
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
