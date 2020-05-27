import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ children, disabled, onPress }) => (
  <S.Container disabled={disabled} onPress={onPress}>
    <S.Text>{children}</S.Text>
  </S.Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default memo(Button);
