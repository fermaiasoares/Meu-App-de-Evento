import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, InputIcon } from './styles';

interface InputProps extends TextInputProps {
  type?: 'password' | 'text';
  name: string;
  label?: string;
  icon?: any;
  iconColor?: string;
}

const Input: React.FC<InputProps> = ({ type = undefined, name, label, icon, iconColor = "#312e38", ...rest }) => {

  const [showText, setShowText] = useState(false);
  const [showTextIcon, setShowTextIcon] = useState<'eye'|'eye-off'>('eye-off');

  const toggleShowText = useCallback(() => {
    setShowText(!showText);
    setShowTextIcon(!showText ? 'eye' : 'eye-off');
    console.log(showText, showTextIcon);
  }, [showText, showTextIcon])

  return (
    <Container>
      <InputIcon name={icon} size={20} color={iconColor} />

      <TextInput
        secureTextEntry={type === 'password' && showText === false ? true : false}
        keyboardAppearance="dark"
        placeholderTextColor="#949393"
        {...rest}
      />
      <InputIcon
        name={showTextIcon}
        size={20}
        color={iconColor}
        style={{ display: type !== 'password' ? 'none' : 'flex' }}
        onPress={() => toggleShowText() }
      />
    </Container>
  );
}

export default Input;
