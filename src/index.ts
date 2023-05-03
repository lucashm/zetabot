import { Client, Events, GatewayIntentBits } from 'discord.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async interaction => {
	if (!client.user) return;
	const mentioned = interaction.mentions.users.has(client.user?.id.toString())
	if (!mentioned) return;
	if (interaction.content.toLowerCase().includes('muck')) {
		interaction.reply("Muck.")
		return;
	}

	if (interaction.author.id !== '86258636661227520') {
		interaction.reply(`Cala boca ${interaction.author.username}`)
		return;
	}

	if (interaction.content.includes('ping')) {
		interaction.reply('POGGERS.')
		return;
	}

	return;
});

client.login(process.env.BOT_TOKEN);
