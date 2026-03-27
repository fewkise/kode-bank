import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { IconClose, IconCheck } from '@shared/ui/icons';
import { darkTheme } from '@shared/ui/theme';

export const PaymentStatus = () => {
  const [status, setStatus] = useState(true);
  const ChangeStatus = () => {
    setStatus(!status);
  };
  return (
    <View style={styles.container}>
      {status ? (
        <View style={styles.errorBack}>
          <IconClose size={32} color="white" />
        </View>
      ) : (
        <View style={styles.successBack}>
          <IconCheck size={32} color="white" />
        </View>
      )}
      <View>
        <TouchableOpacity
          style={styles.button}
          hitSlop={8}
          onPress={ChangeStatus}
        >
          <Text>поменять статус</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.palette.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: 'gray',
    padding: 16,
  },
  textButton: {
    padding: 16,
  },
  errorBack: {
    width: 70,
    height: 70,
    backgroundColor: '#FB6176',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  successBack: {
    width: 70,
    height: 70,
    backgroundColor: '#39D052',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
});
