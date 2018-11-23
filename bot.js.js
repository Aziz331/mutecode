
const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "??????";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "f!mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** ?? ???? ???? ????? 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** ?? ???? ???? ?????? 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** ??? ???? ????? ??? ?????**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('?????????:', '????/????')
      .addField('?? ????:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('??????:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ?? ???? ??? ????? Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. ?? ????? ????? ????**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. ?? ????? ????? ???? ?????**").catch(console.error);
  });
    }
  
  };
  
  });

client.login(process.env.BOT_TOKEN);