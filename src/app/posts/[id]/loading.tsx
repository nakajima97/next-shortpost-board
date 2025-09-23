import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/card'
import { Skeleton } from '@/components/ui/shadcn/skeleton'

export default function PostDetailLoading() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader className="border-b">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-5 w-48" />
              </div>
              <Skeleton className="h-9 w-16" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-4/6" />
              <Skeleton className="h-6 w-3/6" />
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Skeleton className="h-10 w-32 mx-auto" />
        </div>
      </div>
    </MainLayout>
  )
}