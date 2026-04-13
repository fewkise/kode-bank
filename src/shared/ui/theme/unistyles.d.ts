import 'react-native-unistyles';
import { TextStyle } from 'react-native';
declare module 'react-native-unistyles' {
  export type DefaultTheme = {
    name: 'light' | 'dark';
    palette: {
      background: {
        primary: string;
        secondary: string;
      };
      content: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      accent: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      indicator: {
        error: string;
        done: string;
        success: string;
      };
      button: {
        primary: string;
        secondary: string;
      };
      helpers: {
        bottomMenu: string;
        overlay: string;
        calendarPeriod: string;
      };
    };
    typography: {
      title: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      largeTitle: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      subtitle: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      body20: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      body17Medium: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      body17Regular: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      body15Regular: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      body15Semibold: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      caption1: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      caption2: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
      button: {
        size: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        fontWeight: TextStyle['fontWeight'];
      };
    };
    spacing: (multiplier: number) => number;
  };

  export type AppThemes = {
    dark: DefaultTheme;
    light: DefaultTheme;
  };

  export interface UnistylesThemes extends AppThemes {}
}
