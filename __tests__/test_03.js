const {work} = require('../work');

describe('test_03', () => {
	it('takes a while', async () => {
		expect.hasAssertions();
		const result = await work(8000);
		expect(result).toBe('work');
	});
});
