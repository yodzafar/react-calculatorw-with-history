import React from 'react';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import { CalcHistory } from '../CalcHistory/CalcHistory';

export const CalculatorInner = ({ equation, onClick, clearingButtonType, result, history }) => {
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-sm-auto col-12">
				<h2>Калькулятор</h2>
				<div className="calculator">
					<DisplayPanel equation={equation} result={result} />
					<ButtonsPanel onClick={onClick} clearingButtonType={clearingButtonType} />
				</div>
			</div>
			<div className="col-lg-auto col-sm-12 flex-grow-1">
				<h2>История</h2>
				<CalcHistory history={history} />
			</div>
		</div>
	);
};
