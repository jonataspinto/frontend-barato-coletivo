import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';

const Switcher = ({ initialState, action }) => {
  const [state, setState] = useState(initialState);
  const theme = useTheme();
  const handleStateSwitch = () => {
    setState(!state);
    action();
  };

  return (
    <Switch
      checked={state}
      onChange={handleStateSwitch}
      onColor={theme.headerColors.iconColor}
      offColor={theme.colors.background}
      width={40}
      height={20}
    />
  );
};

Switcher.propTypes = {
  initialState: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Switcher;
