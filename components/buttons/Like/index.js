import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getIsOnline } from '@/redux/network/selectors';
import { useTheme } from '@/themes';

import * as S from './styled';

import LikeIcon from './assets/like.svg';

const Like = ({ size, iconSize, isActive, onPress }) => {
  const theme = useTheme();
  const isOnline = useSelector(getIsOnline);

  return (
    <S.Container disabled={!isOnline} size={size} onPress={onPress}>
      <S.Gradient isActive={isActive} size={size}>
        <S.IconContainer>
          <LikeIcon
            fill={isActive ? theme.globalColors.white : theme.globalColors.blue}
            height={iconSize}
            width={iconSize}
          />
        </S.IconContainer>
      </S.Gradient>
      {isActive ? <S.GradientBackground size={size} /> : null}
    </S.Container>
  );
};

Like.propTypes = {
  size: PropTypes.number,
  iconSize: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Like.defaultProps = {
  size: 42,
  iconSize: 22,
};

export default memo(Like);
