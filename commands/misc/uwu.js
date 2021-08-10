const axios = require('axios')
const debug = require('debug')('bot:pokedex')
const utils = require('../../util')
const querystring = require('querystring')
const Discord = require('discord.js')

const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Pokedex extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'uwu',
      aliases: [''],
      group: 'misc',
      memberName: 'uwu',
      description: 'uwu-fy ur text owo',
      details: oneLine`
      `,
      examples: ['uwu put your words here'],

      args: [
        {
          key: 'text',
          label: 'text',
          prompt: 'Enter text',
          type: 'string',
          infinite: false
        }
      ]
    })
  }

  async run(msg, args) {
      let newText = `${args.text}`
      newText = newText.replaceAll('u', 'uwu')
      return msg.channel.send(newText)
  }
}
