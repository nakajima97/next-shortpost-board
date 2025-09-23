import { MainLayout } from '@/components/layout/MainLayout'
import { PostListSkeleton } from '@/components/presentational/PostSkeleton'

export default function Loading() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">最新の投稿</h2>
          <p className="text-gray-600">読み込み中...</p>
        </div>
        
        <PostListSkeleton />
      </div>
    </MainLayout>
  )
}