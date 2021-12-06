import React, { useState } from 'react';
import styled from 'styled-components';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useStoreDispatch, useStoreSelector } from 'store/hooks';
import { selectTheme, ThemeType, toggleTheme } from 'store/reducers/app';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { THEME_DARK, THEME_LIGHT } from 'utils/constants';

const SwitchTheme: React.FC<SwitchProps> = (props) => {
  const theme = useStoreSelector(selectTheme);
  const [checked, setChecked] = useState(theme === THEME_DARK);
  const dispatch = useStoreDispatch();
  const handleChange = () => {
    const theme: ThemeType = checked ? THEME_LIGHT : THEME_DARK;
    dispatch(toggleTheme(theme));
    setChecked(!checked);
  };

  return (
    <StyledSwitch
      icon={<InvertColorsIcon color="primary" />}
      checkedIcon={<InvertColorsIcon color="primary"/>}
      sx={{ m: 1 }}
      checked={checked}
      onChange={handleChange}
      classes={{ track: 'switch-track', switchBase: 'switch-slider', checked: 'switch-checked' }}
      {...props}
    />
  );
};

const StyledSwitch = styled(Switch)`
  &&{
    padding: 9px 10px 9px 13px;
    overflow: visible;
  }
  .switch-track {
    background: ${({ theme }) => theme.colors.switchTrack} !important;
    border-radius: 20px;
    opacity: 1 !important;
  }
  .switch-slider {
    height: 100%;
  }
`;

export default SwitchTheme;
