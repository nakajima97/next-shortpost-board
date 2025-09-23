'use client';

import { Button } from '@/components/ui/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/shadcn/dialog';
import { Input } from '@/components/ui/shadcn/input';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { useState } from 'react';

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreatePostModal({ open, onClose }: CreatePostModalProps) {
  const [handleName, setHandleName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleName.trim() || !content.trim()) return;

    setIsSubmitting(true);

    // 静的版では実際の送信は行わず、アラートを表示
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert(
      `投稿が作成されました！\n\nハンドルネーム: ${handleName}\n内容: ${content}`,
    );

    setHandleName('');
    setContent('');
    setIsSubmitting(false);
    onClose();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setHandleName('');
      setContent('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>新しい投稿を作成</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="handleName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ハンドルネーム
            </label>
            <Input
              id="handleName"
              value={handleName}
              onChange={(e) => setHandleName(e.target.value)}
              placeholder="あなたの名前"
              maxLength={50}
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              投稿内容
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="今、何を考えていますか？"
              rows={4}
              maxLength={280}
              disabled={isSubmitting}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {content.length}/280
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              disabled={!handleName.trim() || !content.trim() || isSubmitting}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? '投稿中...' : '投稿する'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
