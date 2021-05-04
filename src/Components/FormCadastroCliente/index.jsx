import react from 'react';
import Input from '../Input/index';
import './FormCadastroCliente.css';

const FormCadastroCliente = () => {
    return (
        <form action="" method="POST">

            <Input
                name="nome"
                textLabel="Nome:"
                placeholder="Fulano de tal"
                id="input-nome"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <Input
                name="cpf"
                textLabel="CPF:"
                placeholder="Fulano de tal"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <Input
                name="rg"
                textLabel="RG:"
                placeholder="Fulano de tal"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <Input
                name="email"
                textLabel="Email:"
                placeholder="Fulano de tal"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <Input
                name="telefone1"
                textLabel="Telefone1:"
                placeholder="Fulano de tal"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <Input
                name="dataNasc"
                textLabel="Data Nascimento:"
                placeholder="Fulano de tal"
                classDiv="div-input-block"
                classLabel="label-block"
                classInput="input-block"
            />

            <button className="btn-salvar">
                Salvar
            </button>

        </form>

    );
}

export default FormCadastroCliente;