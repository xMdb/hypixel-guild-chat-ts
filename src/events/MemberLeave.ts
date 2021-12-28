import { Execute } from '../interfaces/Event';

export const name = 'chat:memberLeave';

export const run: Execute = async (client, hypixelRank: string | null, playerName: string) => {
	client.hook.send(`${hypixelRank ?? ''} ${playerName} left the guild!`);
};
