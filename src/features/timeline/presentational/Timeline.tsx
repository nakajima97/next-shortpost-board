import { MainLayout } from '@/components/layout/MainLayout';
import type { TimelineType } from '../schemas/timeline';
import { TimelineList } from './TimelineList';

type Props = {
  timeline: TimelineType;
};

export const Timeline = ({ timeline }: Props) => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">最新の投稿</h2>
          <p className="text-gray-600">みんなの短文投稿をチェックしよう</p>
        </div>

        <TimelineList timeline={timeline} />
      </div>
    </MainLayout>
  );
};
