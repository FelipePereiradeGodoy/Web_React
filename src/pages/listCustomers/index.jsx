import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import api from '../../services/api';
import './styles.css';


const ListCustomers = () => {
    const cpfCliente = "xxx.xxx.xxx-xx";

    useEffect(() => {
        // auto invoked
        (async () => {
            try {
                const response = await api.get('clientes')
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);


    const columns = [
        { field: 'idCliente', headerName: 'idCliente', width: 110 },
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'cpf', headerName: 'CPF', width: 130 },
        { field: 'rg', headerName: 'RG', type: '', width: 130 },
        { field: 'email', headerName: 'Email', type: '', width: 130 },
        { field: 'telefone1', headerName: 'Telefone1', type: '', width: 130 },
        { field: 'dataNasc', headerName: 'Data Nascimento', type: '', width: 170 },
    ];

    const rows = [
        { idCliente: 0, nome: 'Jon', cpf: '000.000.000-00' },
        { idCliente: 1, nome: 'Cersei', cpf: '111.111.111-11' },
        { idCliente: 2, nome: 'Jaime', cpf: '222.222.222-22' },
        { idCliente: 3, nome: 'Arya', cpf: '333.333.333-22' },
        { idCliente: 4, nome: 'Daenerys', cpf: cpfCliente },
        { idCliente: 5, nome: 'Fon', cpf: cpfCliente },
        { idCliente: 6, nome: 'Ferrara', cpf: cpfCliente },
        { idCliente: 7, nome: 'Rossini', cpf: cpfCliente },
        { idCliente: 8, nome: 'Harvey', cpf: cpfCliente },
        { idCliente: 9, nome: 'Batman', cpf: cpfCliente },
    ];


    return (
        <div id="listCustomers-block">

            <div className="menuNavBar-block" >
                {/* Componente Menu NavBar */}
            </div>

            <div className="table-listCustomers-block">
                <DataGrid getRowId={(rows) => rows.idCliente} rows={rows} columns={columns} pageSize={7} checkboxSelection />
            </div>

        </div>
    );
}

export default ListCustomers;