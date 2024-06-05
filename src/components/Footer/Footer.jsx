import React from 'react'
import './footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
         <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit nostrum odio a, porro quaerat quam explicabo perspiciatis veniam ipsum, soluta cumque tenetur similique. Animi dolore maxime commodi ab deleniti.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
         </div>
         <div className="footer-content-center">
            <h2>EMPRESA</h2>
            <ul>
                <li>Home</li>
                <li>Sobre nós</li>
                <li>Delivery</li>
                <li>Política de Privacidade</li>
            </ul>
         </div>
         <div className="footer-content-right">
                <h2>ENTRAR EM CONTATO</h2>
                <ul>
                    <li>+55 71 8923-4532</li>
                    <li>EmrepsaTomato@gmai.com</li>
                </ul>
         </div>
       </div>
       <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - Todos os Direitos Reservados.</p>
    </div>
  )
}

export default Footer
