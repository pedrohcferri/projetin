
import styles from './styles.module.css';


export function UserForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para processar os dados do formulário
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const date = formData.get('date');
        
        // Enviar dados para o servidor
        console.log({ name, email, phone, date });
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Seja bem-vindo</h1>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="date">Data</label>
                    <input type="date" id="date" name="date" required />

                    <button type="submit" className={styles.btn}>Enviar</button>
                </form>
            </div>
        </div>
    );
}