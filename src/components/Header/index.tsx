import styles from './styles.module.scss';

export function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img src='/images/logoHorasLiquidas.svg' alt='Logo Horas Liquídas'/>
                <h1 className={styles.text}>Horas Liquídas</h1>
            </div>
            
        </header>
    );
}