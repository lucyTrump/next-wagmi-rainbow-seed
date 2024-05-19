import BigNumber from 'bignumber.js';

export const toFixed = (nStr: string, des = 9): string => {
	const match = des > 0 ? `^(\-?\\d*)(\\.\\d{0,${des}})(\\d*)$` : `^(\-?\\d*)(.*)$`;
	const reg = new RegExp(match);
	return nStr.replace(reg, (_v: string, $1: any, $2: any) => {
		const _$2 = $2.replace(/(\.?0*)$/, '');
		$1 = $1.replace(/\.$/g, '');
		return des > 0 ? `${$1}${_$2}` : $1 || '0';
	});
};

export const formatNumber = (value?: BigNumber.Value, precision = 6) => {
	if (!value) return '0';
	return new BigNumber(value)
		.toFormat(precision || 2, BigNumber.ROUND_DOWN, {
			groupSize: 3,
		})
		.toString();
};

export const formatToken = (
	amount: any,
	decimals: string | number = 18,
): BigNumber.Value => {
	if (!amount) {
		return '0';
	}
	const pow = new BigNumber(10).pow(decimals);
	return new BigNumber(amount).dividedBy(pow);
};

export const formatTokenStr = (amount: any, decimals: string | number = 18): string => {
	return formatToken(amount, decimals).toString();
};

export const isZero = (compareNumber: BigNumber.Value) => {
	return new BigNumber(compareNumber || 0).isEqualTo(0);
};
