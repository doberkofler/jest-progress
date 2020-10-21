const {work} = require('../work');

describe('test_02', () => {
	it('takes a while', async () => {
		expect.hasAssertions();
		const result = await work(4000);
		expect(result).toBe('work');
	});
});
