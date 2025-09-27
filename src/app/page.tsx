import { Timeline } from "@/features/timeline/presentational/Timeline"
import { timelineSchema } from "@/features/timeline/schemas/timeline"
import { fetchTimeline } from "@/features/timeline/services/server/fetchTimeline"

const Page = async() => {
  const timeline = await fetchTimeline()

  return (
    <Timeline timeline={timeline} />
  )
}

export default Page