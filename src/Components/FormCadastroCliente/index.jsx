import react from 'react';
import Input from '../Input/index';
import './FormCadastroCliente.css';

const FormCadastroCliente = () => {
    return (
        <div className="form-block">
            <form action="">

                <Input name="nome" textLabel="Nome:" placeholder="Fulano de tal" className="input-nome-block" />
                <Input name="cpf" textLabel="cpf:" placeholder="Fulano de tal" className="input-cpf-block" />
                <Input name="rg" textLabel="rg:" placeholder="Fulano de tal" className="input-rg-block" />
                <Input name="email" textLabel="email:" placeholder="Fulano de tal" className="input-email-block" />
                <Input name="telefone1" textLabel="telefone1:" placeholder="Fulano de tal" className="input-telefone1-block" />
                <Input name="dataNasc" textLabel="dataNasc:" placeholder="Fulano de tal" className="input-dataNasc-block" />

            </form>
        </div>
    );
}

export default FormCadastroCliente;