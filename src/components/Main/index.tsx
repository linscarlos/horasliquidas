import { useState } from 'react';
import styles from './styles.module.scss';
import { Counter } from '../Counter';
import { Modal } from '../Modal';

export function Main() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <>
        <main className={`${styles.mainContainer} content`}>
            <div className={styles.mainContent}>
                <div className={styles.buttonsMain}>
                        <a href='/'><button><img src='/images/iconStopWatch.svg' alt='Icone Cronômetro' />Cronômetro</button></a>
                        <span className={styles.separatorButton}></span>
                        <a><button onClick={openModal}><img src='/images/iconSandClock.svg' alt='Icone Temporizador'/>Temporizador</button></a>
                </div>
                
                <Counter />
                <Modal showModal={showModal} setShowModal={setShowModal} />
                
            </div>
        </main>
        </>
    );
}