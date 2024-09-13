import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');

    const inputChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (value.includes('o') || value.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        // se valida si tiene la letra "o" , "O" o esta vacio
        if (username === '' || username.includes('o') || username.includes('O')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nombre de usuario" // 
                value={username}
                onChange={inputChange}
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>{username}</p>
        </div>
    );
}

export default Login;