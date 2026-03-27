import React, { useState } from 'react'
import { darkTheme } from '@shared/ui/theme';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentConfirm'
>
export const PaymentConfirm = ({ navigation }: PaymentServicesProps) => {
  const goToStatus = () => {
    navigation.navigate('paymentStatus')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} hitSlop={8} onPress={goToStatus}>
        <Text>Подтвердить</Text>
      </TouchableOpacity>
    </View>

  )

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
});
