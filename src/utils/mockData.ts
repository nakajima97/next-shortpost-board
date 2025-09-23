import type { Post } from '@/types/post';

export const mockPosts: Post[] = [
  {
    id: 1,
    handle_name: '太郎',
    content: '今日はいい天気ですね！散歩に行ってきました。',
    author_uuid: 'user-1-uuid',
    created_at: '2024-01-20T10:30:00Z',
    updated_at: '2024-01-20T10:30:00Z',
  },
  {
    id: 2,
    handle_name: '花子',
    content: 'Next.js 15を使ってアプリ開発中です。App Routerが便利！',
    author_uuid: 'user-2-uuid',
    created_at: '2024-01-20T09:15:00Z',
    updated_at: '2024-01-20T09:15:00Z',
  },
  {
    id: 3,
    handle_name: '開発者',
    content:
      'TypeScriptとTailwind CSSの組み合わせが最高です。shadcn/uiも使いやすい。',
    author_uuid: 'user-3-uuid',
    created_at: '2024-01-20T08:45:00Z',
    updated_at: '2024-01-20T08:45:00Z',
  },
  {
    id: 4,
    handle_name: '学生',
    content:
      'プログラミングの勉強頑張ってます！今日はReactのhooksについて学びました。',
    author_uuid: 'user-4-uuid',
    created_at: '2024-01-19T18:20:00Z',
    updated_at: '2024-01-19T18:20:00Z',
  },
  {
    id: 5,
    handle_name: 'デザイナー',
    content:
      'UI/UXデザインを考えるのが楽しい。ユーザビリティを重視した設計を心がけています。',
    author_uuid: 'user-5-uuid',
    created_at: '2024-01-19T15:10:00Z',
    updated_at: '2024-01-19T15:10:00Z',
  },
];

export const getCurrentUserUuid = () => 'user-1-uuid';
