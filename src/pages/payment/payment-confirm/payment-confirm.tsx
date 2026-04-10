import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { PaymentPayload, TInputFull } from '@entities/payments/types';
import { InputFull, PrimaryButton } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

export type PaymentConfirmProps = {
  onConfirm: () => void;
  onLinkPress: () => void;
  payload: PaymentPayload;
  data: TInputFull[];
};
export const PaymentConfirm = ({
  onConfirm,
  onLinkPress,
  data,
}: PaymentConfirmProps) => (
  <KeyboardView>
    <View style={styles.primaryContainer}>
      <FlatList
        style={styles.forScroll}
        contentContainerStyle={styles.scrollContent}
        data={data}
        renderItem={({ item }) => (
          <InputFull key={item.id} label={item.label} value={item.value} />
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        keyboardShouldPersistTaps="handled"
      />
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onConfirm}>Подтвердить</PrimaryButton>
        </View>
        <TouchableOpacity onPress={onLinkPress}>
          <Text style={styles.forLink}>
            Нажимая «Подтвердить», вы соглашаетесь с условиями проведения
            операции
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardView>
);
const keyExtractor = (item: TInputFull) => item.id;

const ItemSeparatorComponent = () => <View style={styles.divider} />;
const styles = StyleSheet.create(theme => ({
  footer: {
    marginBottom: theme.spacing(4),
    gap: theme.spacing(3),
  },
  primaryContainer: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  forLink: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    alignSelf: 'center',
  },
  scrollContent: {
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
  },
  forScroll: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
  },
  divider: {
    width: '89%',
    height: 1,
    marginRight: theme.spacing(3),
    alignSelf: 'flex-end',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.palette.content.primary,
    backgroundColor: theme.palette.content.secondary,
  },
}));
