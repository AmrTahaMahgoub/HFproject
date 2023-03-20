import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {DefaultButton} from '../Button/Button';
import {TouchableTextSvg} from '../TouchableTextSvg/TouchableTextSvg';
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
