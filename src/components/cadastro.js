import styles from './CadForm.module.css';



var urlImg = 'https:via.placeholder.com/150'

function Form (){


    return(
        <div className={styles.PrincipalCad}>
            <form id='FormCad'>
                <fieldset>
                <legend>Sua foto</legend>
                    <div>
                        <img src={urlImg} alt='Imagem de Perfil'/>
                        <input type="file" name="FormCad" accept="image/png, image/jpeg"/>
                    </div>
                    <div>
                    <fieldset>
                                <legend>Cor do seu cracha</legend>
                            <input type="color" value="#000000"/>
                            </fieldset>
                    </div>
                </fieldset>

                <fieldset id='FormCad'>
                <legend>Nome</legend>
                <input id="nameInput" name='FormCad' type='text' placeholder='Digite o seu nome' />
                </fieldset>

                <fieldset  className={styles.MenuCad} id='FormCad'>
                    <legend>Social Medias</legend>
                    <button className={styles.btnSocial}>Facebook</button>
                    <button className={styles.btnSocial}>Instagram</button>
                    <button className={styles.btnSocial}>Linkedin</button>
                    <button className={styles.btnSocial}>GitHub</button>
                </fieldset>

                <fieldset id='FormCad'> 
                    <legend>Descrição ou principais atributos</legend>
                    <textarea name="FormCad"
          rows="5" cols="33"></textarea>
                </fieldset>
        <footer className={styles.MenuCadastro}> 
            <button type="submit" value="Submit">Cadastrar</button>
        </footer>
                
            </form>
        </div>


    )
}

export default Form