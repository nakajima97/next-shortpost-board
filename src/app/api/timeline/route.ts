import { getTimeline } from '@/features/timeline/services/server/getTimelineFromDB'
import type { NextRequest } from 'next/server'

export const GET = async(_req: NextRequest) => {
  const data = await getTimeline()
  return Response.json({ data: data })
}