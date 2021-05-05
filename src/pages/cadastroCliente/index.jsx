import React, { useState } from 'react';
import Input from '../../components/input/index';
import api from '../../services/api';
import './styles.css';

const CadastroCliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [dataNasc, setDataNasc] = useState("");


    const handleInsertCliente = (event) => {
        event.preventDefault();

        api.post('clientes', returnObjCliente())
            .then(() => {
                alert("Cadastro realizado com sucesso!");
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
    }


    const returnObjCliente = () => {
        const cliente = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            email: email,
            telefone1: telefone1,
            dataNasc: dataNasc
        };

        return cliente;
    }

    return (
        <div className="page-cadastrocliente-block">
            <form id="form-cadastroCliente" onSubmit={handleInsertCliente}>

                <Input
                    type="text"
                    name="nome"
                    textLabel="Nome:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setNome(e.target.value) }}
                />

                <Input
                    type="text"
                    name="cpf"
                    textLabel="CPF:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setCpf(e.target.value) }}
                />

                <Input
                    type="text"
                    name="rg"
                    textLabel="RG:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setRg(e.target.value) }}
                />

                <Input
                    type="text"
                    name="email"
                    textLabel="Email:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <Input
                    type="text"
                    name="telefone1"
                    textLabel="Telefone1:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setTelefone1(e.target.value) }}
                />

                <Input
                    //type="date"
                    name="text"
                    textLabel="Data Nascimento:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block-cadastroCliente"
                    classLabel="label-block-cadastroCliente"
                    classInput="input-block-cadastroCliente"
                    onChange={(e) => { setDataNasc(e.target.value) }}
                />

                <button className="btn-salvar-cadastroCliente" type="submit">
                    Salvar
            </button>

            </form>
        </div>
    );
}

export default CadastroCliente;