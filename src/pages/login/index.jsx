import react, { useState } from 'react';
import Input from '../../components/input/index';
import './styles.css';

const PageLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.prevent.Default();

        alert("UserName: " + userName);
        alert("Password: " + password);
    };

    return (
        <div className="pageLogin-block">
            <form onSubmit={handleLogin}>

                <Input
                    name="userName"
                    textLabel="UserName:"
                    placeholder="felipe.godoy"
                    classDiv="div-input-block"
                    classLabel="lbl-userName"
                    classInput="input-userName"
                    onChange={(e) => { setUserName(e.target.value) }}
                />

                <Input
                    type="password"
                    textLabel="Password:"
                    placeholder="*****"
                    classDiv="div-input-block"
                    classLabel="lbl-password"
                    classInput="input-password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="submit" class="btn-sigin">
                    Sig in
            </button>

            </form>
        </div>
    );
}

export default PageLogin;