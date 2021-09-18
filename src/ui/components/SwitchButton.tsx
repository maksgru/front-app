import React from 'react';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import styled from 'styled-components';

const SwitchButton: React.FC<SwitchProps> = (props) => {
  return (
    <StyledSwitch
      classes={{
        root: 'switch-root',
        switchBase: 'switch-base',
        checked: 'base-chacked',
        thumb: 'switch-thumb',
        track: 'switch-track'
      }}
      {...props}
    />
  );
};

const StyledSwitch = styled(Switch)`
  &.switch-root {
    width: 65px;
    height: 50px;
  }
  .switch-thumb {
    background-color: white;
  }
  .switch-base {
    top: 6.1px;
    left: 5px;
    &.base-chacked {
        transform: translateX(17px);
      }
  }
  .switch-track {
    border-radius: 15px;
  }
`;

export default SwitchButton;
