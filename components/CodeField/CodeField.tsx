import { Animated, Image, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_HEIGHT,
  CELL_WIDTH,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;

const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

interface IAnimatedCell {
  hasValue: boolean;
  index: number;
  isFocused: boolean;
}

interface IRenderCell {
  index: number;
  symbol: string;
  isFocused: boolean;
}

const animateCell = ({ hasValue, index, isFocused }: IAnimatedCell) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
    }),
  ]).start();
};

export interface ICustomCodeFieldProps {
  value: string;
  setValue: (value: string) => void;
}

const CustomCodeField: React.FC<ICustomCodeFieldProps> = ({ value, setValue }: ICustomCodeFieldProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }: IRenderCell) => {
    const hasValue = Boolean(symbol);


    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
    />
  );
};

export default CustomCodeField;
