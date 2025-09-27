import { z } from 'zod'

const postSchema = z.object({
  id: z.number(),
  handleName: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export const timelineSchema = z.array(postSchema)

export type TimelineType = z.infer<typeof timelineSchema>
export type PostType = z.infer<typeof postSchema>