import Link from 'next/link';
import { useState } from 'react';
import { Modal } from '../MenuToggle';
import styles from './styles.module.scss';

export function Header() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <>
        <header>

            <div className={`${styles.headerContainer} header`}>

                <div onClick={openModal} className={`${styles.menuToggle} ${styles.on}`}>
                    <div className={styles.one}></div>
                    <div className={styles.two}></div>
                    <div className={styles.three}></div>
                </div>


                    <a href='/' className={styles.logo}>
                        <img src='/images/logoHorasLiquidas.svg' alt='Logo Horas Liquidas'/>
                        <h1 className={styles.text}>Horas Liquidas</h1>
                    </a>

            </div>
            
        </header>

    <Modal showModal={showModal} setShowModal={setShowModal} />

    </>
    );
}