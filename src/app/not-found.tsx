import { Button } from '@/components/ui/shadcn/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            お探しのページは削除されたか、URLが間違っている可能性があります。
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
