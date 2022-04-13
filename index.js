/**
 * Justin Greever
 * Last Edited: 2022-03-12
 *
 * GaryTheDirty - Discord Bot
 * index.js
 * Example: node index.js
 *
 */

// import zlib-sync for compression/decompression
require('zlib-sync');

// import @discordjs/voice for voice connection
require('@discordjs/voice');

// import eslint for linting
require('eslint');

// import token from .env file using dotenv if the TOKEN
// environment variable is not already set.
require('dotenv').config();
let TOKEN = null;
if (process.env.TOKEN) {
	{ TOKEN = process.env.TOKEN; }
}
else {
	{ TOKEN = require('dotenv').config().parsed; }
}


// set prefix for bot commands
const PREFIX = '.';

// import discord.js
const Discord = require('discord.js');
const ytdl = require('ytdl-core');

// login to discord using TOKEN
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'] });

// display GPLv3 license in console
console.log(`\n\n    GaryTheDirty.js  Copyright (C) 2021  Justin Greever
    This program comes with ABSOLUTELY NO WARRANTY.
    This is free software, and you are welcome to 
    redistribute it under certain conditions.
    Please refer to the license for further information:
    [https://www.gnu.org/licenses/gpl-3.0-standalone.html]\n\n`);

// display successful login message
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!\n`);
});

// listen for messages
client.on('messageCreate', async (msg) => {
	// ignore messages that don't start with the prefix
	if (!msg.content.startsWith(PREFIX)) return;

	// parse the message received
	const args = msg.content.slice(PREFIX.length).split(/ +/);
	const command = args.shift().toLowerCase();

	// create a ping command
	if (command === 'ping') {
		await msg.reply('pong!');
	}

	// send embed with user avatar
	if (command === 'myavatar') {
		const embed = new Discord.MessageEmbed()
			.setTitle('All about you!')
			.setAuthor(msg.author.username)
			.setFooter('Brought to you by GaryTheDirty.js')
			.setDescription(`${msg.author.username}'s avatar:`)
			.setColor('#fb00ff')
			.setImage(msg.author.avatarURL())
			.setTimestamp();
		await msg.reply({ embeds: [embed] });
	}

	// create a membercount command and reply to the user with the online member count in the guild
	if (command === 'membercount') {
		await msg.reply(`There are ${msg.guild.memberCount} members in this server!`);
	}

	// create a poll from the users last message with a checkmark and x emoji using the reaction command
	if (command === 'poll') {
		await msg.react('✅');
		await msg.react('❌');
	}

	// create a command to embed the url from the message and pin it to the channel
	if (command === 'pin') {
		await msg.pin();
	}

	// create a command to delete the previous x messages in the channel
	if (command === 'purge') {
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return msg.reply('That doesn\'t seem to be a valid number.');
		}
		await msg.channel.bulkDelete(amount, true);
	}

	// create a command to play audio from a YouTube url to the voice channel the user requesting it is in and create
	// a queue for the user to play audio from
	// if (command === 'play') {
	// 	const voiceChannel = msg.member.voice.channel;
	// 	if (!voiceChannel) {
	// 		return msg.reply('You need to be in a voice channel to play music!');
	// 	}
	// 	const permissions = voiceChannel.permissionsFor(msg.client.user);
	// 	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
	// 		return msg.reply('I need the permissions to join and speak in your voice channel!');
	// 	}
	// 	const songInfo = await ytdl.getInfo(args[0]);
	// 	const song = {
	// 		title: songInfo.title,
	// 		url: songInfo.video_url,
	// 	};
	// 	if (!client.queue) client.queue = [];
	// 	client.queue.push(song);
	// 	if (!client.dispatcher) client.queue.play(msg);
	// }
});

client.login(TOKEN).then(() => {
	console.log('\nReady to rock and roll!\n');
});
