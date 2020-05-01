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
      name: 'pokedex',
      aliases: ['pokédex'],
      group: 'pokedex',
      memberName: 'pokedex',
      description: 'Retrieve Pokédex info.',
      details: oneLine`
      `,
      examples: ['pokedex 448', 'pokedex lucario'],

      args: [
        {
          key: 'pokemon',
          label: 'Pokémon',
          prompt: 'Enter Pokémon name or number.',
          type: 'string',
          infinite: false
        }
      ]
    })
    this.pokedexBaseUri = 'https://pokeapi.co/api/v2/'
  }

  async run(msg, args) {
    try {
      const info = await this.info(args.pokemon)
      return info.sprite
        ? msg.channel.send(
            this.formatInfo(info),
            new Discord.Attachment(info.sprite)
          )
        : msg.channel.send(this.formatInfo(info))
    } catch (err) {
      return msg.channel.send(err.message)
    }
  }

  /**
   * Formats a Pokémon info object into a string
   *
   * @param info Object
   * @returns {string}
   */
  formatInfo(info) {
    return (
      '#' +
      info.id +
      ': ' +
      utils.toCapitalized(info.name) +
      '\n' +
      'Type: ' +
      utils.toCapitalized(info.type)
    )
  }

  async info(pokemon) {
    try {
      const response = await axios.get(
        this.pokedexBaseUri +
          'pokemon/' +
          querystring.escape(pokemon.trim().toLowerCase())
      )
      const data = response.data
      const info = {
        id: data.id,
        name: data.species.name,
        type: data.types.reduce((acc, val) => `${acc} ${val.type.name}`, ''),
        sprite: data.sprites.front_default
      }

      return info
    } catch (err) {
      debug(err)
      throw new Error("Sorry, I've never heard of that Pokémon!")
    }
  }
}
