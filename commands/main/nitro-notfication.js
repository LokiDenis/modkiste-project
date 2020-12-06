module.exports.run = async (client, message, args) => {

client.on("guildMemberUpdate", async (oldMember, newMember) => {

    // Boost

    if (!oldMember.premiumSince && newMember.premiumSince) {

        return client.channels.cache.get("782203612566519828").send(`Thank you **${newMember.user.tag}** for becoming a Nitro Booster! You have unlocked:
1) Zugriff auf <#782204299102126100>
2) Zugriff auf premium bot
3) Du erfährst die neuigkeiten viel früher
4) Zugriff auf Nitro Booster role`)

    }

})
};
