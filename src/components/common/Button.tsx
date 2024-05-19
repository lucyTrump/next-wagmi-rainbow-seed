import React from 'react';

interface IButtonAttrs extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonClassName?: string;
}

export const Button: React.FC<IButtonAttrs> = (props) => {
	return <button {...props} />;
};
