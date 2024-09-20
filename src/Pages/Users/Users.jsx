
// import { createUser } from '../../http';
import { createUser } from '../../http';
import styles from './styles.module.css';



export function Users() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Coleta os dados do formulário
        const formData = new FormData(event.target);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const fone = formData.get('fone');
        const data_nascimento = formData.get('data_nascimento');
        
        const newUser = {
            nome,
            email,
            fone,
            data_nascimento
        };
       console.log(newUser);
       try {
        // Enviar dados para o servidor
        const response = await createUser(newUser);
        console.log('Usuário criado com sucesso:', response);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
};
   

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Cadastro de usuários</h1>

                    <label htmlFor="nome">Name</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="fone">Telefone</label>
                    <input type="tel" id="fone" name="fone" required />

                    <label htmlFor="date">Data</label>
                    <input type="date" id="data_nascimento" name="data_nascimento" required />

                    <button type="submit" className={styles.btn}>Enviar</button>
                </form>
            </div>
        </div>
    );
}