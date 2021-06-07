import {
	aggregateObjectField
} from './shop-pluf';


it('sums numbers', () => {
	expect(1 + 2).toEqual(3);
});

it('sould aggregate object field', () => {
	var testList = [{
		id: 1
	}, {
		id: 2
	}];

	expect(aggregateObjectField(testList, 'id')).toEqual([1, 2]);
})