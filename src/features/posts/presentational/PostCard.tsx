import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/card';
import type { Post } from '@/types/post';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">
              {post.handle_name}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(post.created_at)}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
