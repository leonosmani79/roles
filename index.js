require("dotenv").config(); // load .env first

const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Partials
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

// ----------------⚠️ ENV TOKEN ⚠️---------------- //
const TOKEN = process.env.TOKEN; // comes from .env

// Role IDs
const ROLE1 = "1442571428808364244";   // 14:00
const ROLE2 = "1442571794564382901";   // 16:00
const ROLE3 = "1442571814147723405";   // 18:00
const ROLE4 = "1442571843549790260";   // 20:00
const ROLE5 = "1442571871374671872";   // 23:00
const ROLE6 = "1442573396943573043";   // 01:00

// Emoji IDs
const EMOJI1_ID = "1446232741401067560";
const EMOJI2_ID = "1446232776381825125";
const EMOJI3_ID = "1446232814684082176";
const EMOJI4_ID = "1446232850243518587";
const EMOJI5_ID = "1446232884154339471";
const EMOJI6_ID = "1446232913766121563";

// Images
const TOP_ATTACHMENT_URL = "https://cdn.discordapp.com/attachments/1442579419175846009/1446191371131158710/darksideroles-ezgif.com-video-to-gif-converter.gif?ex=6933162b&is=6931c4ab&hm=41ebd19fde284f69d134bd8000a08c9df27d673f4b1c6eece7286bf053420202&";
const EMBED_IMAGE_URL   = "https://media.discordapp.net/attachments/1442579419175846009/1446173219819225188/ERANGEL-DARKSIDE5-ezgif.com-video-to-gif-converter.gif?ex=69330544&is=6931b3c4&hm=e46ec2e47a9a865184a1d8e637f877ed9291290a4f825f4737e183fe9990ab47&=&width=550&height=44";
// -------------------------------------------------- //

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content === "!roles") {

        const embed = new EmbedBuilder()
            .setAuthor({
                name: "DarkSide Roles",
                iconURL: "https://cdn.discordapp.com/attachments/1442579329866268792/1446057487441592341/ChatGPT_Image_Dec_4_2025_09_17_39_AM.png"
            })
            .setTitle("**𝑮𝒆𝒕 𝒀𝒐𝒖𝒓 𝑹𝒐𝒍𝒆𝒔! <a:earthblue:1446169092590538865>**")
            .setDescription(
                "<a:div1:1446165993960378599><a:div2:1446166165746618469><a:div3:1446166354175725638><a:div4:1446166505082454168><a:div5:1446167259943800985><a:div6:1446166847367024766><a:div7:1446167035649458197>\n" +
                "**- 𝑮𝒆𝒕 𝒀𝒐𝒖𝒓 𝑺𝒄𝒓𝒊𝒎𝒔 𝑹𝒐𝒍𝒆 𝑾𝒊𝒕𝒉 𝑱𝒖𝒔𝒕 𝒂 𝑪𝒍𝒊𝒄𝒌! <a:Gears_Loading:1446169140405473411>\n\n" +
                "- 𝑹𝒆𝒂𝒅 𝑻𝒉𝒆 𝑹𝒖𝒍𝒆𝒔 𝒐𝒇 𝑻𝒉𝒆 𝑺𝒄𝒓𝒊𝒎𝒔 𝑩𝒆𝒇𝒐𝒓𝒆 𝑷𝒍𝒂𝒚𝒊𝒏𝒈! <a:blue:1446169257049198633>\n\n" +
                "- 𝑽𝒊𝒑 𝑹𝒐𝒍𝒆𝒔 𝑶𝒏𝒍𝒚 𝑭𝒓𝒐𝒎 𝑩𝒐𝒐𝒔𝒕𝒔/𝑽𝒊𝒑𝑺𝒍𝒐𝒕𝒔 <a:emojigg_LOL:1446167975953563668>  \n\n" +
                "- 𝑨𝒅𝒗𝒂𝒄𝒆𝒏𝒅 𝑹𝒐𝒍𝒆 𝑷𝒂𝒓𝒕𝒏𝒆𝒓/𝑺𝒕𝒂𝒇𝒇 𝑶𝒏𝒍𝒚 𝑭𝒓𝒐𝒎 𝑻𝒊𝒄𝒌𝒆𝒕 <a:lightning:1446066544101560412>**\n" +
                "<a:div1:1446165993960378599><a:div2:1446166165746618469><a:div3:1446166354175725638><a:div4:1446166505082454168><a:div5:1446167259943800985><a:div6:1446166847367024766><a:div7:1446167035649458197>\n" +
                "**- 𝑻𝒐 𝑶𝒑𝒆𝒏 𝑻𝒊𝒄𝒌𝒆𝑻 𝑭𝒐𝒓 𝑺𝑻𝑨𝑭𝑭! <#1442593280356384868>\n" +
                "- 𝑻𝒐 𝑶𝒑𝒆𝒏 𝑻𝒊𝒄𝒌𝒆𝑻 𝑭𝒐𝑹 𝑷𝑨𝑹𝑻𝑵𝑬𝑹𝑺! <#1443765285621334148>**"
            )
            .setImage(EMBED_IMAGE_URL)
            .setThumbnail("https://cdn.discordapp.com/attachments/1442574799229681835/1446179148740690024/Untitleddesign12-ezgif.com-gif-maker.gif")
            .setColor(5999554);

        // 6 buttons (2 rows)
        const row1 = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId(ROLE1)
                .setLabel("14:00")
                .setEmoji({ id: EMOJI1_ID, animated: true })
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(ROLE2)
                .setLabel("16:00")
                .setEmoji({ id: EMOJI2_ID, animated: true })
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(ROLE3)
                .setLabel("18:00")
                .setEmoji({ id: EMOJI3_ID, animated: true })
                .setStyle(ButtonStyle.Primary)
        );

        const row2 = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId(ROLE4)
                .setLabel("20:00")
                .setEmoji({ id: EMOJI4_ID, animated: true })
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(ROLE5)
                .setLabel("23:00")
                .setEmoji({ id: EMOJI5_ID, animated: true })
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(ROLE6)
                .setLabel("01:00")
                .setEmoji({ id: EMOJI6_ID, animated: true })
                .setStyle(ButtonStyle.Primary)
        );

        await message.channel.send({
            files: [{ attachment: TOP_ATTACHMENT_URL }],
            embeds: [embed],
            components: [row1, row2]
        });
    }
});

// ROLE TOGGLE
client.on("interactionCreate", async interaction => {
    if (!interaction.isButton()) return;

    const role = interaction.guild.roles.cache.get(interaction.customId);
    const member = interaction.member;

    if (!role) {
        return interaction.reply({ content: "Role not found.", ephemeral: true });
    }

    try {
        if (member.roles.cache.has(role.id)) {
            await member.roles.remove(role.id);
            return interaction.reply({
                content: `<a:Flicker:1444512741770662070> DarkSide removed your: ${role.name}`,
                ephemeral: true
            });
        } else {
            await member.roles.add(role.id);
            return interaction.reply({
                content: `<a:Flicker:1444512741770662070> DarkSide added your: ${role.name}`,
                ephemeral: true
            });
        }
    } catch (err) {
        console.error(err);
        return interaction.reply({
            content: "<a:Flicker:1444512741770662070> Missing permissions or role is above bot role.",
            ephemeral: true
        });
    }
});

client.login(TOKEN);
