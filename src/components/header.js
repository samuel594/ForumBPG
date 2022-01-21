import { Link } from 'react-router-dom';
import './header.css';

var $ = require('jquery');

const Header = () => {
  let isMobileMenuOpen = false;

  $(window).on('load', function(){
    //handle the active style of a menu button
    $('.menu_btn').on('click', function() {
      $('.menu_btn').removeClass('menu_btn-active')
      $(this).addClass('menu_btn-active');
    });

    $('#container').on('click', () => {
      //close mobile menu
      $('#container').css('transform', 'translateX(0)');
      $('#mobile_menu').css('transform', 'translateX(-150px)');
      $('body, html').removeClass('overflow-hidden');
      isMobileMenuOpen = false;
    });
  });
  
  const handleMobileMenu = () => {

    if (isMobileMenuOpen) {
      //close mobile menu
      $('#container').css('transform', 'translateX(0)');
      $('#mobile_menu').css('transform', 'translateX(-150px)');
      $('body, html').removeClass('overflow-hidden');
    } else {
      //open mobile menu
      $('#container').css('transform', 'translateX(150px)');
      $('#mobile_menu').css('transform', 'translateX(0)');
      $('body, html').addClass('overflow-hidden');
    }
    
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  return (
    <>
      <header id="toolbar" className="d-flex flex-row w-100 px-3">
        <div id="tb_start" className="d-flex align-items-center h-100 w-25 ">
          <button id="tb_btn-mobile_menu" className="tb_btn h-75 px-2 rounded-circle invisible"
          onClick={handleMobileMenu}>
            <svg height="21" width="20" className="text-white">
              <rect y="0" rx="2" ry="2" width="20" height="5" fill="currentColor" />
              <rect y="7" rx="2" ry="2" width="20" height="5" fill="currentColor" />
              <rect y="14" rx="2" ry="2" width="20" height="5" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div id="tb_center" className="d-flex justify-content-center align-items-center flex-column w-50 h-100">
          <form action="#" role="search" 
          className="d-inline-flex align-items-center w-75 h-100 flex-row-reverse">
            <button className="h-75 btn btn-light border rounded-0 rounded-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
            <input id="tb_in-search" onInput={() => { $('#search_suggestions').slideDown(200);}} onBlur={() => {$('#search_suggestions').hide()}}
            className="w-100 h-75 border border-end-0 ps-2" type="text" placeholder="Pesquisar" />
          </form>
          <div id="search_suggestions" className="position-absolute bg-white rounded-bottom">
            <ul className="list-group list-group-flush list-style-none">
              <li><small className="text-secondary ps-2">Sugestões</small></li>
              <li className="list-group-item">Regras gerais</li>
              <li className="list-group-item">Sugestão 2</li>
              <li className="list-group-item">Sugestão 3</li>
            </ul>
          </div>
        </div>
        <div id="tb_end" className="d-flex w-25 h-100 justify-content-end align-items-center">
          <div className="dropdown tb_btn">
            <button id="profile-dropdown" className="tb_btn text-white p-1"
            data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <span className="ps-2">Perfil</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
              <li className="dropdown-item"><Link to="/profile">Visualizar</Link></li>
              <li className="dropdown-item"><Link to="/profile/settings">Configurações</Link></li>
              <li className="dropdown-divider"></li>
              <li className="dropdown-item">Meus tópicos</li>
              <li className="dropdown-item">Minhas mensagens</li>
              <li className="dropdown-divider"></li>
              <li className="dropdown-item btn btn-danger">Sair</li>
            </ul>
          </div>
          <div className="dropdown tb_btn">
            <button id="notif-dropdown" className="tb_btn text-white p-1" 
            aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill invisible" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
              <span>Notificações</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="notif-dropdown"></ul>
          </div>  
        </div>
      </header>
      <nav id="menu" role="menubar" className="d-flex justify-content-center">
      <div className="d-flex flex-row h-100">
        <Link to="/forum" className="menu_btn menu_btn-active text-white h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillrule-="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillrule-="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          <span className="ps-2">Início</span>
        </Link>
        <button className="menu_btn text-white h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
            <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
          </svg>
          <span className="ps-2">Portal</span>
        </button>
        <button className="menu_btn text-white h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fillrule-="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          <span className="ps-2">Grupos</span>
        </button>
        <Link to="/f/regras-gerais" className="menu_btn text-white h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <span className="ps-2">Regras</span>
        </Link>
        <Link to="/team" className="menu_btn text-white h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
          </svg>
          <span className="ps-2">Equipe</span>
        </Link>
      </div>
    </nav>
  </>
  );
};

export default Header;