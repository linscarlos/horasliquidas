import styles from './styles.module.scss';
import { IoIosStats, IoMdAlarm } from 'react-icons/io'
import { ActiveLink } from '../ActiveLink';

export function Sidenav() {
    return (
        <div className={`sidenav ${styles.sidebarContainer}`}>
            <div className={styles.menu}>
                <img src='/images/iconMenu.svg' alt='Icone Menu Horas Liquídas'/>
                <p>Menu</p>
            </div>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                            <ActiveLink className={styles.iconSide} activeClassName={`${styles.iconSide} ${styles.active}`} href="/">
                            <a><IoMdAlarm size={24} className={styles.iconStyle} />Cronômetro</a>
                            </ActiveLink>
                    </li>
                    <li>
                            <ActiveLink className={styles.iconSide} activeClassName={`${styles.iconSide} ${styles.active}`} href="/stats">
                            <a><IoIosStats size={24} className={styles.iconStyle} />Estatísticas</a>
                            </ActiveLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.sessionHelpContainer}>
                
                <div className={styles.sessionHelp}>
                    <img className={styles.iconInterrogacao} src='/images/iconInterrogacao.svg' />
                    <p>Precisa de ajuda?</p>
                    <button>Veja como usar</button>
                </div>
            </div>
        </div>
    )
}