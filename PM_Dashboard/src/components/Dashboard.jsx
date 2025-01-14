import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import MyProjects from "./MyProjects";
import ProgressBars from "./ProgressBars";

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <MyProjects />
        </div>
        <div className="row__two">
          <ProgressBars />  
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;