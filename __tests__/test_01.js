const {work} = require('../work');

describe('test_01', () => {
	it('takes a while', async () => {
		expect.hasAssertions();
		const result = await work(2000);
		expect(result).toBe('work');
	});
});
