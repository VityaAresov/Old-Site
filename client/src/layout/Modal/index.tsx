import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from './Portal';
import { CloseBtn, Outside, Controls, Window, Content } from './styled';
import { Icon } from '../../ui/Icon';

type TModalProps = {
  handleClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  lockScroll?: boolean;
};

const Modal: React.FC<TModalProps> = ({ children, isOpen, handleClose, lockScroll }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) => (event.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (
        !lockScroll ||
        (document.querySelector('#modal')?.children && document.querySelector('#modal')!.children.length === 1)
      ) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen, lockScroll]);

  return (
    <Portal wrapperId="modal">
      <CSSTransition in={isOpen} timeout={{ enter: 0, exit: 150 }} unmountOnExit classNames="modal" nodeRef={nodeRef}>
        <Outside ref={nodeRef} onClick={handleClose}>
          <div onClick={(event) => event.stopPropagation()}>
            <Window>
              <Controls>
                <CloseBtn onClick={handleClose}>
                  <Icon $size={32} $name="close" />
                </CloseBtn>
              </Controls>
              <Content>{children}</Content>
            </Window>
          </div>
        </Outside>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
