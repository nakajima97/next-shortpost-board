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

export interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
  formAction?: (payload: FormData) => void;
}

export function CreatePostModal({ open, onClose, formAction }: CreatePostModalProps) {
  const [handleName, setHandleName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

        <form className="space-y-4" action={formAction}>
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
              name='handleName'
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
              name='content'
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
