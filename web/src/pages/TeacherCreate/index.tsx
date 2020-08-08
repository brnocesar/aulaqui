import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { RiErrorWarningLine } from 'react-icons/ri';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import './styles.css';


function TeacherCreate() {
    const history = useHistory();
    const availableOptions = [
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-feira' },
        { value: '2', label: 'Terça-feira' },
        { value: '3', label: 'Quarta-feira' },
        { value: '4', label: 'Quinta-feira' },
        { value: '5', label: 'Sexta-feira' },
        { value: '6', label: 'Sábado' },
    ]; // nao apresentar dias selecionados
    
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' },
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(itemIndex: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if ( index === itemIndex) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
    }

    function handleCreateLecture(event: FormEvent) {
        event.preventDefault();

        api.post('aulas', {
            name,
            avatar,
            whatsapp,
            short_bio: bio,
            full_bio: bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('API desabilitada');
        });
    }

    
    return (
        <div id="page-teacher-create" className="container">
            <PageHeader
                title="Cadastre-se e lecione para os alunos mais dedicados"
                subtitle="O primeiro passo é preencher o formulário com seus dados e sua disponibilidade"
            />

            <main>
                <form onSubmit={handleCreateLecture}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <FormField name="name" label="Nomo completo" value={name} onChange={(event) => {setName(event.target.value)}} />
                        <FormField name="avatar" label="Foto" value={avatar} onChange={(event) => {setAvatar(event.target.value)}} />
                        <FormField name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(event) => {setWhatsapp(event.target.value)}} />
                        <TextArea name="bio" label="Biografia" value={bio} onChange={(event) => {setBio(event.target.value)}} /> {/* aumentar o tamanho conforme o texto ocupa espaço */}
                    </fieldset>
                    
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            disabledOptions="Selecione uma matéria"
                            value={subject}
                            onChange={(event) => {setSubject(event.target.value)}}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Filosofia', label: 'Filosofia' },
                            ]}
                        />
                        <FormField name="cost" label="Valor da hora/aula" value={cost} onChange={(event) => {setCost(event.target.value)}} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                            {/* botao para limpar os campos adicionados */}
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    disabledOptions="Selecione um dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                    options={availableOptions}
                                />
                                <FormField name="from" label="De" type="time" value={scheduleItem.from} onChange={event => setScheduleItemValue(index, 'from', event.target.value)} />
                                <FormField name="to" label="Até" type="time" value={scheduleItem.to} onChange={event => setScheduleItemValue(index, 'to', event.target.value)} />
                            </div>
                        ))}
                    </fieldset>
                    
                    <footer>
                        <p>
                            <RiErrorWarningLine />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherCreate;