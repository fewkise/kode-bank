import { TextInput, View, TextInputProps } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';

import { IconSearch } from '@shared/ui/icons';
type Props = SearchProps & TextInputProps;
type SearchProps = {
  value: string;
  onChangeText: (text: string) => void;
};
export const Search = ({ value, onChangeText }: Props) => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <View style={styles.forIcon}>
        <IconSearch />
      </View>

      <TextInput
        placeholder="Поиск"
        placeholderTextColor={theme.palette.text.tertiary}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
        keyboardAppearance={theme.name}
      />
    </View>
  );
};
const styles = StyleSheet.create(theme => ({
  input: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.content.secondary,
    color: theme.palette.text.primary,
    lineHeight: theme.typography.body15Regular.lineHeight,
    fontFamily: theme.typography.body15Regular.fontFamily,
    fontSize: theme.typography.body15Regular.size,
    letterSpacing: theme.typography.body15Regular.letterSpacing,
    borderRadius: 8,
    flex: 1,
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.palette.content.secondary,
    height: 48,
  },
  forIcon: {
    marginLeft: theme.spacing(1),
  },
}));
