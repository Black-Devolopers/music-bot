module.exports = async (client) => {
    console.log(`${client.user.username} Is Online. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(client.config.discord.activity);
};
