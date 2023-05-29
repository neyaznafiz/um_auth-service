import mongoose from 'mongoose';
import app from './App/app';
import config from './Config/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`✅ Database connected successful`);
    app.listen(config.port, () => {
      console.log(`✅ UMP Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(`🔻Failed to connect database !`, err);
  }
}

main();
