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
                <Link to="/">
                    <FaLongArrowAltLeft />
                </Link>
                <img src={logo} alt="Logo"/>
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