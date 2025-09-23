'use client';

import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/card';
import type { Post } from '@/types/post';
import { getCurrentUserUuid } from '@/utils/mockData';

interface PostDetailProps {
  post: Post;
  onDelete?: () => void;
}

export function PostDetail({ post, onDelete }: PostDetailProps) {
  const currentUserUuid = getCurrentUserUuid();
  const canDelete = post.author_uuid === currentUserUuid;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = () => {
    if (window.confirm('この投稿を削除しますか？')) {
      alert('投稿が削除されました（静的版のためデモ）');
      onDelete?.();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {post.handle_name}
              </h1>
              <p className="text-gray-600 mt-1">
                {formatDate(post.created_at)}
              </p>
            </div>
            {canDelete && (
              <Button variant="destructive" size="sm" onClick={handleDelete}>
                削除
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="outline" onClick={() => window.history.back()}>
          ← 一覧に戻る
        </Button>
      </div>
    </div>
  );
}
