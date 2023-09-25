import React, { CSSProperties, ReactNode, useEffect } from 'react';
import './Modal.css';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
  style?: CSSProperties;
};

const Modal = ({ children, onClose, style, show = false }: ModalProps) => {
  const closeOnEsc: (e: KeyboardEvent) => void = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEsc);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, []);

  return createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          style={style}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default Modal;
