"use client"

import React from "react"
import { useUserById } from "@udecode/plate-comments"


import { Avatar } from "./avatar"
import { AvatarFallback } from "./avatar"
import { AvatarImage } from "./avatar"


export function CommentAvatar({ userId }) {
  const user = useUserById(userId)
  if (!user) return null

  return (
    <Avatar className="h-5 w-5">
      <AvatarImage src={user.avatarUrl} alt={user.name} />
      <AvatarFallback>{user.name?.[0]}</AvatarFallback>
    </Avatar>
  )
}
