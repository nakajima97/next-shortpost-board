// import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

export const getClient = () => {
  const fileName = process.env.DB_FILE_NAME;

  if (!fileName) {
    throw new Error('SQLiteのファイル名が環境変数で設定されていないです。');
  }

  const client = drizzle(fileName);

  return client;
};
