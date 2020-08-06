import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';


function TeacherIndex() {
    
    return (
        <div id="page-teacher-index" className="container">
            <PageHeader title="Tenha aula com os melhores professores sem sair de casa">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <ul className="teachers-grid">
                    <li className="point-box" >
                        <TeacherItem />
                    </li>
                    <li className="point-box" >
                        <TeacherItem />
                    </li>
                    <li className="point-box" >
                        <TeacherItem />
                    </li>
                    <li className="point-box" >
                        <TeacherItem />
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default TeacherIndex;