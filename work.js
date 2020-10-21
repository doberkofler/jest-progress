function work(ms) {
	return new Promise(resolve => {
		setTimeout(() => resolve('work'), ms);
	});
}

module.exports = {
	work,
};
