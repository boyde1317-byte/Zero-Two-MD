import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { sendInteractive } from '../../lib/sendInteractive.js';

export default {
  name: 'dev',
  aliases: ['developer', 'contact', 'owner', 'creator', 'devcontact'],
  description: 'Shows developer info with interactive contact card',
  run: async (context) => {
    const { client, m } = context;
    await client.sendMessage(m.chat, { react: { text: '⌛', key: m.reactKey } });

    const devPhone = '233533416608';
    const devName = '𝔄𝔦𝔷𝔢𝔫 | 𝕺𝖜𝖓𝖊𝖗';
    const devOrg = 'Zero Two Bot';
    const waUrl = `https://wa.me/${devPhone}`;

    try {
      await client.sendMessage(m.chat, { react: { text: '✅', key: m.reactKey } });
      
      await client.relayMessage(m.chat, {
        interactiveMessage: {
          header: {
            title: "𝗢 𝗪 𝗡 𝗘 𝗥   ◦   𝗗 𝗘 𝗧 𝗔 𝗜 𝗟 𝗦",
            hasMediaAttachment: false
          },
          body: {
            text: "*乂  𝗢 𝗪 𝗡 𝗘 𝗥     ◦     𝗜 𝗡 𝗙 𝗢*\n✧ Tag : \n      ◦ @233533416608\n\n✧ Rules : \n      ◦ _Don't call owner's number_\n      ◦ _Don't talk shit_\n      ◦ _Don't spam_\n      ◦ _Don't goon😡_"
          },
          footer: {
            text: "𝔄𝔦𝔷𝔢𝔫"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "booking_confirmation",
                buttonParamsJson: JSON.stringify({
                  icon: "default",
                  start_datetime: "2026-06-10T10:37:10.967Z",
                  end_datetime: "2026-06-10T10:47:10.967Z",
                  location: "𝔄𝔦𝔷𝔢𝔫",
                  booking_url: "https://wa.me/233533416608",
                  phone_number: "+233533416608",
                  booking_management_url: "https://whatsapp.com/channel/0029Vb7eSHf42Dcmdd3XA326",
                  description: "*◦ 👤 Name  :*  𝔄𝔦𝔷𝔢𝔫\n*◦ 📞 Number  :*  +233533416608\n*◦ 💭 Bio  :*  ꌗꂦꎭꏂ꓄ꃅꀤꈤꁅ ꀤꈤ ꌗꃅꀤꈤꀤꃅꀤ\n*◦ ⚡ Status  :*  _Owner_\n",
                  email: "",
                  display_text: "𝕸𝖔𝖗𝖊 𝕺𝖜𝖓𝖊𝖗 𝕴𝖓𝖋𝖔",
                  display_content: {
                    display_language: "en",
                    display_meeting_type: "𝕴𝖓𝖋𝖔",
                    display_bottom_sheet_header: "々   𝔓 𝔯 𝔬 𝔣 𝔦 𝔩 𝔢     ◦     𝔄𝔦𝔷𝔢𝔫   々",
                    display_add_to_calendar_cta_text: "CALENDAR",
                    display_view_on_maps_cta_text: "𝕺 𝖜 𝖓 𝖊 𝖗     ◦     𝕮 𝖔 𝖚 𝖓 𝖙 𝖗 𝖞",
                    display_manage_booking_cta_text: "🔥 𝔉𝔬𝔩𝔩𝔬𝔴",
                    display_manage_booking_not_supported_text: "OWNER NOT REGISTERED",
                    display_read_more: "READ MORE"
                  }
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "🟩 𝕺𝖜𝖓𝖊𝖗 𝕹𝖚𝖒𝖇𝖊𝖗",
                  url: "https://wa.me/233533416608"
                })
              }
            ],
            messageParamsJson: ""
          },
          contextInfo: {
            mentionedJid: [
              "233533416608@s.whatsapp.net"
            ]
          }
        }
      }, {});

      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${devName}\nORG:${devOrg};\nTEL;type=CELL;type=VOICE;waid=${devPhone}:+${devPhone}\nEND:VCARD`;
      await client.sendMessage(m.chat, {
        contacts: {
          displayName: devName,
          contacts: [{ vcard }]
        }
      });

    } catch (error) {
      await client.sendMessage(m.chat, { react: { text: '❌', key: m.reactKey } }).catch(() => {});
      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${devName}\nORG:${devOrg};\nTEL;type=CELL;type=VOICE;waid=${devPhone}:+${devPhone}\nEND:VCARD`;
      const fallbackText = `╭─❏ 「 OWNER INFO」\n│ 👤 Name: ${devName}\n│ 🏢 Project: ${devOrg}\n│ 📞 Contact: +${devPhone}\n│ \n│ Don't spam the owner.\n│ Serious issues only.\n╰───────────────\n> ©𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝔄𝔦𝔷𝔢𝔫`;
      await sendInteractive(client, m, fallbackText);
      await client.sendMessage(m.chat, { contacts: { displayName: devName, contacts: [{ vcard }] } });
    }
  }
};
