import { getClient } from '@/db/getClient';
import { posts } from '@/db/schema/posts';

type Arguments = {
  handleName: string;
  content: string;
};

export const createPost = async ({ handleName, content }: Arguments) => {
  const client = getClient();

  try {
    const inserted = await client
      .insert(posts)
      .values({
        handleName,
        content,
      })
      .returning({ id: posts.id });

    // IDを取得
    const id = inserted[0].id;

    // IDを返す
    return id;
  } catch (e) {
    console.log(e);
  }
};
