'use client';

import { useRef } from 'react';
import { usePostSubmission } from '../hooks/usePostSubmission';
import {
  CreatePostModal,
  type CreatePostModalProps,
} from '../presentational/CreatePostModal';

export interface CreatePostModalContainerProps
  extends Omit<CreatePostModalProps, 'formAction' | 'onReset'> {}

export const CreatePostModalContainer = (
  props: CreatePostModalContainerProps,
) => {
  const modalRef = useRef<{ resetForm: () => void }>(null);

  const handleSuccess = () => {
    modalRef.current?.resetForm();
    props.onClose();
  };

  const { formAction } = usePostSubmission(handleSuccess);

  return <CreatePostModal {...props} ref={modalRef} formAction={formAction} />;
};
