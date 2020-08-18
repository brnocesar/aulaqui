import React, { useState, FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import FormField from '../../components/FormField';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import './styles.css';
import FakeTeacherItem from '../../components/FakeTeacherItem';


function TeacherIndex() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('aulas', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }
    
    return (
        <div id="page-teacher-index" className="container">
            <PageHeader title="Tenha aula com os melhores professores sem sair de casa">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        disabledOptions="Selecione uma matéria"
                        value={subject}
                        onChange={(event) => {setSubject(event.target.value)}}
                        // options={[
                        //     { value: 'Artes', label: 'Artes' },
                        //     { value: 'Física', label: 'Física' },
                        //     { value: 'Filosofia', label: 'Filosofia' },
                        // ]}
                        options={[
                            { value: 'a', label: 'Isso' },
                            { value: 'b', label: 'não' },
                            { value: 'c', label: 'vai' },
                            { value: 'd', label: 'funcionar.' },
                            { value: 'e', label: 'API' },
                            { value: 'f', label: '"desligada".' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        disabledOptions="Selecione um dia da semana"
                        value={week_day}
                        onChange={(event) => {setWeekDay(event.target.value)}}
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
                    <FormField
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={(event) => {setTime(event.target.value)}}
                        type="time"
                    />

                    <button type="submit">
                        <BsSearch />
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                <ul className="teachers-grid">
                    {/* {teachers.map((teacher: Teacher) => (
                        <li key={teacher.id} className="point-box" >
                        <TeacherItem teacher={teacher} />
                        </li>
                    ))} */}
                    <FakeTeacherItem />
                    <FakeTeacherItem />
                    <FakeTeacherItem />
                    <FakeTeacherItem />
                    <FakeTeacherItem />
                    <FakeTeacherItem />
                </ul>
            </main>
        </div>
    );
}

export default TeacherIndex;