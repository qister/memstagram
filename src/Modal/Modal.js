import React, {useState, useContext} from 'react'
import './Modal.css'
import Context from '../context'

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)

    const {setLogin} = useContext(Context)
    const login = (name) => {
        setLogin(name)
        setIsOpen(false)
    }

    return (
        <React.Fragment>
            <button onClick={() => setIsOpen(true)}>log in</button>
            {isOpen && (
                <div className='modal'>
                    <div className='modal-body'>
                        <p>Login as:</p>
                        <button onClick={() => login('Jonh')}>Jonh</button>
                        <button onClick={() => login('Lily')}>Lily</button>
                    </div>
                </div>)}
        </React.Fragment>
    )
}