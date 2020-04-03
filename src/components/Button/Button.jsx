import _ from 'lodash';
import React, { PureComponent } from 'react';

export const enhance = (Component, props) =>
	class extends PureComponent {
		onClickHandler = () => {
			return props.onClick(this.props.type);
		};

		render() {
			return <Component onClick={this.onClickHandler} {...this.props} />;
		}
	};

class Button extends PureComponent {
	render() {
		const { children, type, className, onClick } = this.props;

		return (
			<button className={`calculator-button ${className}`} onClick={onClick}>
				{_.isEmpty(children) ? type : children}
			</button>
		);
	}
}

export default Button;
