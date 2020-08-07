import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import './styles.css';


function TeacherCreate() {
    
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
                </fieldset>
                
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <FormField name="subject" label="Matéria" />
                    <FormField name="cost" label="Valor da hora/aula" />
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