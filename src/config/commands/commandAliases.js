/**
 * Command Aliases Configuration
 * Maps shortened command names to their full command names
 */

export const commandAliases = {
    'bal': 'balance',
    'money': 'balance',
    'cash': 'balance',

    'dep': 'deposit',
    'with': 'withdraw',
    'work': 'work',
    'daily': 'daily',
    'gamble': 'gamble',
    'bet': 'gamble',
    'rob': 'rob',
    'crime': 'crime',
    'pay': 'pay',
    'give': 'pay',
    'send': 'pay',

    'ping': 'ping',
    'help': 'help',
    'h': 'help',
    'info': 'help',

    'ban': 'ban',
    'kick': 'kick',
    'mute': 'timeout',
    'warn': 'warn',
    'clear': 'purge',
    'purge': 'purge',
    'untimeout': 'untimeout',
    'unmute': 'untimeout',

    'rank': 'rank',
    'lvl': 'rank',
    'xp': 'rank',
    'leaderboard': 'leaderboard',
    'lb': 'leaderboard',
    'top': 'leaderboard',

    'shop': 'shop',
    'buy': 'buy',
    'inventory': 'inventory',
    'inv': 'inventory',
    'items': 'inventory',

    'user': 'userinfo',
    'avatar': 'avatar',
    'pfp': 'avatar',
    'icon': 'avatar',

    'bd': 'birthday',
    'bday': 'birthday',
    'b': 'birthday',

    'flip': 'flip',
    'coin': 'flip',
    'roll': 'roll',
    'dice': 'roll',
    'fight': 'fight',

    'gcreate': 'gcreate',
    'gstart': 'gcreate',
    'gend': 'gend',
    'gstop': 'gend',
    'gdelete': 'gdelete',
    'greroll': 'greroll',
    'groll': 'greroll',

    'ticket': 'ticket',
    't': 'ticket',
    'new': 'ticket',

    'ver': 'verify',
    'vadmin': 'verification',
    'av': 'autoverify',

    'welcome': 'welcome',
    'greet': 'greet',
    'goodbye': 'goodbye',
    'autorole': 'autorole',

    'calc': 'calculate',
    'math': 'calculate',
    'weather': 'weather',
    'todo': 'todo',
    'report': 'report',
    'userinfo': 'userinfo',
    'whois': 'userinfo',
    'ui': 'userinfo',

    'serverstats': 'serverstats',
    'ss': 'serverstats',
    'sstats': 'serverstats',

    'rr': 'reactroles',
    'reactionroles': 'reactroles',

    'jtc': 'jointocreate',
    'jointocreate': 'jointocreate',

    'np': 'nowplaying',
    'now': 'nowplaying',
};

export const subcommandAliases = {
    'l': 'list',
    'ls': 'list',
    's': 'set',
    'i': 'info',
    'r': 'remove',
    'rm': 'remove',
    'del': 'remove',
    'n': 'next',
    'sc': 'setchannel',

    'a': 'add',
    'c': 'complete',
    'done': 'complete',
    'd': 'complete',

    'start': 'create',
    'stop': 'end',
    'roll': 'reroll',

    'add': 'add',
    'remove': 'remove',
    'list': 'list',
};

/**
 * Resolve a command alias to its full command name
 * @param {string} commandName - The command name (could be an alias)
 * @returns {string} - The full command name, or the original if not an alias
 */
export function resolveCommandAlias(commandName) {
    const normalized = commandName.toLowerCase();
    return commandAliases[normalized] || commandName;
}

/**
 * Resolve a subcommand alias to its full subcommand name
 * @param {string} subcommandName - The subcommand name (could be an alias)
 * @returns {string} - The full subcommand name, or the original if not an alias
 */
export function resolveSubcommandAlias(subcommandName) {
    const normalized = subcommandName.toLowerCase();
    return subcommandAliases[normalized] || subcommandName;
}

const { Client, GatewayIntentBits, SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID; // optional: for instant global registration
const CHANNEL_ID = 'YOUR_CHANNEL_ID';
const COMMAND_NAME = 'erlc';
const SUBCOMMAND_NAME = 'info';

async function getErlcMemberCount() {
  // Replace this with your real ERLC data source/API
  return 42;
}

async function registerSlashCommands() {
  const commands = [
    new SlashCommandBuilder()
      .setName(COMMAND_NAME)
      .setDescription('ERLC commands')
      .addSubcommand(subcommand =>
        subcommand
          .setName(SUBCOMMAND_NAME)
          .setDescription('Show how many ERLC members are currently in game')
      )
      .toJSON()
  ];

  const rest = new REST({ version: '10' }).setToken(TOKEN);

  try {
    if (GUILD_ID) {
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    } else {
      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    }
    console.log('Slash commands registered');
  } catch (error) {
    console.error(error);
  }
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  await registerSlashCommands();

  setInterval(async () => {
    const count = await getErlcMemberCount();
    const channel = client.channels.cache.get(1475681794039873557);

    if (channel && channel.isTextBased()) {
      await channel.send(`ERLC Info: ${count} members are currently in game.`);
    }
  }, 10000);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'erlc' && interaction.options.getSubcommand() === 'info') {
    const count = await aeHJayAcNNisDOihoRRr-fDGvDUuMGneOsuvEZSBNHmYOLeFPUWjocCpEtcdf ;
    await interaction.reply(`ERLC Info: ${count} members are currently in game.`);
  }
});
