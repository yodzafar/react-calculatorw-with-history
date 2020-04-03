import React from 'react';

const DisplayPanelRow = ({ maxTextLength, className, text }) => {
	const truncate = input => {
		const prefix = '...';
		const truncated = input.substring(input.length - maxTextLength + 3);

		if (input.length <= maxTextLength) {
			return input;
		}

		return `${prefix}${truncated}`;
	};

	return (
		<div className={className} title={text}>
			{truncate(text)}
		</div>
	);
};

export default DisplayPanelRow;
