import { Telegraf, Markup } from "telegraf"
import {message} from "telegraf/filters"


const token = `6931777585:AAG12pLOPMqHnGd2WeOkZCGbXGMzpWdtcRo`

const webAppUrl = 'https://angular-tg-app-fa414.web.app'

const bot = new Telegraf(token)

bot.command('start', (cntxt)=>{
    cntxt.reply(
        'Добро пожаловать! Кликните на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                webAppUrl + '/feedback'
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx =>{
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение ${data?.feedback}`?? 'empty message')
})

bot.launch()