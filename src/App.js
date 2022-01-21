import AppRoutes from './routes';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
//import Menu from "./components/menu";

import './App.css';

var $ = require('jquery');

if (window.location.pathname === '/')
  window.location.pathname = '/forum';

let oldScroll = 0;
let scrollY = 0;
window.onscroll = () => {
  scrollY = window.pageYOffset;
  if (oldScroll > scrollY){
    $('#toolbar').removeClass('position-static');
    $('#toolbar').addClass('position-sticky');
    $('#menu').css('top', '50px');
  } else if (oldScroll < scrollY || scrollY === 0){
    $('#toolbar').removeClass('position-sticky');
    $('#toolbar').addClass('position-static');
    $('#menu').css('top', '0');
  }
  oldScroll = scrollY;
};

const App = () => {

  return (
    <Router>
      {
        window.location.pathname === '/auth' ? null : <Header />
      }
      <nav id="mobile_menu" className="position-fixed bg-dark vh-100" 
      style={{transform: 'translate(-150px)', width: '150px', transition: 'transform ease-out .2s'}}></nav>
      <div id="container" className="min-vh-100">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
