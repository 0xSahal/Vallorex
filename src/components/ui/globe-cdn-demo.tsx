"use client"

import { GlobeCdn } from "@/components/ui/globe-cdn"

export default function GlobeCdnDemo() {
  return (
    <div className="flex h-full min-h-0 w-full max-w-full items-center justify-center overflow-hidden bg-transparent">
      <div className="aspect-square h-full max-h-full w-auto max-w-full sm:max-w-[600px]">
        <GlobeCdn className="h-full max-h-full min-h-0 min-w-0" />
      </div>
    </div>
  )
}
