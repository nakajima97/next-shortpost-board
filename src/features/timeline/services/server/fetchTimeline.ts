import { timelineSchema } from '../../schemas/timeline';

export const fetchTimeline = async () => {
  // ローディングの実践のためわざと3秒処理を停止する
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await fetch('http://localhost:3000/api/timeline');

  if (!response.ok) {
    throw new Error('Failed to fetch timeline');
  }

  const data = await response.json();

  return timelineSchema.parse(data.data);
};
