import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaHeart } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import './styles.css';
import logo from '../../assets/images/white-logo.png';
import landingImage from '../../assets/images/landing.svg';


function LandingPage() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImage} alt="Pessoas procurando por aulas online" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/professores" className="student">
                        <IoMdSchool />
                        Estudar
                    </Link>
                    <Link to="/cadastrar" className="teacher">
                        <FaChalkboardTeacher />
                        Lecionar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de xxx conexões realizadas <FaHeart />
                </span>
            </div>
        </div>
    );
}

export default LandingPage;