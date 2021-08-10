const debug = require('debug')('bot:c2f')
const utils = require('../../util')
const querystring = require('querystring')
const Discord = require('discord.js')

const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Pokedex extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'c2f',
      aliases: ['celsius'],
      group: 'misc',
      memberName: 'c2f',
      description: 'Convert celsius to freedom units (nearest whole number)',
      details: oneLine`
      `,
      examples: ['c2f 22'],

      args: [
        {
          key: 'celsius',
          label: 'Degrees in Celsius',
          prompt: 'Enter degrees in celsius',
          type: 'string',
          infinite: false
        }
      ]
    })
  }

  async run(msg, args) {
      const c = +(args.celsius)
      const f = Math.round((c * 1.8) + 32)
      return msg.channel.send(`${f}°F`)
  }
}
