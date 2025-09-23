'use client'

import { useActionState, useState } from "react"
import { submitPostsAction } from "../actions/submitPostsAction"
import { CreatePostModal, type CreatePostModalProps } from "../presentational/CreatePostModal"


export const CreatePostModalContainer = (props: CreatePostModalProps) => {
  const [formAction] = useActionState(submitPostsAction, undefined)

  return (
    <CreatePostModal 
      {...props}
    />
  )
}