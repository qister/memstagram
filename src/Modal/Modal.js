import React, {useState, useContext} from 'react'
import './Modal.css'
import Context from '../context'

export default function Modal() {
    const [isOpen, setIsOpen] = useState(true)

    const {setLogin} = useContext(Context)
    const {hasUser} = useContext(Context)
    
    const login = (e, name) => {
        e.preventDefault()
        if (hasUser(name)) {
            setLogin(name)
            setIsOpen(false)
        }
    }

    return (
    <React.Fragment>
    <button onClick={() => setIsOpen(true)}>log in</button>
    {isOpen && (
        <div className='modal'>
            <div className='modal-body'>
                <form onSubmit={(e) => login(e, document.getElementById('loginField').value)}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label >Логин</label></td>
                                <td><input 
                                    id="loginField" 
                                    type="text" 
                                    name="login" 
                                    placeholder='guest' 
                                /></td>
                            </tr>
                            <tr>
                                <td><label >Пароль</label></td>
                                <td><input 
                                    id="passwordField" 
                                    type="password" 
                                    name="password"
                                /></td>
                            </tr>
                            <tr>
                                <td ><input 
                                    type="submit" 
                                    value="Войти"
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )}
    </React.Fragment>
    )
}

        // <React.Fragment>
        //     <button onClick={() => setIsOpen(true)}>log in</button>
        //     {isOpen && (
        //         <div className='modal'>
        //             <div className='modal-body'>
        //                 <p>Login as:</p>
        //                 <button onClick={() => login('Jonh')}>Jonh</button>
        //                 <button onClick={() => login('Lily')}>Lily</button>
        //             </div>
        //         </div>)}
        // </React.Fragment>