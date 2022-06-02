import styles from './stats.module.scss';
import { Bar } from 'react-chartjs-2'
import { data30, data } from './Data'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

export default function MainStats() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Estatísticas - 7 dias',
          },
        },
      };

      const options30 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Estatísticas - 30 dias',
          },
        },
      };

    return (
        <>
        <main className={`${styles.mainContainer} content`}>
            <div className={styles.mainContent}>
                <div className={styles.mainStats}>
                    <Bar options={options} data={data} width={400}></Bar>
                </div>
                <div className={styles.mainStats}>
                    <Bar options={options30} data={data30} width={400} redraw={true}></Bar>
                </div>
            </div>
        </main>
        </>
    );
}