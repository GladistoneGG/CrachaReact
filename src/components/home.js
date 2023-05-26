import styles from './home.module.css'

function Home (){
    return (

        <div className={styles.boxPrincipal}>
            <div className={styles.boxDiv}>
                <button>Novo<br/>Cracha</button>
                <button>Carregar<br/>Cracha</button>
            </div>
        </div>

    )
}

export default Home