import React, { PureComponent } from 'react';
import Button, { enhance } from '../Button/Button';
import { calculatorButtons } from '../../consts/buttons';

class ButtonsPanel extends PureComponent {
	render() {
		const CalculatorButton = enhance(Button, { onClick: this.props.onClick });

		return (
			<div className="calculator-buttons-panel">
				<CalculatorButton type={this.props.clearingButtonType} className="color-red" />
				<CalculatorButton type={calculatorButtons.LEFT_PARENTHESES} className="color-gray" />
				<CalculatorButton type={calculatorButtons.RIGHT_PARENTHESES} className="color-gray" />
				<CalculatorButton type={calculatorButtons.CARET} className="color-gray">
					x<sup>y</sup>
				</CalculatorButton>
				<CalculatorButton type={calculatorButtons.PLUS} className="color-gray" />
				<CalculatorButton type={calculatorButtons.BUTTON_7} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_8} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_9} className="number-btn" />
				<CalculatorButton type={calculatorButtons.MULTIPLICATION_SIGN} className="color-gray" />
				<CalculatorButton type={calculatorButtons.MINUS} className="color-gray" />
				<CalculatorButton type={calculatorButtons.BUTTON_4} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_5} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_6} className="number-btn" />
				<CalculatorButton type={calculatorButtons.OBELUS} className="color-gray" />
				<CalculatorButton type={calculatorButtons.EQUALS_SIGN} className="color-gray" />
				<CalculatorButton type={calculatorButtons.BUTTON_1} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_2} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_3} className="number-btn" />
				<CalculatorButton type={calculatorButtons.BUTTON_0} className="number-btn" />
				<CalculatorButton type={calculatorButtons.DOT} className="number-btn" />
			</div>
		);
	}
}

export default ButtonsPanel;
