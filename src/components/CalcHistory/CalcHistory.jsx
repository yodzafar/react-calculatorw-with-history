import React from 'react';

export const CalcHistory = ({ history }) => {
	return (
		<div className="calc-history">
			{history.length
				? history.map(item => {
						return (
							<div className="item" key={item._id}>
								<div>result: {item.result}</div>
								<div>data: {item.date}</div>
							</div>
						);
				  })
				: 'загрузка ...'}
		</div>
	);
};
