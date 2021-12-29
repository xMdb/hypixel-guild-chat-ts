import { Execute } from '../interfaces/Event';

export const name = 'chat:memberLeave';

export const run: Execute = async (bot, hypixelRank: string | null, playerName: string) => {
	bot.hook.send(`${hypixelRank ?? ''} ${playerName} left the guild!`);
};
