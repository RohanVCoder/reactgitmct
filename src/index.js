import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Home from "./pages/home"
import About from "./pages/about"
import Privacy from "./pages/privacy"
import Header from "./pages/header"
import Footer from "./pages/footer"
// import Fourofour from "./pages/fourofour"

import Python from "./pages/miscellaneous/python/python"
import Python_video from "./pages/miscellaneous/python/python.video"
import Python_quiz from "./pages/miscellaneous/python/python.quiz"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './static/styles.css'

export default function App() {

  const [progress, setProgress] = useState(100)
  
  return (
    <BrowserRouter>
     <LoadingBar
        color='aqua'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Header company_name="My Coding Teacher"/>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/about/">
          <Route index element={<About />} />
        </Route>
        <Route path="/privacy/">
          <Route index element={<Privacy />} />
        </Route>

        <Route path="/python/">
          <Route index element={<Python />} />
        </Route>

        <Route path="/python/video/">
          <Route index element={<Python_video />} />
        </Route>

        <Route path="/python/quiz/">
          <Route index element={<Python_quiz />} />
        </Route>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
