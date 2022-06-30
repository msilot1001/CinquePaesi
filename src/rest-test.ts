import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import * as dotenv from 'dotenv';
import CommandBundle from './Assets/Commands/CommandBundle.js';
import logger from './Assets/Utils/Logger.js';

dotenv.config();

if (process.env.TESTTOKEN !== undefined && process.env.CLIENTID !== undefined) {
  logger.info(
    `TOKEN: ${process.env.TESTTOKEN}, CLIENTID: ${process.env.CLIENTID}`,
  );

  const rest = new REST({ version: '10' }).setToken(process.env.TESTTOKEN);

  try {
    await rest.get(Routes.user('780771337332981780'));
  } catch (err) {
    logger.error(err);
  }
} else {
  logger.error('Env Value undefined');
}
