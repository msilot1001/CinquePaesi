import mongoose from 'mongoose';

import logger from '../Utils/Logger';

export const Connect = () =>
  new Promise<void>((resolve, reject) => {
    mongoose
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .connect(process.env.DBURL!, {
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        family: 4, // Use IPv4, skip trying IPv6
      })
      .then(() => {
        logger.info('==> MongoDB Connected...');
        resolve;
      })
      .catch(err => {
        logger.error(err);
        reject;
      });

    mongoose.connection.on('disconnected', Connect);
  });
