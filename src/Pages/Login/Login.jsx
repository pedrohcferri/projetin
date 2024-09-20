

import styles from './styles.module.css';

export function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para processar os dados do formulário
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Enviar dados para o servidor
        console.log({ email, password });
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Seja bem vindo</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit" className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    );
}