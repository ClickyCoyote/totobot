const debug = require('debug')('bot:table')
const moment = require('moment')
const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Table extends commando.Command {
  constructor (client) {
    super(client, {
      name: 'table',
      aliases: [],
      group: 'misc',
      memberName: 'table',
      description: 'TABLE TABLE TABLE TABLE TABLE',
      details: oneLine`
      `,
      examples: ['table']
    })
  }

  async run (msg, args) {
    return msg.reply(Array(Math.floor(Math.random() * 10) + 1).fill('TABLE').join(' '))
  }
}
