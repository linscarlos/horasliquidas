import React, { SetStateAction } from 'react';
import styles from './MenuToggle.module.scss';
import { ActiveLink } from '../ActiveLink';
import { IoIosStats, IoMdAlarm } from 'react-icons/io';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ showModal, setShowModal }: Props) => {

    return (
        <>
        {showModal ? <div className={`${styles.active} ${styles.modalOverlay}`}>
            <div className={styles.sidebarContainer}>
            <div className={styles.menu}>
            <div onClick={() => setShowModal(prev => !prev)} className={styles.menuToggle}>
                    <div className={styles.one}></div>
                    <div className={styles.two}></div>
                    <div className={styles.three}></div>
                </div>
                <p>Menu</p>
            </div>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                            <ActiveLink className={styles.iconSide} activeClassName={`${styles.iconSide} ${styles.active}`} href="/">
                            <a><IoMdAlarm className={styles.iconStyle} />Cronômetro</a>
                            </ActiveLink>
                    </li>
                    <li>
                            <ActiveLink className={styles.iconSide} activeClassName={`${styles.iconSide} ${styles.active}`} href="/stats">
                            <a><IoIosStats className={styles.iconStyle} />Estatísticas</a>
                            </ActiveLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.sessionHelpContainer}>
                
                <div className={styles.sessionHelp}>
                    <img className={styles.iconInterrogacao} src='/images/iconInterrogacao.svg' />
                    <p>Precisa de ajuda?</p>
                    <a href='/comousar'><button>Veja como usar</button></a>
                </div>
            </div>
            </div>
        </div> : null }
        </>
    )
}