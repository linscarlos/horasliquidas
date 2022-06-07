import { useEffect, useState } from "react";
import returnTemporizador from "./[dataTemporizador]"; 
import { Controls } from "./Controls/Controls"; 
import { Timer } from "./Timer/Timer"; 
import { parseCookies, setCookie } from 'nookies';
import styles from "./styles.module.scss";


// VARIAVEIS DE CONTROLE
let counterStats = 0;
let controlTemporizador = true;

export function Counter(){

        // VARIAVEIS CONTADOR + TEMPORIZADOR
        const [isActive, setIsActive] = useState(false);
        const [isPaused, setIsPaused] = useState(true);
        const [time, setTime] = useState(0);

        let controlStart = false;

        // VARIAVEIS E COOKIES PARA SALVAR NAS ESTATÍSTICAS 
        const today = new Date();
        const dayWeek = ['Domingo7', 'Segunda7', 'Terca7', 'Quarta7', 'Quinta7', 'Sexta7', 'Sabado7']
        const dayMonth = ['Domingo30', 'Segunda30', 'Terca30', 'Quarta30', 'Quinta30', 'Sexta30', 'Sabado30']
        const cookies = parseCookies();

        let dayWeekCookie = dayWeek[today.getDay()];
        let dayMonthCookie = dayMonth[today.getDay()];

        let sumDayWeekCookie = parseInt(cookies[dayWeekCookie]) + counterStats;
        let sumDayMonthCookie = parseInt(cookies[dayMonthCookie]) + counterStats;

        useEffect(() => {
          let intervall = null as any;

          const music = new Audio('/audios/StopWatch.mp3');

          // VERIFICAÇÃO SE temporizadorResult EXISTE, NESSE CASO VAI INICIAR A OPÇÃO TEMPORIZADOR
          if(counterStats < temporizadorResult){
            if(controlTemporizador){

              const handleTemp = () => {
                if(counterStats < temporizadorResult){

                  // VERIFICAR SE O USUÁRIO ESTÁ NA ABA OU SAIU DELA
                  if(document.hidden === true){
                    setTime((time) => time - 1000);
                    counterStats = counterStats + 1000;
                  } else {
                    setTime((time) => time - 10);
                    counterStats = counterStats + 10;
                  }
                } else {
                  music.play();
                  handleSave();
                  handleReset();
                  clearInterval(intervall);
                  controlTemporizador = false;
                }
              }

              if (isActive && isPaused === false) {

                  intervall = setInterval(() => {
                    handleTemp()
                  }, 10);
              } else {
                clearInterval(intervall);
              }
            }

          // LOGICA PARA O CRÔNOMETRO INICIAR
          } else if (isActive && isPaused === false) {
              intervall = setInterval(() => { 

                if(document.hidden === true){
                  setTime((time) => time + 1000);
                  counterStats = counterStats + 1000;
                } else {
                  setTime((time) => time + 10);
                  counterStats = counterStats + 10;
                }

              }, 10);
            } else {
              clearInterval(intervall);
            }
          
          return () => {
            clearInterval(intervall);
          };

        }, [isActive, isPaused]);
        
        const handleStart = () => {
          // CONDIÇÃO PARA O TIME RECEBER OS DADOS DO TEMPORIZADOR, JÁ QUE NESSE CASO SE TRATA DE UMA SUBTRAÇÃO DE MILISEGUNDOS
          if(temporizadorResult){
            if(controlTemporizador){
              setTime(temporizadorResult)
            }
          }
          setIsActive(true);
          setIsPaused(false);
        };
        
        const handlePauseResume = () => {
          setIsPaused(!isPaused);
        };
        
        const handleReset = () => {
          setIsActive(false);
          setTime(0);
          controlTemporizador = true;
          counterStats = 0;
        };

        const handleSave = () => {

          // VERIFICAÇÃO PARA SABER SE OS COOKIES JÁ POSSUI DADOS CADASTRADOS PARA FAZER A SOMA OU CRIAR O 1° VALOR
          {cookies[dayWeekCookie] ? (sumDayWeekCookie = parseInt(cookies[dayWeekCookie]) + counterStats) : (sumDayWeekCookie = counterStats)}
          {cookies[dayMonthCookie] ? (sumDayMonthCookie = parseInt(cookies[dayMonthCookie]) + counterStats) : (sumDayMonthCookie = counterStats)}

          setCookie(null, dayWeekCookie, `${sumDayWeekCookie}`, {
            maxAge: 86400 * 7,
            path: '/'
          }),
          setCookie(null, dayMonthCookie, `${sumDayMonthCookie}`, {
            maxAge: 86400 * 7 * 4 * 12,
            path: '/'
          }),
          handleReset(),
          alert('Tempo salvo em suas estatísticas!')
        }

        // DADOS DO TEMPORIZADOR, CASO O USUÁRIO TENHA ESCOLHIDO ESSA OPÇÃO
        let temporizadorHrs = returnTemporizador();
        let temporizadorResult = (temporizadorHrs.props.children[0] * 3600000) + (temporizadorHrs.props.children[2] * 60000) + (temporizadorHrs.props.children[4] * 1000);

        // CONDIÇÃO PARA REPASSAR AO <TIMER /> SE O USUÁRIO ESCOLHEU A OPÇÃO TEMPORIZADOR
        {temporizadorResult && (controlStart = (true))}

        

        return (
          <div className={styles.counterMain}>
          <>
              <Timer time={time} controlStart={controlStart} handleStart={handleStart}/>
              <Controls
                isActive={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                handleSave={handleSave}
              />
          </>
          </div>
        );
}