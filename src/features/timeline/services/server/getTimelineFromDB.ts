import { getClient } from '@/db/getClient';
import { posts } from '@/db/schema/posts';

export const getTimeline = async () => {
  const client = getClient();

  const data = await client.select().from(posts);

  return data;
};
