import Link from 'next/link'
import { Button } from '@/components/ui/shadcn/button'

export default function PostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">投稿が見つかりません</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            指定された投稿は削除されたか、存在しない可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              投稿一覧に戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}