import React, { useCallback, useEffect, useState } from 'react';
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
    const [listCustomersDelete, setListCustomersDelete] = useState([]);


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

            const newListCustomersDelete = listCustomersDelete.slice(); // copio o array do meu state que está inicialmente vazio

            newListCustomersDelete.push(idCliente); // Adiciono o idCliente no array copia
            setListCustomersDelete(newListCustomersDelete); // Atualiza meu estado

        } catch (error) {
            console.log(error);
        }

    }

    const handleEdit = useCallback(() => {
        console.log("edit");
    });

    const handleDelete = useCallback(() => {
        //const newListCustomersDelete = listCustomersDelete.slice();
        //const newRows = [];
        let f = [];
        let flag = 0;

        listCustomersDelete.filter(idCliente => {
            console.log("==================");
            rows.find(element => {
                console.log("ementeId: " + element.idCliente);
                console.log("LisidCliente: " + idCliente);
                console.log("flag: " + flag);
                if ((element.idCliente !== idCliente) && (flag == 0)) {
                    flag = flag + 1;
                    f.push(element.idCliente);
                }
            });
            flag = 0;
        });

        console.log(f);


    }, [listCustomersDelete]);



    return (
        <div id="listCustomers-block">

            <MenuNavBar
                urlExit="/"
                urlRegistration="cadastroCliente"
                handleDelete={handleDelete}
            />

            <div className="table-listCustomers-block">
                <DataGrid getRowId={(rows) => rows.idCliente} rows={rows} columns={columns} pageSize={7} checkboxSelection onCellClick={addIdClienteSelected} />
            </div>

        </div>
    );
}

export default ListCustomers;