import React from 'react';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';


function TeacherIndex() {
    
    return (
        <div id="page-teacher-index" className="container">
            <PageHeader title="Tenha aula com os melhores professores sem sair de casa">
                <form id="search-teachers">
                    <FormField name="subject" label="Matéria" />
                    <FormField name="week-day" label="Dia da semana" />
                    <FormField type="time" name="time" label="Horário" />
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