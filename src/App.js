import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/MovieDetail/MovieDetail';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />         
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



// import React from "react";
// import {BrowserRouter as Router,Routes,Route, Switch } from "react-router-dom"
// import MovieDetail from './components/MovieDetail/MovieDetail';
// import Home from './components/Home/Home';
// import PageNotFound from './components/PageNotFound/PageNotFound';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import './App.scss';

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Header></Header>
//         <div className="container">
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/movie/:imdbID" component={MovieDetail} />
//           <Route component={PageNotFound} />
//         </Switch>
//         </div>
//         <Footer/>
//       </Router>

//     </div>
//   );
// }

// export default App;
