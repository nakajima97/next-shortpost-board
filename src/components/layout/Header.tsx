'use client';

import { Button } from '@/components/ui/shadcn/button';

interface HeaderProps {
  onCreatePost: () => void;
}

export function Header({ onCreatePost }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">ショート投稿掲示板</h1>
        <Button
          onClick={onCreatePost}
          className="bg-blue-600 hover:bg-blue-700"
        >
          投稿する
        </Button>
      </div>
    </header>
  );
}
