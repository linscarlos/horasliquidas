import styles from './Timer.module.scss';

interface Time {
    time: number;
    controlStart: boolean;
    handleStart: () => void;
}

let startTime = true;

export function Timer({ time, controlStart, handleStart }: Time) {


// INICIAR TEMPORIZADOR AUTOMATICAMENTE
  if(controlStart){
    if(startTime){
      handleStart()
      startTime = false;
    }
  }

    return (
        <>
      <p className={styles.timer}>
        {Math.floor((time / 3600000) % 60) >= 1 && (<span>
          {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
        </span>)}
        <span>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className={styles['mili-sec']}>
        {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </p>
      </>
    );
  }