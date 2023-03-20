import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
type ModalSheetProps = {
  children?: JSX.Element;
  // toggleModal?: () => void;
  onSwipeComplete?: () => void;
  swipeDirection?: any;
  isVisible: any;
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
