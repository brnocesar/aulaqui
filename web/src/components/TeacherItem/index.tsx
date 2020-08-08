import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import api from '../../services/api';
import './styles.css';


export interface Teacher {
    id: number;
    avatar: string,
    name: string,
    subject: string,
    short_bio: string,
    full_bio: string,
    cost: number,
    whatsapp: string,
};
interface TeacherItemProps {
    teacher: Teacher;
};

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('conexoes', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.short_bio}
                <br /><br />
                {teacher.full_bio}
            </p>
            <footer>
                <span>
                    <p>
                        Preço/Hora
                    </p>
                    <p>
                        R$ {teacher.cost},00
                    </p>
                </span>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                >
                    <IoLogoWhatsapp />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;