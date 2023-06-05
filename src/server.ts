import mongoose from 'mongoose';
import app from './App/app';
import config from './Config/config';
import { infoLogger, errorLogger } from './Global/logger';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    infoLogger.info(`✅ Database connected successful`);
    app.listen(config.port, () => {
      infoLogger.info(`✅ UMP Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error(`🔻Failed to connect database !`, err);
  }
}

main();
