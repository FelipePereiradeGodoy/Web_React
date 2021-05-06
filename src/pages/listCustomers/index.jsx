import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { format } from 'date-fns';
import MenuNavBar from '../../components/menuNavBar/index';
import api from '../../services/api';
import './styles.css';


const columns = [
    { field: 'idCliente', headerName: 'idCliente', width: 110 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'cpf', headerName: 'CPF', width: 130 },
    { field: 'rg', headerName: 'RG', type: '', width: 130 },
    { field: 'email', headerName: 'Email', type: '', width: 130 },
    { field: 'telefone1', headerName: 'Telefone1', type: '', width: 130 },
    { field: 'dataNasc', headerName: 'Data Nascimento', type: '', width: 170 },
];


const ListCustomers = () => {
    const [rows, setRows] = useState([]);
    const [idClienteSelecionados, setIdClienteSelecionados] = useState([]);


    useEffect(() => {
        // auto invoked
        (async () => {
            try {
                const response = await api.get('clientes')

                response.data.map((customer) => {
                    return customer.dataNasc = format(new Date(customer.dataNasc), 'dd/MM/yyyy');
                });

                setRows(response.data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, []);


    const addIdClienteSelected = (cellSelection) => {
        try {
            const { idCliente } = cellSelection.row; //pego o id da linha selecionada
            const newListIdCliente = idClienteSelecionados.slice(); // copio o array do meu state que está inicialmente vazio

            newListIdCliente.push(idCliente); // Adiciono o idCliente no array copia
            setIdClienteSelecionados(newListIdCliente); // Atualiza meu estado
            //setIdClienteSelecionados([...idClienteSelecionados, idCliente]); SPREAD OPERATOR, utilizando está linha podemos
            //                                                              retirar as linhas 49 e 51.
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div id="listCustomers-block">

            <MenuNavBar
                urlExit="/"
                urlRegistration="cadastroCliente"
            />

            <div className="table-listCustomers-block">
                <DataGrid getRowId={(rows) => rows.idCliente} rows={rows} columns={columns} pageSize={7} checkboxSelection onCellClick={addIdClienteSelected} />
            </div>

        </div>
    );
}

export default ListCustomers;