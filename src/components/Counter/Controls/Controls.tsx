import styles from './Controls.module.scss';

type Controls = {
    isActive: boolean;
    isPaused: boolean;
    handleStart: () => void;
    handlePauseResume: () => void;
    handleReset: () => void;
    handleSave: () => void;
}

export function Controls({
    isActive, 
    isPaused, 
    handleStart, 
    handlePauseResume, 
    handleReset,
    handleSave}: Controls) {
      

    const StartButton = (
        <button id={styles.buttonIniciar} onClick={handleStart}>Iniciar</button>
    );

    const PauseButton = (
        <button id={styles.buttonParar} onClick={handlePauseResume} disabled>Parar</button>
    )
    
    const PararButton = (
      <button id={styles.buttonParar} onClick={handlePauseResume}>Parar</button>
    )

    const ContinuarButton = (
      <button id={styles.buttonContinuar} onClick={handlePauseResume}>Continuar</button>
    )

    const SaveButton = (
      <button id={styles.buttonSalvar} onClick={handleSave}>Salvar</button>
  );


    const ActiveButtons = (
      <div className={styles.buttonsControl}>
        <button id={styles.buttonZerar} onClick={handleReset}>Zerar</button>

        {isPaused ? [ContinuarButton, SaveButton] : PararButton}

      </div>
    );

    const isInactive = (<div className={styles.buttonsControl}>
                            {[StartButton, PauseButton]}
                        </div>)
    
    return (
        <>
        {isActive ? ActiveButtons : isInactive}
        </>
    );
  }