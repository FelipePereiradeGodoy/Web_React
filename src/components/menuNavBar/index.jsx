import React from 'react';
import { useHistory } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MenuNavBar = ({ handleDelete, handleEdit, urlExit, urlRegistration, ...rest }) => {
    const history = useHistory();

    const handleExit = () => {
        history.push(urlExit);
    }

    const handleRegistration = () => {
        history.push(urlRegistration);
    }




    return (
        <>
            <div className="menuNavBar-block" >
                <button id="btn-menuNavBar-exit" className="btn-menuNavBar" onClick={handleExit}>
                    <ExitToAppIcon id="icons-menuNavBar-exit" className="icons-menuNavBar" />
                </button>

                <button id="btn-menuNavBar-registration" className="btn-menuNavBar" onClick={handleRegistration}>
                    <AddBoxIcon id="icons-menuNavBar-registration" className="icons-menuNavBar" />
                </button>

                <button id="btn-menuNavBar-edit" className="btn-menuNavBar" onClick={handleEdit}>
                    <EditIcon id="icons-menuNavBar-edit" className="icons-menuNavBar" />
                </button>

                <button id="btn-menuNavBar-delete" className="btn-menuNavBar" onClick={handleDelete}>
                    <DeleteForeverIcon id="icons-menuNavBar-delete" className="icons-menuNavBar" />
                </button>

            </div>
        </>
    );
}

export default MenuNavBar;