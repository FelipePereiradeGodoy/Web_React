import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Input from '../../components/input/index';
import './styles.css';

const PageLogin = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {

        if (userName === "felipe" && password === "123")
            history.push("listaClientes");
        else {
            event.prevent.Default();
            alert("Usuario ou senha incorreto!");
        }

    };

    return (
        <div className="pageLogin-block">
            <form id="form-login" onSubmit={handleLogin}>

                <Input
                    name="userName"
                    textLabel="UserName:"
                    placeholder="felipe.godoy"
                    classDiv="div-input-block-login"
                    classLabel="lbl-userName-login"
                    classInput="input-userName-login"
                    onChange={(e) => { setUserName(e.target.value) }}
                />

                <Input
                    type="password"
                    textLabel="Password:"
                    placeholder="*****"
                    classDiv="div-input-block-login"
                    classLabel="lbl-password-login"
                    classInput="input-password-login"
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="submit" class="btn-sigin-login">
                    Sig in
            </button>

            </form>
        </div>
    );
}

export default PageLogin;