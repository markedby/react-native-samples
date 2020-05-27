import React from 'react';
import { Platform, StatusBar as StatusBarRN } from 'react-native';
import { useSelector } from 'react-redux';

import { getAppearance } from '@/redux/app/selectors';

import { useTheme } from '@/themes';

const ANDROID_BAR_STYLE_MIN_API_VERSION = 22;

const StatusBar = () => {
  const theme = useTheme();
  const appearance = useSelector(getAppearance);

  const backgroundColor =
    Platform.OS === 'android' && Platform.Version <= ANDROID_BAR_STYLE_MIN_API_VERSION
      ? theme.globalColors.dark
      : theme.colors.backgroundColor;

  return (
    <StatusBarRN
      barStyle={appearance === 'light' ? 'dark-content' : 'light-content'}
      backgroundColor={backgroundColor}
    />
  );
};

export default StatusBar;
