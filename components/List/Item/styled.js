import styled from 'styled-components';

import * as Typography from '@/components/typography';

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.helpers.getHexaa(theme.colors.textColor, 0.1)};
  padding: 14px 0;
`;

export const Translations = styled.View`
  flex: 1;
`;

export const Original = styled.View`
  padding: 2px 0;
`;

export const Translated = styled.View`
  padding: 2px 0;
`;

export const OriginalText = styled(Typography.SerifBold).attrs(() => ({
  numberOfLines: 2,
}))`
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const TranslatedText = styled(Typography.SerifRegular).attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Stats = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const LikeButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 44px;
`;

export const LikesCount = styled(Typography.SansSerifBold)`
  color: ${({ theme }) => theme.globalColors.red};
  font-size: 12px;
  margin-top: 2px;
`;
