import React from 'react';
import { Modal, Text, View } from 'react-native';

interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionSummary = ({ isOpen, onClose }: ModalProp) => {
  return (
    <Modal
      visible={isOpen}
      backdropColor={'purple'}
      presentationStyle='formSheet'
      allowSwipeDismissal={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          paddingTop: 60,
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <Text>Transaction summary</Text>
      </View>
    </Modal>
  );
};

export default TransactionSummary;

// AIzaSyAdgs6go1kgQ_eSMH6-Ys7qTkLXMR_gsRI
