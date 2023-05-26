import styles from './Cracha.module.css'
import imgFace from './img/facebook.png'
import imgInsta from './img/instagram.png'
import imgLinkedin from './img/linkedin.png'
import imgGit from './img/github.png'

function NewCracha (){
    const url = 'https://media.licdn.com/dms/image/D4E35AQF4l3cjWhP6uw/profile-framedphoto-shrink_200_200/0/1677705241136?e=1685214000&v=beta&t=PVaShzA6yJoWN6GVq5wSVpK0H9x9tmw9iYHVK62IRVY';



    return(
        <div className={styles.PrincipalDiv}>
            <section className={styles.crachaStyle}>
                <div>
                <img className={styles.perfilImg} src={url} alt="Matheus Fontenele"/>
                <h2>Matheus Fontenele</h2>
                </div>
                <div>
                    <ul className={styles.listSocial}>
                        <li><img src={imgFace} alt="Facebook"/></li>
                        <li><img src={imgInsta} alt="Instagram"/></li>
                        <li><img src={imgLinkedin} alt="Linkedin"/></li>
                        <li><img src={imgGit} alt="GitHub"/></li>
                    </ul>
                </div>
                <div>
                    <p>Desenvolvedor Frond-End Junior - HTML5 | CSS3 | JavaScript | React | Conhecimentos de designer em Figma e Adobe Illustrator | Analista de Sistemas ainda em formação | Open to work!</p>
                </div>
            </section>
        </div>
    )
}

export default NewCracha