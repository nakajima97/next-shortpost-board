'use client';

import { Button } from '@/components/ui/shadcn/button';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-red-600">エラー</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            問題が発生しました
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            申し訳ございません。予期しないエラーが発生しました。
            もう一度お試しください。
          </p>
        </div>

        <div className="space-y-4">
          <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
            もう一度試す
          </Button>
        </div>
      </div>
    </div>
  );
}
