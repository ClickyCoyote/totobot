const debug = require('debug')('bot:wherestoto')
const moment = require('moment')
const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class WheresToto extends commando.Command {
  constructor (client) {
    super(client, {
      name: 'wherestoto',
      aliases: [],
      group: 'misc',
      memberName: 'wherestoto',
      description: 'Where is Toto?',
      details: oneLine`
      `,
      examples: ['wherestoto']
    })
  }

  async run(msg, args) {
    const weekday = moment()
      .utcOffset(-8)
      .day()
    const hour = moment()
      .utcOffset(-8)
      .hour()

    // Weekend
    if (weekday === 0 || weekday === 6) {
      if (hour >= 0 && hour <= 12) return msg.reply('Toto is sleeping!')
      if (hour >= 13 && hour <= 15) return msg.reply('Toto is at home!')
      if (hour === 16) return msg.reply('Toto is at In \'n Out Burger!')
      if (hour >= 17 && hour <= 23) return msg.reply('Toto is at home!')
    }

    // Weekday
    if (hour >= 0 && hour <= 8) return msg.reply('Toto is sleeping!')
    if (hour >= 9 && hour <= 15) return msg.reply('Toto is working!')
    if (hour === 16) return msg.reply('Toto is driving!')
    if (hour >= 17 && hour <= 23) return msg.reply('Toto is at home!')
  }
}
