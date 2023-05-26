import { useState } from 'react'
import styles from './login.module.css'

function Login(){

    function loginUser(){
        
    console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <form onSubmit={loginUser}>
            <fieldset htmlFor="LogUser" className={styles.loginCheck}>
                <legend>Login</legend>
                <input name="LogUser" type="text" placeholder="Seu User name" onChange={(e) => setName(e.target.value)} />
                <input name="LogUser" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </fieldset>
            </form>
        </div>
    )
}

export default Login