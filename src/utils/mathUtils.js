import _ from 'lodash';
import { mathematicalSigns, mathematicalOperands } from '../consts/buttons';

function isNumeric(input) {
  return (
    !_.isNull(input) && !_.isBoolean(input) && _.isFinite(_.toNumber(input))
  );
}

function round(number, precision = 12) {
  return Number(Number(number).toFixed(precision));
}

function addition(augend, addend) {

  return parseFloat(augend) + parseFloat(addend);
}

function subtraction(minuend, subtrahend) {
  
  return parseFloat(minuend) - parseFloat(subtrahend);
}

function multiplication(multiplicand, multiplier) {
  
  return parseFloat(multiplicand) * parseFloat(multiplier);
}

function division(dividend, divisor) {
 
  return parseFloat(dividend) / parseFloat(divisor);
}

function exponentiation(base, exponent) {
  return base >= 0 ? Math.pow(base, exponent) : Math.pow(-base, exponent) * -1;

}

function calculatePostfixEquation(postfixEquation) {
  const resultStack = [];
  const postfixEquationElements = _.split(postfixEquation, ' ');

  _.forEach(postfixEquationElements, postfixEquationElement => {
    if (isNumeric(postfixEquationElement)) {
      resultStack.push(postfixEquationElement);
    } else {
      let result;
      let lastElementInList = resultStack.pop();
      let oneBeforeLastElementInList = resultStack.pop();

      switch (postfixEquationElement) {
      case mathematicalOperands.PLUS:
        result = addition(oneBeforeLastElementInList, lastElementInList);
        break;
      case mathematicalOperands.MINUS:
        result = subtraction(oneBeforeLastElementInList, lastElementInList);
        break;
      case mathematicalOperands.MULTIPLICATION_SIGN:
        result = multiplication(
          oneBeforeLastElementInList,
          lastElementInList
        );
        break;
      case mathematicalOperands.OBELUS:
        result = division(oneBeforeLastElementInList, lastElementInList);
        break;
      case mathematicalOperands.CARET:
        result = exponentiation(
          oneBeforeLastElementInList,
          lastElementInList
        );
        break;
      default:
        break;
      }

      resultStack.push(result);
    }
  });

  return resultStack.length > 1 ? ['error'] : resultStack.pop();
}


function infixToPostfix(infixEquation) {
  let outputQueue = '';
  let operatorsStack = [];
  let operators = {
    [mathematicalOperands.CARET]: {
      precedence: 4
    },
    [mathematicalOperands.OBELUS]: {
      precedence: 3
    },
    [mathematicalOperands.MULTIPLICATION_SIGN]: {
      precedence: 3
    },
    [mathematicalOperands.PLUS]: {
      precedence: 2
    },
    [mathematicalOperands.MINUS]: {
      precedence: 2
    }
  };

  const infixElementsRegex = new RegExp(
    `${mathematicalSigns.LEFT_PARENTHESES}[${mathematicalOperands.PLUS}( ${
      mathematicalOperands.MINUS
    })${mathematicalOperands.MULTIPLICATION_SIGN}${
      mathematicalOperands.OBELUS
    }${mathematicalOperands.CARET}${mathematicalSigns.RIGHT_PARENTHESES}])`
  );
  const infixEquationElements = _.split(infixEquation, infixElementsRegex);
  const infixEquationElementsFiltered = _.filter(
    infixEquationElements,
    infixEquationElement => _.trim(infixEquationElement)
  );

  _.forEach(infixEquationElementsFiltered, infixEquationElement => {
    if (isNumeric(infixEquationElement)) {
      outputQueue += `${infixEquationElement} `;
    } else if (_.includes(mathematicalOperands, infixEquationElement)) {
      let operator = infixEquationElement;
      let lastOperatorFromStack = _.last(operatorsStack);

      while (
        _.includes(mathematicalOperands, lastOperatorFromStack) &&
        (operator !== mathematicalOperands.CARET &&
          operators[operator].precedence <=
            operators[lastOperatorFromStack].precedence)
      ) {
        outputQueue += `${operatorsStack.pop()} `;
        lastOperatorFromStack = _.last(operatorsStack);
      }
      operatorsStack.push(operator);
    } else if (infixEquationElement === mathematicalSigns.LEFT_PARENTHESES) {
      operatorsStack.push(infixEquationElement);
    } else if (infixEquationElement === mathematicalSigns.RIGHT_PARENTHESES) {
      while (_.last(operatorsStack) !== mathematicalSigns.LEFT_PARENTHESES) {
        outputQueue += `${operatorsStack.pop()} `;
      }
      operatorsStack.pop();
    }
  });

  while (operatorsStack.length > 0) {
    outputQueue += `${operatorsStack.pop()} `;
  }

  return outputQueue.trim();
}

function isEquationValid(equation) {
  const leftParenthesesLength = (equation.match(/\(/g) || []).length;
  const rightParenthesesLength = (equation.match(/\)/g) || []).length;

  return leftParenthesesLength === rightParenthesesLength;
}

function evaluate(equation) {
  return round(calculatePostfixEquation(infixToPostfix(equation)));
}

export default {
  isEquationValid,
  isNumeric,
  evaluate
};
