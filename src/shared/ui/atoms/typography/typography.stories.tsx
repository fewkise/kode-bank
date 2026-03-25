import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from './typography';

const Meta = {
  title: 'ui',
};

export default Meta;

export const TypographyStory = () => (
  <View style={styles.container}>
    <Typography variant="title">Title 34 bold</Typography>
    <Typography variant="largeTitle">Large title 28 medium</Typography>
    <Typography variant="subtitle">Subtitle 20 semibold</Typography>
    <Typography variant="body20">Body 20 regular</Typography>
    <Typography variant="body17Medium">Body 17 medium</Typography>
    <Typography variant="body17Regular">Body 1 17 regular</Typography>
    <Typography variant="body15Regular">Body 2 15 regular</Typography>
    <Typography variant="body15Semibold">Body 15 semibold</Typography>
    <Typography variant="caption1">Caption 1 13</Typography>
    <Typography variant="caption2">Caption 2 11</Typography>
    <Typography variant="button">Button</Typography>
  </View>
);

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.palette.background.primary,
  },
}));
