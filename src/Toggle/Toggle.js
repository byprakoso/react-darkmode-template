// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import {ToggleContainer} from './Toggle.styled.js'
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
     <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;