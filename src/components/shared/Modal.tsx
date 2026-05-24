'use client';

import { XCircle } from '@phosphor-icons/react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  buttons?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export function Modal({ isOpen, title, children, onClose, buttons, size = 'medium' }: ModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-xl shadow-lg ${sizeClasses[size]} w-full`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-100">
          <h2 className="text-xl font-bold text-dark">{title}</h2>
          <button
            onClick={onClose}
            className="text-dark/60 hover:text-dark transition-colors"
            title="Fechar"
          >
            <XCircle size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">{children}</div>

        {/* Footer */}
        {buttons && <div className="flex gap-3 p-6 border-t border-brand-100 justify-end">{buttons}</div>}
      </div>
    </div>
  );
}
