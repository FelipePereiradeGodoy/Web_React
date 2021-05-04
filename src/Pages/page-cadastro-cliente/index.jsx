import react, { useState } from 'react';
import FormCadastroCliente from '../../Components/FormCadastroCliente/index';
import './page-cadastro-cliente.css';

const CadastroCliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [dataNasc, setDataNasc] = useState();

    return (
        <div className="page-cadastro-cliente-block">
            <FormCadastroCliente />
        </div>
    );
}

export default CadastroCliente;