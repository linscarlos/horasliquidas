import { parseCookies } from "nookies"

const cookies = parseCookies();
const miliseg = 3600000
const miliSegMin = 60000


const dataCokies = {
    cookies7Days: [
        {Domingo7: Math.ceil(cookies.Domingo7 as any / miliseg)},
        {Segunda7: Math.ceil(cookies.Segunda7 as any / miliseg)},
        {Terca7: Math.ceil(cookies.Terca7 as any / miliseg)},
        {Quarta7: Math.ceil(cookies.Quarta7 as any / miliseg)},
        {Quinta7: Math.ceil(cookies.Quinta7 as any / miliseg)},
        {Sexta7: Math.ceil(cookies.Sexta7 as any / miliseg)},
        {Sabado7: Math.ceil(cookies.Sabado7 as any / miliseg)},
    ],
    cookies30Days: [
        {Domingo30: Math.ceil(cookies.Domingo30 as any / miliseg)},
        {Segunda30: Math.ceil(cookies.Segunda30 as any / miliseg)},
        {Terca30: Math.ceil(cookies.Terca30 as any / miliseg)},
        {Quarta30: Math.ceil(cookies.Quarta30 as any / miliseg)},
        {Quinta30: Math.ceil(cookies.Quinta30 as any / miliseg)},
        {Sexta30: Math.ceil(cookies.Sexta30 as any / miliseg)},
        {Sabado30: Math.ceil(cookies.Sabado30 as any / miliseg)},
    ]
}

const dataCokiesMin = {
    cookies7Days: [
        {Domingo7: Math.ceil(cookies.Domingo7 as any / miliSegMin)},
        {Segunda7: Math.ceil(cookies.Segunda7 as any / miliSegMin)},
        {Terca7: Math.ceil(cookies.Terca7 as any / miliSegMin)},
        {Quarta7: Math.ceil(cookies.Quarta7 as any / miliSegMin)},
        {Quinta7: Math.ceil(cookies.Quinta7 as any / miliSegMin)},
        {Sexta7: Math.ceil(cookies.Sexta7 as any / miliSegMin)},
        {Sabado7: Math.ceil(cookies.Sabado7 as any / miliSegMin)},
    ],
    cookies30Days: [
        {Domingo30: Math.ceil(cookies.Domingo30 as any / miliSegMin)},
        {Segunda30: Math.ceil(cookies.Segunda30 as any / miliSegMin)},
        {Terca30: Math.ceil(cookies.Terca30 as any / miliSegMin)},
        {Quarta30: Math.ceil(cookies.Quarta30 as any / miliSegMin)},
        {Quinta30: Math.ceil(cookies.Quinta30 as any / miliSegMin)},
        {Sexta30: Math.ceil(cookies.Sexta30 as any / miliSegMin)},
        {Sabado30: Math.ceil(cookies.Sabado30 as any / miliSegMin)},
    ]
}

export const data = {
    labels: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
    ],
    datasets: [
        {
            label: 'Horas Estudadas',
            data: [
                dataCokies.cookies7Days[1].Segunda7, 
                dataCokies.cookies7Days[2].Terca7, 
                dataCokies.cookies7Days[3].Quarta7, 
                dataCokies.cookies7Days[4].Quinta7, 
                dataCokies.cookies7Days[5].Sexta7, 
                dataCokies.cookies7Days[6].Sabado7, 
                dataCokies.cookies7Days[0].Domingo7
            ],
            backgroundColor: 'rgba(1, 126, 250, 0.8)',
        },
        {
            label: 'Minutos Estudados',
            hidden: true,
            data: [
                dataCokiesMin.cookies7Days[1].Segunda7, 
                dataCokiesMin.cookies7Days[2].Terca7, 
                dataCokiesMin.cookies7Days[3].Quarta7, 
                dataCokiesMin.cookies7Days[4].Quinta7, 
                dataCokiesMin.cookies7Days[5].Sexta7, 
                dataCokiesMin.cookies7Days[6].Sabado7, 
                dataCokiesMin.cookies7Days[0].Domingo7
            ],
            backgroundColor: 'rgba(201, 36, 36, 0.8)',
        }
    ],
}

export const data30 = {
    labels: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
    ],
    datasets: [
        {
            label: 'Horas Estudadas',
            data: [
                dataCokies.cookies30Days[1].Segunda30, 
                dataCokies.cookies30Days[2].Terca30, 
                dataCokies.cookies30Days[3].Quarta30, 
                dataCokies.cookies30Days[4].Quinta30, 
                dataCokies.cookies30Days[5].Sexta30, 
                dataCokies.cookies30Days[6].Sabado30, 
                dataCokies.cookies30Days[0].Domingo30
            ],
            backgroundColor: 'rgba(8, 26, 81, 0.99)',
        },
        {
            label: 'Minutos Estudados',
            hidden: true,
            data: [
                dataCokiesMin.cookies30Days[1].Segunda30, 
                dataCokiesMin.cookies30Days[2].Terca30, 
                dataCokiesMin.cookies30Days[3].Quarta30, 
                dataCokiesMin.cookies30Days[4].Quinta30, 
                dataCokiesMin.cookies30Days[5].Sexta30, 
                dataCokiesMin.cookies30Days[6].Sabado30, 
                dataCokiesMin.cookies30Days[0].Domingo30
            ],
            backgroundColor: 'rgba(201, 36, 36, 0.8)',
        }
    ],
}