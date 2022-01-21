import { useState } from 'react';
import '../css/teladelogin.css';

var $ = require('jquery');


const svgEye = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
  </svg>
);

const svgEyeSlash = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
  </svg>
);


const SignUpForm = (props) => {
  const [passVisible, setPassVisible] = useState(false);
  const changeForm = props.changeForm;
  
  return (
    <div className="d-flex justify-content-center flex-column px-3 mx-auto" style={{width: '643px'}}>
      <img src="./assets/images/logobpg.png" className="mx-auto" style={{height:'250px', width:'312px'}} alt="BPG Fórum - Cadastro" />
      <div id="form-container" className='w-100 px-3'>
        <h1> Abra sua conta </h1>
        <h2> É gratuito!</h2>
        <h3> Venha fazer parte da família BPG ! </h3>
        <form className="d-inline-flex flex-column w-100" action="#">
          <input className="form_input mt-2" placeholder="Apelido" title="Insira um apelido" type="text" />
          <input className="form_input mt-2" placeholder="E-mail" title="Insira um email existente" type="email" />
          <div className="d-flex align-items-center flex-row mt-2" style={{height: '40px'}}>
            <input className="form_input rounded-0 rounded-start" placeholder="Sua senha" title="Insira sua senha" type={passVisible ? 'text' : 'password'} />
            <button className="bg-white h-100 border-0 rounded-end p-2" title="Ver senha"
            type="button" onClick={() => { setPassVisible(!passVisible) }}>
              {
                !passVisible ? svgEye : svgEyeSlash
              }
            </button>
          </div>
          <button type="submit" className="btn btn-green" title="Cadastro">  Cadastrar!</button>
          <div className="d-flex justify-content-start">
            <button className="btn btn-danger" type="button"
            onClick={changeForm}>Já tenho uma conta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginForm = (props) => {
  const [passVisible, setPassVisible] = useState(false);
  const changeForm = props.changeForm;

  return (
    <div className="d-flex justify-content-center flex-column px-3 mx-auto" style={{width: '643px'}}>
      <img src="./assets/images/logobpg.png" className="mx-auto" style={{height:'250px', width:'312px'}} alt="BPG Fórum - Cadastro" />
      <div id="form-container" className='w-100 px-3'>
        <h1>Bem vindo de volta</h1>
        <h2>sentimos a sua falta!</h2>
        <h3>Logue para ver as novidades da família BPG !</h3>
        <form className="d-inline-flex flex-column w-100" action="#">
          <input className="form_input mt-2" placeholder="Apelido ou email" title="Insira seu apelido ou email" type="text" />
          <div className="d-flex align-items-center flex-row mt-2" style={{height: '40px'}}>
            <input className="form_input rounded-0 rounded-start" placeholder="Sua senha" title="Insira sua senha" type={passVisible ? 'text' : 'password'} />
            <button className="bg-white h-100 border-0 rounded-end p-2" title="Ver senha"
            type="button" onClick={() => { setPassVisible(!passVisible) }}>
              {
                !passVisible ? svgEye : svgEyeSlash
              }
            </button>
          </div>
          <button type="submit" className="btn btn-green" title="Cadastro">Entrar!</button>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger" type="button"
            onClick={changeForm}>Não tenho uma conta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  $('div#container').addClass('m-0')
  $('body').css({'background':"url('./assets/images/lossantos-1.jpg') no-repeat", 'background-size':'cover'});


  return (
    <>
      {
        isLoginForm ? 
        <LoginForm changeForm={()=>{ setIsLoginForm(!isLoginForm) }} /> : 
        <SignUpForm changeForm={()=>{ setIsLoginForm(!isLoginForm) }} />
      }
    </>
  )
};

export default Auth;