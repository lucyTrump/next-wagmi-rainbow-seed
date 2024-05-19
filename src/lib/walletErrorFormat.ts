export const contractErrorFormat = (error: any): string => {
	// todo
	const reg = /(Contract Call|Raw Call|Request Arguments:|reverted with custom error)/gi;
	const errorString = String(error);
	let reasons = errorString.split(reg);

	// Insufficient Balance
	if (errorString.match('ContractFunctionExecutionError:')) {
		return 'Insufficient Balance';
	}

	if (reasons?.length < 2) {
		reasons = errorString.split('.');
	}
	return reasons[0];
};
