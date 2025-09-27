import type { TimelineType } from '../schemas/timeline';
import { TimelineCard } from './TimelineCard';

interface PostListProps {
  timeline: TimelineType;
}

export const TimelineList = ({ timeline: posts }: PostListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">まだ投稿がありません</p>
        <p className="text-gray-400 text-sm mt-2">
          最初の投稿をしてみましょう！
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <TimelineCard key={post.id} timeline={post} />
      ))}
    </div>
  );
};
