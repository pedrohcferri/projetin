
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2024 Meu Projeto. Todos os direitos reservados.</p>
        <div className={styles.links}>
          <a href="/privacy">Política de Privacidade</a>
          <a href="/terms">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;