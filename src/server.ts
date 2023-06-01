import mongoose from 'mongoose';
import app from './App/app';
import config from './Config/config';
import logger from './Global/logger';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`✅ Database connected successful`);
    app.listen(config.port, () => {
      logger.info(`✅ UMP Application listening on port ${config.port}`);
    });
  } catch (err) {
    logger.error(`🔻Failed to connect database !`, err);
  }
}

main();
