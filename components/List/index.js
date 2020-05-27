import React, { memo, useCallback } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { navigationProptypes, phraseProptypes } from '@/configs/proptypes';
import * as screens from '@/utils/screens';
import { actions as datesActions } from '@/redux/dates';
import { getLoadingIds } from '@/redux/phrases/selectors';
import { favorite, unfavorite } from '@/redux/phrases/thunks';

import Item from './Item';
import * as S from './styled';

const ITEM_HEIGHT = 66.5;

const keyExtractor = item => item.id.toString();

const getItemLayout = (data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index });

const List = ({ data, onFavorite, onUnfavorite, navigation }) => {
  const dispatch = useDispatch();
  const loadingIds = useSelector(getLoadingIds);

  const handleFavorite = useCallback(
    id => {
      onFavorite(id);
      dispatch(favorite(id));
    },
    [dispatch, onFavorite],
  );

  const handleUnfavorite = useCallback(
    id => {
      onUnfavorite(id);
      dispatch(unfavorite(id));
    },
    [dispatch, onUnfavorite],
  );

  const renderItem = useCallback(
    ({ item }) => (
      <Item
        isActionDisabled={!!loadingIds[item.id]}
        onFavorite={handleFavorite}
        onUnfavorite={handleUnfavorite}
        onItemPress={navigateToHome}
        data={item}
      />
    ),
    [handleFavorite, handleUnfavorite, navigateToHome, loadingIds],
  );

  const navigateToHome = useCallback(
    ({ date }) => {
      const [year, month, day] = date.substr(0, 10).split('-');
      dispatch(datesActions.setDate({ day, month, year }));
      navigation.navigate(screens.Home, { shouldGoBackToList: true });
    },
    [dispatch, navigation],
  );

  return <S.FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} getItemLayout={getItemLayout} />;
};

List.propTypes = {
  data: PropTypes.arrayOf(phraseProptypes).isRequired,
  navigation: navigationProptypes.isRequired,
  onFavorite: PropTypes.func,
  onUnfavorite: PropTypes.func,
};

List.defaultProps = {
  onFavorite: () => {},
  onUnfavorite: () => {},
};

export default memo(List, (prevProps, nextProps) => {
  if (isEqual(prevProps.data, nextProps.data)) {
    return true;
  }

  return false;
});
