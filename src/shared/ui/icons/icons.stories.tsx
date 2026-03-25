import { useState } from 'react';
import { Dimensions, ScrollView, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import * as Icons from '.';
import { TBaseIconProps } from './types';
import { Typography } from '../atoms';
import { useTheme } from '../theme/use-theme';

const width = Dimensions.get('window').width;

const StoryMeta = {
  title: 'ui/icons',
  args: {
    size: 24,
  },
};

export default StoryMeta;

export const IconList = ({ size }: TBaseIconProps) => {
  const theme = useTheme();
  const [search, setSearch] = useState('');

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={theme.palette.text.secondary}
        placeholder="Search icons"
        value={search}
        onChangeText={setSearch}
      />
      <ScrollView>
        <View style={styles.list}>
          {Object.values(Icons).map(Icon => {
            if (!Icon.name.toLowerCase().includes(search.toLowerCase())) {
              return null;
            }
            return (
              <View key={Icon.name} style={styles.item}>
                <Icon color={theme.palette.text.primary} size={size} />
                <Typography variant="caption1">{Icon.name}</Typography>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 4,
    width: width / 3,
  },
  searchInput: {
    height: 40,
    backgroundColor: theme.palette.content.primary,
    color: theme.palette.text.primary,
    margin: 20,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
}));
