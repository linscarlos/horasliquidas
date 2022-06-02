import React, { SetStateAction } from 'react';
import styles from './Modal.module.scss';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ showModal, setShowModal }: Props) => {

    let optionString = [0];

        function whileLoop(options: Number){

            let loopCount = 0;
            optionString = [0];
            
            while(loopCount < options){
                loopCount++;
                optionString.push(loopCount)
            }
        }

    return (
        <>
        {showModal ? <div className={`${styles.active} ${styles.modalOverlay}`}>
            <div className={styles.modal}>
                <div className={styles.form}>
                <form>
                    <div className={styles.selectGruop}>
                        <div className={styles.inputGroup}>
                            <p>Horas</p>
                            <select name="hrs" id="hrs">
                                    <>
                                    {whileLoop(24)}
                                    {optionString.map(option => {
                                        return (<option key={option}>{option < 10 ? '0' + option : option}</option>)
                                    })}
                                    </>
                            </select>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <p>Minutos</p>
                            <select name="min" id="min">
                                    <>
                                    {whileLoop(60)}
                                    {optionString.map(option => {
                                        return (<option key={option}>{option < 10 ? '0' + option : option}</option>)
                                    })}
                                    </>
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <p>Segundos</p>
                            <select name="seg" id="seg">
                                    <>
                                    {whileLoop(60)}
                                    {optionString.map(option => {
                                        return (<option key={option}>{option < 10 ? '0' + option : option}</option>)
                                    })}
                                    </>
                            </select>
                        </div>
                    </div>
                    <div className={`${styles.inputButtons} ${styles.actions}`}>
                        <button id={styles.cancel} onClick={() => setShowModal(prev => !prev)}>Cancelar</button>
                        <button id={styles.save} type="submit">Salvar</button>
                    </div>
                </form>
                </div>
            </div>
        </div> : null }
        </>
    )
}