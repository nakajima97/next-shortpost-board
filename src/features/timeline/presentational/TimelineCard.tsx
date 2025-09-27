import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/card';
import Link from 'next/link';
import type { PostType } from '../schemas/timeline';

type Props = {
  timeline: PostType;
};

export const TimelineCard = ({ timeline }: Props) => {
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
    <Link href={`/posts/${timeline.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">
              {timeline.handleName}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(timeline.createdAt)}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{timeline.content}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
