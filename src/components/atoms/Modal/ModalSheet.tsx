import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
type ModalSheetProps = {
  children?: JSX.Element;

  onSwipeComplete?: () => void;
  swipeDirection?: any;
  isVisible: boolean | undefined;
};

export const ModalSheet = ({
  children,
  onSwipeComplete,
  swipeDirection,
  isVisible,
}: ModalSheetProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onSwipeComplete}
      swipeDirection={swipeDirection}
      style={styles.modal}>
      {children}
    </Modal>
  );
};
