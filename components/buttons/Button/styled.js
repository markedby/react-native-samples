import styled from 'styled-components';

import * as Typography from '@/components/typography';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.helpers.getHexaa(theme.globalColors.blue, 0.25)};
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  height: 44px;
  width: 100%;
`;

export const Text = styled(Typography.SansSerifMedium)`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
`;
