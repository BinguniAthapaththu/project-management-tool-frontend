import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProgressDashboard from "./components/ProgressDashboard";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/progress' element={<ProgressDashboard/>} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
