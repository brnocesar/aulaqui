import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import './styles.css';
import logo from '../../assets/images/blue-logo.png';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <div>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                </div>

                <div className="header-links">
                    <Link to="/professores">
                        Professores
                    </Link>
                    <Link to="/aulas">
                        Aulas
                    </Link>
                    <Link to="/cadastrar">
                        Cadastro
                    </Link>
                    <Link to="/mobile">
                        Mobile
                    </Link>
                </div>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.subtitle && <p>{props.subtitle}</p>}
                
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;