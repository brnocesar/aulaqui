import React from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import FormField from '../../components/FormField';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';


function TeacherIndex() {
    
    return (
        <div id="page-teacher-index" className="container">
            <PageHeader title="Tenha aula com os melhores professores sem sair de casa">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Filosofia', label: 'Filosofia' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
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