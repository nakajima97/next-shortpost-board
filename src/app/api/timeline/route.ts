import { getTimeline } from '@/features/timeline/services/getTimeline'
import type { NextRequest } from 'next/server'

export const GET = async(_req: NextRequest, ctx: RouteContext<'/users/[id]'>) => {
  const data = await getTimeline()
  return Response.json({ data: data })
}