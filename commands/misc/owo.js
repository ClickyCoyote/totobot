const debug = require('debug')('bot:restart')
const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Time extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'owo',
      aliases: [],
      group: 'misc',
      memberName: 'owo',
      description: 'OwO',
      details: oneLine`
      `,
      examples: ['owo']
    })
  }

  async run(msg, args) {
    msg.reply('what\'s this?')
  }
}
