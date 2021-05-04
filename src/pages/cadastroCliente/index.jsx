import react, { useState } from 'react';
import Input from '../../components/input/index';
import api from '../../services/api';
import './styles.css';

const CadastroCliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [dataNasc, setDataNasc] = useState();


    const handleInsertCliente = (event) => {
        event.preventDefault();

        console.log(returnObjCliente());

        //api.post('clientes', { returnObjCliente }).
        //    then(() => {
        //        alert("Cadastro realizado com sucesso!");
        //        history.push('/');
        //    }).
        //    catch(() => {
        //        alert("Erro ao tentar realizar cadastro!");
        //    });
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
        <div className="page-cadastro-cliente-block">
            <form onSubmit={handleInsertCliente}>

                <Input
                    type="text"
                    name="nome"
                    textLabel="Nome:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setNome(e.target.value) }}
                />

                <Input
                    type="text"
                    name="cpf"
                    textLabel="CPF:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setCpf(e.target.value) }}
                />

                <Input
                    type="text"
                    name="rg"
                    textLabel="RG:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setRg(e.target.value) }}
                />

                <Input
                    type="email"
                    name="email"
                    textLabel="Email:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <Input
                    type="text"
                    name="telefone1"
                    textLabel="Telefone1:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setTelefone1(e.target.value) }}
                />

                <Input
                    type="date"
                    name="dataNasc"
                    textLabel="Data Nascimento:"
                    placeholder="Fulano de tal"
                    classDiv="div-input-block"
                    classLabel="label-block"
                    classInput="input-block"
                    onChange={(e) => { setDataNasc(e.target.value) }}
                />

                <button className="btn-salvar" type="submit">
                    Salvar
            </button>

            </form>
        </div>
    );
}

export default CadastroCliente;