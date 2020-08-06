import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://brnocesar.github.io/image/pixel-profile-picture.jpg" alt="Professor"/>
                <div>
                    <strong>Nome do Professor</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
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
                <button type="button">
                    <IoLogoWhatsapp />
                    {/* <img src={zapZapIcon} alt="WhatsApp"/> */}
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;