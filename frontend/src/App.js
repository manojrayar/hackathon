import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/Landing";
import Register from "./components/Register";
import Experience from "./components/Experience";
import Login from "./components/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Route, Switch, useHistory} from 'react-router-dom'
import Fresher from "./components/Fresher";
import ResumePreviewFrs from "./components/ResumePreviewFrs";
import ResumePreviewExp from "./components/ResumePreviewExp";

function App() {
  return (
    <>
   
    <BrowserRouter>
    
  <Switch>
    <Route exact path='/' >
      <LandingPage />
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/signup'>
      <Register />
    </Route>
    <Route path='/experience'>
      <Experience />
    </Route>
    <Route path='/fresher'>
      <Fresher />
    </Route>
    <Route path='/previewfrs'>
      <ResumePreviewFrs />
    </Route>
    <Route path='/previewexp'>
      <ResumePreviewExp />
    </Route>
    <Route path='/resume/:id'>
          <ResumePreviewFrs />
    </Route>
    <Route path='/resumeb/:id'>
          <ResumePreviewExp />
    </Route>
</Switch>
</BrowserRouter>

</>

  );
}

export default App;
