'use client';

import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { CreatePostModalContainer } from '@/features/posts/containers/CreatePostModalContainer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onCreatePost={() => setIsCreateModalOpen(true)} />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {children}
      </main>

      <Footer />

      <CreatePostModalContainer
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}
