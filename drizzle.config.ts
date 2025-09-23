import '@/lib/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DB_FILE_NAME ?? '',
  },
});
