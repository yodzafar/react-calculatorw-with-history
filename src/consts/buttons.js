export const mathematicalOperands = {
  CARET: '^',
  MULTIPLICATION_SIGN: '×',
  OBELUS: '÷',
  MINUS: '-',
  PLUS: '+'
};

export const mathematicalSigns = {
  ...mathematicalOperands,
  DOT: '.',
  EQUALS_SIGN: '=',
  LEFT_PARENTHESES: '(',
  RIGHT_PARENTHESES: ')'
};

export const calculatorButtons = {
  ...mathematicalSigns,
  BUTTON_0: '0',
  BUTTON_1: '1',
  BUTTON_2: '2',
  BUTTON_3: '3',
  BUTTON_4: '4',
  BUTTON_5: '5',
  BUTTON_6: '6',
  BUTTON_7: '7',
  BUTTON_8: '8',
  BUTTON_9: '9',
  AC: 'AC',
  CE: 'CE'
};

export const keyboardButtons = {
  ...mathematicalSigns,
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter',
  COMMA: ',',
  SMALL_X: 'x',
  BIG_X: 'X',
  ASTERISK: '*',
  SLASH: '/'
};
