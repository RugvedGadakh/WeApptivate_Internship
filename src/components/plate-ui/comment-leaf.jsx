"use client"

import React from "react"
import { cn } from "@udecode/cn"
import { useCommentLeaf, useCommentLeafState } from "@udecode/plate-comments"
import { PlateLeaf } from "@udecode/plate-common"

export function CommentLeaf({ className, ...props }) {
  const { children, nodeProps, leaf } = props

  const state = useCommentLeafState({ leaf })
  const { props: rootProps } = useCommentLeaf(state)

  if (!state.commentCount) return <>{children}</>

  let aboveChildren = <>{children}</>

  if (!state.isActive) {
    for (let i = 1; i < state.commentCount; i++) {
      aboveChildren = <span className="bg-primary/20">{aboveChildren}</span>
    }
  }

  return (
    <PlateLeaf
      {...props}
      className={cn(
        "border-b-2 border-b-primary/40",
        state.isActive ? "bg-primary/40" : "bg-primary/20",
        className
      )}
      nodeProps={{
        ...rootProps,
        ...nodeProps
      }}
    >
      {aboveChildren}
    </PlateLeaf>
  )
}