import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TeacherIndex from './pages/TeacherIndex';
import TeacherCreate from './pages/TeacherCreate';

function Routes() {
    
    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/professores" component={TeacherIndex} />
            <Route exact path="/cadastrar" component={TeacherCreate} />
        </BrowserRouter>
    );
}

export default Routes;
