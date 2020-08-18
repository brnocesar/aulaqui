import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import './styles.css';

function FakeTeacherItem() {

    return (
        <li>
            <article className="teacher-item">
                <header>
                    <img src="https://brnocesar.github.io/image/pixel-profile-picture.jpg" alt="Foto de perfil" />
                    <div>
                        <strong>Professor N<sup>o</sup> X</strong>
                        <span>Física</span>
                    </div>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <footer>
                    <span>
                        <p>
                            Preço/Hora
                        </p>
                        <p>
                            R$ 500,00
                        </p>
                    </span>
                    <a
                        href={`https://wa.me/${123456789}`}
                        target="_blank"
                    >
                        <IoLogoWhatsapp />
                        Entrar em contato
                    </a>
                </footer>
            </article>
        </li>
    );
}

export default FakeTeacherItem;