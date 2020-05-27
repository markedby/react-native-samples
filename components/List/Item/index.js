import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import LikeButton from '@/components/buttons/Like/index';
import Loader from '@/components/Loader';
import * as S from './styled';

const Item = ({ data, isActionDisabled, onFavorite, onUnfavorite, onItemPress }) => {
  const onFavoritePress = useCallback(() => {
    if (isActionDisabled) {
      return;
    }

    data.isFavorited ? onUnfavorite(data.id) : onFavorite(data.id);
  }, [data.id, data.isFavorited, isActionDisabled, onFavorite, onUnfavorite]);

  return (
    <S.Container onPress={() => onItemPress(data)}>
      <S.Translations>
        <S.Original>
          <S.OriginalText>{data.textOriginal}</S.OriginalText>
        </S.Original>
        <S.Translated>
          <S.TranslatedText>{data.textTranslated}</S.TranslatedText>
        </S.Translated>
      </S.Translations>
      <S.Stats onPress={onFavoritePress}>
        <S.LikeButtonContainer>
          {!isActionDisabled ? (
            <LikeButton onPress={onFavoritePress} isActive={data.isFavorited} size={34} iconSize={16} />
          ) : (
            <Loader />
          )}
        </S.LikeButtonContainer>
        <S.LikesCount>{data.numberOfFavorited}</S.LikesCount>
      </S.Stats>
    </S.Container>
  );
};

Item.propTypes = {
  isActionDisabled: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onUnfavorite: PropTypes.func.isRequired,
  onItemPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    textOriginal: PropTypes.string.isRequired,
    textTranslated: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool.isRequired,
    numberOfFavorited: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(Item);
