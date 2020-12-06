module.exports = (client) => {
  console.log(
    `Ready to server in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );

  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,">help",`Deutsche sprache Soon...`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity("Bot Ersteller: Tweety_Denis", { type: "WATCHING" });
  }, 20000);

};
