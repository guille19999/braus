import React, { useState } from 'react'
import './home.scss';
import { AiOutlineUserAdd,AiOutlinePercentage } from "react-icons/ai";
import { BsGenderFemale,BsGenderMale } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [Admin, setAdmin] = useState(true);
  const navigate = useNavigate();
  const onClick = (location) =>{
    console.log(location)
    navigate(`../${location}`);
  }
  return (
    <>
    {(Admin)?<div className='homeAdmin'>

    <div className='panelAdmin' onClick={()=>onClick("Usuarios")}>
      <AiOutlineUserAdd fontSize={90} className="iconHome"/>
      <p>Usuarios</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("Porcentajes")}>
    <AiOutlinePercentage fontSize={90} className="iconHome"/>
      <p>Porcentajes</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("Hombres")}>
    <BsGenderMale fontSize={90} className="iconHome"/>
      <p>Hombres</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("Mujeres")}>
    <BsGenderFemale fontSize={90} className="iconHome"/>
      <p>Mujeres</p>
    </div>

    </div>:<div className='home'>
      <h2>#GUille1999</h2>
      <p>50%</p>
    </div>}
    </>
  )
}

export default Home
