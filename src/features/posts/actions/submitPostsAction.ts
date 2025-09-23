'use server';

import { createPost } from "../services/posts/createPost";

type StateType = {
  status: 'success' | 'error';
  message: string;
} | undefined

export type SubmitPostsActionType = (
    prevState: StateType,
    formData: FormData
  ) => Promise<StateType>;

export const submitPostsAction = async(
  prevState: StateType,
  queryData: FormData
 ): Promise<StateType> => {
  const handleName = queryData.get('handleName') as string;
  const content = queryData.get('content') as string;

  if (!handleName || !content) {
    return {
      status: 'error',
      message: 'error'
    }
  }

  await createPost({
    handleName,
    content
  })

  return {
    status: 'success',
    message: 'success!!'
  }
}