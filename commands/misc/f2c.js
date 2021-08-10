const debug = require('debug')('bot:f2c')
const utils = require('../../util')
const querystring = require('querystring')
const Discord = require('discord.js')

const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Pokedex extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'f2c',
      aliases: ['fahrenheit', 'freedomunits'],
      group: 'misc',
      memberName: 'f2c',
      description: 'Convert freedom units to celsius(nearest whole number)',
      details: oneLine`
      `,
      examples: ['f2c 72'],

      args: [
        {
          key: 'fahrenheit',
          label: 'Degrees in Freedom Units',
          prompt: 'Enter degrees in freedom units',
          type: 'string',
          infinite: false
        }
      ]
    })
  }

  async run(msg, args) {
      const f = +(args.fahrenheit)
      const c = ((f - 32) / 1.8).toFixed(1)
      return msg.channel.send(`${c}°C`)
  }
}
