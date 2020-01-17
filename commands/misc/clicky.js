const debug = require('debug')('bot:totodile')
const Discord = require('discord.js')
const path = require('path')
const fs = require('fs')

const commando = require('discord.js-commando')
const oneLine = require('common-tags').oneLine

module.exports = class Totodile extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'clicky',
      aliases: [],
      group: 'misc',
      memberName: 'clicky',
      description: 'clicky',
      details: oneLine`
      `,
      examples: ['clicky']
    })

    this.IMAGE_DIR = path.join(__dirname)
  }

  async run(msg, args) {
    try {
      const image = new Discord.Attachment(
        path.join(this.IMAGE_DIR, 'clickyspin.gif')
      )
      return msg.channel.send(image)
    } catch (err) {
      return msg.channel.send(err.message)
    }
  }
}
