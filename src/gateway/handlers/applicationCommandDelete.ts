import { SlashCommand } from '../../interactions/slashCommand.ts'
import { ApplicationCommandPayload } from '../../types/gateway.ts'
import type { Gateway, GatewayEventHandler } from '../mod.ts'

export const applicationCommandDelete: GatewayEventHandler = async (
  gateway: Gateway,
  d: ApplicationCommandPayload
) => {
  const guild = await gateway.client.guilds.get(d.guild_id ?? "")
  const cmd = new SlashCommand(gateway.client.slash.commands, d, guild)
  gateway.client.emit('slashCommandDelete', cmd)
}
