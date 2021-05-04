import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageCadastroCliente from './pages/cadastroCliente/index';
import PageLogin from './pages/login/index';


const Routes = () => {
    return (
        <BrowserRouter>

            <Route path="/" exact component={PageLogin} />
            <Route path="/cadastroCliente" component={PageCadastroCliente} />

        </BrowserRouter>
    );

};

export default Routes;