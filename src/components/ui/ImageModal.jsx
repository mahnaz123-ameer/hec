import React from 'react';
import Modal from './Modal';
import { Icon } from '@iconify/react';

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      activeModal={isOpen}
      onClose={onClose}
      centered={true}
      disableBackdrop={false}
      showHeader={false}
      className="max-w-4xl"
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-slate-100 dark:bg-slate-900 rounded-full p-2 z-50"
        >
          <Icon icon="heroicons-outline:x" className="w-5 h-5" />
        </button>
        <div className="p-2">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;