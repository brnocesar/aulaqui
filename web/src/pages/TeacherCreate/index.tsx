import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import './styles.css';


function TeacherCreate() {
    // nao apresentar dias selecionados
    const availableOptions = [
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-feira' },
        { value: '2', label: 'Terça-feira' },
        { value: '3', label: 'Quarta-feira' },
        { value: '4', label: 'Quinta-feira' },
        { value: '5', label: 'Sexta-feira' },
        { value: '6', label: 'Sábado' },
    ];
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' }
        ]);
    }
    
    return (
        <div id="page-teacher-create" className="container">
            <PageHeader
                title="Cadastre-se e lecione para os alunos mais dedicados"
                subtitle="O primeiro é preencher o formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <FormField name="name" label="Nomo completo" />
                    <FormField name="avatar" label="Foto" />
                    <FormField name="whatsapp" label="WhatsApp" />
                    <TextArea name="bio" label="Biografia" /> {/* aumentar o tamanho conforme o texto ocupa espaço */}
                </fieldset>
                
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Filosofia', label: 'Filosofia' },
                        ]}
                    />
                    <FormField name="cost" label="Valor da hora/aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                        {/* botao para limpar os campos adicionados */}
                    </legend>

                    {scheduleItems.map(scheduleItem => (
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                                name="week_day"
                                label="Dia da semana"
                                options={availableOptions}
                            />
                            <FormField name="from" label="Das" type="time" />
                            <FormField name="to" label="Até" type="time" />
                        </div>
                    ))}
                </fieldset>
                
                <footer>
                    <p>
                        <RiErrorWarningLine />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherCreate;