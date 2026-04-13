import { StackScreenProps } from '@react-navigation/stack';

import { AuthPinPreviewConnector } from '@pages/authorization/auth-pin-preview';

import { AuthStackParamsList } from '../types';

export type AuthPinPreviewProps = StackScreenProps<
  AuthStackParamsList,
  'authPinPreview'
>;
export const AuthPinPreviewScreen = ({ navigation }: AuthPinPreviewProps) => {
  const onPress = () => {
    navigation.navigate('authCreatePin');
  };
  return <AuthPinPreviewConnector onPress={onPress} />;
};
