const debug = require('debug')('bot:restart')
const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Time extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'restart',
      aliases: ['reboot'],
      group: 'misc',
      memberName: 'restart',
      description: 'Restart',
      details: oneLine`
      `,
      examples: ['restart']
    })
  }

  later(delay, value) {
    return new Promise(resolve => setTimeout(resolve, delay, value))
  }

  async run(msg, args) {
    msg.reply('Restarting...')
    await this.later(Math.random() * 4000 + 1000)
    msg.reply('Bot restarted successfully!')
  }
}
