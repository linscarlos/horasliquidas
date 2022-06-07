import styles from './comousar.module.scss';

export default function MainComoUsar() {

    return (
        <>
        <main className={`${styles.mainContainer} content`}>
            <div className={styles.mainContent}>
                <div className={styles.containerComoUsar}>
                    <h1>Como usar o Horas Líquidas</h1>

                    <p>O funcionamento do site é muito simples, existem duas opções para contabilizar o tempo de estudo. O <strong>Crônometro</strong> e o <strong>Temporizador</strong> veja como utilizar cada um deles:</p>

                    <h2>1. Crônometro</h2>

                    <p>Essa é a opção padrão do site, ao acessar a página principal, ou escolher no menu a opção <b>Crônometro</b>, bastar clicar na opção <b>Iniciar</b> que o contador vai ser iniciador.</p>
                    <img src='/images/comousar/Cronometro1.jpg' />

                    <h2>2. Temporizador</h2>

                    <p>Para escolher a opção <b>Temporizador</b> escolha no Menu da página inicial esta opção, ao clicar nela vai abrir uma nova janela, onde você determina o tempo que o temporizador vai contabilizar, depois disso clique em salvar e o temporizador será ativado imediamente.</p>
                    <img src='/images/comousar/Temporizador1.jpg' />
                    <p>Após finalizar o tempo, será acionado um som de alarme e o tempo será salvo automaticamente em suas estatísticas. Caso você não queira esperar o tempo finalizar, você pode pausar o temporizador e salvar o tempo contabilizado em suas estatísticas, clicando no botão salvar que aparece sempre que você pausa o contador.</p>
                    <img src='/images/comousar/Salvar.jpg' />
                    <p>Para salvar o tempo do contador padrão <b>(Crônometro)</b> em suas estatísticas, bastar pausar e clicar em salvar também.</p>

                    <h2>3. Estatísticas</h2>
                    <p>As estatísticas ficam salvas nos <b>cookies</b> do seu navegador, por isso para não perder suas informações de tempo, é necessário que o usuário tenha o cuidado para não excluir os cookies do nosso site.</p>
                </div>
            </div>
        </main>
        </>
    );
}