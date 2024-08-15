import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

export default function UpcomingDeadlines() {
  const UpcomingDeadlines = [
    {
      image: avatarImage,
      name: "Designing",
      time: "2022-10-10",
      amount: "4 days",
    },
    {
      image: avatarImage,
      name: "implementation",
      time: "2022-10-15",
      amount: "5 days",
    },
    {
      image: avatarImage,
      name: "Testing",
      time: "2022-10-20",
      amount: "10 days",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Upcoming Tasks</h2>
      </div>
      <div className="UpcomingDeadlines">
        {UpcomingDeadlines.map((UpcomingDeadline) => {
          return (
            <div className="UpcomingDeadline">
              <div className="UpcomingDeadline">
                <div className="UpcomingDeadline__title__image">
                  <img src={UpcomingDeadline.image} alt="" />
                </div>
                <div className="UpcomingDeadline__title__details">
                  <h3>{UpcomingDeadline.name}</h3>
                  <h4>{UpcomingDeadline.time}</h4>
                </div>
              </div>
              <div className="UpcomingDeadline__amount">
                <span><h4>{UpcomingDeadline.amount}</h4></span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    color:black;
    text-align: center;
  }
  .UpcomingDeadlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .UpcomingDeadline {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
            margin-right: 7px ;
            
          }
        }
        &__details {
          color:black;
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.5rem 0.5rem;
        width: 5rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: green;
          span {
            color: white;
          }
        }
        span {
          color: green;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .UpcomingDeadlines {
      .UpcomingDeadline {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;