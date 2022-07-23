import './header.scss';
import React, {useState} from 'react'
import { AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp,AiOutlineUser,AiFillInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from "../assets/icono.png"
import Beneficios from './beneficios';
const Header = () => {
const [Beneficio, setBeneficios] = useState(false)

  return (
    <>
    {Beneficio?<Beneficios fun={setBeneficios}/>:null}
    <nav>
     <div className='menu-first'>
      <ul className="redes">
       <li><a href='/crearproducto' ><AiFillFacebook fontSize={25}/></a></li>
       <li><a href='/ordenar'><AiFillInstagram fontSize={25}/></a></li>
       <li><a href='/chat'><AiOutlineWhatsApp fontSize={25}/></a></li>
      </ul>
      <Link to='/' className='linkinicio'><img src={Logo} alt='image-logo' className='logo'/></Link> 
      <div className='actiones'>
        <Link to='/login' className='actions'><AiOutlineUser fontSize={25}/></Link>
        <AiFillInfoCircle fontSize={25} onClick={()=>setBeneficios(true)} className='actions' style={{cursor:'pointer'}}/>
        </div>
      </div>
      <div className='menu-second'>
      <ul className="redes">
       <li><a href='/mujeres' >Mujeres</a></li>
       <li><a href='/hombres'>Hombres</a></li>
      </ul>
      </div>
    </nav>
  
    </>
  );
}
export default Header;