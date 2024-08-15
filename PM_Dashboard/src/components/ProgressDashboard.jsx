import React from "react";
import styled from "styled-components";
import Dashboard2 from "./Dashboard2";
import Sidebar from "./Sidebar";



export default function ProgressDashboard() {
  return (
    <Div>
      <Sidebar />
      <Dashboard2 />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
