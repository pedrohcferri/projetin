import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titlee}>
        <p>Meu Projeto</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;