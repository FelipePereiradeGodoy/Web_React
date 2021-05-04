import react, { useState } from 'react';
import Input from '../../components/input/index';
import './styles.css';

const CadastroCliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [dataNasc, setDataNasc] = useState();

    return (
        <div className="page-cadastro-cliente-block">
            <form action="">

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
        </div>
    );
}

export default CadastroCliente;