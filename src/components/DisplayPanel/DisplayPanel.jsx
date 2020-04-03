import React from 'react';
import DisplayPanelRow from '../DisplayPanelRow/DisplayPanelRow';

const DisplayPanel = ({ equation, result }) => {
	const renderEquation = () => {
		return (
			<DisplayPanelRow
				text={equation}
				className="calculator-display-panel-equation color-gray"
				maxTextLength={30}
			/>
		);
	};

	const isLongResult = result => {
		return result.length > 14;
	};

	const renderResult = () => {
		const fontModifierClassName = isLongResult(result) ? 'calculator-display-panel-result-small-font' : '';

		return (
			<DisplayPanelRow
				text={result}
				className={`calculator-display-panel-result color-white ${fontModifierClassName}`}
				maxTextLength={21}
			/>
		);
	};

	return (
		<div className="calculator-display-panel">
			{renderEquation()}
			{renderResult()}
		</div>
	);
};

export default DisplayPanel;
