'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { PostList } from '@/features/posts/presentational/PostList';
import { mockPosts } from '@/utils/mockData';

export default function HomePage() {
  const sortedPosts = [...mockPosts].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">最新の投稿</h2>
          <p className="text-gray-600">みんなの短文投稿をチェックしよう</p>
        </div>

        <PostList posts={sortedPosts} />
      </div>
    </MainLayout>
  );
}
