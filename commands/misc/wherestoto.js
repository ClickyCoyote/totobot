const debug = require('debug')('bot:wherestoto')
const moment = require('moment')
const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Time extends commando.Command {
  constructor(client) {
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
      if (hour >= 0 && hour <= 10) return msg.reply('Toto is sleeping!')
      if (hour >= 11) return msg.reply('Toto is gaming!')
    }

    // Weekday
    if (hour >= 0 && hour <= 8) return msg.reply('Toto is sleeping!')
    if (hour >= 9 && hour <= 16) return msg.reply('Toto is working!')
    if (hour === 17) return msg.reply('Toto is driving!')
    if (hour >= 18 && hour <= 23) return msg.reply('Toto is gaming!')
  }
}
