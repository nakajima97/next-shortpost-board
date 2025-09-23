'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { PostDetail } from '@/features/posts/presentational/PostDetail';
import { mockPosts } from '@/utils/mockData';
import { notFound } from 'next/navigation';

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const postId = Number.parseInt(params.id);
  const post = mockPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      <PostDetail post={post} />
    </MainLayout>
  );
}
