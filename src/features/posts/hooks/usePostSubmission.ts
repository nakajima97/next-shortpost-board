'use client';

import { useActionState, useEffect, useState } from 'react';
import { submitPostsAction } from '../actions/submitPostsAction';

type StateType =
  | {
      status: 'success' | 'error';
      message: string;
    }
  | undefined;

export const usePostSubmission = (onSuccess: () => void) => {
  const [state, formAction] = useActionState(submitPostsAction, undefined);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (state?.status === 'success' && isProcessing) {
      onSuccess();
      setIsProcessing(false);
    }
  }, [state, isProcessing, onSuccess]);

  const wrappedFormAction = (formData: FormData) => {
    setIsProcessing(true);
    formAction(formData);
  };

  return {
    state,
    formAction: wrappedFormAction,
    isProcessing,
  };
};
