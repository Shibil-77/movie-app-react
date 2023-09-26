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
import ProtectRouter from "./Routers/ProtectRouter";
import PublicRoute from "./Routers/PublicRoute";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>

            <Route path="/" element={<ProtectRouter><Home /></ProtectRouter>} />
            <Route path="/movie/:imdbID" element={<ProtectRouter><MovieDetail /></ProtectRouter>} />
            <Route path="/about" element={<ProtectRouter><About /></ProtectRouter>} />
            <Route path="/contact" element={<ProtectRouter><Contact /></ProtectRouter>} />
            <Route path="/Signup" element={
              <PublicRoute><Signup /></PublicRoute>
            } />
            <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
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
