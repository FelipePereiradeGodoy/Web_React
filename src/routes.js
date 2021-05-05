import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login/index';
import RegistrationCustomers from './pages/registrationCustomers/index';
import ListCustomers from './pages/listCustomers/index';


const Routes = () => {
    return (
        <BrowserRouter>

            <Route path="/" exact component={Login} />
            <Route path="/cadastroCliente" component={RegistrationCustomers} />
            <Route path="/listaClientes" component={ListCustomers} />

        </BrowserRouter>
    );

};

export default Routes;