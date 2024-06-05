import React, { useState } from 'react'
import './loginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>: <input type="text" placeholder='Nome' required/>}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Senha' required/>
            </div>
            <button>{currState==='Sign Up'?"Crie sua conta": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Ao continuar, concordo com os termos de uso & política de privacidade.</p>
            </div>
            {currState==="Login"
            ? <p>Criar uma nova conta? <span onClick={() => setCurrState("Cadastre-se")}>Clique aqui</span></p> : <p>Já tem possui uma conta? <span onClick={() => setCurrState("Login")}>Entre aqui</span></p>}
           
        </form>
    </div>
  )
}

export default LoginPopup
