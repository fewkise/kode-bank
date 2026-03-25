import { DefaultTheme } from 'react-native-unistyles';

import { THEME_GRID_STEP } from './constants';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  palette: {
    background: {
      primary: '#312C39',
      secondary: '#352F3D',
    },
    content: {
      primary: '#3B3542',
      secondary: '#403A47',
      tertiary: '#706D76',
    },
    accent: {
      primary: '#6C78E6',
      secondary: '#F678BA',
      tertiary: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C2C1C6',
      tertiary: '#706D76',
    },
    indicator: {
      error: '#FB6176',
      done: '#4CD563',
      success: '#6C78E6',
    },
    button: {
      primary: '#6C78E6',
      secondary: '#FFFFFF',
    },
    helpers: {
      bottomMenu: '#352F3D50',
      overlay: '#00000025',
      calendarPeriod: '#6C78E620',
    },
  },
  typography: {
    largeTitle: {
      size: 34,
      lineHeight: 41,
      letterSpacing: 0.41,
      fontFamily: 'SFProDisplay-Bold',
    },
    title: {
      size: 28,
      lineHeight: 34,
      letterSpacing: 0.34,
      fontFamily: 'SFProDisplay-Medium',
    },
    subtitle: {
      size: 20,
      lineHeight: 25,
      letterSpacing: 0.38,
      fontFamily: 'SFProDisplay-Semibold',
    },
    body20: {
      size: 20,
      lineHeight: 25,
      letterSpacing: 0.38,
      fontFamily: 'SFProDisplay-Regular',
    },
    body17Medium: {
      size: 17,
      lineHeight: 22,
      letterSpacing: -0.41,
      fontFamily: 'SFProDisplay-Medium',
    },
    body17Regular: {
      size: 17,
      lineHeight: 22,
      letterSpacing: -0.41,
      fontFamily: 'SFProDisplay-Regular',
    },
    body15Regular: {
      size: 15,
      lineHeight: 20,
      letterSpacing: -0.24,
      fontFamily: 'SFProDisplay-Regular',
    },
    body15Semibold: {
      size: 15,
      lineHeight: 20,
      letterSpacing: -0.24,
      fontFamily: 'SFProDisplay-Semibold',
    },
    caption1: {
      size: 13,
      lineHeight: 15.51,
      letterSpacing: -0.08,
      fontFamily: 'SFProDisplay-Regular',
    },
    caption2: {
      size: 11,
      lineHeight: 13.13,
      letterSpacing: 0.07,
      fontFamily: 'SFProDisplay-Regular',
    },
    button: {
      size: 15,
      lineHeight: 18,
      letterSpacing: -0.41,
      fontFamily: 'SFProDisplay-Semibold',
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
