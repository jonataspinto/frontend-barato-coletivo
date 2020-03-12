import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switcher from 'react-switcher';

const Switch = ({ initialState, action }) => {
  const [state, setState] = useState(initialState);

  const handleStateSwitch = () => {
    setState(!state);
    action();
  };

  return <Switcher on={state} onClick={handleStateSwitch} />;
};

Switch.propTypes = {
  initialState: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Switch;
