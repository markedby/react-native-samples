import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))`
  align-items: center;
  justify-content: center;
  height: ${({ size }) => `${Math.floor(1.1 * size)}px`};
  width: ${({ size }) => `${Math.floor(1.1 * size)}px`};
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
`;

export const Gradient = styled(LinearGradient).attrs(({ isActive, theme }) => ({
  ...(isActive ? theme.colors.gradient : theme.colors.gradientEmpty),
}))`
  align-items: center;
  justify-content: center;
  border-radius: ${({ size }) => `${Math.floor(size / 2)}px`};
  border: ${({ isActive, theme }) => `1px solid ${isActive ? 'transparent' : theme.globalColors.blue}`};
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  z-index: 1;
`;

export const GradientBackground = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradient,
}))`
  align-items: center;
  justify-content: center;
  border-radius: ${({ size }) => `${Math.floor(0.4 * size)}px`};
  height: 100%;
  width: 100%;
  opacity: 0.3;
  position: absolute;
`;

export const IconContainer = styled.View`
  top: 1px;
`;

export const Wrapper = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradient,
}))`
  opacity: 0.25;
`;
