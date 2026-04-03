"use client"

import { GlobeCdn } from "@/components/ui/globe-cdn"

export default function GlobeCdnDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-transparent overflow-hidden">
      <div className="w-full max-w-[600px] aspect-square">
        <GlobeCdn />
      </div>
    </div>
  )
}
